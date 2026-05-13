import BlobAccent from './BlobAccent';

const BENEFITS: {
  icon: string;
  title: string;
  text: string;
  badge?: string;
}[] = [
  {
    icon: 'workspace_premium',
    title: 'Международная аккредитация',
    text: 'Услуги сертифицированы международными стандартами. Подтверждается регистрационным номером IA № 0337 и аттестатом № KZ49VEK00016534 на право работ в области промышленной безопасности.',
    badge: 'IA № 0337',
  },
  {
    icon: 'emoji_events',
    title: 'Соответствие ISO',
    text: 'Программы обучения и экспертизы соответствуют СТ РК ИСО 9001-2016, СТ РК ИСО 14001-2016 и СТ РК OHSAS 18001-2008 — это гарантирует качество и надёжность процессов.',
    badge: 'ISO 9001/14001',
  },
  {
    icon: 'tips_and_updates',
    title: 'Снижение рисков',
    text: 'Эффективные решения для снижения рисков на производстве, улучшения операционной устойчивости и обеспечения безопасной работы предприятия каждый день.',
    badge: '−42% инцидентов',
  },
  {
    icon: 'groups',
    title: 'Сильная команда экспертов',
    text: 'Специалисты с многолетним опытом в охране труда, ПБ и кибербезопасности. Каждый эксперт прошёл собственную аттестацию и регулярные стажировки.',
    badge: '15+ лет опыта',
  },
];

/**
 * «Почему выбирают нас?» — editorial-блок с золотым сечением.
 * Слева 38.2%: крупный заголовок + большая числовая метрика + сертификат-карточка.
 * Справа 61.8%: сетка 2×2 преимуществ с пронумерованными карточками.
 */
export default function WhyChooseUsSection() {
  return (
    <section
      id="pochemu-my"
      className="surface-immersive relative w-full overflow-hidden py-section-padding text-white"
    >
      {/* Декоративные элементы */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full bg-secondary-fixed-dim/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[460px] w-[460px] rounded-full bg-primary-fixed/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-container-max relative z-10 mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section header */}
        <div className="mb-14 flex items-center justify-between gap-6 md:mb-16">
          <span className="section-index text-primary-fixed-dim">
            03 / Преимущества
          </span>
          <span
            aria-hidden
            className="hairline hidden flex-1 sm:block opacity-50"
          />
          <span className="eyebrow text-secondary-fixed-dim before:hidden">
            Trust · Proof · People
          </span>
        </div>

        <div
          className="grid-golden-reverse items-start"
          style={{ ['--golden-gap' as string]: '4rem' }}
        >
          {/* LEFT (38.2%): крупный титул + KPI */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-display-xl text-white leading-[1.05] tracking-tight max-md:text-[clamp(2rem,7vw,2.75rem)]">
                <span className="block font-extrabold">Почему</span>
                <span className="text-secondary-fixed-dim font-medium italic">
                  выбирают
                </span>
                <span className="block font-extrabold">
                  именно <BlobAccent variant="alt" onDark>нас?</BlobAccent>
                </span>
              </h2>
              <p className="text-white/70 mt-6 max-w-md text-[16px] leading-[1.7]">
                Четыре опоры, на которых стоит работа SkillPass.kz: законность,
                стандарты, результат и команда, которая всегда рядом.
              </p>
            </div>

            {/* Большой KPI блок */}
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-7 backdrop-blur-md">
              <div className="text-white/55 mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
                Внутренний рейтинг качества
              </div>
              <div className="flex items-end gap-3">
                <span className="display-number text-white text-[88px] leading-none md:text-[104px]">
                  98
                </span>
                <span className="text-secondary-fixed-dim mb-3 text-[28px] font-bold leading-none">
                  .5%
                </span>
              </div>
              <div className="text-white/80 mt-3 max-w-[28ch] text-[14px] leading-snug">
                клиентов рекомендуют SkillPass коллегам после первого года работы.
              </div>
              <div
                aria-hidden
                className="bg-secondary-fixed-dim/40 absolute -bottom-12 -right-12 h-40 w-40 rounded-full blur-3xl"
              />
            </div>

            {/* Сертификат-карточка (премиум, без фоновой фотки) */}
            <a
              href="#sertifikat-obrazec"
              className="group border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] hover:border-secondary-fixed-dim/60 flex items-center gap-4 rounded-3xl border p-5 transition-all"
            >
              <span className="bg-secondary-container text-on-secondary-container inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-md">
                <span className="material-symbols-outlined text-[28px]">
                  workspace_premium
                </span>
              </span>
              <div className="min-w-0 flex-grow leading-snug">
                <div className="text-white/55 text-[10px] font-semibold uppercase tracking-[0.22em]">
                  После обучения
                </div>
                <div className="text-white mt-1 text-[15px] font-bold">
                  Бессрочный сертификат + протокол
                </div>
              </div>
              <span className="material-symbols-outlined text-white/70 group-hover:text-secondary-fixed-dim text-[22px] transition-colors">
                north_east
              </span>
            </a>
          </div>

          {/* RIGHT (61.8%): сетка преимуществ */}
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {BENEFITS.map(({ icon, title, text, badge }, i) => (
              <article
                key={title}
                className="group border-white/15 bg-white/[0.045] hover:border-secondary-fixed-dim/45 hover:bg-white/[0.07] relative overflow-hidden rounded-3xl border p-7 backdrop-blur-md transition-all"
              >
                {/* Hover-glow */}
                <div
                  aria-hidden
                  className="bg-secondary-fixed-dim/15 pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="mb-6 flex items-start justify-between">
                  <span className="bg-secondary-container text-on-secondary-container inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-md">
                    <span className="material-symbols-outlined text-[24px]">
                      {icon}
                    </span>
                  </span>
                  <span className="text-white/45 display-number text-[36px] leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-headline-md text-white mb-3 text-[20px] leading-snug">
                  {title}
                </h3>
                <p className="text-white/70 mb-5 text-[14px] leading-[1.65]">
                  {text}
                </p>

                {badge ? (
                  <span className="bg-white/10 text-white/85 border-white/10 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                    <span className="bg-secondary-fixed-dim inline-block h-1.5 w-1.5 rounded-full" />
                    {badge}
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll-to-top FAB */}
      <button
        type="button"
        className="bg-secondary-container text-on-secondary-container hover:brightness-110 border-on-primary-container/25 fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-[filter,transform] active:scale-95 md:right-8 md:bottom-8"
        aria-label="Наверх страницы"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
      </button>
    </section>
  );
}
