import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Archivo, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./other-table.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"] });
const instrument = Instrument_Serif({ variable: "--font-instrument", weight: "400", style: ["normal", "italic"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Other Table — A place for the good part of the day", template: "%s" },
  description: "A self-initiated restaurant concept by PerPixel. Explore an illustrative menu, the room, gatherings, and a simulated reservation journey.",
  robots: { index: false, follow: false },
};

const links = [
  ["Menu", "menu"],
  ["The restaurant", "restaurant"],
  ["Gatherings", "gatherings"],
  ["Visit", "visit"],
] as const;

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className={`${archivo.variable} ${instrument.variable}`}><body><div className="ot-site">
    <a className="ot-skip" href="#ot-main">Skip to content</a>
    <header className="ot-header">
      <Link className="ot-brand" href="/" aria-label="Other Table, home"><span className="ot-brand-symbol" aria-hidden="true">✳</span><span>OTHER TABLE</span></Link>
      <nav className="ot-nav" aria-label="Other Table navigation">{links.map(([label, path]) => <Link key={path} href={`/${path}`}>{label}</Link>)}</nav>
      <Link className="ot-header-reserve" href="/reserve">Reserve a table <span aria-hidden="true">↗</span></Link>
    </header>
    {children}
    <footer className="ot-footer">
      <div className="ot-footer-top"><p>A little more room<br />for each other.</p><div><Link href="/menu">The menu ↗</Link><Link href="/reserve">Reserve ↗</Link><Link href="/gatherings">Gatherings ↗</Link><Link href="/visit">Visit ↗</Link></div></div>
      <div className="ot-footer-wordmark" aria-hidden="true">OTHER TABLE</div>
      <div className="ot-footer-bottom"><span>© Other Table · A PerPixel concept</span><span>Fictional restaurant demo. No live bookings or enquiries.</span><a href="https://perpixel.agency/case-studies/other-table">View the case study ↗</a><a href="https://perpixel.agency/projects">Back to PerPixel ↗</a></div>
    </footer>
    <nav className="ot-mobile-actions" aria-label="Quick actions"><Link href="/menu">Explore menu</Link><Link href="/reserve">Reserve a table ↗</Link></nav>
  </div></body></html>;
}
