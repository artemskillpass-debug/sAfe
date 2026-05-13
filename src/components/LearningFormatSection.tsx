import BlobAccent from './BlobAccent';

const BENEFITS: { icon: string; title: string; description: string }[] = [
  {
    icon: 'devices',
    title: 'Доступ 24/7',
    description: 'Сотрудники проходят обучение онлайн с компьютера, планшета или телефона.',
  },
  {
    icon: 'account_circle',
    title: 'Личный кабинет',
    description: 'Курсы назначаются сотрудникам по роли, отделу или направлению.',
  },
  {
    icon: 'fact_check',
    title: 'Тестирование',
    description: 'Проверка знаний проходит автоматически после учебных блоков.',
  },
  {
    icon: 'school',
    title: 'Сертификаты',
    description: 'После прохождения документы доступны в личном кабинете.',
  },
  {
    icon: 'trending_up',
    title: 'Контроль прогресса',
    description: 'HR и руководитель видят статусы сотрудников в одном окне.',
  },
  {
    icon: 'hub',
    title: 'Единая система',
    description: 'Обучение, документы и контроль требований собраны в одной платформе.',
  },
];

const STEPS: { num: string; title: string; desc: string; icon: string }[] = [
  {
    num: '01',
    title: 'Подключаем компанию',
    desc: 'Создаём кабинет и добавляем сотрудников через Excel или вручную.',
    icon: 'domain_add',
  },
  {
    num: '02',
    title: 'Назначаем курсы',
    desc: 'Выбираем нужные направления обучения для сотрудников.',
    icon: 'assignment_add',
  },
  {
    num: '03',
    title: 'Контролируем результат',
    desc: 'Отслеживаем прогресс, тесты и готовые документы.',
    icon: 'dashboard',
  },
];

const COURSE_MODULES = [
  { title: 'Введение в охрану труда', status: 'done' },
  { title: 'Нормативные требования', status: 'done' },
  { title: 'Проверка знаний', status: 'active' },
  { title: 'Итоговый тест', status: 'pending' },
];

const DASHBOARD_STATS = [
  { label: 'Назначено', value: '124', icon: 'assignment' },
  { label: 'Проходят', value: '87', icon: 'play_circle' },
  { label: 'Готово', value: '68', icon: 'workspace_premium' },
];

