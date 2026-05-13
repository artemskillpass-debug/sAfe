import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HEADER_COURSES_NAV } from '../data/courses';

const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Курсы', href: '#nashi-kursy' },
  { label: 'Преимущества', href: '#pochemu-my' },
  { label: 'Формат', href: '#format-obucheniya' },
  { label: 'Связаться', href: '#cta-final' },
];

/**
 * Витрина направлений (сетка под шапкой) — оставлена для обратной совместимости,
 * по умолчанию не используется в новом премиум-хедере.
 */
export function CoursesDirectionsRibbon() {
  return (
    <div className="border-outline-variant bg-surface-container-low/90 dark:border-outline dark:bg-surface-container-high/35 hidden border-t md:block">
      <div className="mx-auto max-w-container-max px-gutter py-3 lg:py-3.5">
        <p className="text-on-surface-variant font-label-sm text-label-sm mb-2.5 hidden font-semibold uppercase tracking-wider lg:block">
          Направления обучения
        </p>
        <ul className="grid list-none gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 [padding-inline-start:0] [grid-auto-rows:1fr]">
          {HEADER_COURSES_NAV.map(({ title, href, slug }) => (
            <li key={slug} className="min-h-0 min-w-0">
              <Link
                to={href}
                title={title}
                className="border-outline-variant bg-surface hover:border-primary/40 hover:bg-surface-container-low hover:text-primary flex h-full min-h-[4rem] flex-col items-center justify-center rounded-xl border px-2 py-2.5 text-center shadow-sm transition-all lg:min-h-[4.25rem] lg:px-2.5 lg:py-3"
              >
                <span className="text-on-surface line-clamp-3 max-w-full text-[11px] font-semibold leading-snug sm:text-[12px] lg:text-[13px]">
                  {title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Премиум-шапка лендинга SkillPass.
 * — Sticky с переходом «прозрачная → glassmorphism» при скролле.
 * — Логотип с mark, ровный navigation, акцентная CTA-кнопка.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-surface/85 border-outline-variant/40 shadow-[0_8px_24px_-12px_rgba(0,30,44,0.18)] backdrop-blur-xl'
          : 'bg-transparent border-transparent'
      } border-b`}
    >
      <div className="max-w-container-max mx-auto flex h-20 items-center justify-between px-margin-mobile md:px-margin-desktop">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="SkillPass.kz — на главную"
        >
          <span
            className="bg-primary text-on-primary relative inline-flex h-10 w-10 items-center justify-center rounded-xl shadow-[0_8px_18px_-6px_rgba(0,102,138,0.5)] transition-transform group-hover:rotate-[6deg]"
            aria-hidden
          >
            <span className="material-symbols-outlined text-[22px]">verified</span>
            <span className="bg-secondary-fixed-dim absolute -right-1 -top-1 h-3 w-3 rounded-full ring-2 ring-surface" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-headline-md text-on-background text-[20px] font-extrabold tracking-tight">
              SkillPass<span className="text-primary">.kz</span>
            </span>
            <span className="eyebrow mt-1 text-[10px] tracking-[0.22em] before:hidden text-on-surface-variant">
              Safety platform
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Основная навигация"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-on-surface hover:text-primary relative rounded-full px-4 py-2 text-[14px] font-semibold transition-colors after:absolute after:bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all hover:after:w-5"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+770000000000"
            className="text-on-surface-variant hover:text-primary hidden items-center gap-2 rounded-full border border-outline-variant/60 bg-surface-container-lowest/70 px-3 py-2 text-[13px] font-medium transition-colors backdrop-blur-sm xl:inline-flex"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            +7 700 000 0000
          </a>

          <button type="button" className="btn-premium btn-premium--accent text-[14px] px-5 py-2.5">
            Получить демо
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden border-outline-variant/60 bg-surface-container-lowest/70 text-on-surface flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen ? (
        <div className="lg:hidden border-outline-variant/40 bg-surface-container-lowest/95 border-t backdrop-blur-xl animate-megapanel-open">
          <nav
            aria-label="Мобильная навигация"
            className="mx-auto max-w-container-max px-margin-mobile py-4"
          >
            <ul className="flex flex-col divide-y divide-outline-variant/40 [list-style:none] [padding-inline-start:0]">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="text-on-surface flex items-center justify-between py-3 text-[15px] font-semibold"
                  >
                    {label}
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                      arrow_forward
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
