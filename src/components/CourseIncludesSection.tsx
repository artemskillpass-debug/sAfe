import { useId, useState } from 'react';
import type { CourseDetail } from '../data/courses';
import { buildCourseIncludesBodies } from '../lib/buildCourseIncludesBodies';

const CYAN_ACCENT = '#39C7F3';

/** Заголовки аккордеона — как в референсе. */
export const COURSE_INCLUDES_ACCORDION_TITLES = [
  'Порядок и сроки проведения курсов обучения и проверки знаний по курсу',
  'Что Вы получите работая с нами абсолютно бесплатно',
  'Кому необходимо обучение правилам безопасности и охраны труда?',
] as const;

/**
 * Полоса-маркера под строкой названия курса: ширина ≈ текст, «размашистый»
 * мазок, неровная кромка через displacement (как на референсе).
 */
function CourseTitleWithMarker({ nameWithColon }: { nameWithColon: string }) {
  const filterId = `inc-hl-${useId().replace(/:/g, '')}`;

  return (
    <span className="relative mx-auto inline-block max-w-[min(100%,30rem)] px-0 pb-[0.45em] text-center leading-tight">
      <span className="relative z-[1] block whitespace-normal break-words font-headline-lg text-[clamp(1.125rem,2.65vw,1.75rem)] font-bold tracking-[-0.02em] text-black">
        {nameWithColon}
      </span>
      <svg
        className="pointer-events-none absolute bottom-[0.02em] left-1/2 -z-0 block h-[max(13px,0.62em)] w-[calc(100%+0.5rem)] -translate-x-1/2 md:h-[max(14px,0.58em)]"
        viewBox="0 0 400 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <filter id={filterId} x="-5%" y="-35%" width="110%" height="170%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" seed="58" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <path
          filter={`url(#${filterId})`}
          fill={CYAN_ACCENT}
          opacity="0.94"
          d="M12 71 L12 55 Q96 47 192 57 T388 52 L388 71 L12 71 Z"
        />
      </svg>
    </span>
  );
}

type Props = {
  course: CourseDetail;
  courseShortLabel: string;
};

export default function CourseIncludesSection({ course, courseShortLabel }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const bodies = buildCourseIncludesBodies(course);

  const panelId = (i: number) => `course-includes-panel-${course.slug}-${i}`;

  const toggle = (i: number) => {
    setOpenIdx((cur) => (cur === i ? null : i));
  };

  return (
    <section
      className="course-includes-section w-full bg-[#eaf2f9] py-16 md:py-section-padding"
      aria-labelledby={`course-includes-heading-${course.slug}`}
    >
      <div className="mx-auto max-w-[640px] px-gutter">
        <h2 id={`course-includes-heading-${course.slug}`} className="mx-auto mb-10 flex flex-col items-center text-center leading-tight">
          <span className="mb-3 block font-headline-lg text-[clamp(1.125rem,2.55vw,1.75rem)] font-bold tracking-[-0.02em] text-black">
            Что включают в себя курсы
          </span>
          <CourseTitleWithMarker nameWithColon={`${courseShortLabel}:`} />
        </h2>

        <ul className="course-includes-list flex flex-col gap-4 [list-style:none] [padding-inline-start:0]">
          {COURSE_INCLUDES_ACCORDION_TITLES.map((title, i) => {
            const expanded = openIdx === i;
            const body = bodies[i] ?? [];

            return (
              <li key={title}>
                <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_14px_44px_-30px_rgba(15,30,48,0.32)] ring-1 ring-black/[0.04]">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId(i)}
                    id={`course-includes-trigger-${course.slug}-${i}`}
                    className="flex min-h-[3.75rem] w-full cursor-pointer items-start justify-between gap-4 px-8 py-[1.15rem] text-left outline-none md:gap-8 md:px-10 md:py-6"
                    onClick={() => toggle(i)}
                  >
                    <span className="max-w-[calc(100%-2.65rem)] font-headline-md text-[clamp(0.9375rem,2vw,1rem)] font-bold leading-snug tracking-[-0.012em] text-black">
                      {title}
                    </span>
                    <span
                      className="flex h-9 w-9 shrink-0 select-none items-center justify-center pb-0.5 font-light tracking-tight text-[27px] leading-none text-[#39C7F3] md:text-[29px]"
                      aria-hidden
                    >
                      {expanded ? '\u00D7' : '+'}
                    </span>
                  </button>

                  {expanded ? (
                    <div
                      id={panelId(i)}
                      role="region"
                      aria-labelledby={`course-includes-trigger-${course.slug}-${i}`}
                      className="px-8 pb-6 md:px-10 md:pb-8"
                    >
                      <div className="border-t border-black/[0.065] px-1 pt-4 md:pt-5">
                        <div className="font-body-md space-y-3 text-[0.9375rem] font-normal leading-[1.6] tracking-[-0.01em] text-[#414751]">
                          {body.map((p, j) => (
                            <p key={`${course.slug}-inc-${i}-${j}`}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