export default function LearningFormatSection() {
  return (
    <section
      id="format-obucheniya"
      className="bg-surface relative w-full overflow-hidden py-section-padding"
    >
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/3 h-[420px] w-[420px] rounded-full bg-secondary-fixed-dim/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 h-[400px] w-[600px] rounded-full bg-primary-fixed/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-[0.22]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="section-index">04 / Формат</span>
            <span className="hairline hidden w-28 opacity-70 sm:block" />
          </div>

          <span className="eyebrow w-fit rounded-full border border-outline-variant/50 bg-surface-container-lowest/70 px-4 py-2 before:hidden">
            Online · One platform
          </span>
        </div>

        {/* Main block */}
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch xl:gap-10 2xl:gap-12">
          {/* Left editorial panel */}
          <div className="relative overflow-hidden rounded-[2.25rem] border border-outline-variant/50 bg-surface-container-lowest/80 p-6 shadow-sm backdrop-blur md:p-8 xl:p-9">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary-fixed-dim/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-fixed/20 blur-3xl"
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/45 px-4 py-2 text-[12px] font-semibold text-primary">
                <span className="material-symbols-outlined text-[17px]">
                  wifi
                </span>
                Обучение полностью онлайн
              </div>

              <h2 className="text-on-background max-w-3xl text-[32px] font-extrabold leading-[1.04] tracking-tight md:text-[46px] lg:text-[50px] xl:text-[54px]">
                <span className="block">Формат обучения —</span>

                <span className="block font-medium italic text-on-surface-variant">
                  без выездов,
                </span>

                <span className="block">
                  бумаги и <BlobAccent>хаоса</BlobAccent>
                </span>
              </h2>

              <p className="text-on-surface-variant mt-5 max-w-xl text-[15px] leading-[1.7] md:text-[16px]">
                Сотрудники проходят обучение на платформе, HR назначает курсы,
                а руководитель видит прогресс и готовые документы в одном кабинете.
              </p>

              {/* Steps */}
              <div className="mt-8 rounded-[1.75rem] border border-outline-variant/45 bg-surface-container-low/70 p-4 md:p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-on-surface-variant mb-1 text-[10px] font-semibold uppercase tracking-[0.22em]">
                      Как это работает
                    </div>

                    <h3 className="text-on-background text-[18px] font-bold leading-tight">
                      3 шага до запуска обучения
                    </h3>
                  </div>

                  <div className="bg-secondary-container text-on-secondary-container flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl shadow-md">
                    <span className="material-symbols-outlined text-[23px]">
                      route
                    </span>
                  </div>
                </div>

                <div className="grid gap-3">
                  {STEPS.map(({ num, title, desc, icon }) => (
                    <div
                      key={num}
                      className="group flex gap-4 rounded-2xl border border-outline-variant/45 bg-surface-container-lowest/70 p-4 transition hover:border-primary/35 hover:bg-surface-container-lowest"
                    >
                      <div className="bg-primary-fixed text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition group-hover:bg-primary group-hover:text-on-primary">
                        <span className="material-symbols-outlined text-[22px]">
                          {icon}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="display-number text-primary/50 text-[22px] leading-none">
                            {num}
                          </span>

                          <h4 className="text-on-background text-[15px] font-bold leading-snug">
                            {title}
                          </h4>
                        </div>

                        <p className="text-on-surface-variant mt-1 text-[13px] leading-snug">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button type="button" className="btn-premium btn-premium--accent">
                  Попробовать платформу
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>

                <button type="button" className="btn-premium btn-premium--ghost">
                  Получить консультацию
                </button>
              </div>
            </div>
          </div>

          {/* Right product mockup */}
          <div className="relative overflow-hidden rounded-[2.25rem] border border-outline-variant/50 bg-gradient-to-br from-primary via-[#004c69] to-[#001e2c] p-1 shadow-[0_30px_60px_-20px_rgba(0,30,44,0.45)]">
            <div className="bg-surface-container-lowest relative h-full overflow-hidden rounded-[2rem] p-6 md:p-8 xl:p-10">
              <div
                aria-hidden
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary-fixed-dim/25 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-fixed/25 blur-3xl"
              />

              <div className="relative z-10 flex h-full flex-col">
                {/* Browser bar */}
                <div className="border-outline-variant/40 mb-7 flex flex-wrap items-center gap-2 border-b pb-4">
                  <span className="bg-error/70 h-3 w-3 rounded-full" />
                  <span className="bg-secondary-container/80 h-3 w-3 rounded-full" />
                  <span className="bg-primary/80 h-3 w-3 rounded-full" />

                  <span className="bg-surface-container-low text-on-surface-variant ml-0 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium sm:ml-3">
                    <span className="material-symbols-outlined text-[14px]">
                      lock
                    </span>
                    skillpass.kz/learn
                  </span>
                </div>

                {/* Dashboard top */}
                <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-[0.2em]">
                      Личный кабинет
                    </div>

                    <h3 className="text-on-background mt-2 max-w-2xl text-[28px] font-extrabold leading-tight md:text-[34px] xl:text-[38px]">
                      Контроль обучения сотрудников в реальном времени
                    </h3>
                  </div>

                  <div className="bg-primary-fixed text-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl">
                    <span className="material-symbols-outlined text-[30px]">
                      dashboard_customize
                    </span>
                  </div>
                </div>

                {/* Dashboard body */}
                <div className="grid flex-1 gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                  {/* Course progress */}
                  <div className="rounded-[1.75rem] border border-outline-variant/45 bg-surface-container-low/70 p-5 xl:p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <div className="text-on-surface-variant text-[10px] font-semibold uppercase tracking-[0.2em]">
                          Текущий курс
                        </div>

                        <h4 className="text-on-background mt-2 text-[21px] font-bold leading-snug xl:text-[23px]">
                          Охрана труда · базовый курс
                        </h4>
                      </div>

                      <span className="bg-secondary-container text-on-secondary-container inline-flex rounded-full px-3 py-1 text-[11px] font-bold">
                        Онлайн
                      </span>
                    </div>

                    <div>
                      <div className="text-on-surface-variant mb-2 flex items-center justify-between text-[12px]">
                        <span>Прогресс прохождения</span>
                        <span className="text-on-background font-bold tabular-nums">
                          68%
                        </span>
                      </div>

                      <div className="bg-surface-container relative h-2.5 w-full overflow-hidden rounded-full">
                        <span className="absolute inset-y-0 left-0 w-[68%] rounded-full bg-gradient-to-r from-primary to-secondary-container" />
                      </div>
                    </div>

                    <ul className="mt-6 flex flex-col gap-3 [list-style:none] [padding-inline-start:0]">
                      {COURSE_MODULES.map(({ title, status }) => (
                        <li
                          key={title}
                          className="flex items-center gap-3 rounded-2xl border border-outline-variant/35 bg-surface-container-lowest/65 p-3"
                        >
                          <span
                            className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[14px] ${
                              status === 'done'
                                ? 'bg-primary text-on-primary'
                                : status === 'active'
                                  ? 'bg-secondary-container text-on-secondary-container ring-4 ring-secondary-container/25'
                                  : 'bg-surface-container text-on-surface-variant'
                            }`}
                          >
                            <span className="material-symbols-outlined text-[15px]">
                              {status === 'done'
                                ? 'check'
                                : status === 'active'
                                  ? 'play_arrow'
                                  : 'circle'}
                            </span>
                          </span>

                          <span
                            className={`text-[13px] leading-snug ${
                              status === 'pending'
                                ? 'text-on-surface-variant'
                                : 'text-on-background font-semibold'
                            }`}
                          >
                            {title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats + document */}
                  <div className="flex flex-col gap-4">
                    {DASHBOARD_STATS.map(({ label, value, icon }) => (
                      <div
                        key={label}
                        className="border-outline-variant/45 bg-surface-container-low/70 flex items-center gap-3 rounded-[1.5rem] border p-4"
                      >
                        <span className="bg-primary-fixed text-primary inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                          <span className="material-symbols-outlined text-[21px]">
                            {icon}
                          </span>
                        </span>

                        <div className="leading-tight">
                          <div className="text-on-surface-variant text-[10px] font-semibold uppercase tracking-wider">
                            {label}
                          </div>

                          <div className="text-on-background text-[24px] font-extrabold tabular-nums">
                            {value}
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="mt-auto rounded-[1.5rem] border border-primary/25 bg-primary-fixed/45 p-4">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="bg-primary text-on-primary inline-flex h-10 w-10 items-center justify-center rounded-2xl">
                          <span className="material-symbols-outlined text-[21px]">
                            workspace_premium
                          </span>
                        </span>

                        <div>
                          <div className="text-on-surface-variant text-[10px] font-semibold uppercase tracking-[0.2em]">
                            Документы
                          </div>

                          <div className="text-on-background text-[14px] font-bold">
                            Сертификат готов
                          </div>
                        </div>
                      </div>

                      <p className="text-on-surface-variant text-[12px] leading-snug">
                        После завершения обучения документ сохраняется в кабинете
                        компании.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {BENEFITS.map(({ icon, title, description }) => (
                    <div
                      key={title}
                      className="group relative overflow-hidden rounded-2xl border border-outline-variant/45 bg-surface-container-low/65 p-4 transition-all hover:border-primary/40 hover:bg-surface-container-lowest"
                    >
                      <span className="bg-primary-fixed text-primary inline-flex h-9 w-9 items-center justify-center rounded-xl transition-colors group-hover:bg-primary group-hover:text-on-primary">
                        <span className="material-symbols-outlined text-[18px]">
                          {icon}
                        </span>
                      </span>

                      <h4 className="text-on-background mt-3 text-[13px] font-bold leading-snug">
                        {title}
                      </h4>

                      <p className="text-on-surface-variant mt-1 text-[11px] leading-snug">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom result strip */}
        <div className="border-outline-variant/45 bg-surface-container-lowest/75 mt-8 grid gap-4 rounded-[2rem] border p-5 shadow-sm backdrop-blur md:grid-cols-[1fr_auto] md:items-center md:p-6 xl:mt-10">
          <div>
            <div className="text-primary mb-2 text-[10px] font-bold uppercase tracking-[0.22em]">
              Итог
            </div>

            <h3 className="text-on-background max-w-4xl text-[22px] font-extrabold leading-tight md:text-[28px]">
              обучение проходит онлайн, а контроль и документы остаются в одной системе
            </h3>
          </div>

          <a href="#contact" className="btn-premium btn-premium--accent w-fit">
            Запросить демо
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}