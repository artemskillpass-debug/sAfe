import { Link } from 'react-router-dom';
import BlobAccent from './BlobAccent';

const CONTACTS = [
  {
    label: 'Звонок',
    value: '+7 700 000 00 00',
    href: 'tel:+770000000000',
    icon: 'call',
  },
  {
    label: 'Email',
    value: 'hello@skillpass.kz',
    href: 'mailto:hello@skillpass.kz',
    icon: 'mail',
  },
];

const QUICK_CHANNELS = [
  { label: 'Telegram', icon: 'send' },
  { label: 'WhatsApp', icon: 'chat' },
  { label: 'Zoom-демо', icon: 'videocam' },
];

const NEXT_STEPS = [
  {
    num: '01',
    title: 'Покажем платформу',
    text: 'Разберём, как SkillPass закрывает обучение именно для вашей компании.',
  },
  {
    num: '02',
    title: 'Подберём направления',
    text: 'Определим нужные курсы, роли сотрудников и формат подключения.',
  },
  {
    num: '03',
    title: 'Запустим обучение',
    text: 'Поможем подключить сотрудников и настроить контроль прохождения.',
  },
];

const TRUST_ITEMS = [
  {
    icon: 'schedule',
    title: '15 минут',
    text: 'на первый созвон',
  },
  {
    icon: 'verified_user',
    title: 'Без обязательств',
    text: 'просто покажем платформу',
  },
  {
    icon: 'support_agent',
    title: 'Поможем внедрить',
    text: 'подскажем по запуску',
  },
];

