import { ArrowUpRight, Clock3, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { assetPaths } from "@/lib/assets";

const navItems = [
  ["Home", "/"],
  ["Products", "/products"],
  ["About us", "/about"],
  ["Contact", "/contact"],
] as const;

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f5ee]">
      <div className="bg-[#073c2d] px-4 py-2 text-center text-[11px] font-semibold tracking-[.12em] text-[#f4df9d]">
        SOURCED IN INDIA · SUPPLIED FOR GLOBAL MARKETS
      </div>
      <header className="sticky top-0 z-30 border-b border-[#dfe8e1]/80 bg-[#f8f5ee]/95 backdrop-blur-md">
        <div className="section-shell flex h-[76px] items-center justify-between">
          <Link href="/" className="group flex items-center no-underline" onClick={() => setMenuOpen(false)} aria-label="DivineGrow home">
            <img src={assetPaths.logo()} alt="DivineGrow — Rooted in values, growing excellence" className="h-[54px] w-[156px] object-contain object-left" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className={`text-sm font-semibold no-underline transition-colors ${location === href ? "text-[#0b6e4f]" : "text-[#66716b] hover:text-[#0b6e4f]"}`}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="https://wa.me/919871496262?text=Hello%20DivineGrow%2C%20I%27d%20like%20to%20discuss%20a%20spice%20requirement." target="_blank" rel="noreferrer" className="text-sm font-bold text-[#0b6e4f] no-underline">WhatsApp</a>
            <Link href="/request-quote" className="rounded-full bg-[#d4a017] px-5 py-3 text-sm font-bold text-[#073c2d] no-underline transition hover:bg-[#edc04c]">Request a quote <ArrowUpRight className="ml-1 inline h-4 w-4" /></Link>
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-[#dfe8e1] text-[#073c2d] md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && <div className="border-t border-[#dfe8e1] bg-[#f8f5ee] px-4 py-4 md:hidden">
          <nav className="section-shell flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-[#073c2d] no-underline hover:bg-[#e8f1ec]">{label}</Link>)}
            <Link href="/request-quote" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-[#0b6e4f] px-4 py-3 text-center font-bold text-white no-underline">Request a quote</Link>
          </nav>
        </div>}
      </header>

      <main>{children}</main>

      <footer className="bg-[#073c2d] text-[#f8f5ee]">
        <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <span className="display text-3xl font-semibold">DivineGrow</span>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#c7d7cd]">Premium Indian spice trading for buyers who value purity, provenance, and dependable supply.</p>
            <div className="mt-7 flex gap-3"><a href="https://wa.me/919871496262" target="_blank" rel="noreferrer" className="rounded-full border border-[#547666] px-4 py-2 text-xs font-bold text-[#f4df9d] no-underline hover:bg-[#0b6e4f]">Chat on WhatsApp</a><Link href="/request-quote" className="rounded-full bg-[#d4a017] px-4 py-2 text-xs font-bold text-[#073c2d] no-underline">Request a quote</Link></div>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-[#c7d7cd]">{navItems.map(([label, href]) => <Link key={href} href={href} className="no-underline hover:text-white">{label}</Link>)}<Link href="/request-quote" className="no-underline hover:text-white">Request a quote</Link></div>
          </div>
          <div>
            <p className="eyebrow">Connect</p>
            <div className="mt-5 flex flex-col gap-4 text-sm text-[#c7d7cd]"><a className="flex gap-3 no-underline hover:text-white" href="https://maps.google.com/?q=Dwarka+Sector+18+New+Delhi"><MapPin size={17} className="mt-0.5 shrink-0 text-[#d4a017]" /><span>#397, Dwarka, Sector-18<br />New Delhi - 110075, India</span></a><a className="flex items-center gap-3 no-underline hover:text-white" href="tel:+919871496262"><Phone size={17} className="text-[#d4a017]" />+91 9871496262</a><a className="flex items-center gap-3 no-underline hover:text-white" href="mailto:cemde.pankaj@gmail.com"><Mail size={17} className="text-[#d4a017]" />cemde.pankaj@gmail.com</a><span className="flex items-center gap-3"><Clock3 size={17} className="text-[#d4a017]" />Mon-Sat · 9:00 AM-6:00 PM IST</span></div>
          </div>
        </div>
        <div className="border-t border-[#547666]/40"><div className="section-shell flex flex-col justify-between gap-2 py-5 text-xs text-[#9fbaaa] md:flex-row"><span>© {new Date().getFullYear()} DivineGrow LLP. All rights reserved.</span><span>Quality · Integrity · Reliability</span></div></div>
      </footer>
      <a href="https://wa.me/919871496262?text=Hello%20DivineGrow%2C%20I%27d%20like%20to%20enquire%20about%20your%20spices." target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-20 flex items-center gap-2 rounded-full bg-[#0b6e4f] px-4 py-3 text-sm font-bold text-white shadow-xl shadow-[#073c2d]/25 no-underline transition hover:-translate-y-1">WhatsApp <ArrowUpRight size={16} /></a>
    </div>
  );
}
