import BlobAccent from './BlobAccent';

const BENEFITS: { icon: string; title: string; description: string }[] = [
  { icon: 'devices', title: 'Доступ 24/7', description: 'Обучение доступно с любого устройства — десктоп, планшет, телефон.' },
  { icon: 'account_circle', title: 'Личный кабинет', description: 'Каждому сотруднику назначаются курсы по роли и направлению.' },
  { icon: 'fact_check', title: 'Тестирование', description: 'Проверка знаний после блока, автоматическая оценка и пересдачи.' },
  { icon: 'school', title: 'Сертификаты', description: 'Бессрочный документ установленного образца — без бумажной волокиты.' },
  { icon: 'trending_up', title: 'Прогресс в одном окне', description: 'Статусы и аналитика сотрудников у HR и руководителя.' },
  { icon: 'hub', title: 'Единая экосистема', description: 'Обучение, документы, контроль требований — без хаоса инструментов.' },
];

/** Один шаг workflow платформы. */
const STEPS: { num: string; title: string; desc: string }[] = [
  { num: '01', title: 'Подключение', desc: 'Заводим компанию, импортируем сотрудников из 1С/Excel за один день.' },
  { num: '02', title: 'Назначение', desc: 'HR раздаёт курсы по ролям, платформа сама строит расписание.' },
  { num: '03', title: 'Контроль', desc: 'Прогресс, дедлайны и сертификаты — в живом дашборде руководителя.' },
];

/**
 * «Формат обучения» — премиум-блок c asymmetric grid.
 * Левая 38.2%: editorial-копи + воркфлоу 3 шага.
 * Правая 61.8%: «дашборд» в стеклянной рамке + сетка 3×2 преимуществ.
 */
