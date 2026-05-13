import { Link } from 'react-router-dom';
import { HEADER_COURSES_NAV } from '../data/courses';

const PRODUCT_LINKS = [
  { label: 'Возможности', href: '#format-obucheniya' },
  { label: 'Преимущества', href: '#pochemu-my' },
  { label: 'Каталог курсов', href: '#nashi-kursy' },
  { label: 'Получить демо', href: '#cta-final' },
];

const LEGAL_LINKS = [
  { label: 'Договор-оферта', href: '#' },
  { label: 'Политика конфиденциальности', href: '#' },
  { label: 'Стандарты безопасности', href: '#' },
  { label: 'Поддержка пользователей', href: '#' },
];

const SOCIAL_LINKS = [
  { icon: 'send', label: 'Telegram', href: '#' },
  { icon: 'chat', label: 'WhatsApp', href: '#' },
  { icon: 'language', label: 'Site', href: '#' },
];

/**
 * Премиум-футер: 4 колонки, dark inverse surface, мелкая навигация по курсам.
 */
export default function LandingFooter() {
  const topCourses = HEADER_COURSES_NAV.slice(0, 8);

  return (
    <footer className="bg-on-background relative w-full overflow-hidden text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-[380px] w-[420px] rounded-full bg-primary/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-container-max relative z-10 mx-auto px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        {/* Top: brand + tagline (Editorial) */}
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="SkillPass.kz — на главную"
            >
              <span className="bg-primary text-on-primary inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-[0_8px_24px_-6px_rgba(0,102,138,0.6)] transition-transform group-hover:rotate-[6deg]">
                <span className="material-symbols-outlined text-[26px]">verified</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[26px] font-extrabold tracking-tight">
                  SkillPass<span className="text-secondary-fixed-dim">.kz</span>
                </span>
                <span className="text-white/45 mt-1 text-[11px] uppercase tracking-[0.22em]">
                  Digital safety platform
                </span>
              </span>
            </Link>
            <p className="text-white/65 mt-6 max-w-md text-[15px] leading-[1.65]">
              Платформа цифровой охраны труда и промышленной безопасности
              для&nbsp;казахстанского бизнеса. Учимся, документируем, проверяем —
              в&nbsp;одном&nbsp;окне.
            </p>
          </div>

          {/* Контактный mini-blok */}
          <div className="border-white/15 bg-white/[0.05] rounded-3xl border p-6 backdrop-blur-sm">
            <div className="text-white/55 mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
              Связаться
            </div>
            <a
              href="tel:+770000000000"
              className="text-white block text-[22px] font-extrabold tabular-nums hover:text-secondary-fixed-dim transition-colors"
            >
              +7 700 000 00 00
            </a>
            <a
              href="mailto:hello@skillpass.kz"
              className="text-white/80 hover:text-secondary-fixed-dim mt-1 inline-flex items-center gap-2 text-[14px] transition-colors"
            >
              hello@skillpass.kz
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {SOCIAL_LINKS.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="border-white/15 hover:border-secondary-fixed-dim/55 hover:bg-white/10 group inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white/[0.04] transition-colors"
                  aria-label={label}
                >
                  <span className="material-symbols-outlined text-[20px] text-white/80 group-hover:text-secondary-fixed-dim">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <span className="bg-white/10 mb-12 block h-px w-full" />

        {/* Multi-column nav */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-4">
          <div>
            <div className="text-white/55 mb-5 text-[11px] font-semibold uppercase tracking-[0.22em]">
              Продукт
            </div>
            <ul className="flex flex-col gap-3 [list-style:none] [padding-inline-start:0]">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/80 hover:text-secondary-fixed-dim text-[14px] font-medium transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white/55 mb-5 text-[11px] font-semibold uppercase tracking-[0.22em]">
              Документы
            </div>
            <ul className="flex flex-col gap-3 [list-style:none] [padding-inline-start:0]">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/80 hover:text-secondary-fixed-dim text-[14px] font-medium transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2">
            <div className="text-white/55 mb-5 text-[11px] font-semibold uppercase tracking-[0.22em]">
              Топ направлений
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 [list-style:none] [padding-inline-start:0]">
              {topCourses.map(({ title, slug, href }) => (
                <li key={slug}>
                  <Link
                    to={href}
                    className="text-white/75 hover:text-secondary-fixed-dim group inline-flex items-center gap-2 text-[13px] font-medium transition-colors"
                  >
                    <span className="bg-white/20 h-1 w-1 rounded-full transition-colors group-hover:bg-secondary-fixed-dim" />
                    <span className="truncate">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <span className="bg-white/10 mt-14 mb-6 block h-px w-full" />

        {/* Bottom: copyright + accreditations */}
        <div className="flex flex-col items-start justify-between gap-4 text-[12px] text-white/55 md:flex-row md:items-center">
          <div>© 2026 SkillPass.kz. Digital Safety &amp; Labor Protection Automation.</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 uppercase tracking-[0.18em]">
            <span>IA № 0337</span>
            <span aria-hidden className="bg-white/15 h-3 w-px" />
            <span>KZ49VEK00016534</span>
            <span aria-hidden className="bg-white/15 h-3 w-px" />
            <span>ISO 9001/14001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
