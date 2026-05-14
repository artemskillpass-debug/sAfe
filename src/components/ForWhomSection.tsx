import BlobAccent from './BlobAccent';

type Role = {
  icon: string;
  audience: string;
  headline: string;
  description: string;
  capabilities: string[];
  outcome: string;
};

const ROLES: Role[] = [
  {
    icon: 'badge',
    audience: 'HR-специалисты',
    headline: 'Управлять обучением всей команды',
    description:
      'Назначайте курсы, контролируйте сроки и собирайте подтверждающие документы в одном кабинете.',
    capabilities: [
      'Массовое назначение курсов',
      'Контроль сроков прохождения',
      'Готовые отчёты по сотрудникам',
    ],
    outcome: 'Меньше ручной работы',
  },
  {
    icon: 'supervisor_account',
    audience: 'Руководители',
    headline: 'Видеть прогресс своей команды',
    description:
      'Прозрачные статусы и уведомления — кто прошёл обучение, у кого скоро истекают сертификаты.',
    capabilities: [
      'Дашборд команды',
      'Уведомления о рисках',
      'История по каждому сотруднику',
    ],
    outcome: 'Контроль без таблиц',
  },
  {
    icon: 'school',
    audience: 'Сотрудники',
    headline: 'Учиться в удобном кабинете',
    description:
      'Все назначенные курсы, сертификаты и документы — в одном месте, доступны 24/7.',
    capabilities: [
      'Курсы на любом устройстве',
      'История обучения',
      'Сертификаты под рукой',
    ],
    outcome: 'Понятный путь обучения',
  },
  {
    icon: 'verified_user',
    audience: 'Ответственные за ОТ',
    headline: 'Быть готовым к проверкам',
    description:
      'Удостоверения, протоколы и журналы инструктажей хранятся в системе и доступны мгновенно.',
    capabilities: [
      'Архив документов',
      'Журналы инструктажей',
      'Шаблоны протоколов',
    ],
    outcome: 'Документы за минуту',
  },
];

export default function ForWhomSection() {
  return (
    <section
      id="dlya-kogo"
      className="relative w-full overflow-hidden bg-background py-section-padding"
    >
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-25"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[460px] w-[560px] rounded-full bg-primary-fixed/22 blur-[150px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/5 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/18 blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="section-index">03 / Для кого</span>
            <span className="hairline hidden w-28 opacity-70 sm:block" />
          </div>

          <span className="eyebrow w-fit rounded-full border border-outline-variant/50 bg-surface-container-lowest/70 px-4 py-2 before:hidden">
            Roles · Value · Outcomes
          </span>
        </div>

        {/* Intro */}
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end xl:mb-12">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/45 px-4 py-2 text-[12px] font-semibold text-primary">
              <span className="material-symbols-outlined text-[17px]">
                groups
              </span>
              Один продукт — четыре сценария использования
            </div>

            <h2 className="text-[34px] font-extrabold leading-[1.04] tracking-tight text-on-background md:text-[50px] lg:text-[60px]">
              <span className="block">Понятная ценность</span>
              <span className="block">
                для каждой <BlobAccent>роли</BlobAccent>
              </span>
              <span className="block font-medium italic text-on-surface-variant">
                в вашей компании
              </span>
            </h2>
          </div>

          <div className="rounded-[2rem] border border-outline-variant/45 bg-surface-container-lowest/80 p-5 shadow-sm backdrop-blur md:p-6">
            <p className="text-[15px] leading-[1.75] text-on-surface-variant md:text-[16px]">
              SkillPass закрывает задачи всех участников процесса обучения — от
              HR и руководителей до сотрудников и ответственных за охрану труда.
              Каждая роль получает свой набор инструментов и понятный интерфейс.
            </p>
          </div>
        </div>

        {/* Roles grid */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:gap-6">
          {ROLES.map((role, i) => (
            <article
              key={role.audience}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-outline-variant/50 bg-surface-container-lowest/85 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_50px_-30px_rgba(0,30,44,0.35)] md:p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary-fixed/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-fixed text-primary shadow-[0_10px_24px_-12px_rgba(0,102,138,0.45)] transition-colors group-hover:bg-primary group-hover:text-on-primary">
                  <span className="material-symbols-outlined text-[28px]">
                    {role.icon}
                  </span>
                </span>

                <span className="display-number text-[34px] leading-none text-on-surface-variant/25">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative z-10">
                <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  {role.audience}
                </div>

                <h3 className="text-[20px] font-extrabold leading-snug text-on-background md:text-[22px]">
                  {role.headline}
                </h3>

                <p className="mt-2.5 text-[14px] leading-[1.65] text-on-surface-variant">
                  {role.description}
                </p>
              </div>

              <ul className="relative z-10 mt-5 flex flex-col gap-2.5 border-t border-outline-variant/40 pt-5">
                {role.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-3 text-[13px] font-medium text-on-surface"
                  >
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary">
                      <span className="material-symbols-outlined text-[14px]">
                        check
                      </span>
                    </span>
                    {cap}
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-5 flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary-fixed/35 p-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container">
                  <span className="material-symbols-outlined text-[19px]">
                    bolt
                  </span>
                </span>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    Результат
                  </div>

                  <p className="text-[13px] font-bold leading-snug text-on-background">
                    {role.outcome}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
