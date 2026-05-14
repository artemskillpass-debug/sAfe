import { Fragment } from 'react';
import BlobAccent from './BlobAccent';

type Step = {
  num: string;
  title: string;
  desc: string;
  icon: string;
};

const SCENARIO_1_STEPS: Step[] = [
  {
    num: '01',
    title: 'Компания',
    desc: 'Указываете БИН, сферу деятельности и основные данные организации.',
    icon: 'domain',
  },
  {
    num: '02',
    title: 'Требования',
    desc: 'Платформа показывает, какие направления нужно закрыть по обучению и безопасности.',
    icon: 'rule',
  },
  {
    num: '03',
    title: 'План действий',
    desc: 'Система формирует понятный список: что пройти, какие документы подготовить и что проверить.',
    icon: 'checklist',
  },
];

const BENEFITS = [
  {
    icon: 'schedule',
    title: 'Экономия времени',
    desc: 'Меньше ручной работы у HR, руководителей и ответственных специалистов.',
  },
  {
    icon: 'verified_user',
    title: 'Снижение рисков',
    desc: 'Компания заранее видит пробелы в обучении и документах.',
  },
  {
    icon: 'insights',
    title: 'Прозрачный контроль',
    desc: 'Статусы сотрудников, курсы и документы собраны в одном кабинете.',
  },
  {
    icon: 'task_alt',
    title: 'Готовность к проверкам',
    desc: 'Нужные подтверждения доступны без поиска по чатам и таблицам.',
  },
];

function StepArrow() {
  return (
    <span
      aria-hidden
      className="hidden shrink-0 items-center justify-center text-primary/55 md:flex"
    >
      <span className="material-symbols-outlined text-[28px]">
        arrow_forward
      </span>
    </span>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="group relative flex w-full flex-col overflow-hidden rounded-[1.75rem] border border-outline-variant/45 bg-surface-container-lowest/85 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_45px_-25px_rgba(0,30,44,0.35)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-primary-fixed/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-on-primary shadow-[0_8px_18px_-8px_rgba(0,102,138,0.55)]">
          {step.num}
        </span>

        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-fixed text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
          <span className="material-symbols-outlined text-[24px]">
            {step.icon}
          </span>
        </span>
      </div>

      <h4 className="relative z-10 text-[17px] font-extrabold leading-snug text-on-background">
        {step.title}
      </h4>

      <p className="relative z-10 mt-2 text-[13px] leading-[1.55] text-on-surface-variant">
        {step.desc}
      </p>
    </div>
  );
}

function ScenarioFlow({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-4 md:grid-flow-col md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-3">
      {steps.map((step, i) => (
        <Fragment key={step.num}>
          <StepCard step={step} />
          {i < steps.length - 1 ? <StepArrow /> : null}
        </Fragment>
      ))}
    </div>
  );
}

function ScenarioCard({
  badge,
  title,
  highlight,
  description,
  result,
  steps,
}: {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  result: string;
  steps: Step[];
}) {
  return (
    <article className="relative overflow-hidden rounded-[2.5rem] border border-outline-variant/50 bg-surface-container-lowest/85 p-5 shadow-sm backdrop-blur md:p-6 lg:p-8">
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/18 blur-[140px]"
      />

      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-[420px] w-[560px] rounded-full bg-primary-fixed/22 blur-[150px]"
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[2rem] border border-outline-variant/40 bg-surface/70 p-6 md:p-7">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary-fixed/20 blur-3xl"
          />

          <div className="relative z-10 flex h-full flex-col">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/55 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              {badge}
            </span>

            <h3 className="text-[28px] font-extrabold leading-[1.08] tracking-tight text-on-background md:text-[36px]">
              <span className="block">{title}</span>
              <span className="block">
                <BlobAccent>{highlight}</BlobAccent>
              </span>
            </h3>

            <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-on-surface-variant">
              {description}
            </p>

            <div className="mt-auto pt-7">
              <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary-fixed/35 p-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container">
                  <span className="material-symbols-outlined text-[21px]">
                    bolt
                  </span>
                </span>

                <div>
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    Результат
                  </div>

                  <p className="text-[13px] font-bold leading-snug text-on-background">
                    {result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <ScenarioFlow steps={steps} />
        </div>
      </div>
    </article>
  );
}

export default function PlatformSolutionSection() {
  return (
    <section
      id="reshenie"
      className="relative w-full overflow-hidden bg-surface py-section-padding"
    >
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-30"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/3 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/15 blur-[140px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[420px] w-[600px] rounded-full bg-primary-fixed/25 blur-[150px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="section-index">02 / Решение</span>
            <span className="hairline hidden w-28 opacity-70 sm:block" />
          </div>

          <span className="eyebrow w-fit rounded-full border border-outline-variant/50 bg-surface-container-lowest/70 px-4 py-2 before:hidden">
            Platform · Control · Documents
          </span>
        </div>

        {/* Intro */}
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end xl:mb-12">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/45 px-4 py-2 text-[12px] font-semibold text-primary">
              <span className="material-symbols-outlined text-[17px]">
                auto_awesome
              </span>
              SkillPass — цифровая система управления обучением
            </div>

            <h2 className="text-[34px] font-extrabold leading-[1.04] tracking-tight text-on-background md:text-[50px] lg:text-[60px]">
              <span className="block">Не просто курсы,</span>
              <span className="block">
                а система <BlobAccent>контроля</BlobAccent>
              </span>
              <span className="block font-medium italic text-on-surface-variant">
                требований и документов
              </span>
            </h2>
          </div>

          <div className="rounded-[2rem] border border-outline-variant/45 bg-surface-container-lowest/80 p-5 shadow-sm backdrop-blur md:p-6">
            <p className="text-[15px] leading-[1.75] text-on-surface-variant md:text-[16px]">
              SkillPass помогает компании понять, какие направления обучения нужно
              закрыть, назначить курсы сотрудникам, проконтролировать прохождение
              и сохранить подтверждающие документы в одном личном кабинете.
            </p>
          </div>
        </div>

        {/* Scenario 1 only */}
        <ScenarioCard
          badge="Сценарий 1"
          title="Подбор требований"
          highlight="для компании"
          description="Компания вводит базовые данные, а SkillPass помогает понять, какие направления обучения и проверки нужно закрыть."
          result="Ответственный получает понятный план действий вместо ручного поиска требований."
          steps={SCENARIO_1_STEPS}
        />

        {/* Benefits row */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-outline-variant/45 bg-surface-container-lowest/80 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:bg-surface-container-lowest"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-secondary-fixed-dim/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              />

              <div className="relative z-10">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-fixed text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                  <span className="material-symbols-outlined text-[22px]">
                    {icon}
                  </span>
                </span>

                <h4 className="mt-3.5 text-[15px] font-bold leading-snug text-on-background">
                  {title}
                </h4>

                <p className="mt-1.5 text-[12.5px] leading-snug text-on-surface-variant">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}