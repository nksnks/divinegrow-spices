import { ArrowRight, Check, Globe2, Leaf, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "wouter";
import { products } from "@/lib/products";
import { assetPaths } from "@/lib/assets";

const assurances = [
  [ShieldCheck, "Premium quality", "Carefully selected products with a quality-first mindset."],
  [Leaf, "Ethical sourcing", "Trusted growers and processors across India and beyond."],
  [PackageCheck, "Export-ready", "Packaging and documentation support for trade buyers."],
  [Truck, "Reliable delivery", "Clear communication and dependable fulfilment."],
];

export default function Home() {
  return <>
    <section className="hero-image relative isolate overflow-hidden text-white" style={{ "--hero-image-url": `url("${assetPaths.hero()}")` } as CSSProperties}>
      <div className="hero-grid absolute inset-0 -z-10 opacity-60" />
      <div className="section-shell flex min-h-[650px] items-center py-24 md:min-h-[710px]">
        <div className="max-w-2xl rise">
          <div className="mb-6 flex items-center gap-3"><span className="gold-line" /><span className="eyebrow text-[#f4df9d]">From trusted origins</span></div>
          <h1 className="display max-w-xl text-5xl font-semibold leading-[1.04] tracking-[-.035em] sm:text-6xl md:text-7xl">Premium Indian spices for <span className="text-[#f4df9d]">global markets.</span></h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-[#e6eee8] md:text-lg">DivineGrow LLP supplies high-quality Indian spices sourced from trusted growers and processors—ensuring purity, freshness, and consistency.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link href="/request-quote" className="rounded-full bg-[#d4a017] px-6 py-3.5 text-sm font-bold text-[#073c2d] no-underline shadow-xl shadow-black/10 transition hover:bg-[#edc04c]">Request a quote <ArrowRight className="ml-1 inline h-4 w-4" /></Link><Link href="/products" className="rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-bold text-white no-underline backdrop-blur-sm transition hover:bg-white/20">Explore products</Link></div>
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-white/20 pt-5 text-xs text-[#d6e4d9]"><span><strong className="display block text-2xl text-white">8+</strong>core spices</span><span><strong className="display block text-2xl text-white">India</strong>origin-led</span><span><strong className="display block text-2xl text-white">B2B</strong>trade ready</span></div>
        </div>
      </div>
      <div className="absolute bottom-7 right-7 hidden rounded-2xl border border-white/20 bg-[#073c2d]/55 p-4 backdrop-blur-md md:block"><p className="eyebrow text-[#f4df9d]">Current focus</p><p className="mt-1 text-sm font-semibold">Purity · freshness · consistency</p></div>
    </section>

    <section className="section-pad bg-[#f8f5ee]">
      <div className="section-shell grid items-start gap-12 md:grid-cols-[.9fr_1.1fr] md:gap-24">
        <div><p className="eyebrow">The DivineGrow difference</p><h2 className="display mt-4 max-w-md text-4xl font-semibold leading-tight text-[#073c2d] md:text-5xl">A dependable spice partner, not just a supplier.</h2><div className="mt-7 gold-line" /></div>
        <div><p className="text-lg leading-8 text-[#66716b]">We are a New Delhi based spice trading company specializing in sourcing and supplying premium quality spices for domestic and international markets.</p><p className="mt-5 text-base leading-8 text-[#66716b]">Our work is built around practical trade support: clear specifications, competitive pricing, export-ready packaging, and communication you can count on.</p><Link href="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-[#0b6e4f] no-underline">More about DivineGrow <ArrowRight size={17} /></Link></div>
      </div>
    </section>

    <section className="border-y border-[#dfe8e1] bg-[#e8f1ec] py-10"><div className="section-shell grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{assurances.map(([Icon, title, copy]) => { const ItemIcon = Icon as typeof ShieldCheck; return <div key={title as string} className="flex gap-4"><div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#0b6e4f] shadow-sm"><ItemIcon size={19} /></div><div><h3 className="font-bold text-[#073c2d]">{title as string}</h3><p className="mt-1 text-sm leading-6 text-[#66716b]">{copy as string}</p></div></div>; })}</div></section>

    <section className="section-pad bg-white">
      <div className="section-shell"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Selected collection</p><h2 className="display mt-3 text-4xl font-semibold text-[#073c2d] md:text-5xl">Spices with a point of view.</h2></div><Link href="/products" className="inline-flex items-center gap-2 font-bold text-[#0b6e4f] no-underline">View all products <ArrowRight size={17} /></Link></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 4).map((product) => <Link key={product.slug} href={`/products#${product.slug}`} className="group overflow-hidden rounded-2xl border border-[#dfe8e1] bg-[#f8f5ee] no-underline transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#073c2d]/10"><div className="relative h-60 overflow-hidden"><img src={product.image} alt={`${product.name} spices`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#073c2d]">{product.origin}</span></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-widest text-[#d4a017]">{product.scientific || "Whole spice"}</p><h3 className="display mt-2 text-2xl font-semibold text-[#073c2d]">{product.name}</h3><p className="mt-2 text-sm leading-6 text-[#66716b]">{product.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0b6e4f]">View details <ArrowRight size={15} /></span></div></Link>)}</div></div>
    </section>

    <section className="section-pad bg-[#073c2d] text-white"><div className="section-shell grid items-center gap-10 md:grid-cols-[1.1fr_.9fr]"><div><p className="eyebrow text-[#f4df9d]">Built for trade conversations</p><h2 className="display mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">Tell us what your market needs.</h2><p className="mt-5 max-w-xl text-base leading-8 text-[#c7d7cd]">Share your product, quantity, destination, or specification. Our team will come back with a practical next step.</p><Link href="/request-quote" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d4a017] px-6 py-3.5 text-sm font-bold text-[#073c2d] no-underline transition hover:bg-[#edc04c]">Start an enquiry <ArrowRight size={17} /></Link></div><div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2"><div className="rounded-2xl border border-[#547666]/50 p-5"><Globe2 className="text-[#d4a017]" /><p className="mt-6 text-sm font-bold">Domestic & international</p><p className="mt-2 text-xs leading-5 text-[#9fbaaa]">Trade conversations across markets.</p></div><div className="rounded-2xl border border-[#547666]/50 p-5"><Check className="text-[#d4a017]" /><p className="mt-6 text-sm font-bold">Clear specifications</p><p className="mt-2 text-xs leading-5 text-[#9fbaaa]">Aligned on grade, pack, and volume.</p></div></div></div></section>
  </>;
}
