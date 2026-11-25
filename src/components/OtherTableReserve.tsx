"use client";

import { useState } from "react";
import Link from "next/link";
import { otherTableBase } from "@/lib/other-table";

const times = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

export default function OtherTableReserve() {
  const [party, setParty] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [step, setStep] = useState<"choose" | "review" | "done">("choose");
  const now = new Date();
  const localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const past = date ? date < localToday : false;
  const closed = date ? new Date(`${date}T12:00:00Z`).getUTCDay() === 1 : false;
  const displayDate = date ? new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`)) : "";
  return <section className="ot-form-shell" aria-labelledby="ot-reserve-form-title"><div className="ot-form-card"><span className="ot-demo-badge">Simulation · No live inventory</span>
    {step === "choose" && <><h2 id="ot-reserve-form-title" style={{marginTop:22}}>Choose your table.</h2><p>Pick a party size, date and demo time. These slots are examples for the pitch and do not represent real availability.</p><form onSubmit={event => { event.preventDefault(); if (time && !closed && !past) setStep("review"); }}><div className="ot-field-grid"><label className="ot-field">Guests<select value={party} onChange={event => setParty(event.target.value)}>{[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}</select></label><label className="ot-field">Date<input type="date" required value={date} onChange={event => { setDate(event.target.value); setTime(""); }} /></label></div><p style={{margin:"28px 0 0",fontSize:12,fontWeight:700}}>Choose a demo time</p><div className="ot-time-grid" role="group" aria-label="Demo times">{times.map(slot => <button key={slot} type="button" disabled={closed || past || !date} aria-pressed={time === slot} onClick={() => setTime(slot)}>{slot}</button>)}</div>{closed && <div className="ot-status" role="status">The sample restaurant is closed on Mondays. Please choose another date.</div>}{past && <div className="ot-status" role="status">Choose today or a future date.</div>}{date && !closed && !past && !time && <div className="ot-status">Select a time to continue. If none suits, choose another date or explore a gathering.</div>}<button className="ot-button ot-button-dark" type="submit" disabled={!date || !time || closed || past}>Continue to review <span aria-hidden="true">↗</span></button></form><p className="ot-form-note">Illustrative dinner service: Tuesday–Sunday, 18:00–22:30. For a real venue, hours and availability would come from its booking provider. Sample cancellation policy: please tell us 24 hours ahead. No actual booking or charge occurs here.</p><Link className="ot-text-link" href={`${otherTableBase}/gatherings`}>Planning for more than eight? ↗</Link></>}
    {step === "review" && <><h2 id="ot-reserve-form-title" style={{marginTop:22}}>Your evening, at a glance.</h2><p>Contact details are preset for demonstration. No personal details are requested, stored or sent.</p><dl className="ot-review"><div><dt>Party</dt><dd>{party} {party === "1" ? "guest" : "guests"}</dd></div><div><dt>Date</dt><dd>{displayDate}</dd></div><div><dt>Demo time</dt><dd>{time}</dd></div><div><dt>Test guest</dt><dd>Alex Guest</dd></div></dl><p className="ot-form-note">Accessibility requests would be captured in a real booking flow and handled by the restaurant team. This simulation does not place a reservation.</p><div style={{display:"flex",gap:15,flexWrap:"wrap"}}><button type="button" className="ot-button ot-button-dark" onClick={() => setStep("done")}>Confirm demo booking <span aria-hidden="true">↗</span></button><button type="button" className="ot-button" onClick={() => setStep("choose")}>Change details</button></div></>}
    {step === "done" && <><h2 id="ot-reserve-form-title" style={{marginTop:22}}>A table, imagined.</h2><p>Your simulated reservation for {party} {party === "1" ? "guest" : "guests"} on {displayDate} at {time} is complete. No real table has been held and no details were sent.</p><div className="ot-status" role="status">Demo confirmation · Other Table concept by PerPixel</div><Link className="ot-button ot-button-dark" href="/">Back to Other Table <span aria-hidden="true">↗</span></Link></>}
  </div></section>;
}
