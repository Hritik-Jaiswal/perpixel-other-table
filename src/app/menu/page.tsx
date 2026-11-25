import type { Metadata } from "next";
import Link from "next/link";
import OtherTableMenu from "@/components/OtherTableMenu";
import { otherTableBase } from "@/lib/other-table";

export const metadata: Metadata = { title: "Menu | Other Table", robots: { index: false, follow: false } };

export default function MenuPage() { return <main id="ot-main" className="ot-interior-main"><header className="ot-page-intro"><span className="ot-kicker">GOOD FOOD, PASSED AROUND</span><h1>At the <em>table.</em></h1><p>A little of this, another of that. Order for the table and see where the evening goes.</p></header><OtherTableMenu /><section className="ot-callout"><p>Something caught your eye? There’s always room for another plate.</p><Link className="ot-text-link" href={`${otherTableBase}/reserve`}>Find your seat ↗</Link></section></main>; }
