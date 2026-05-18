import { Link } from 'react-router-dom';
import BlobAccent from './BlobAccent';

const CONTACTS = [
  {
    label: 'Контактное лицо',
    value: 'Алиманов Аслан Жанатович',
    href: undefined,
    icon: 'person',
  },
  {
    label: 'Звонок',
    value: '+7 777 384 2929',
    href: 'tel:+77773842929',
    icon: 'call',
  },
  {
    label: 'Email',
    value: 'skillpass.aslan@gmail.com',
    href: 'mailto:skillpass.aslan@gmail.com',
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
      {/* Background */}
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-25"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/4 h-[420px] w-[560px] rounded-full bg-secondary-fixed-dim/20 blur-[140px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 h-[420px] w-[620px] rounded-full bg-primary-fixed/25 blur-[150px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-outline-variant/50 bg-surface-container-lowest/85 p-5 shadow-sm backdrop-blur md:p-6 lg:p-8">
          <div
            aria-hidden
            className="absolute -right-32 -top-32 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/18 blur-[140px]"
          />

          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 h-[420px] w-[560px] rounded-full bg-primary-fixed/22 blur-[150px]"
          />

          {/* Header */}
          <div className="relative z-10 mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <span className="section-index">05 / Начать</span>

              <span
                aria-hidden
                className="hairline hidden w-28 opacity-70 sm:block"
              />
            </div>

            <span className="eyebrow w-fit rounded-full border border-outline-variant/50 bg-surface-container-low/70 px-4 py-2 before:hidden">
              Demo · Setup · Support
            </span>
          </div>

          {/* Main content */}
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch xl:gap-10">
            {/* Left editorial side */}
            <div className="relative overflow-hidden rounded-[2.25rem] border border-outline-variant/45 bg-surface/75 p-6 md:p-8 lg:p-10">
              <div
                aria-hidden
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-fixed/20 blur-3xl"
              />

              <div
                aria-hidden
                className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary-fixed-dim/14 blur-3xl"
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/45 px-4 py-2 text-[13px] font-semibold text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    rocket_launch
                  </span>
                  Запуск без лишней бюрократии
                </div>

                <h2 className="max-w-5xl text-[36px] font-extrabold leading-[1.04] tracking-tight text-on-background md:text-[56px] lg:text-[64px]">
                  <span className="block">Готовы перевести</span>

                  <span className="block font-medium italic text-on-surface-variant">
                    обязательное обучение
                  </span>

                  <span className="block">
                    в удобный{' '}
                    <BlobAccent>
                      онлайн-формат?
                    </BlobAccent>
                  </span>
                </h2>

                <p className="mt-6 max-w-3xl text-[16px] leading-[1.75] text-on-surface-variant md:text-[18px]">
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
                    className="btn-premium btn-premium--ghost text-[15px]"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      play_circle
                    </span>
                    Как работает платформа
                  </a>
                </div>

                {/* Next steps */}
                <div className="mt-10 rounded-[2rem] border border-outline-variant/45 bg-surface-container-low/70 p-5 backdrop-blur-sm md:p-6">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                        После заявки
                      </div>

                      <h3 className="text-[20px] font-extrabold leading-tight text-on-background">
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
                        className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest/80 p-4 transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-container-lowest"
                      >
                        <span className="display-number block text-[28px] leading-none text-primary">
                          {step.num}
                        </span>

                        <h4 className="mt-3 text-[14px] font-extrabold leading-snug text-on-background">
                          {step.title}
                        </h4>

                        <p className="mt-1.5 text-[12px] leading-snug text-on-surface-variant">
                          {step.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust line */}
                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-outline-variant/45 pt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Без спама
                  </span>

                  <span
                    aria-hidden
                    className="hidden h-3 w-px bg-outline-variant sm:block"
                  />

                  <span>Демо под вашу компанию</span>

                  <span
                    aria-hidden
                    className="hidden h-3 w-px bg-outline-variant sm:block"
                  />

                  <span>Консультация бесплатно</span>
                </div>
              </div>
            </div>

            {/* Right contact panel */}
            <div className="relative overflow-hidden rounded-[2.25rem] border border-outline-variant/45 bg-gradient-to-br from-primary via-[#004c69] to-[#001e2c] p-1 shadow-[0_30px_60px_-20px_rgba(0,30,44,0.45)]">
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-surface-container-lowest p-6 md:p-7">
                <div
                  aria-hidden
                  className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary-fixed-dim/25 blur-3xl"
                />

                <div
                  aria-hidden
                  className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-primary-fixed/25 blur-3xl"
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                        Прямая связь
                      </div>

                      <h3 className="text-[28px] font-extrabold leading-tight text-on-background md:text-[32px]">
                        Свяжитесь с нами удобным способом
                      </h3>
                    </div>

                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-primary-fixed text-primary shadow-md">
                      <span className="material-symbols-outlined text-[28px]">
                        support_agent
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {CONTACTS.map((contact) => {
                      const isLink = Boolean(contact.href);
                      const baseClass =
                        'group flex items-center gap-4 rounded-[1.5rem] border border-outline-variant/45 bg-surface-container-low/70 p-4 transition';
                      const interactiveClass = isLink
                        ? ' hover:-translate-y-0.5 hover:border-primary/35 hover:bg-surface-container-lowest'
                        : '';

                      const inner = (
                        <>
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-fixed text-primary shadow-sm transition group-hover:bg-primary group-hover:text-on-primary">
                            <span className="material-symbols-outlined text-[23px]">
                              {contact.icon}
                            </span>
                          </span>

                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                              {contact.label}
                            </div>

                            <div className="mt-1 truncate text-[17px] font-extrabold leading-tight text-on-background transition group-hover:text-primary md:text-[19px]">
                              {contact.value}
                            </div>
                          </div>

                          {isLink && (
                            <span className="material-symbols-outlined text-[21px] text-on-surface-variant transition group-hover:text-primary">
                              north_east
                            </span>
                          )}
                        </>
                      );

                      return isLink ? (
                        <a
                          key={contact.label}
                          href={contact.href}
                          className={`${baseClass}${interactiveClass}`}
                        >
                          {inner}
                        </a>
                      ) : (
                        <div key={contact.label} className={baseClass}>
                          {inner}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {QUICK_CHANNELS.map(({ label, icon }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/45 bg-surface-container-low/70 px-3 py-1.5 text-[12px] font-semibold text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-[15px] text-primary">
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
                        className="flex items-center gap-3 rounded-2xl border border-outline-variant/40 bg-surface-container-low/70 p-3.5"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container">
                          <span className="material-symbols-outlined text-[19px]">
                            {item.icon}
                          </span>
                        </span>

                        <div className="leading-tight">
                          <div className="text-[14px] font-extrabold text-on-background">
                            {item.title}
                          </div>

                          <div className="text-[12px] text-on-surface-variant">
                            {item.text}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-7">
                    <div className="rounded-[1.75rem] border border-primary/20 bg-primary-fixed/35 p-5">
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                        Быстрый старт
                      </div>

                      <p className="text-[18px] font-extrabold leading-snug text-on-background">
                        Можно начать с демо и понять, какие направления обучения
                        нужны вашей компании.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="relative z-10 mt-8 rounded-[2rem] border border-outline-variant/45 bg-surface/75 p-5 backdrop-blur-sm md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                  Итог
                </div>

                <h3 className="max-w-4xl text-[22px] font-extrabold leading-tight text-on-background md:text-[28px]">
                  SkillPass помогает запустить онлайн-обучение сотрудников без
                  ручного хаоса, бумажной рутины и потери контроля
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Старт за 1 день
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}