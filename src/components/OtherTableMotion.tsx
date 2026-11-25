"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function OtherTableMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const wordmark = document.querySelector<HTMLElement>(".ot-footer-wordmark");
    const seal = document.querySelector<HTMLElement>(".ot-hero-seal");
    const tableArt = document.querySelector<HTMLElement>(".ot-intro-art");
    const roomImage = document.querySelector<HTMLElement>(".ot-room-image img");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!wordmark) return;
    let frame = 0;

    const paint = () => {
      frame = 0;
      if (reduced.matches) {
        wordmark.style.transform = "translate3d(0,0,0)";
        wordmark.style.opacity = "1";
        if (seal) seal.style.transform = "rotate(-12deg)";
        tableArt?.style.removeProperty("transform");
        roomImage?.style.removeProperty("transform");
        return;
      }
      const footer = wordmark.closest<HTMLElement>(".ot-footer");
      const bounds = footer?.getBoundingClientRect();
      if (bounds) {
        const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / Math.max(1, bounds.height * .8)));
        wordmark.style.transform = `translate3d(0,${(1 - progress) * 42}%,0)`;
        wordmark.style.opacity = String(.45 + progress * .55);
      }
      if (seal) {
        const hero = seal.closest<HTMLElement>(".ot-hero-photo");
        const rect = hero?.getBoundingClientRect();
        if (rect) {
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / Math.max(1, window.innerHeight + rect.height)));
          seal.style.transform = `rotate(${(-12 + progress * 16).toFixed(2)}deg)`;
        }
      }
      if (tableArt) {
        const rect = tableArt.closest<HTMLElement>(".ot-intro")?.getBoundingClientRect();
        if (rect) {
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / Math.max(1, window.innerHeight + rect.height)));
          tableArt.style.transform = `translate3d(0,${((.5 - progress) * 42).toFixed(1)}px,0) rotate(${(3 + progress * 10).toFixed(1)}deg)`;
        }
      }
      if (roomImage) {
        const rect = roomImage.closest<HTMLElement>(".ot-room")?.getBoundingClientRect();
        if (rect) {
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / Math.max(1, window.innerHeight + rect.height)));
          roomImage.style.transform = `scale(${(1.055 - progress * .055).toFixed(4)})`;
        }
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
      wordmark.style.removeProperty("transform");
      wordmark.style.removeProperty("opacity");
      seal?.style.removeProperty("transform");
      tableArt?.style.removeProperty("transform");
      roomImage?.style.removeProperty("transform");
    };
  }, [pathname]);
  return null;
}
