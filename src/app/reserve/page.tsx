import type { Metadata } from "next";
import OtherTableReserve from "@/components/OtherTableReserve";

export const metadata: Metadata = { title: "Reserve | Other Table", robots: { index: false, follow: false } };

export default function ReservePage() { return <main id="ot-main" className="ot-interior-main"><header className="ot-page-intro"><span className="ot-kicker">WE’LL MAKE ROOM</span><h1>Pull up<br /><em>a chair.</em></h1><p>A short reservation journey, made to feel as welcoming as the room itself. This is a working simulation for a fictional restaurant.</p></header><OtherTableReserve /></main>; }
