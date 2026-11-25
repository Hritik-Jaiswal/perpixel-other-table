"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["The menu", "/menu"],
  ["The restaurant", "/restaurant"],
  ["Gatherings", "/gatherings"],
  ["Visit", "/visit"],
] as const;

export default function OtherTableHeader() {
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (dialog.current?.open) dialog.current.close();
  }, [pathname]);

  return <>
    <header className="ot-header">
      <Link className="ot-brand" href="/" aria-label="Other Table, home"><span className="ot-brand-symbol" aria-hidden="true">✳</span><span>OTHER TABLE</span></Link>
      <nav className="ot-nav" aria-label="Other Table navigation">{links.map(([label, path]) => <Link key={path} href={path} aria-current={pathname === path ? "page" : undefined}>{label}</Link>)}</nav>
      <div className="ot-header-end"><span className="ot-header-note">A place for the good part of the day</span><Link className="ot-header-reserve" href="/reserve">Reserve a table <span aria-hidden="true">↗</span></Link><button className="ot-menu-open" type="button" onClick={() => dialog.current?.showModal()} aria-label="Open navigation menu"><span>Menu</span><span className="ot-menu-lines" aria-hidden="true"><i /><i /></span></button></div>
    </header>
    <dialog ref={dialog} className="ot-menu-dialog" aria-label="Other Table navigation">
      <div className="ot-dialog-top"><span>OTHER TABLE <span aria-hidden="true">✳</span></span><button type="button" onClick={() => dialog.current?.close()} aria-label="Close navigation menu">Close ×</button></div>
      <nav aria-label="Mobile navigation">{links.map(([label, path], index) => <Link key={path} href={path} onClick={() => dialog.current?.close()}><span>0{index + 1}</span>{label}<span aria-hidden="true">↗</span></Link>)}</nav>
      <div className="ot-dialog-bottom"><p>Good things happen<br /><em>around a table.</em></p><Link href="/reserve" onClick={() => dialog.current?.close()}>Find your seat ↗</Link></div>
    </dialog>
  </>;
}
