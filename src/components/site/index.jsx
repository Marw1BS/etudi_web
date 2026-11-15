import React from 'react'
import { Link } from 'react-router-dom'

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.etudi.app&hl=fr'
const LOGO = '/images/ETUDI_ICONE.png'

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src={`${LOGO}?v=2`}
        alt="ETUDI"
        className="h-8 w-8 rounded-2xl object-contain"
        onError={(e) => {
          e.target.onerror = null
          e.target.src = '/images/logo_etudi.webp'
        }}
      />
      <span className="text-lg font-bold tracking-tight text-navy">ETUDI</span>
    </Link>
  )
}

export function SiteNav({ links = [], cta }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-navy/10 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.to ? (
              <Link key={link.label} to={link.to} className="text-sm text-muted hover:text-navy">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-sm text-muted hover:text-navy">
                {link.label}
              </a>
            )
          )}
        </div>
        {cta}
      </div>
    </nav>
  )
}

export function PrimaryLink({ href = PLAY_STORE_URL, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white shadow-cta transition-colors hover:bg-primary-dark ${className}`}
    >
      {children}
    </a>
  )
}

export function StoreButtons({ dark = false }) {
  const base = 'inline-flex items-center gap-3 rounded-2xl px-5 py-2.5 transition-colors'
  const filled = dark ? 'bg-white text-navy hover:bg-mint' : 'bg-navy text-white hover:bg-navy/90'
  const outline = dark
    ? 'border border-white/30 text-white hover:bg-white/10'
    : 'border border-navy/10 text-navy hover:bg-mint'
  return (
    <div className="flex flex-wrap gap-3">
      <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${filled}`}>
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
        <span className="text-left leading-tight">
          <span className="block text-[11px] opacity-70">Disponible sur</span>
          <span className="block font-semibold">Google Play</span>
        </span>
      </a>
      <button type="button" className={`${base} ${outline}`}>
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
        <span className="text-left leading-tight">
          <span className="block text-[11px] opacity-70">Télécharger sur</span>
          <span className="block font-semibold">App Store</span>
        </span>
      </button>
    </div>
  )
}

export function PhoneFrame({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Side buttons */}
      <span className="absolute -left-[3px] top-[18%] h-7 w-[3px] rounded-l bg-[#2a3a52]" />
      <span className="absolute -left-[3px] top-[27%] h-12 w-[3px] rounded-l bg-[#2a3a52]" />
      <span className="absolute -left-[3px] top-[37%] h-12 w-[3px] rounded-l bg-[#2a3a52]" />
      <span className="absolute -right-[3px] top-[30%] h-16 w-[3px] rounded-r bg-[#2a3a52]" />

      {/* Body */}
      <div className="rounded-[2.9rem] bg-[#0f1d33] p-[9px] shadow-[0_40px_70px_-30px_rgba(29,53,87,0.45),inset_0_0_0_1.5px_#3a4c68]">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.35rem] bg-mint">
          {/* Status bar */}
          <div className="relative flex h-9 items-center justify-between px-7 text-[11px] font-semibold text-navy">
            <span>9:41</span>
            <span className="absolute left-1/2 top-2 h-[22px] w-[30%] -translate-x-1/2 rounded-full bg-black" />
            <span className="flex items-center gap-1" aria-hidden="true">
              <svg width="15" height="10" viewBox="0 0 15 10" fill="currentColor"><rect x="0" y="7" width="2.5" height="3" rx=".6"/><rect x="4" y="5" width="2.5" height="5" rx=".6"/><rect x="8" y="2.5" width="2.5" height="7.5" rx=".6"/><rect x="12" y="0" width="2.5" height="10" rx=".6"/></svg>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M7 2.2c2 0 3.8.8 5.1 2l1-1A8.6 8.6 0 0 0 7 .8 8.6 8.6 0 0 0 .9 3.2l1 1A7.2 7.2 0 0 1 7 2.2Zm0 2.9c1.2 0 2.3.5 3.1 1.2l1-1A5.8 5.8 0 0 0 7 3.7a5.8 5.8 0 0 0-4.1 1.6l1 1A4.4 4.4 0 0 1 7 5.1Zm0 2.9c.4 0 .8.2 1.1.4L7 9.6 5.9 8.4c.3-.2.7-.4 1.1-.4Z"/></svg>
              <svg width="24" height="11" viewBox="0 0 24 11" fill="none"><rect x=".5" y=".5" width="20" height="10" rx="3" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="15" height="7" rx="1.6" fill="currentColor"/><rect x="21.8" y="3.5" width="1.6" height="4" rx=".8" fill="currentColor" opacity=".4"/></svg>
            </span>
          </div>

          {children}

          {/* Home indicator */}
          <div className="flex h-5 items-center justify-center bg-white">
            <span className="h-1 w-[35%] rounded-full bg-navy/80" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Real figures (Play Store + team count). Update here when they grow.
export const STATS = [
  { value: '100+', label: 'téléchargements', note: 'sur Google Play', href: PLAY_STORE_URL },
  { value: '100+', label: 'élèves inscrits' },
  { value: '50+', label: 'professeurs inscrits' },
]

export function StatsBar({ stats = STATS }) {
  return (
    <section className="border-b border-navy/10 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-navy/10 px-5 py-8">
        {stats.map((s) => {
          const body = (
            <>
              <p className="text-3xl font-bold tracking-tight text-navy md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted">
                {s.label}
                {s.note && <span className="hidden sm:inline"> {s.note}</span>}
              </p>
            </>
          )
          return s.href ? (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="px-2 text-center transition-colors hover:text-primary md:px-6">
              {body}
            </a>
          ) : (
            <div key={s.label} className="px-2 text-center md:px-6">{body}</div>
          )
        })}
      </div>
    </section>
  )
}

const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/etudi.tn' },
  { label: 'Instagram', href: 'https://www.instagram.com/etudi.tn' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/etudi-tn' },
  { label: 'YouTube', href: 'https://www.youtube.com/@etudi.tn' },
  { label: 'X', href: 'https://x.com/etudi_tn' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs space-y-3">
          <Logo />
          <p className="text-sm text-muted">L'application pour trouver un prof particulier en Tunisie.</p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm">
          <div className="space-y-2">
            <p className="font-semibold text-navy">ETUDI</p>
            <Link to="/" className="block text-muted hover:text-navy">Élèves et parents</Link>
            <Link to="/je-suis-prof" className="block text-muted hover:text-navy">Professeurs</Link>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="block text-muted hover:text-navy">Télécharger</a>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-navy">Nous suivre</p>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="block text-muted hover:text-navy">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-navy/10 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} ETUDI. Tous droits réservés.
      </div>
    </footer>
  )
}
