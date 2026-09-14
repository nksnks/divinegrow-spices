import { FileText, Globe2, MessageCircle } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export default function Quote() {
  return <>
    <section className="bg-[#073c2d] py-20 text-white"><div className="section-shell grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-end"><div><p className="eyebrow text-[#f4df9d]">Request a quote</p><h1 className="display mt-4 max-w-2xl text-5xl font-semibold leading-tight md:text-6xl">Let's make your next spice requirement simple.</h1></div><p className="text-base leading-8 text-[#c7d7cd]">Tell us what you need and where it needs to go. We’ll respond with the details that matter for a useful trade conversation.</p></div></section>
    <section className="section-pad"><div className="section-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><p className="eyebrow">What to include</p><h2 className="display mt-3 text-4xl font-semibold leading-tight text-[#073c2d]">A few details help us move faster.</h2><div className="mt-8 space-y-5"><Info Icon={FileText} title="Product & grade" text="Tell us which spice, form, and specification you’re looking for." /><Info Icon={Globe2} title="Destination & volume" text="Share your country, target quantity, and timeline." /><Info Icon={MessageCircle} title="Your application" text="A little context helps us recommend the right pack and route." /></div><div className="mt-8 rounded-2xl bg-[#e8f1ec] p-5 text-sm leading-6 text-[#66716b]">Prefer a quick conversation? <a className="font-bold text-[#0b6e4f]" href="https://wa.me/919810610262" target="_blank" rel="noreferrer">Chat with us on WhatsApp</a>.</div></div><EnquiryForm kind="quote" /></div></section>
  </>;
}

function Info({ Icon, title, text }: { Icon: typeof FileText; title: string; text: string }) { return <div className="flex gap-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e8f1ec] text-[#0b6e4f]"><Icon size={19} /></div><div><h3 className="font-bold text-[#073c2d]">{title}</h3><p className="mt-1 text-sm leading-6 text-[#66716b]">{text}</p></div></div>; }
