import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { products } from "@/lib/products";
import { trpc } from "@/lib/trpc";

type FormKind = "quote" | "contact";

export default function EnquiryForm({ kind }: { kind: FormKind }) {
  const isQuote = kind === "quote";
  const [submitted, setSubmitted] = useState(false);
  const createEnquiry = trpc.enquiries.create.useMutation({
    onSuccess: () => { setSubmitted(true); toast.success("Thanks — your enquiry is on its way."); },
    onError: (error) => toast.error(error.message || "We could not send that just now. Please try WhatsApp."),
  });

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    createEnquiry.mutate({
      type: kind,
      fullName: String(data.get("fullName") || ""),
      companyName: String(data.get("companyName") || ""),
      country: String(data.get("country") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      product: String(data.get("product") || ""),
      quantity: String(data.get("quantity") || ""),
      message: String(data.get("message") || ""),
      honeypot: String(data.get("website") || ""),
    });
  }

  if (submitted) return <div className="rounded-3xl border border-[#b7d8bf] bg-[#e8f1ec] p-8 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#0b6e4f] text-white"><CheckCircle2 /></div><h3 className="display mt-5 text-3xl font-semibold text-[#073c2d]">Enquiry received.</h3><p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#66716b]">Thank you for reaching out. The DivineGrow team will review your note and get back to you shortly.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-sm font-bold text-[#0b6e4f]">Send another message</button></div>;

  return <form onSubmit={submit} className="soft-card rounded-3xl p-6 sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2">
      <Field label="Full name" name="fullName" placeholder="Your name" required />
      <Field label="Company name" name="companyName" placeholder="Company / organisation" required={isQuote} />
      <Field label="Email address" name="email" type="email" placeholder="you@company.com" required />
      <Field label="Phone number" name="phone" placeholder="+91 ..." required={isQuote} />
      {isQuote && <><Field label="Country" name="country" placeholder="Where are you buying from?" required /><div><label className="mb-2 block text-sm font-bold text-[#073c2d]" htmlFor="product">Product interested in</label><select id="product" name="product" required className="w-full rounded-xl border border-[#dfe8e1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0b6e4f] focus:ring-4 focus:ring-[#0b6e4f]/10"><option value="">Select a spice</option>{products.map((product) => <option key={product.slug} value={product.name}>{product.name}</option>)}</select></div><Field label="Quantity required" name="quantity" placeholder="e.g. 500 kg / monthly" required /></>}
      <div className={isQuote ? "sm:col-span-2" : "sm:col-span-2"}><label className="mb-2 block text-sm font-bold text-[#073c2d]" htmlFor="message">{isQuote ? "Requirement details" : "How can we help?"}</label><textarea id="message" name="message" required minLength={10} rows={5} placeholder={isQuote ? "Tell us about grade, packaging, destination, or timeline." : "Share a little about your requirement."} className="w-full resize-y rounded-xl border border-[#dfe8e1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0b6e4f] focus:ring-4 focus:ring-[#0b6e4f]/10" /></div>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
    </div>
    <button type="submit" disabled={createEnquiry.isPending} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0b6e4f] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#073c2d] disabled:cursor-wait disabled:opacity-70">{createEnquiry.isPending ? <><Loader2 className="animate-spin" size={16} /> Sending...</> : <>{isQuote ? "Request a quote" : "Send enquiry"} <ArrowRight size={16} /></>}</button>
    <p className="mt-4 text-xs leading-5 text-[#66716b]">We use your details only to respond to this enquiry. No spam, no sharing.</p>
  </form>;
}

function Field({ label, name, placeholder, type = "text", required = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean }) {
  return <div><label className="mb-2 block text-sm font-bold text-[#073c2d]" htmlFor={name}>{label}{required && <span className="ml-1 text-[#d4a017]">*</span>}</label><input id={name} name={name} type={type} placeholder={placeholder} required={required} className="w-full rounded-xl border border-[#dfe8e1] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#9aa79f] focus:border-[#0b6e4f] focus:ring-4 focus:ring-[#0b6e4f]/10" /></div>;
}
