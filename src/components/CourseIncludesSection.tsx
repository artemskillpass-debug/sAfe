import { useMemo, useState } from 'react';
import BlobAccent from './BlobAccent';

type CourseInclude = {
  title: string;
  body?: string;
  text?: string;
  items?: string[];
};

type CourseIncludesSectionProps = {
  course: {
    title: string;
    includes?: CourseInclude[];
    includesTitle?: string;
  };
  courseShortLabel: string;
};

type IncludeItem = {
  title: string;
  items: string[];
  icon: string;
};

const DEFAULT_ITEMS: IncludeItem[] = [
  {
    title: 'Порядок и сроки проведения обучения',
    icon: 'schedule',
    items: [
      'По развитию общих профессиональных компетенций повторное обучение не требуется',
      'Малое и микропредпринимательство — не менее 24 академических часов',
      'Среднее предпринимательство — не менее 40 академических часов',
      'Крупное предпринимательство — не менее 72 академических часов',
      'По развитию специальных профессиональных компетенций обучение проводится 1 раз в 3 года',
      'Малое и микропредпринимательство — не менее 16 академических часов',
      'Среднее предпринимательство — не менее 24 академических часов',
      'Крупное предпринимательство — не менее 40 академических часов',
    ],
  },
  {
    title: 'Что вы получите после прохождения',
    icon: 'workspace_premium',
    items: [
      'Доступ к учебным материалам на онлайн-платформе',
      'Проверку знаний после прохождения курса',
      'Подтверждающий документ после успешного завершения',
      'Историю обучения в личном кабинете компании',
    ],
  },
  {
    title: 'Кому необходимо пройти обучение',
    icon: 'groups',
    items: [
      'Руководителям организаций и ответственным сотрудникам',
      'Специалистам по охране труда и безопасности',
      'Сотрудникам, которым требуется обязательное обучение по направлению',
      'Компаниям, которые готовятся к проверкам и внутренним аудитам',
    ],
  },
];

function normalizeTextToItems(text?: string) {
  if (!text) return [];

  return text
    .split(/\n|•|;/)
    .map((item) => item.replace(/^[-–—]\s*/, '').trim())
    .filter(Boolean);
}

function getIconByIndex(index: number) {
  const icons = [
    'schedule',
    'workspace_premium',
    'groups',
    'fact_check',
    'description',
    'verified_user',
  ];

  return icons[index] ?? 'fact_check';
}

export default function CourseIncludesSection({
  course,
  courseShortLabel,
}: CourseIncludesSectionProps) {
  const items = useMemo<IncludeItem[]>(() => {
    if (!course.includes?.length) return DEFAULT_ITEMS;

    return course.includes.map((item, index) => ({
      title: item.title,
      icon: getIconByIndex(index),
      items: item.items?.length
        ? item.items
        : normalizeTextToItems(item.body || item.text),
    }));
  }, [course.includes]);

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low py-section-padding">
      {/* Background */}
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-25"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/4 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/20 blur-[140px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 h-[420px] w-[620px] rounded-full bg-primary-fixed/25 blur-[150px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
        {/* Header */}
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/45 px-4 py-2 text-[12px] font-semibold text-primary">
            <span className="material-symbols-outlined text-[17px]">
              checklist
            </span>
            Состав курса
          </div>

          <h2 className="mx-auto max-w-5xl text-[34px] font-extrabold leading-[1.04] tracking-tight text-on-background md:text-[54px] lg:text-[64px]">
            Что включают в себя курсы{' '}
            <BlobAccent>{courseShortLabel}:</BlobAccent>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-[1.7] text-on-surface-variant md:text-[18px]">
            Внутри курса собраны материалы, проверка знаний и подтверждающие
            документы, чтобы компания могла закрыть обучение без ручной рутины.
          </p>
        </div>

        {/* Accordion shell */}
        <div className="relative overflow-hidden rounded-[2.75rem] border border-outline-variant/45 bg-surface-container-lowest/75 p-4 shadow-sm backdrop-blur md:p-5 lg:p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/18 blur-[140px]"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[560px] rounded-full bg-primary-fixed/20 blur-[150px]"
          />

          <div className="relative z-10 grid gap-5">
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.title}
                  className={`overflow-hidden rounded-[2rem] border transition-all duration-300 ${
                    isOpen
                      ? 'border-primary/25 bg-surface shadow-[0_24px_70px_-38px_rgba(0,30,44,0.35)]'
                      : 'border-outline-variant/35 bg-surface/75 hover:border-primary/25 hover:bg-surface-container-lowest'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 p-5 text-left md:p-7"
                    aria-expanded={isOpen}
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span
                        className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                          isOpen
                            ? 'bg-primary text-on-primary'
                            : 'bg-primary-fixed text-primary'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[26px]">
                          {item.icon}
                        </span>
                      </span>

                      <div className="min-w-0">
                        <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                          Раздел {String(index + 1).padStart(2, '0')}
                        </div>

                        <h3 className="text-[20px] font-extrabold leading-snug text-on-background md:text-[28px]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen
                          ? 'rotate-45 border-primary/20 bg-primary text-on-primary'
                          : 'border-outline-variant/45 bg-surface-container-low text-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[28px]">
                        add
                      </span>
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-outline-variant/35 px-5 pb-6 pt-5 md:px-7 md:pb-7">
                        <div className="grid gap-3 md:grid-cols-2">
                          {item.items.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3 rounded-2xl border border-outline-variant/35 bg-surface-container-low/70 p-4"
                            >
                              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                                <span className="material-symbols-outlined text-[17px]">
                                  check
                                </span>
                              </span>

                              <p className="text-[14px] font-medium leading-relaxed text-on-surface-variant md:text-[15px]">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom note */}
          <div className="relative z-10 mt-5 grid gap-4 rounded-[2rem] border border-primary/20 bg-primary-fixed/35 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                Главное
              </div>

              <h3 className="max-w-3xl text-[20px] font-extrabold leading-tight text-on-background md:text-[26px]">
                Курс помогает пройти обучение онлайн, подтвердить знания и
                получить документы в одном личном кабинете
              </h3>
            </div>

            <a href="#cta-final" className="btn-premium btn-premium--accent w-fit">
              Записаться
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}