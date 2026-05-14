'use client';

import BlobAccent from './BlobAccent';

const BENEFITS: {
  icon: string;
  title: string;
  text: string;
  badge?: string;
}[] = [
  {
    icon: 'verified_user',
    title: 'Закрываем требования надзора',
    text: 'SkillPass помогает компаниям организовать обязательное обучение сотрудников и держать подтверждающие документы в порядке.',
    badge: 'Контроль требований',
  },
  {
    icon: 'fact_check',
    title: 'Прозрачный процесс обучения',
    text: 'Ответственный сотрудник видит, кому назначено обучение, кто проходит курс, а кто уже завершил программу.',
    badge: 'Статусы в кабинете',
  },
  {
    icon: 'workspace_premium',
    title: 'Документы после прохождения',
    text: 'Сертификаты, протоколы и история обучения сохраняются в системе, чтобы их было удобно найти при необходимости.',
    badge: 'Сертификаты и протоколы',
  },
  {
    icon: 'support_agent',
    title: 'Поддержка на каждом этапе',
    text: 'Команда помогает настроить процесс, разобраться с направлениями обучения и быстро подключить сотрудников.',
    badge: 'Помощь бизнесу',
  },
];

const TRUST_STEPS = [
  {
    number: '01',
    title: 'Назначили',
    text: 'выдали курсы',
  },
  {
    number: '02',
    title: 'Проверили',
    text: 'увидели статусы',
  },
  {
    number: '03',
    title: 'Получили',
    text: 'документы',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="pochemu-my"
      className="surface-immersive relative w-full overflow-hidden py-section-padding text-white"
    >
      {/* Background */}
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
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[110px]"
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

      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        {/* Section top */}
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="section-index text-primary-fixed-dim">
              05 / Преимущества
            </span>
            <span
              aria-hidden
              className="hairline hidden w-28 opacity-50 sm:block"
            />
          </div>

          <span className="eyebrow w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-secondary-fixed-dim before:hidden">
            Trust · Education · Documents
          </span>
        </div>

        {/* Main layout */}
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          {/* Left panel */}
          <div className="relative h-full overflow-hidden rounded-[2.25rem] border border-white/15 bg-gradient-to-br from-white/[0.09] via-white/[0.045] to-white/[0.02] p-6 backdrop-blur-md md:p-8">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary-fixed-dim/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-fixed/10 blur-3xl"
            />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-secondary-fixed-dim/25 bg-secondary-fixed-dim/10 px-4 py-2 text-[12px] font-semibold text-secondary-fixed-dim">
                  <span className="material-symbols-outlined text-[17px]">
                    admin_panel_settings
                  </span>
                  Доверие к процессу обучения
                </div>

                <h2 className="max-w-3xl text-[30px] font-extrabold leading-[1.03] tracking-tight text-white md:text-[42px] lg:text-[48px]">
                  <span className="block">Обязательное обучение</span>

                  <span className="block font-medium italic text-secondary-fixed-dim">
                    без хаоса и ручного
                  </span>

                  <span className="block">
                    <BlobAccent variant="alt" onDark>
                      контроля
                    </BlobAccent>
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-[1.6] text-white/70 md:text-[16px]">
                  SkillPass помогает назначать курсы, отслеживать прохождение,
                  хранить документы и быстрее готовиться к проверкам.
                </p>
              </div>

              {/* Compact process card */}
              <div className="mt-7 rounded-[1.75rem] border border-white/12 bg-black/10 p-4 backdrop-blur-sm md:p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="mb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Логика платформы
                    </div>

                    <h3 className="text-[17px] font-bold leading-tight text-white md:text-[18px]">
                      От курса до документа
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container shadow-md">
                    <span className="material-symbols-outlined text-[23px]">
                      route
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {TRUST_STEPS.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 transition hover:border-secondary-fixed-dim/35 hover:bg-white/[0.07]"
                    >
                      <span className="display-number block text-[24px] leading-none text-secondary-fixed-dim">
                        {step.number}
                      </span>

                      <p className="mt-2 text-[12px] font-bold leading-snug text-white">
                        {step.title}
                      </p>

                      <p className="mt-1 text-[11px] leading-snug text-white/50">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container shadow-md">
                    <span className="material-symbols-outlined text-[22px]">
                      description
                    </span>
                  </span>

                  <div className="min-w-0">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                      После обучения
                    </div>

                    <div className="mt-0.5 text-[13px] font-bold leading-snug text-white">
                      документы доступны в личном кабинете
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right proof list */}
          <div className="flex h-full flex-col gap-4">
            {BENEFITS.map(({ icon, title, text, badge }, i) => (
              <article
                key={title}
                className="group relative flex-1 overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.045] p-5 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-secondary-fixed-dim/45 hover:bg-white/[0.075] md:p-6"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-secondary-fixed-dim/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-secondary-fixed-dim/35 to-transparent opacity-0 transition group-hover:opacity-100"
                />

                <div className="relative z-10 flex h-full gap-5">
                  <div className="flex flex-col items-center gap-3">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container shadow-md">
                      <span className="material-symbols-outlined text-[24px]">
                        {icon}
                      </span>
                    </span>

                    <span className="display-number text-[32px] leading-none text-white/25">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <h3 className="font-headline-md text-[19px] leading-snug text-white md:text-[20px]">
                        {title}
                      </h3>

                      {badge ? (
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary-fixed-dim" />
                          {badge}
                        </span>
                      ) : null}
                    </div>

                    <p className="max-w-2xl text-[13px] leading-[1.65] text-white/68 md:text-[14px]">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            {/* CTA */}
            <div className="relative overflow-hidden rounded-[1.75rem] border border-secondary-fixed-dim/25 bg-secondary-fixed-dim/10 p-5 backdrop-blur-md md:p-6">
              <div
                aria-hidden
                className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-secondary-fixed-dim/20 blur-3xl"
              />

              <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-secondary-fixed-dim">
                    Итог
                  </div>

                  <h3 className="max-w-lg text-[20px] font-bold leading-tight text-white md:text-[22px]">
                    меньше ручного контроля, больше порядка в обучении и
                    документах
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}