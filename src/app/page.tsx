import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredDishes, formatPrice, otherTableBase } from "@/lib/other-table";

export const metadata: Metadata = {
  title: "Other Table — A place for the good part of the day",
  description: "A self-initiated restaurant concept by PerPixel. Explore an illustrative menu, the room, gatherings, and a simulated reservation journey.",
  robots: { index: false, follow: false },
};

export default function OtherTableHome() {
  return <main id="ot-main" className="ot-main">
    <section className="ot-hero" aria-labelledby="ot-hero-title">
      <div className="ot-hero-overline"><span>AN INVITATION TO PULL UP A CHAIR</span><span>EST. IN IMAGINATION · A PERPIXEL CONCEPT</span></div>
      <div className="ot-hero-heading"><h1 id="ot-hero-title">Good things happen<br /><em>around a table.</em></h1><p>For the first glass, the extra plate, and the conversations that run past dessert.</p></div>
      <div className="ot-hero-photo"><Image src="/images/table.webp" alt="Friends passing shared plates across a warmly lit dinner table" fill priority sizes="100vw" /></div>
      <div className="ot-hero-bottom"><div><span className="ot-asterisk" aria-hidden="true">✳</span><span>Food made for sharing.<br />Evenings made to linger.</span></div><div className="ot-hero-actions"><Link className="ot-button ot-button-dark" href={`${otherTableBase}/reserve`}>Find your seat <span aria-hidden="true">↗</span></Link><Link className="ot-text-link" href={`${otherTableBase}/menu`}>See the menu <span aria-hidden="true">↗</span></Link></div></div>
    </section>

    <section className="ot-intro" aria-label="Our invitation"><span className="ot-kicker">01 / THE IDEA</span><p>Come hungry. <em>Leave with a story.</em></p><div className="ot-intro-note"><span className="ot-rule" />A neighbourhood table for familiar faces and new ones. Seasonal ingredients, generous plates, and just enough reason to order one more thing.</div></section>

    <section className="ot-featured" aria-labelledby="ot-featured-title"><div className="ot-section-head"><div><span className="ot-kicker">02 / TONIGHT’S TABLE</span><h2 id="ot-featured-title">A few good things<br /><em>to start with.</em></h2></div><Link className="ot-text-link" href={`${otherTableBase}/menu`}>View the full menu <span aria-hidden="true">↗</span></Link></div><div className="ot-featured-grid"><div className="ot-dish-image"><Image src="/images/aubergine.webp" alt="Charred aubergine with labneh, tomatoes and herbs" fill sizes="(min-width: 900px) 42vw, 100vw" /></div><div className="ot-dish-list">{featuredDishes.map((dish, index) => <div className="ot-dish-row" key={dish.name}><span className="ot-dish-index">0{index+1}</span><div><h3>{dish.name}</h3><p>{dish.description}</p><span className="ot-dish-tags">{dish.tags?.join(" · ") || "Made for the table"}</span></div><strong>{formatPrice(dish.price)}</strong></div>)}<p className="ot-menu-note">Illustrative dishes and prices for this fictional concept. Please speak to staff about allergies in a real restaurant.</p></div></div></section>

    <section className="ot-room" aria-labelledby="ot-room-title"><div className="ot-room-image"><Image src="/images/room.webp" alt="A warmly lit restaurant room with a burgundy banquette and a table set for dinner" fill sizes="(min-width: 900px) 58vw, 100vw" /></div><div className="ot-room-copy"><span className="ot-kicker">03 / THE ROOM</span><span className="ot-room-star" aria-hidden="true">✳</span><h2 id="ot-room-title">Stay a little <em>longer.</em></h2><p>One more conversation. One more piece of bread. A room that lets the evening unfold at its own pace.</p><Link className="ot-text-link" href={`${otherTableBase}/restaurant`}>Meet the restaurant <span aria-hidden="true">↗</span></Link></div></section>

    <section className="ot-gather" aria-labelledby="ot-gather-title"><span className="ot-kicker">04 / A REASON TO GATHER</span><div><h2 id="ot-gather-title">The best nights<br />need <em>more chairs.</em></h2><p>Birthdays without a script. Long overdue reunions. A whole table to yourselves, with food that keeps the conversation moving.</p><Link className="ot-button ot-button-light" href={`${otherTableBase}/gatherings`}>Gather with us <span aria-hidden="true">↗</span></Link></div><span className="ot-gather-annotation">make room<br />for everyone ↗</span></section>

    <section className="ot-visit-teaser"><div><span className="ot-kicker">05 / COME ON IN</span><h2>There’s a place<br /><em>for you here.</em></h2></div><div><p>Browse the sample service details, accessibility notes and what to expect before you visit.</p><Link className="ot-text-link" href={`${otherTableBase}/visit`}>Plan your visit <span aria-hidden="true">↗</span></Link></div></section>
  </main>;
}