export default function FinalCTASection() {
  return (
    <section
      id="cta-final"
      className="bg-surface relative w-full scroll-mt-24 overflow-hidden py-section-padding md:scroll-mt-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
        <div className="surface-immersive relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14 lg:py-18 xl:px-16">
          {/* Background */}
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
            className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full bg-secondary-fixed-dim/25 blur-[120px]"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary-fixed/30 blur-[120px]"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[130px]"
          />

          {/* Header */}
          <div className="relative z-10 mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <span className="section-index text-secondary-fixed-dim">
                05 / Начать
              </span>

              <span
                aria-hidden
                className="hairline hidden w-28 opacity-40 sm:block"
              />
            </div>

            <span className="eyebrow w-fit rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-secondary-fixed-dim before:hidden">
              Demo · Setup · Support
            </span>
          </div>

          {/* Main content */}
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch xl:gap-10">
            {/* Left editorial side */}
            <div className="flex flex-col">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-secondary-fixed-dim/25 bg-secondary-fixed-dim/10 px-4 py-2 text-[13px] font-semibold text-secondary-fixed-dim">
                <span className="material-symbols-outlined text-[18px]">
                  rocket_launch
                </span>
                Запуск без лишней бюрократии
              </div>

              <h2 className="max-w-5xl text-[36px] font-extrabold leading-[1.04] tracking-tight text-white md:text-[56px] lg:text-[64px]">
                <span className="block">Готовы перевести</span>

                <span className="block font-medium italic text-white/65">
                  обязательное обучение
                </span>

                <span className="block">
                  в удобный{' '}
                  <BlobAccent variant="alt" onDark>
                    онлайн-формат?
                  </BlobAccent>
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-[16px] leading-[1.75] text-white/70 md:text-[18px]">
                Покажем SkillPass на примере вашей компании: как назначать курсы,
                контролировать сотрудников и хранить подтверждающие документы в
                одном цифровом кабинете.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/login#demo"
                  className="btn-premium btn-premium--accent text-[15px]"
                >
                  Запросить демо
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </Link>

                <a
                  href="#format-obucheniya"
                  className="btn-premium border-white/30 bg-white/10 text-white hover:bg-white/15"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    play_circle
                  </span>
                  Как работает платформа
                </a>
              </div>

              {/* Next steps */}
              <div className="mt-10 rounded-[2rem] border border-white/15 bg-white/[0.055] p-5 backdrop-blur-sm md:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      После заявки
                    </div>

                    <h3 className="text-[20px] font-bold leading-tight text-white">
                      Что будет дальше
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container shadow-md">
                    <span className="material-symbols-outlined text-[24px]">
                      checklist
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {NEXT_STEPS.map((step) => (
                    <div
                      key={step.num}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-secondary-fixed-dim/35 hover:bg-white/[0.075]"
                    >
                      <span className="display-number block text-[28px] leading-none text-secondary-fixed-dim">
                        {step.num}
                      </span>

                      <h4 className="mt-3 text-[14px] font-bold leading-snug text-white">
                        {step.title}
                      </h4>

                      <p className="mt-1.5 text-[12px] leading-snug text-white/60">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust line */}
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/15 pt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary-fixed-dim" />
                  Без спама
                </span>

                <span aria-hidden className="hidden h-3 w-px bg-white/15 sm:block" />

                <span>Демо под вашу компанию</span>

                <span aria-hidden className="hidden h-3 w-px bg-white/15 sm:block" />

                <span>Консультация бесплатно</span>
              </div>
            </div>

            {/* Right contact panel */}
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-gradient-to-br from-white/[0.1] via-white/[0.055] to-white/[0.025] p-6 backdrop-blur-md md:p-7">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary-fixed-dim/20 blur-3xl"
              />

              <div
                aria-hidden
                className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-primary-fixed/20 blur-3xl"
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Прямая связь
                    </div>

                    <h3 className="text-[28px] font-extrabold leading-tight text-white md:text-[32px]">
                      Свяжитесь с нами удобным способом
                    </h3>
                  </div>

                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container shadow-md">
                    <span className="material-symbols-outlined text-[28px]">
                      support_agent
                    </span>
                  </div>
                </div>

                <div className="grid gap-4">
                  {CONTACTS.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="group flex items-center gap-4 rounded-[1.5rem] border border-white/12 bg-white/[0.055] p-4 transition hover:-translate-y-0.5 hover:border-secondary-fixed-dim/45 hover:bg-white/[0.08]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container shadow-md">
                        <span className="material-symbols-outlined text-[23px]">
                          {contact.icon}
                        </span>
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          {contact.label}
                        </div>

                        <div className="mt-1 truncate text-[17px] font-extrabold leading-tight text-white transition group-hover:text-secondary-fixed-dim md:text-[19px]">
                          {contact.value}
                        </div>
                      </div>

                      <span className="material-symbols-outlined text-[21px] text-white/55 transition group-hover:text-secondary-fixed-dim">
                        north_east
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {QUICK_CHANNELS.map(({ label, icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[12px] font-semibold text-white/90"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        {icon}
                      </span>
                      {label}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid gap-3">
                  {TRUST_ITEMS.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 p-3.5"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container">
                        <span className="material-symbols-outlined text-[19px]">
                          {item.icon}
                        </span>
                      </span>

                      <div className="leading-tight">
                        <div className="text-[14px] font-bold text-white">
                          {item.title}
                        </div>

                        <div className="text-[12px] text-white/55">
                          {item.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <div className="rounded-[1.75rem] border border-secondary-fixed-dim/25 bg-secondary-fixed-dim/10 p-5">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-secondary-fixed-dim">
                      Быстрый старт
                    </div>

                    <p className="text-[18px] font-bold leading-snug text-white">
                      Можно начать с демо и понять, какие направления обучения
                      нужны вашей компании.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom strip — только итог, без повторной CTA (главный CTA выше) */}
          <div className="relative z-10 mt-8 rounded-[2rem] border border-white/15 bg-white/[0.055] p-5 backdrop-blur-sm md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-secondary-fixed-dim">
                  Итог
                </div>

                <h3 className="max-w-4xl text-[22px] font-extrabold leading-tight text-white md:text-[28px]">
                  SkillPass помогает запустить онлайн-обучение сотрудников без
                  ручного хаоса, бумажной рутины и потери контроля
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-secondary-fixed-dim">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary-fixed-dim" />
                Старт за 1 день
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}