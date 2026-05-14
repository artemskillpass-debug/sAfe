import { Link } from 'react-router-dom';
import BlobAccent from './BlobAccent';

/**
 * Premium Hero — editorial-композиция вместо «фотоковра».
 * Layout: золотое сечение 61.8% / 38.2% (контент / визуальный модуль).
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-surface pt-10 pb-24 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32"
    >
      {/* Декорация фон: dot-grid + soft blobs */}
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full bg-secondary-fixed-dim/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-32 h-[420px] w-[420px] rounded-full bg-primary-fixed/40 blur-3xl"
      />

      <div className="max-w-container-max relative z-10 mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Top meta-bar: индекс секции + ticker */}
        <div className="mb-10 flex items-center justify-between gap-6">
          <span className="section-index">01 / Платформа</span>

          <div className="hidden flex-1 items-center gap-4 md:flex">
            <span className="hairline flex-1" />
            <span className="eyebrow before:hidden">
              Safety Management · KZ
            </span>
            <span className="hairline flex-1" />
          </div>

          <span className="bg-secondary-container/70 text-on-secondary-container inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
            <span className="bg-primary inline-block h-1.5 w-1.5 rounded-full" />
            SaaS-платформа
          </span>
        </div>

        <div
          className="grid-golden items-center"
          style={{ ['--golden-gap' as string]: '4rem' }}
        >
          {/* Left: editorial copy */}
          <div className="relative flex max-w-2xl flex-col">
            <span className="eyebrow text-primary mb-6">
              Обучение · журналы · документы · контроль проверок
            </span>

            <h1 className="font-display-xl text-on-background mb-7 leading-[1.05] tracking-tight max-md:text-[clamp(2.25rem,9vw,3.25rem)] md:text-[clamp(3rem,5.5vw,4.5rem)]">
              <span className="block font-extrabold">Единая</span>
              <BlobAccent>платформа</BlobAccent>{' '}
              <span className="text-on-surface-variant font-medium italic">
                для управления
              </span>
              <span className="block font-extrabold">
                <BlobAccent variant="alt">безопасностью бизнеса</BlobAccent>
              </span>
            </h1>

            <p className="font-body-lg text-on-surface-variant mb-9 max-w-xl text-[17px] leading-[1.7]">
              SkillPass объединяет обязательное онлайн-обучение, тестирование,
              электронные журналы, документы, контроль сроков и подготовку к
              проверкам. Вся безопасность компании — в одной понятной системе
              без бумажной рутины и хаоса.
            </p>

            {/* Product module chips */}
            <ul className="mb-10 grid grid-cols-2 gap-3 [list-style:none] [padding-inline-start:0] sm:grid-cols-4">
              {[
                { v: 'Обучение', l: 'тесты и сертификаты' },
                { v: 'Эл. журналы', l: 'контроль прохождения' },
                { v: 'Документы', l: 'шаблоны и хранение' },
                { v: 'Проверки', l: 'готовность и сроки' },
              ].map(({ v, l }) => (
                <li
                  key={v}
                  className="border-outline-variant/55 bg-surface-container-lowest/80 rounded-2xl border px-3 py-2.5 backdrop-blur-sm"
                >
                  <div className="font-display-lg text-on-background text-[18px] font-bold leading-tight">
                    {v}
                  </div>
                  <div className="text-on-surface-variant mt-1 text-[10px] uppercase leading-snug tracking-wider">
                    {l}
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/login#demo"
                className="btn-premium btn-premium--accent"
              >
                Запросить демо
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>

              <button type="button" className="btn-premium btn-premium--ghost">
                <span className="material-symbols-outlined text-[20px]">
                  play_circle
                </span>
                Смотреть возможности
              </button>
            </div>
          </div>

          {/* Right: layered composition card */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            {/* Декоративный «squircle» бэкграунд */}
            <div
              aria-hidden
              className="bg-gradient-to-br from-primary via-[#004c69] to-[#001e2c] absolute -inset-4 -rotate-3 rounded-[2.5rem] shadow-[0_30px_80px_-25px_rgba(0,30,44,0.45)]"
            />
            <div
              aria-hidden
              className="bg-secondary-fixed-dim/30 absolute -inset-2 rotate-2 rounded-[2.25rem]"
            />

            {/* Главная карточка-дашборд */}
            <div className="relative rounded-[2rem] bg-surface-container-lowest p-5 shadow-[0_30px_80px_-30px_rgba(0,30,44,0.55)] ring-1 ring-outline-variant/40">
              {/* Header дашборда */}
              <div className="border-outline-variant/40 flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-2">
                  <span className="bg-primary inline-flex h-8 w-8 items-center justify-center rounded-lg text-on-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      dashboard
                    </span>
                  </span>

                  <div className="leading-tight">
                    <div className="text-[12px] font-semibold text-on-background">
                      SkillPass · Admin
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-on-surface-variant">
                      Live
                    </div>
                  </div>
                </div>

                <div className="flex gap-1.5">
                  <span
                    aria-hidden
                    className="bg-error h-2.5 w-2.5 rounded-full opacity-70"
                  />
                  <span
                    aria-hidden
                    className="bg-secondary-container h-2.5 w-2.5 rounded-full opacity-70"
                  />
                  <span
                    aria-hidden
                    className="bg-primary h-2.5 w-2.5 rounded-full opacity-80"
                  />
                </div>
              </div>

              {/* Главный KPI */}
              <div className="mt-5">
                <div className="text-on-surface-variant text-[11px] uppercase tracking-wider">
                  Индекс готовности
                </div>

                <div className="mt-2 flex items-end gap-2">
                  <span className="display-number text-on-background text-[56px]">
                    98.5
                  </span>
                  <span className="text-primary mb-2 text-[18px] font-bold">
                    %
                  </span>
                  <span className="bg-secondary-container/40 text-on-secondary-container ml-auto mb-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold">
                    <span className="material-symbols-outlined text-[12px]">
                      trending_up
                    </span>
                    +4.2
                  </span>
                </div>

                {/* «график» из баров */}
                <div className="mt-4 flex h-16 items-end gap-1.5">
                  {[36, 48, 42, 60, 55, 72, 68, 82, 76, 92, 88, 96].map(
                    (v, i) => (
                      <span
                        key={i}
                        aria-hidden
                        className={`flex-1 rounded-sm ${
                          i >= 8 ? 'bg-primary' : 'bg-primary/25'
                        }`}
                        style={{ height: `${v}%` }}
                      />
                    ),
                  )}
                </div>
              </div>

              {/* Мини-метрики */}
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <div className="border-outline-variant/40 rounded-xl border bg-surface-container-low/60 p-3">
                  <div className="text-on-surface-variant text-[10px] uppercase tracking-wider">
                    Готовность
                  </div>
                  <div className="text-on-background mt-1 flex items-center gap-1.5 text-[15px] font-bold tabular-nums">
                    <span className="bg-green-500/15 text-green-700 inline-flex h-6 w-6 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </span>
                    100%
                  </div>
                </div>

                <div className="border-outline-variant/40 rounded-xl border bg-surface-container-low/60 p-3">
                  <div className="text-on-surface-variant text-[10px] uppercase tracking-wider">
                    Просрочено
                  </div>
                  <div className="text-on-background mt-1 flex items-center gap-1.5 text-[15px] font-bold tabular-nums">
                    <span className="bg-error/15 text-error inline-flex h-6 w-6 items-center justify-center rounded-full">
                      <span className="material-symbols-outlined text-[16px]">
                        priority_high
                      </span>
                    </span>
                    0
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div className="border-outline-variant/40 bg-surface-container-lowest absolute -bottom-8 -left-6 flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-[0_18px_40px_-12px_rgba(0,30,44,0.35)] animate-bounce-slow md:-left-10">
              <span className="bg-green-100 text-green-700 inline-flex h-10 w-10 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-[22px]">
                  workspace_premium
                </span>
              </span>

              <div className="leading-tight">
                <div className="text-on-surface-variant text-[10px] uppercase tracking-wider">
                  Сертификат
                </div>
                <div className="text-on-background text-[13px] font-bold">
                  Выдан · 12.05.2026
                </div>
              </div>
            </div>

            {/* Floating tag chip */}
            <div className="bg-primary text-on-primary absolute -top-5 -right-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-[0_12px_24px_-8px_rgba(0,102,138,0.5)] md:-right-6">
              <span className="bg-on-primary inline-block h-1.5 w-1.5 rounded-full" />
              Live demo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}