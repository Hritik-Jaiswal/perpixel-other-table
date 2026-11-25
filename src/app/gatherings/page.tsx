import type { Metadata } from "next";
import Image from "next/image";
import GatheringsPreview from "@/components/OtherTableGatherings";

export const metadata: Metadata = { title: "Gatherings | Other Table", robots: { index: false, follow: false } };

export default function GatheringsPage() { return <main id="ot-main" className="ot-interior-main"><header className="ot-page-intro"><span className="ot-kicker">MORE REASONS TO GET TOGETHER</span><h1>Bring your<br /><em>people.</em></h1><p>For the birthdays, team dinners and long awaited reunions that deserve a table of their own.</p></header><div className="ot-full-image"><Image src="/images/table.webp" alt="Friends sharing a generous dinner around a table" fill priority sizes="100vw" /></div><div className="ot-info-grid"><div><span className="ot-kicker">A TABLE FOR THE OCCASION</span><h2>A little gathering<br />or a <em>big one.</em></h2></div><div><p>This concept imagines shared set menus, a semi-private corner for 8–14 guests, and a full room gathering for up to 32. Every format and capacity is illustrative until a real venue is selected.</p><p>We would shape the food and pacing around the people you’re bringing. The preview below shows the questions a real team would need to plan well.</p></div></div><GatheringsPreview /></main>; }
