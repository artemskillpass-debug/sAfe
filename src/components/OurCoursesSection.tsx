import { Link } from 'react-router-dom';
import { useId, useState } from 'react';
import { COURSE_CARDS, HEADER_COURSES_NAV } from '../data/courses';
import BlobAccent from './BlobAccent';

const COURSE_TOTAL = COURSE_CARDS.length;

const REVEAL_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
const STAGGER_MS = 52;

const ACCENT_VARIANTS = [
  'from-primary to-secondary-container',
  'from-secondary-container to-primary',
  'from-tertiary to-primary-container',
];

const ICON_BY_SLUG: Record<string, string> = Object.fromEntries(
  HEADER_COURSES_NAV.map((c) => [c.slug, c.icon])
);

const CATALOG_STATS = [
  {
    icon: 'school',
    value: COURSE_TOTAL,
    label: 'направлений',
  },
  {
    icon: 'workspace_premium',
    value: '100%',
    label: 'онлайн',
  },
  {
    icon: 'fact_check',
    value: 'тест',
    label: 'после курса',
  },
];

const CATALOG_POINTS = [
  'Курсы назначаются сотрудникам по роли и направлению',
  'Руководитель видит прогресс прохождения',
  'После обучения доступны подтверждающие документы',
];

export default function OurCoursesSection() {
  const [fadeRevealed, setFadeRevealed] = useState(false);
  const headingId = useId();

  return (
    <section
      id="nashi-kursy"
      className="bg-surface relative w-full overflow-hidden py-section-padding"
      aria-labelledby={headingId}
    >
      {/* Background */}
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 right-1/4 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 h-[420px] w-[620px] rounded-full bg-primary-fixed/25 blur-[150px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="section-index">04 / Каталог</span>
            <span className="hairline hidden w-28 opacity-70 sm:block" />
          </div>

          <span className="eyebrow w-fit rounded-full border border-outline-variant/50 bg-surface-container-lowest/70 px-4 py-2 before:hidden">
            {COURSE_TOTAL} программ · Online
          </span>
        </div>

        {/* Unified catalog shell */}
        <div className="relative overflow-hidden rounded-[2.75rem] border border-outline-variant/50 bg-surface-container-lowest/80 p-4 shadow-sm backdrop-blur md:p-5 lg:p-6">
          <div
            aria-hidden
            className="absolute -right-32 -top-32 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/20 blur-[140px]"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 h-[420px] w-[560px] rounded-full bg-primary-fixed/25 blur-[150px]"
          />

          <div className="relative z-10">
            {/* Top connected hero */}
            <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr] lg:items-stretch">
              {/* Left title card */}
              <div className="relative overflow-hidden rounded-[2.25rem] border border-outline-variant/45 bg-surface/70 p-6 md:p-8 lg:p-10">
                <div
                  aria-hidden
                  className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary-fixed-dim/20 blur-3xl"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-fixed/20 blur-3xl"
                />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/45 px-4 py-2 text-[12px] font-semibold text-primary">
                    <span className="material-symbols-outlined text-[17px]">
                      menu_book
                    </span>
                    Каталог обязательного обучения
                  </div>

                  <h2
                    id={headingId}
                    className="text-on-background max-w-4xl text-[34px] font-extrabold leading-[1.04] tracking-tight md:text-[52px] lg:text-[60px]"
                  >
                    <span className="block">13 направлений</span>

                    <span className="block font-medium italic text-on-surface-variant">
                      обучения под
                    </span>

                    <span className="block">
                      требования <BlobAccent>надзора</BlobAccent>
                    </span>
                  </h2>

                  <p className="text-on-surface-variant mt-6 max-w-2xl text-[16px] leading-[1.75] md:text-[18px]">
                    SkillPass помогает компаниям закрывать обязательное обучение:
                    охрана труда, промышленная безопасность, пожарная безопасность,
                    гражданская оборона, кибербезопасность и другие направления.
                  </p>
                </div>
              </div>

              {/* Right catalog summary */}
              <div className="relative overflow-hidden rounded-[2.25rem] border border-outline-variant/45 bg-gradient-to-br from-primary via-[#004c69] to-[#001e2c] p-1 shadow-[0_30px_60px_-20px_rgba(0,30,44,0.45)]">
                <div className="bg-surface-container-lowest relative h-full overflow-hidden rounded-[2rem] p-6 md:p-7">
                  <div
                    aria-hidden
                    className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary-fixed-dim/25 blur-3xl"
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <div className="text-on-surface-variant mb-2 text-[10px] font-bold uppercase tracking-[0.22em]">
                          Что внутри
                        </div>

                        <h3 className="text-on-background max-w-md text-[24px] font-extrabold leading-tight md:text-[30px]">
                          Курсы, тестирование и документы в одной системе
                        </h3>
                      </div>

                      <span className="bg-primary-fixed text-primary inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                        <span className="material-symbols-outlined text-[26px]">
                          dashboard_customize
                        </span>
                      </span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      {CATALOG_STATS.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-[1.4rem] border border-outline-variant/45 bg-surface-container-low/70 p-4"
                        >
                          <span className="bg-primary-fixed text-primary inline-flex h-10 w-10 items-center justify-center rounded-xl">
                            <span className="material-symbols-outlined text-[20px]">
                              {item.icon}
                            </span>
                          </span>

                          <div className="text-on-background mt-3 text-[24px] font-extrabold leading-none">
                            {item.value}
                          </div>

                          <div className="text-on-surface-variant mt-1 text-[11px] font-semibold uppercase tracking-wider">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-3">
                      {CATALOG_POINTS.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 rounded-2xl border border-outline-variant/35 bg-surface-container-low/60 p-3.5"
                        >
                          <span className="bg-primary text-on-primary mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                            <span className="material-symbols-outlined text-[15px]">
                              check
                            </span>
                          </span>

                          <p className="text-on-surface-variant text-[13px] leading-snug">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-5">
                      <a
                        href="#kursy-katalog"
                        className="btn-premium btn-premium--accent w-full justify-center"
                      >
                        Подобрать курсы
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Catalog bridge — якорь для «Подобрать курсы» */}
            <div
              id="kursy-katalog"
              className="relative my-6 flex scroll-mt-24 items-center justify-center md:scroll-mt-28"
            >
              <span className="absolute left-0 right-0 top-1/2 h-px bg-outline-variant/50" />
              <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-outline-variant/50 bg-surface-container-lowest px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-on-surface-variant shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  apps
                </span>
                Выберите направление обучения
              </div>
            </div>

            {/* Course grid */}
            <div className="relative">
              <div
                className={`relative overflow-hidden transition-[max-height] motion-reduce:transition-none ${
                  fadeRevealed
                    ? 'max-h-[9000px] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:max-h-none'
                    : 'max-h-[min(38rem,68vh)] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:max-h-[min(36rem,66vh)] lg:max-h-[min(32rem,62vh)]'
                }`}
              >
                <div
                  className="grid gap-4 sm:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-5"
                  role="list"
                >
                  {COURSE_CARDS.map(({ title, teaser, slug }, index) => {
                    const icon = ICON_BY_SLUG[slug] ?? 'school';
                    const accent = ACCENT_VARIANTS[index % ACCENT_VARIANTS.length];

                    return (
                      <article
                        key={slug}
                        role="listitem"
                        className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-[1.75rem] border border-outline-variant/45 bg-surface/75 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/35 hover:bg-surface-container-lowest hover:shadow-[0_20px_50px_-28px_rgba(0,30,44,0.35)] md:p-6"
                        style={
                          fadeRevealed && index >= 3
                            ? {
                                animation: `courses-card-reveal 0.58s ${REVEAL_EASE} ${
                                  (index - 3) * STAGGER_MS
                                }ms both`,
                              }
                            : undefined
                        }
                      >
                        {/* Top accent */}
                        <span
                          aria-hidden
                          className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`}
                        />

                        <div
                          aria-hidden
                          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-fixed/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                        />

                        <div className="relative z-10 mb-5 flex items-start justify-between gap-4">
                          <div>
                            <span className="section-index tabular-nums">
                              {String(index + 1).padStart(2, '0')}
                            </span>

                            <div className="text-on-surface-variant mt-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                              Онлайн-курс
                            </div>
                          </div>

                          <span className="bg-primary-fixed text-primary inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors group-hover:bg-primary group-hover:text-on-primary">
                            <span className="material-symbols-outlined text-[22px]">
                              {icon}
                            </span>
                          </span>
                        </div>

                        <h3 className="text-on-background relative z-10 mb-3 line-clamp-2 text-[19px] font-extrabold leading-snug">
                          {title}
                        </h3>

                        <p className="text-on-surface-variant relative z-10 mb-5 line-clamp-3 flex-grow text-[13px] leading-[1.6]">
                          {teaser}
                        </p>

                        <div className="relative z-10 mt-auto">
                          <div className="mb-4 flex flex-wrap items-center gap-2">
                            <span className="border-outline-variant/45 bg-surface-container-low text-on-surface-variant inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold">
                              <span className="material-symbols-outlined text-[15px]">
                                schedule
                              </span>
                              40 ч
                            </span>

                            <span className="border-outline-variant/45 bg-surface-container-low text-on-surface-variant inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold">
                              <span className="material-symbols-outlined text-[15px]">
                                workspace_premium
                              </span>
                              сертификат
                            </span>
                          </div>

                          <Link
                            to={`/courses/${slug}`}
                            aria-label={`Подробнее о курсе: ${title}`}
                            className="group/btn flex w-full items-center justify-between rounded-full bg-on-background px-5 py-3 text-[13px] font-bold text-surface transition hover:bg-primary"
                          >
                            Подробнее
                            <span className="material-symbols-outlined text-[18px] transition-transform group-hover/btn:translate-x-0.5">
                              arrow_forward
                            </span>
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Fade-out — только внутри клиппера, не лезет на CTA */}
                <div
                  className={`from-surface-container-lowest pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(35%,14rem)] bg-gradient-to-t via-surface-container-lowest/85 to-transparent transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                    fadeRevealed ? 'opacity-0' : 'opacity-100'
                  }`}
                  aria-hidden
                />
              </div>
            </div>

            {/* CTA — отдельный блок в потоке, не перекрывает карточки */}
            <div className="mt-8 flex flex-col items-center gap-3">
              {!fadeRevealed ? (
                <>
                  <div className="border-outline-variant/50 bg-surface-container-lowest text-on-background inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold shadow-sm">
                    <span
                      className="bg-secondary-container/90 text-on-secondary-container flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold tabular-nums"
                      aria-hidden
                    >
                      {COURSE_TOTAL}
                    </span>

                    <span>направлений в каталоге</span>
                  </div>

                  <button
                    type="button"
                    aria-expanded={fadeRevealed}
                    onClick={() => setFadeRevealed(true)}
                    className="btn-premium btn-premium--dark px-5 py-2.5 text-[13px]"
                  >
                    Показать все {COURSE_TOTAL} курсов
                    <span className="material-symbols-outlined text-[18px]">
                      expand_more
                    </span>
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  aria-expanded={fadeRevealed}
                  onClick={() => setFadeRevealed(false)}
                  className="btn-premium btn-premium--ghost px-5 py-2.5 text-[13px]"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    expand_less
                  </span>
                  Свернуть каталог
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}