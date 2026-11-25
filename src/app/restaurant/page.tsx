import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { otherTableBase } from "@/lib/other-table";

export const metadata: Metadata = { title: "The Restaurant | Other Table", robots: { index: false, follow: false } };

export default function RestaurantPage() { return <main id="ot-main" className="ot-interior-main"><header className="ot-page-intro"><span className="ot-kicker">A NEIGHBOURHOOD KIND OF EVENING</span><h1>The room is<br /><em>yours too.</em></h1><p>Other Table is a fictional restaurant imagined around a simple idea: food tastes better when it brings people together.</p></header><div className="ot-full-image"><Image src="/images/room.webp" alt="Warm, intimate dining room with an oxblood banquette" fill priority sizes="100vw" /></div><div className="ot-info-grid"><div><span className="ot-kicker">THE WAY WE SEE IT</span><h2>Come as you are.<br /><em>Stay as you like.</em></h2></div><div><p>Our imagined room is warm without ceremony. Drop in for a quick plate, stay for the whole evening, or pull a few tables together for something worth celebrating.</p><p>Behind the menu is the pleasure of cooking for people: seasonal produce, familiar ingredients with a little surprise, and dishes built to travel from hand to hand.</p><Link className="ot-text-link" href={`${otherTableBase}/menu`}>Explore the menu ↗</Link></div></div><div className="ot-callout"><p>Order another plate. Stay a little longer.</p><Link className="ot-text-link" href={`${otherTableBase}/reserve`}>Reserve a demo table ↗</Link></div></main>; }
