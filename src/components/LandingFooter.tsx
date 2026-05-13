import { Link } from 'react-router-dom';
import { HEADER_COURSES_NAV } from '../data/courses';

const PRODUCT_LINKS = [
  { label: 'Возможности платформы', href: '#format-obucheniya' },
  { label: 'Преимущества', href: '#pochemu-my' },
  { label: 'Каталог курсов', href: '#nashi-kursy' },
  { label: 'Запросить демо', href: '#cta-final' },
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

const TRUST_ITEMS = [
  {
    icon: 'workspace_premium',
    title: 'Сертификаты',
    text: 'документы после обучения',
  },
  {
    icon: 'fact_check',
    title: 'Контроль',
    text: 'статусы сотрудников',
  },
  {
    icon: 'shield',
    title: 'Безопасность',
    text: 'данные в системе',
  },
];

const PLATFORM_ITEMS = [
  {
    icon: 'school',
    title: 'Онлайн-обучение',
    text: 'сотрудники проходят курсы в удобное время',
  },
  {
    icon: 'assignment_turned_in',
    title: 'Тестирование',
    text: 'проверка знаний после учебных блоков',
  },
  {
    icon: 'dashboard_customize',
    title: 'Личный кабинет',
    text: 'контроль прогресса и документов',
  },
  {
    icon: 'description',
    title: 'Документы',
    text: 'сертификаты и протоколы в системе',
  },
];

export default function LandingFooter() {
  const topCourses = HEADER_COURSES_NAV.slice(0, 8);

  return (
    <footer className="bg-on-background relative w-full overflow-hidden text-white">
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[520px] rounded-full bg-primary/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/15 blur-[140px]"
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

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile py-14 md:px-margin-desktop md:py-18 xl:px-8">
        {/* Main footer card */}
        <div className="rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-white/[0.075] via-white/[0.035] to-white/[0.02] p-6 backdrop-blur-md md:p-8 lg:p-10">
          {/* Brand + platform summary */}
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            {/* Brand side */}
            <div className="flex flex-col">
              <Link
                to="/"
                className="group inline-flex w-fit items-center gap-3"
                aria-label="SkillPass.kz — на главную"
              >
                <span className="relative inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-primary text-on-primary shadow-[0_12px_32px_-10px_rgba(0,102,138,0.9)] transition-transform group-hover:rotate-[6deg]">
                  <span className="material-symbols-outlined text-[28px]">
                    verified
                  </span>

                  <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-on-background bg-secondary-fixed-dim" />
                </span>

                <span className="flex flex-col leading-none">
                  <span className="text-[28px] font-extrabold tracking-tight md:text-[32px]">
                    SkillPass<span className="text-secondary-fixed-dim">.kz</span>
                  </span>

                  <span className="mt-1 text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Safety platform
                  </span>
                </span>
              </Link>

              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-white/68 md:text-[16px]">
                Платформа для обязательного онлайн-обучения сотрудников:
                курсы, тестирование, контроль прохождения и подтверждающие
                документы в одном личном кабинете.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {TRUST_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container">
                      <span className="material-symbols-outlined text-[20px]">
                        {item.icon}
                      </span>
                    </span>

                    <div className="mt-3 text-[14px] font-bold text-white">
                      {item.title}
                    </div>

                    <div className="mt-1 text-[12px] leading-snug text-white/55">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2">
                {SOCIAL_LINKS.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-[12px] font-semibold text-white/85 transition hover:border-secondary-fixed-dim/55 hover:bg-white/10 hover:text-secondary-fixed-dim"
                    aria-label={label}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {icon}
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Platform panel instead of contacts */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.055] p-6 backdrop-blur-sm">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-secondary-fixed-dim/20 blur-3xl"
              />

              <div
                aria-hidden
                className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
              />

              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                      Внутри платформы
                    </div>

                    <h3 className="max-w-lg text-[24px] font-extrabold leading-tight text-white md:text-[28px]">
                      Всё, что нужно для управления обучением сотрудников
                    </h3>
                  </div>

                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container shadow-md">
                    <span className="material-symbols-outlined text-[26px]">
                      dashboard_customize
                    </span>
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {PLATFORM_ITEMS.map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-[1.5rem] border border-white/12 bg-black/10 p-4 transition hover:border-secondary-fixed-dim/45 hover:bg-white/[0.075]"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container">
                        <span className="material-symbols-outlined text-[20px]">
                          {item.icon}
                        </span>
                      </span>

                      <div className="mt-3 text-[14px] font-bold text-white">
                        {item.title}
                      </div>

                      <p className="mt-1 text-[12px] leading-snug text-white/55">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-secondary-fixed-dim/25 bg-secondary-fixed-dim/10 p-4">
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-secondary-fixed-dim">
                    Главный результат
                  </div>

                  <p className="text-[15px] font-semibold leading-snug text-white">
                    Компания видит, кто обучается, кто завершил курс и какие
                    документы уже готовы.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <span className="my-10 block h-px w-full bg-white/10" />

          {/* Navigation */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[0.8fr_0.8fr_1.4fr]">
            <div>
              <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                Продукт
              </div>

              <ul className="flex flex-col gap-3 [list-style:none] [padding-inline-start:0]">
                {PRODUCT_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-2 text-[14px] font-medium text-white/78 transition-colors hover:text-secondary-fixed-dim"
                    >
                      <span className="h-1 w-1 rounded-full bg-white/25 transition group-hover:bg-secondary-fixed-dim" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                Документы
              </div>

              <ul className="flex flex-col gap-3 [list-style:none] [padding-inline-start:0]">
                {LEGAL_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-2 text-[14px] font-medium text-white/78 transition-colors hover:text-secondary-fixed-dim"
                    >
                      <span className="h-1 w-1 rounded-full bg-white/25 transition group-hover:bg-secondary-fixed-dim" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                Популярные направления
              </div>

              <ul className="grid grid-cols-1 gap-x-6 gap-y-3 [list-style:none] [padding-inline-start:0] sm:grid-cols-2">
                {topCourses.map(({ title, slug, href }) => (
                  <li key={slug}>
                    <Link
                      to={href}
                      className="group inline-flex max-w-full items-center gap-2 text-[13px] font-medium text-white/72 transition-colors hover:text-secondary-fixed-dim"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-white/25 transition group-hover:bg-secondary-fixed-dim" />
                      <span className="truncate">{title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <span className="my-8 block h-px w-full bg-white/10" />

          {/* Bottom */}
          <div className="flex flex-col items-start justify-between gap-4 text-[12px] text-white/55 md:flex-row md:items-center">
            <div>
              © 2026 SkillPass.kz. Digital Safety &amp; Labor Protection
              Automation.
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 uppercase tracking-[0.18em]">
              <span>IA № 0337</span>
              <span aria-hidden className="h-3 w-px bg-white/15" />
              <span>KZ49VEK00016534</span>
              <span aria-hidden className="h-3 w-px bg-white/15" />
              <span>ISO 9001/14001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}