export default function LearningFormatSection() {
  return (
    <section
      id="format-obucheniya"
      className="bg-surface relative w-full overflow-hidden py-section-padding"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/3 h-[420px] w-[420px] rounded-full bg-secondary-fixed-dim/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 h-[400px] w-[600px] rounded-full bg-primary-fixed/25 blur-[140px]"
      />

      <div className="max-w-container-max relative z-10 mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section header */}
        <div className="mb-14 flex items-center justify-between gap-6 md:mb-16">
          <span className="section-index">04 / Формат</span>
          <span className="hairline hidden flex-1 sm:block" />
          <span className="eyebrow before:hidden">Online · One platform</span>
        </div>

        <div
          className="grid-golden-reverse items-start"
          style={{ ['--golden-gap' as string]: '4rem' }}
        >
          {/* LEFT 38.2% — editorial copy + workflow */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-display-xl text-on-background leading-[1.05] tracking-tight max-md:text-[clamp(2rem,7vw,2.75rem)]">
                <span className="block font-extrabold">Формат</span>
                <span className="text-on-surface-variant font-medium italic">
                  обучения —
                </span>
                <span className="block font-extrabold">
                  <BlobAccent>100% онлайн</BlobAccent>
                </span>
              </h2>
              <p className="font-body-md text-on-surface-variant mt-6 max-w-md text-[16px] leading-[1.7]">
                Без выездов, бумажной рутины и ручного контроля. Сотрудники
                учатся, HR — управляет, руководитель — видит результат в режиме
                реального времени.
              </p>
            </div>

            {/* Workflow steps */}
            <ol className="flex flex-col gap-4 [list-style:none] [padding-inline-start:0]">
              {STEPS.map(({ num, title, desc }, i) => (
                <li
                  key={num}
                  className="border-outline-variant/55 bg-surface-container-lowest/70 group relative flex gap-4 rounded-2xl border p-5 transition-all hover:border-primary/40 hover:bg-surface-container-lowest"
                >
                  <span className="display-number text-primary/35 flex-shrink-0 text-[40px] leading-none">
                    {num}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-on-background mb-1.5 text-[16px] font-bold">
                      {title}
                    </h3>
                    <p className="text-on-surface-variant text-[14px] leading-snug">
                      {desc}
                    </p>
                  </div>
                  {i < STEPS.length - 1 ? (
                    <span
                      aria-hidden
                      className="v-connector absolute -bottom-4 left-9 h-4"
                    />
                  ) : null}
                </li>
              ))}
            </ol>

            {/* CTA Buttons (только на мобиле, на десктопе они уйдут вниз справа) */}
            <div className="flex flex-col gap-3 sm:flex-row lg:hidden">
              <button type="button" className="btn-premium btn-premium--accent">
                Попробовать платформу
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
              <button type="button" className="btn-premium btn-premium--ghost">
                Консультация
              </button>
            </div>
          </div>

          {/* RIGHT 61.8% — premium feature card */}
          <div className="flex flex-col gap-6">
            {/* Mockup-блок «платформа» */}
            <div className="relative overflow-hidden rounded-3xl border border-outline-variant/40 bg-gradient-to-br from-primary via-[#004c69] to-[#001e2c] p-1 shadow-[0_30px_60px_-20px_rgba(0,30,44,0.45)]">
              <div className="bg-surface-container-lowest rounded-[1.4rem] p-7 md:p-9">
                {/* Browser-like bar */}
                <div className="border-outline-variant/40 mb-6 flex items-center gap-2 border-b pb-4">
                  <span className="bg-error/70 h-3 w-3 rounded-full" />
                  <span className="bg-secondary-container/80 h-3 w-3 rounded-full" />
                  <span className="bg-primary/80 h-3 w-3 rounded-full" />
                  <span className="bg-surface-container-low text-on-surface-variant ml-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      lock
                    </span>
                    skillpass.kz/learn
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-8">
                  {/* левая часть — progress hero */}
                  <div>
                    <div className="text-on-surface-variant text-[11px] uppercase tracking-[0.18em]">
                      Текущий курс
                    </div>
                    <h3 className="font-headline-md text-on-background mt-2 text-[20px] leading-snug">
                      Охрана труда · базовый
                    </h3>
                    <div className="mt-5">
                      <div className="text-on-surface-variant mb-2 flex items-center justify-between text-[12px]">
                        <span>Прогресс</span>
                        <span className="text-on-background font-bold tabular-nums">
                          68%
                        </span>
                      </div>
                      <div className="bg-surface-container relative h-2 w-full overflow-hidden rounded-full">
                        <span className="bg-gradient-to-r from-primary to-secondary-container absolute inset-y-0 left-0 w-[68%] rounded-full" />
                      </div>
                    </div>

                    <ul className="mt-6 flex flex-col gap-2.5 [list-style:none] [padding-inline-start:0]">
                      {[
                        { t: 'Введение в ОТ', s: 'done' },
                        { t: 'Нормативная база РК', s: 'done' },
                        { t: 'Оценка профессиональных рисков', s: 'active' },
                        { t: 'Итоговый тест', s: 'pending' },
                      ].map(({ t, s }) => (
                        <li key={t} className="flex items-center gap-3">
                          <span
                            className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[14px] ${
                              s === 'done'
                                ? 'bg-primary text-on-primary'
                                : s === 'active'
                                ? 'bg-secondary-container text-on-secondary-container ring-secondary-container/30 ring-4'
                                : 'bg-surface-container text-on-surface-variant'
                            }`}
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              {s === 'done' ? 'check' : s === 'active' ? 'play_arrow' : 'circle'}
                            </span>
                          </span>
                          <span
                            className={`text-[13px] ${
                              s === 'pending'
                                ? 'text-on-surface-variant'
                                : 'text-on-background font-semibold'
                            }`}
                          >
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* правая часть — мини-цифры */}
                  <div className="flex flex-col gap-3">
                    {[
                      { l: 'Назначено', v: '124', i: 'assignment' },
                      { l: 'Завершили', v: '98', i: 'task_alt' },
                      { l: 'Просрочено', v: '0', i: 'priority_high' },
                    ].map(({ l, v, i }) => (
                      <div
                        key={l}
                        className="border-outline-variant/45 bg-surface-container-low/60 flex items-center gap-3 rounded-2xl border p-3.5"
                      >
                        <span className="bg-primary-fixed text-primary inline-flex h-10 w-10 items-center justify-center rounded-xl">
                          <span className="material-symbols-outlined text-[20px]">
                            {i}
                          </span>
                        </span>
                        <div className="leading-tight">
                          <div className="text-on-surface-variant text-[11px] uppercase tracking-wider">
                            {l}
                          </div>
                          <div className="text-on-background text-[20px] font-extrabold tabular-nums">
                            {v}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Сетка преимуществ 3×2 */}
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 sm:gap-4">
              {BENEFITS.map(({ icon, title, description }) => (
                <div
                  key={title}
                  className="border-outline-variant/55 bg-surface-container-lowest/80 group relative overflow-hidden rounded-2xl border p-5 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <span className="bg-primary-fixed text-primary inline-flex h-9 w-9 items-center justify-center rounded-xl transition-colors group-hover:bg-primary group-hover:text-on-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      {icon}
                    </span>
                  </span>
                  <h4 className="text-on-background mt-4 text-[14px] font-bold leading-snug">
                    {title}
                  </h4>
                  <p className="text-on-surface-variant mt-1 text-[12px] leading-snug">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA row (десктоп) */}
            <div className="hidden flex-col gap-3 sm:flex-row lg:flex">
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
      </div>
    </section>
  );
}
