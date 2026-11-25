import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Archivo, Instrument_Serif } from "next/font/google";
import OtherTableHeader from "@/components/OtherTableHeader";
import OtherTableMotion from "@/components/OtherTableMotion";
import "./globals.css";
import "./other-table.css";
import "./refinements.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"] });
const instrument = Instrument_Serif({ variable: "--font-instrument", weight: "400", style: ["normal", "italic"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Other Table — A place for the good part of the day", template: "%s" },
  description: "A self-initiated restaurant concept by PerPixel. Explore an illustrative menu, the room, gatherings, and a simulated reservation journey.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className={`${archivo.variable} ${instrument.variable}`}><body><div className="ot-site">
    <a className="ot-skip" href="#ot-main">Skip to content</a>
    <OtherTableHeader />
    {children}
    <footer className="ot-footer">
      <div className="ot-footer-top"><p>A little more room<br />for each other.</p><nav aria-label="Footer navigation"><Link href="/menu">The menu ↗</Link><Link href="/reserve">Reserve ↗</Link><Link href="/gatherings">Gatherings ↗</Link><Link href="/visit">Visit ↗</Link></nav></div>
      <div className="ot-footer-wordmark" aria-hidden="true">OTHER TABLE</div>
      <div className="ot-footer-bottom"><span>© Other Table · A PerPixel concept</span><span>Fictional restaurant demo. No live bookings or enquiries.</span><a href="https://perpixel.agency/case-studies/other-table">View the case study ↗</a><a href="https://perpixel.agency/projects">Back to PerPixel ↗</a></div>
    </footer>
    <nav className="ot-mobile-actions" aria-label="Quick actions"><Link href="/menu">Explore menu</Link><Link href="/reserve">Reserve a table ↗</Link></nav>
    <OtherTableMotion />
  </div></body></html>;
}
