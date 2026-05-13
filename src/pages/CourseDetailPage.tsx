import { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import CourseIncludesSection from '../components/CourseIncludesSection';
import Header from '../components/Header';
import { getCourseBySlug } from '../data/courses';
import { buildCoursePageViewModel } from '../lib/courseDetailViewModel';

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug);

  const vm = useMemo(() => (course ? buildCoursePageViewModel(course) : null), [course]);

  if (!course || !vm) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="course-detail-page bg-background text-on-background flex min-h-screen flex-col font-body-md text-body-md antialiased">
      <Header />
      <main className="flex-grow">
        {/* Крошки */}
        <div className="max-w-container-max mx-auto px-gutter py-2">
          <div className="text-label-sm font-label-sm text-outline flex items-center gap-2">
            <Link to="/#nashi-kursy" className="hover:text-primary transition-colors">
              Курсы
            </Link>
            <span className="material-symbols-outlined text-[16px]" aria-hidden>
              chevron_right
            </span>
            <span className="text-on-surface-variant">{course.title}</span>
          </div>
        </div>

        {/* Hero — две колонки + бенто */}
        <section className="max-w-container-max mx-auto grid grid-cols-1 items-center gap-8 px-gutter py-10 md:gap-12 md:py-section-padding lg:grid-cols-2">
          <div className="flex flex-col gap-gutter">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              {vm.badges.map((b) => (
                <span
                  key={b.label}
                  className={
                    b.variant === 'primary'
                      ? 'bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm rounded-full px-3 py-1'
                      : 'bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 rounded-full px-3 py-1'
                  }
                >
                  {b.icon ? (
                    <span className="material-symbols-outlined text-[14px]">{b.icon}</span>
                  ) : null}
                  {b.label}
                </span>
              ))}
            </div>

            <h1 className="font-display-xl-mobile text-display-xl-mobile md:font-display-xl md:text-display-xl relative z-10 max-w-xl font-extrabold">
              <span className="relative inline-block">
                <span className="text-on-secondary-container relative z-10">{vm.titleHighlight}</span>
                <span
                  className="bg-secondary-container absolute inset-0 -z-0 origin-left scale-110 rounded-full"
                  aria-hidden
                />
              </span>
              {vm.titleRest ? (
                <>
                  <br />
                  {vm.titleRest}
                </>
              ) : null}
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{vm.heroLead}</p>
            {vm.heroSecond ? (
              <p className="font-body-md text-on-surface-variant max-w-2xl">{vm.heroSecond}</p>
            ) : null}

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                to="/#consultation"
                className="font-body-lg text-body-lg bg-primary-container text-on-primary-container hover:bg-on-primary-fixed-variant w-full rounded-full px-8 py-4 text-center shadow-sm transition-colors sm:w-auto"
              >
                Записаться на курс
              </Link>
              <Link
                to="/#business"
                className="font-body-lg text-body-lg bg-surface-container text-primary hover:bg-surface-container-high w-full rounded-full px-8 py-4 text-center shadow-sm transition-colors sm:w-auto"
              >
                Для бизнеса
              </Link>
            </div>

            <div className="text-outline mt-4 flex flex-wrap gap-4 text-sm">
              {vm.heroChecks.map((t) => (
                <div key={t} className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden h-[500px] grid-cols-2 grid-rows-2 gap-base lg:grid">
            <div className="border-outline-variant/30 relative col-span-2 row-span-1 overflow-hidden rounded-[2rem] border bg-surface-container shadow-sm">
              <img
                src={vm.heroImage}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="bg-on-background/20 absolute inset-0" aria-hidden />
            </div>
            <div className="border-secondary-fixed-dim/30 flex flex-col items-center justify-center rounded-[2rem] border bg-secondary-fixed p-gutter shadow-sm">
              <span className="material-symbols-outlined text-primary-container mb-2 text-[48px]">verified</span>
              <span className="font-headline-md text-headline-md text-on-secondary-container text-center font-bold">
                Гос. стандарт
              </span>
            </div>
            <div className="border-outline-variant/50 relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] border bg-surface-container-lowest p-gutter shadow-sm">
              <div
                className="bg-primary-fixed absolute -right-4 -bottom-4 h-24 w-24 rounded-full opacity-50 blur-xl"
                aria-hidden
              />
              <span className="font-display-xl text-display-xl text-primary-container">100%</span>
              <span className="font-body-md text-body-md text-on-surface-variant mt-1">Онлайн</span>
            </div>
          </div>
        </section>

        {/* Аудитория */}
        <section className="bg-surface-container-low w-full py-section-padding">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-12 text-center">
              <h2 className="font-headline-lg text-headline-lg text-on-background">{vm.audienceTitle}</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mx-auto mt-4 max-w-2xl">
                {vm.audienceIntro}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              {vm.audienceCards.map((card) => (
                <div
                  key={card.title}
                  className="border-outline-variant/30 flex h-full flex-col rounded-lg border bg-surface-container-lowest p-8 shadow-sm"
                >
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${
                      card.icon === 'engineering'
                        ? 'bg-secondary-fixed text-secondary'
                        : card.icon === 'groups'
                          ? 'bg-tertiary-fixed text-tertiary'
                          : 'bg-primary-fixed text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[32px]">{card.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-4">{card.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex-grow">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CourseIncludesSection course={course} courseShortLabel={vm.titleHighlight} />

        {/* Программа + аккордеоны */}
        <section className="max-w-container-max mx-auto px-gutter py-section-padding">
          <div className="grid grid-cols-1 gap-section-padding lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Программа курса</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">{vm.programIntro}</p>
              <div className="bg-surface-container rounded-lg p-6">
                <ul className="space-y-4">
                  {vm.programHighlights.map((row) => (
                    <li key={row.text} className="text-on-surface flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">{row.icon}</span>
                      <span className="font-body-md">{row.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-2">
              {vm.accordion.map((mod, i) => (
                <details
                  key={mod.code}
                  className="border-outline-variant/30 group rounded-lg border bg-surface-container-lowest shadow-sm"
                  open={i === 0}
                >
                  <summary className="font-headline-md text-headline-md text-on-background flex cursor-pointer list-none items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <span className="text-primary-container">{mod.code}</span>
                      {mod.title}
                    </div>
                    <span className="material-symbols-outlined text-outline transition-transform duration-300 group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="border-outline-variant/20 text-on-surface-variant font-body-md mt-2 border-t p-6 pt-0">
                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      {mod.bullets.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Как проходит */}
        <section className="bg-surface-container-highest w-full py-section-padding">
          <div className="max-w-container-max mx-auto px-gutter">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-16 text-center">
              Как проходит обучение
            </h2>
            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
              <div
                className="bg-outline-variant/50 pointer-events-none absolute top-12 right-[8%] left-[8%] z-0 hidden h-0.5 md:block"
                aria-hidden
              />
              {(
                [
                  { n: '1', icon: 'app_registration', title: 'Регистрация', text: 'Оставьте заявку и получите доступ к личному кабинету платформы.', circle: 'bg-primary text-on-primary' },
                  { n: '2', icon: 'menu_book', title: 'Обучение', text: 'Изучайте материалы курса в удобное для вас время с любого устройства.', circle: 'bg-primary-container text-on-primary-container' },
                  { n: '3', icon: 'quiz', title: 'Тестирование', text: 'Пройдите итоговый онлайн-тест для проверки усвоенных знаний.', circle: 'bg-secondary text-on-secondary' },
                  { n: '4', icon: 'workspace_premium', title: 'Сертификат', text: 'Получите подтверждение прохождения установленного образца.', circle: 'bg-secondary-container text-on-secondary-container' },
                ] as const
              ).map((step) => (
                <div key={step.n} className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className={`mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-surface-container-highest shadow-md ${step.circle}`}
                  >
                    <span className="material-symbols-outlined text-[40px]">{step.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-2">{step.n}. {step.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Сертификат + макет */}
        <section className="max-w-container-max mx-auto grid grid-cols-1 items-center gap-section-padding px-gutter py-section-padding lg:grid-cols-2">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-6">Официальный сертификат</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{vm.certificateParagraph}</p>
            <div className="bg-surface-container mb-8 rounded-lg p-6">
              <h3 className="font-headline-md text-headline-md text-on-background mb-4">Почему выбирают SkillPass:</h3>
              <ul className="space-y-4">
                {(
                  [
                    { t: 'Доступ 24/7', d: 'Обучайтесь в своем темпе, без отрыва от производства.' },
                    { t: 'Актуальные материалы', d: 'Программы обновляются с учётом изменений в нормах и практике проверок.' },
                    { t: 'Контроль прогресса', d: 'Для HR и руководителей доступна статистика по обучению сотрудников.' },
                  ] as const
                ).map((row) => (
                  <li key={row.t} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">task_alt</span>
                    <div>
                      <strong className="text-on-surface font-semibold">{row.t}</strong>
                      <p className="text-on-surface-variant mt-1 text-sm">{row.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/#consultation"
              className="font-body-lg text-body-lg bg-primary-container text-on-primary-container hover:bg-on-primary-fixed-variant inline-block w-full rounded-full px-8 py-4 text-center shadow-sm transition-colors sm:w-auto"
            >
              Начать обучение
            </Link>
            <div className="mt-6">
              <Link
                to="/#nashi-kursy"
                className="font-menu-item text-primary-container hover:text-primary text-sm font-semibold underline-offset-4 hover:underline"
              >
                ← Все курсы
              </Link>
            </div>
          </div>

          <div className="border-outline-variant/30 relative flex items-center justify-center rounded-[2rem] border bg-surface-container-lowest p-8 shadow-lg">
            <div
              className="from-primary-fixed/20 to-secondary-fixed/20 absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr"
              aria-hidden
            />
            <div className="border-surface-container relative flex aspect-[1.4/1] w-full flex-col items-center justify-center overflow-hidden border-8 border-white bg-white p-6 shadow-sm">
              <div className="absolute top-4 right-4 left-4 flex items-center justify-between opacity-30">
                <div className="border-primary h-16 w-16 rounded-full border-4" aria-hidden />
                <div className="font-serif text-2xl text-primary">РК</div>
              </div>
              <h4 className="font-serif text-on-background mb-2 mt-8 text-center text-2xl uppercase tracking-widest">
                Сертификат
              </h4>
              <p className="text-on-surface-variant mb-6 text-center text-xs">
                О прохождении проверки знаний по теме курса
              </p>
              <div className="border-outline mb-2 w-3/4 border-b" />
              <p className="text-outline mb-6 text-center text-[10px]">ФИО слушателя</p>
              <div className="mt-8 grid w-full grid-cols-2 gap-4 px-8 opacity-50">
                <div>
                  <div className="border-outline mb-1 w-full border-b" />
                  <p className="text-[8px] text-center">Председатель комиссии</p>
                </div>
                <div>
                  <div className="border-outline mb-1 w-full border-b" />
                  <p className="text-[8px] text-center">Дата выдачи</p>
                </div>
              </div>
              <div className="bg-secondary-container absolute bottom-6 right-8 flex h-16 w-16 items-center justify-center rounded-full opacity-80 shadow-sm">
                <span className="material-symbols-outlined text-on-secondary-container">verified</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
