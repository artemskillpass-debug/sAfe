import { Link } from 'react-router-dom';

/**
 * SkillPass Hero — белый фон (bg-surface), реальный мокап справа.
 * Картинку положи в: /public/images/hero-mockup.png
 */

const DIRECTIONS = [
  { icon: '🔥', label: 'Пожарная безопасность' },
  { icon: '🦺', label: 'Охрана труда' },
  { icon: '🧪', label: 'СЭЗ' },
  { icon: '🛡️', label: 'Антитеррор' },
];

const VALUE_PROPS = [
  {
    icon: 'school',
    title: 'Обучение',
    desc: 'Видеокурсы, тесты и сертификаты для сотрудников',
  },
  {
    icon: 'fact_check',
    title: 'Контроль',
    desc: 'Электронные журналы и мониторинг готовности',
  },
  {
    icon: 'storefront',
    title: 'Закупка',
    desc: 'Маркетплейс проверенных поставщиков',
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-surface pt-10 pb-0 md:pt-14 lg:pt-16"
    >
      {/* Dot-grid текстура */}
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-40"
      />

      {/* Soft blobs — не меняют фон, просто добавляют глубину */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-primary-fixed/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-24 h-[320px] w-[320px] rounded-full bg-secondary-fixed/30 blur-3xl"
      />

      <div className="max-w-container-max relative z-10 mx-auto px-margin-mobile md:px-margin-desktop">

        {/* ── GOLDEN GRID ── */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_580px]">

          {/* ── LEFT: copy ── */}
          <div className="flex flex-col pb-10 md:pb-14 lg:pb-16">

            {/* Eyebrow pill */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed/50 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                Платформа безопасности №1 в Казахстане
              </span>
            </div>

            {/* H1 */}
            <h1 className="mb-5 font-[Manrope] text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-on-background">
              Подготовьте бизнес{' '}
              <br className="hidden sm:block" />
              к проверкам —{' '}
              <span className="relative inline-block text-primary">
                за&nbsp;1&nbsp;день
                {/* SVG подчёркивание */}
                <svg
                  aria-hidden
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 220 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 C55 1, 140 1, 218 5"
                    stroke="#3ABEF9"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-7 max-w-[500px] text-[clamp(1rem,1.3vw,1.1rem)] leading-[1.75] text-on-surface-variant">
              Электронные журналы, обучение и документы по{' '}
              <span className="font-semibold text-on-background">
                ПБ, ОТ, СЭЗ и Антитеррору
              </span>{' '}
              — всё в одной системе. Снизьте риск штрафов и
              автоматизируйте контроль.
            </p>

            {/* Direction tags */}
            <div className="mb-8 flex flex-wrap gap-2">
              {DIRECTIONS.map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/70 bg-surface-container-lowest px-3.5 py-1.5 text-[13px] font-medium text-on-surface shadow-sm transition-colors hover:border-primary/40 hover:bg-primary-fixed/40"
                >
                  {icon} {label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/login#demo"
                className="btn-premium btn-premium--accent text-[15px]"
              >
                Получить демо бесплатно
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <button type="button" className="btn-premium btn-premium--ghost text-[15px]">
                <span className="material-symbols-outlined text-[18px]">
                  play_circle
                </span>
                Смотреть как это работает
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {[
                '✓ 210+ компаний',
                '✓ Magnum, Adidas, Газпром',
                '✓ Резидент Astana Hub',
              ].map((item) => (
                <span
                  key={item}
                  className="text-[12px] font-medium text-on-surface-variant/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: мокап телефон + ноутбук ── */}
          <div className="relative mx-auto flex w-full items-end justify-center lg:mx-0 lg:justify-end">
            {/* Тень под картинкой */}
            <div
              aria-hidden
              className="absolute bottom-0 left-1/2 h-12 w-2/3 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl"
            />
            <img
              src="/src/assets/hero/hero-mockup.png"
              alt="SkillPass — мобильное приложение и веб-дашборд"
              width={580}
              height={460}
              className="relative z-10 w-full max-w-[460px] object-contain lg:max-w-full"
              draggable={false}
            />
          </div>
        </div>

        {/* ── НИЖНЯЯ ПОЛОСА: 3 value props ── */}
        <div className="relative z-10 border-t border-outline-variant/40">
          <div className="grid grid-cols-1 divide-y divide-outline-variant/40 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {VALUE_PROPS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 px-6 py-6 transition-colors hover:bg-surface-container-low/60 md:py-7"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    {icon}
                  </span>
                </span>
                <div>
                  <div className="text-[14px] font-bold text-on-background">
                    {title}
                  </div>
                  <div className="mt-0.5 text-[12px] leading-snug text-on-surface-variant">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}