import { useEffect, useRef, type ReactNode } from "react";
import { fotos } from "@/config/site";

export function goToStores(e?: React.MouseEvent) {
  e?.preventDefault();
  document.getElementById("lojas")?.scrollIntoView({ behavior: "smooth" });
}

export function Cta({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href="#lojas"
      onClick={goToStores}
      className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_12px_30px_-12px_var(--primary)] transition-all duration-300 hover:scale-[1.03] hover:bg-primary-glow ${className}`}
    >
      {children}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    </a>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Leaf({ className = "", size = 160 }: { className?: string; size?: number }) {
  return <img src={fotos.folha} alt="" aria-hidden width={size} height={size} loading="lazy" className={`pointer-events-none absolute select-none ${className}`} />;
}

export function Tag({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 ${dark ? "bg-background" : "bg-primary"}`}>
      <img src="/logos/cerealli.png" alt="Cerealli" width={473} height={115} className="logo-white h-7 w-auto" />
      <span className="text-sm font-medium tracking-wide text-primary-foreground">natural market</span>
    </span>
  );
}

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
export const Icon = {
  store: <svg viewBox="0 0 24 24" {...P}><path d="M3 9l1.5-5h15L21 9M3 9h18M3 9v0a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0M5 12v8h14v-8M10 20v-5h4v5" /></svg>,
  tag: <svg viewBox="0 0 24 24" {...P}><path d="M3 12V4h8l10 10-8 8L3 12z" /><circle cx="7.5" cy="8.5" r="1.5" /></svg>,
  check: <svg viewBox="0 0 24 24" {...P}><path d="M12 2l2.4 2 3.1-.3.9 3 2.6 1.8-1 3 1 3-2.6 1.8-.9 3-3.1-.3L12 22l-2.4-2-3.1.3-.9-3L3 15.5l1-3-1-3 2.6-1.8.9-3 3.1.3z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg>,
  hands: <svg viewBox="0 0 24 24" {...P}><path d="M2 12l4-4 4 2 3-2 4 1 5 3M6 8l-4 8 4 2M22 12l-3 6-3-1M9 15l2 2M11 13l3 3M13 11l3 3" /></svg>,
  bowl: <svg viewBox="0 0 24 24" {...P}><path d="M3 11h18a9 9 0 01-18 0zM8 7c1-2 3-2 4-4M12 7c1-2 3-2 4-4" /></svg>,
  moto: <svg viewBox="0 0 24 24" {...P}><circle cx="5.5" cy="17" r="3" /><circle cx="18.5" cy="17" r="3" /><path d="M8.5 17h6l3-6h-4l-2-4H8M14 7h3l1.5 4" /></svg>,
  bag: <svg viewBox="0 0 24 24" {...P}><path d="M5 8h14l-1 13H6L5 8zM9 8V6a3 3 0 016 0v2" /></svg>,
  heart: <svg viewBox="0 0 24 24" {...P}><path d="M20.8 5.6a5 5 0 00-7.8-.6L12 6l-1-1a5 5 0 00-7.8 6.4L12 21l8.8-9.6a5 5 0 000-5.8z" /><path d="M3 12h5l2-3 3 6 2-3h6" /></svg>,
  pin: <svg viewBox="0 0 24 24" {...P}><path d="M12 22s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>,
  snow: <svg viewBox="0 0 24 24" {...P}><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9 4l3 2 3-2M9 20l3-2 3 2" /></svg>,
  thermo: <svg viewBox="0 0 24 24" {...P}><path d="M14 14V4a2 2 0 00-4 0v10a4 4 0 104 0z" /></svg>,
  jar: <svg viewBox="0 0 24 24" {...P}><path d="M7 3h10v3H7zM6 6h12v13a2 2 0 01-2 2H8a2 2 0 01-2-2z" /></svg>,
  eye: <svg viewBox="0 0 24 24" {...P}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>,
  clip: <svg viewBox="0 0 24 24" {...P}><path d="M9 4h6v3H9zM6 5h3M15 5h3v16H6V5M9 12l2 2 4-4" /></svg>,
  doc: <svg viewBox="0 0 24 24" {...P}><path d="M6 2h9l3 3v17H6zM9 9h6M9 13h6M9 17h4" /></svg>,
  ret: <svg viewBox="0 0 24 24" {...P}><path d="M9 14L4 9l5-5M4 9h11a5 5 0 010 10h-3" /></svg>,
  insta: <svg viewBox="0 0 24 24" {...P}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>,
  wa: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.1-1.2c0-.1-.2-.2-.5-.3z" /></svg>,
};

export function IconBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`inline-flex h-6 w-6 shrink-0 text-primary-glow [&>svg]:h-full [&>svg]:w-full ${className}`} aria-hidden>{children}</span>;
}
