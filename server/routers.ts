import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createEnquiry } from "./db";
import { isSesConfigured, sendEnquiryEmail } from "./email";

const enquiryInput = z.object({
  type: z.enum(["quote", "contact"]),
  fullName: z.string().trim().min(2).max(160),
  companyName: z.string().trim().max(180).optional().or(z.literal("")),
  country: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(60).optional().or(z.literal("")),
  product: z.string().trim().max(120).optional().or(z.literal("")),
  quantity: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(4000),
  honeypot: z.string().optional(),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  enquiries: router({
    create: publicProcedure.input(enquiryInput).mutation(async ({ input }) => {
      if (input.honeypot) return { success: true, alertSent: false } as const;

      const { honeypot: _honeypot, ...enquiry } = input;
      await createEnquiry({
        ...enquiry,
        companyName: enquiry.companyName || null,
        country: enquiry.country || null,
        phone: enquiry.phone || null,
        product: enquiry.product || null,
        quantity: enquiry.quantity || null,
      });

      const label = input.type === "quote" ? "Quote request" : "Contact enquiry";
      const content = [
        `${label} from ${input.fullName}`,
        input.companyName ? `Company: ${input.companyName}` : null,
        input.country ? `Country: ${input.country}` : null,
        `Email: ${input.email}`,
        input.phone ? `Phone: ${input.phone}` : null,
        input.product ? `Product: ${input.product}` : null,
        input.quantity ? `Quantity: ${input.quantity}` : null,
        `Message: ${input.message}`,
      ].filter(Boolean).join("\n");
      const alertSent = isSesConfigured()
        ? await sendEnquiryEmail(`DivineGrow: ${label}`, content)
        : await notifyOwner({ title: `DivineGrow: ${label}`, content });
      return { success: true, alertSent } as const;
    }),
  }),
});

export type AppRouter = typeof appRouter;
