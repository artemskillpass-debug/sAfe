import { Link } from 'react-router-dom';
import { useId, useState } from 'react';
import { COURSE_CARDS, HEADER_COURSES_NAV } from '../data/courses';
import BlobAccent from './BlobAccent';

const COURSE_TOTAL = COURSE_CARDS.length;

const REVEAL_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
const STAGGER_MS = 52;

/** Цветовой акцент для верхней «полоски» карточки (циклически). */
const ACCENT_VARIANTS = [
  'from-primary to-secondary-container',
  'from-secondary-container to-primary',
  'from-tertiary to-primary-container',
];

/** Получить icon по slug курса (для маленького знака на карточке). */
const ICON_BY_SLUG: Record<string, string> = Object.fromEntries(
  HEADER_COURSES_NAV.map((c) => [c.slug, c.icon])
);

/**
 * «Наши курсы» — премиум-каталог в editorial-стиле.
 * Структура: eyebrow + большой заголовок + интро-описание справа (golden ratio),
 * сетка 3 колонок, верхняя цветная «полоска» у каждой карточки, фейс-кнопка «Подробнее».
 */
export default function OurCoursesSection() {
  const [fadeRevealed, setFadeRevealed] = useState(false);
  const headingId = useId();

  return (
    <section
      id="nashi-kursy"
      className="bg-surface relative w-full overflow-hidden py-section-padding"
      aria-labelledby={headingId}
    >
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-30"
      />
      <div className="max-w-container-max relative z-10 mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header секции в asymmetric grid */}
        <div className="mb-14 flex items-center justify-between gap-6 md:mb-16">
          <span className="section-index">02 / Каталог</span>
          <span className="hairline hidden flex-1 sm:block" />
          <span className="eyebrow before:hidden">
            {COURSE_TOTAL} программ · 2026
          </span>
        </div>

        <div className="grid-golden mb-14 items-end" style={{ ['--golden-gap' as string]: '3rem' }}>
          <h2
            id={headingId}
            className="font-display-xl text-on-background leading-[1.05] tracking-tight max-md:text-[clamp(2rem,7vw,2.75rem)]"
          >
            <span className="block font-extrabold">Программы</span>
            <BlobAccent>обучения</BlobAccent>{' '}
            <span className="text-on-surface-variant font-medium italic">
              под&nbsp;требования
            </span>
            <span className="block font-extrabold">
              <BlobAccent variant="alt">регуляторов</BlobAccent>
            </span>
          </h2>
          <div className="flex flex-col gap-5">
            <p className="font-body-md text-on-surface-variant text-[16px] leading-[1.65]">
              Курсы покрывают весь периметр охраны труда, промышленной и информационной
              безопасности. Каждая программа соответствует нормативам РК и проверяется
              на актуальность ежегодно.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-secondary-container/50 text-on-secondary-container inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold">
                <span className="material-symbols-outlined text-[15px]">
                  verified
                </span>
                Аккредитация МТСЗН РК
              </span>
              <span className="border-outline-variant/60 bg-surface-container-lowest text-on-surface-variant inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold">
                <span className="material-symbols-outlined text-[15px]">
                  refresh
                </span>
                Контент 2026
              </span>
            </div>
          </div>
        </div>

        {/* Сетка курсов */}
        <div className="relative">
          <div
            className={`overflow-hidden transition-[max-height] motion-reduce:transition-none ${
              fadeRevealed
                ? 'max-h-[8000px] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:max-h-none'
                : 'max-h-[min(34rem,72vh)] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:max-h-[min(32rem,70vh)] lg:max-h-[min(30rem,68vh)]'
            }`}
          >
            <div
              className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
              role="list"
            >
              {COURSE_CARDS.map(({ title, teaser, slug }, index) => {
                const icon = ICON_BY_SLUG[slug] ?? 'school';
                const accent = ACCENT_VARIANTS[index % ACCENT_VARIANTS.length];
                return (
                  <article
                    key={slug}
                    role="listitem"
                    className="card-premium group flex flex-col overflow-hidden p-7"
                    style={
                      fadeRevealed && index >= 3
                        ? {
                            animation: `courses-card-reveal 0.58s ${REVEAL_EASE} ${(index - 3) * STAGGER_MS}ms both`,
                          }
                        : undefined
                    }
                  >
                    {/* Top accent bar */}
                    <span
                      aria-hidden
                      className={`bg-gradient-to-r ${accent} absolute left-0 right-0 top-0 h-1`}
                    />

                    {/* Header строки: номер + иконка-метка */}
                    <div className="mb-6 flex items-center justify-between">
                      <span className="section-index tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="bg-primary-fixed text-primary inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors group-hover:bg-primary group-hover:text-on-primary">
                        <span className="material-symbols-outlined text-[20px]">
                          {icon}
                        </span>
                      </span>
                    </div>

                    <h3 className="font-headline-md text-on-background mb-3 line-clamp-2 text-[20px] leading-snug">
                      {title}
                    </h3>
                    <p className="font-body-md text-on-surface-variant mb-7 line-clamp-3 flex-grow text-[14px] leading-[1.6]">
                      {teaser}
                    </p>

                    {/* Footer: meta + кнопка */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[12px] text-on-surface-variant">
                        <span className="material-symbols-outlined text-[16px]">
                          schedule
                        </span>
                        <span className="font-semibold">40 ч</span>
                        <span aria-hidden className="bg-outline/50 h-3 w-px" />
                        <span className="material-symbols-outlined text-[16px]">
                          verified
                        </span>
                        <span className="font-semibold">сертификат</span>
                      </div>
                      <Link
                        to={`/courses/${slug}`}
                        aria-label={`Подробнее о курсе: ${title}`}
                        className="bg-on-background text-surface group/btn inline-flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-primary"
                      >
                        <span className="material-symbols-outlined text-[18px] transition-transform group-hover/btn:translate-x-0.5">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Fade-out для свёрнутого состояния */}
          <div
            className={`from-surface pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(42%,16rem)] bg-gradient-to-t via-surface/92 to-transparent transition-opacity duration-500 ease-out motion-reduce:transition-none ${
              fadeRevealed ? 'opacity-0' : 'opacity-100'
            }`}
            aria-hidden
          />
          <div
            className={`absolute inset-x-0 bottom-0 z-[2] flex flex-col items-center justify-end gap-3 pb-6 pt-16 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
              fadeRevealed ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            <div className="border-outline-variant/50 bg-surface-container-lowest/95 text-on-background pointer-events-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-md backdrop-blur-sm text-[13px] font-semibold">
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
              className="btn-premium btn-premium--dark pointer-events-auto px-5 py-2.5 text-[13px]"
            >
              Показать все {COURSE_TOTAL} курсов
              <span className="material-symbols-outlined text-[18px]">
                expand_more
              </span>
            </button>
          </div>
        </div>

        {fadeRevealed ? (
          <div className="mt-10 flex justify-center">
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
          </div>
        ) : null}
      </div>
    </section>
  );
}
