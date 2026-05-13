import BlobAccent from './BlobAccent';

/**
 * Иммерсивный финальный CTA — премиум, журнальный, с большой типографикой и контактными «триггерами».
 */
export default function FinalCTASection() {
  return (
    <section id="cta-final" className="bg-surface relative w-full overflow-hidden py-section-padding">
      <div className="max-w-container-max relative z-10 mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Premium dark immersive surface */}
        <div className="surface-immersive relative overflow-hidden rounded-[2.5rem] px-8 py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">
          {/* декорации */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-secondary-fixed-dim/25 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary-fixed/30 blur-[120px]"
          />

          {/* Header strip */}
          <div className="mb-12 flex items-center justify-between gap-6">
            <span className="section-index text-secondary-fixed-dim">05 / Начать</span>
            <span className="hairline hidden flex-1 opacity-40 sm:block" />
            <span className="eyebrow text-secondary-fixed-dim before:hidden">
              Готовы внедрить за 3 дня
            </span>
          </div>

          <div
            className="grid-golden-reverse items-end relative z-10"
            style={{ ['--golden-gap' as string]: '4rem' }}
          >
            {/* LEFT 38.2%: контакты + быстрые триггеры */}
            <div className="flex flex-col gap-6">
              <div className="border-white/15 bg-white/[0.06] flex flex-col gap-5 rounded-3xl border p-7 backdrop-blur-sm">
                <div className="text-white/55 text-[11px] font-semibold uppercase tracking-[0.22em]">
                  Прямая связь
                </div>
                <div>
                  <div className="text-secondary-fixed-dim text-[13px] font-semibold uppercase tracking-wider">
                    Звонок
                  </div>
                  <a
                    href="tel:+770000000000"
                    className="text-white mt-1 inline-flex items-center gap-2 text-[26px] font-extrabold leading-none tabular-nums hover:text-secondary-fixed-dim transition-colors"
                  >
                    +7&nbsp;700&nbsp;000&nbsp;00&nbsp;00
                    <span className="material-symbols-outlined text-[22px]">
                      call
                    </span>
                  </a>
                </div>

                <div className="bg-white/15 h-px w-full" />

                <div>
                  <div className="text-secondary-fixed-dim text-[13px] font-semibold uppercase tracking-wider">
                    Email
                  </div>
                  <a
                    href="mailto:hello@skillpass.kz"
                    className="text-white mt-1 inline-flex items-center gap-2 text-[18px] font-semibold hover:text-secondary-fixed-dim transition-colors"
                  >
                    hello@skillpass.kz
                    <span className="material-symbols-outlined text-[18px]">
                      mail
                    </span>
                  </a>
                </div>

                <div className="bg-white/15 h-px w-full" />

                <div className="flex flex-wrap items-center gap-3">
                  {[
                    { l: 'Telegram', i: 'send' },
                    { l: 'WhatsApp', i: 'chat' },
                    { l: 'Zoom-демо', i: 'videocam' },
                  ].map(({ l, i }) => (
                    <span
                      key={l}
                      className="bg-white/10 text-white/90 border-white/10 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        {i}
                      </span>
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              {/* «Гарантии» полоска */}
              <ul className="grid grid-cols-2 gap-3 [list-style:none] [padding-inline-start:0]">
                {[
                  { i: 'schedule', l: '15 минут', s: 'на звонок' },
                  { i: 'sentiment_satisfied', l: 'без спама', s: 'звоним по делу' },
                ].map(({ i, l, s }) => (
                  <li
                    key={l}
                    className="border-white/15 bg-white/[0.04] flex items-center gap-3 rounded-2xl border p-3.5 backdrop-blur-sm"
                  >
                    <span className="bg-secondary-container text-on-secondary-container inline-flex h-9 w-9 items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[18px]">{i}</span>
                    </span>
                    <div className="leading-tight">
                      <div className="text-white text-[13px] font-bold">{l}</div>
                      <div className="text-white/60 text-[11px]">{s}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT 61.8%: editorial copy + кнопки */}
            <div className="flex flex-col">
              <h2 className="font-display-xl text-white leading-[1.05] tracking-tight max-md:text-[clamp(2.25rem,8vw,3rem)]">
                <span className="block font-extrabold">Готовы запустить</span>
                <BlobAccent onDark>охрану&nbsp;труда</BlobAccent>{' '}
                <span className="text-white/65 font-medium italic">
                  без&nbsp;ручной&nbsp;работы?
                </span>
              </h2>
              <p className="text-white/70 mt-6 max-w-xl text-[16px] leading-[1.7]">
                Покажем платформу под вашу компанию за&nbsp;один созвон.
                Внедряем за&nbsp;3&nbsp;дня, без миграционной боли и&nbsp;потери данных.
                Бесплатно — никаких обязательств.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" className="btn-premium btn-premium--accent text-[15px]">
                  Получить демо
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </button>
                <button type="button" className="btn-premium border-white/30 text-white bg-white/10 hover:bg-white/15">
                  <span className="material-symbols-outlined text-[20px]">
                    download
                  </span>
                  Скачать презентацию
                </button>
              </div>

              {/* trust line */}
              <div className="border-white/15 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-6 text-[12px] uppercase tracking-[0.18em] text-white/55">
                <span className="inline-flex items-center gap-2">
                  <span className="bg-secondary-fixed-dim inline-block h-1.5 w-1.5 rounded-full" />
                  Безопасные данные · ZSK
                </span>
                <span aria-hidden className="bg-white/15 h-3 w-px" />
                <span>ISO 27001 ready</span>
                <span aria-hidden className="bg-white/15 h-3 w-px" />
                <span>NDA по запросу</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
