import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const region = process.env.AWS_REGION;
const fromEmail = process.env.SES_FROM_EMAIL;
const toEmail = process.env.SES_TO_EMAIL;

export function isSesConfigured() {
  return Boolean(region && fromEmail && toEmail);
}

export async function sendEnquiryEmail(subject: string, content: string) {
  if (!isSesConfigured()) return false;

  const client = new SESv2Client({ region });
  await client.send(new SendEmailCommand({
    FromEmailAddress: fromEmail,
    Destination: { ToAddresses: [toEmail!] },
    Content: {
      Simple: {
        Subject: { Data: subject, Charset: "UTF-8" },
        Body: { Text: { Data: content, Charset: "UTF-8" } },
      },
    },
  }));
  return true;
}
