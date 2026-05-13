import { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import BlobAccent from '../components/BlobAccent';
import CourseIncludesSection from '../components/CourseIncludesSection';
import Header from '../components/Header';
import LandingFooter from '../components/LandingFooter';
import { getCourseBySlug } from '../data/courses';
import { buildCoursePageViewModel } from '../lib/courseDetailViewModel';

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug);

  const vm = useMemo(() => (course ? buildCoursePageViewModel(course) : null), [course]);

  if (!course || !vm) {
    return <Navigate to="/" replace />;
  }

  const steps = [
    {
      n: '01',
      icon: 'app_registration',
      title: 'Регистрация',
      text: 'Оставьте заявку и получите доступ к личному кабинету платформы.',
      circle: 'bg-primary text-on-primary',
    },
    {
      n: '02',
      icon: 'menu_book',
      title: 'Обучение',
      text: 'Изучайте материалы онлайн в удобное время с любого устройства.',
      circle: 'bg-primary-container text-on-primary-container',
    },
    {
      n: '03',
      icon: 'quiz',
      title: 'Тестирование',
      text: 'Пройдите итоговый тест и подтвердите полученные знания.',
      circle: 'bg-secondary text-on-secondary',
    },
    {
      n: '04',
      icon: 'workspace_premium',
      title: 'Сертификат',
      text: 'Получите подтверждающий документ после успешного прохождения.',
      circle: 'bg-secondary-container text-on-secondary-container',
    },
  ] as const;

  const whyChoose = [
    {
      t: 'Доступ 24/7',
      d: 'Сотрудники проходят обучение в удобное время без отрыва от работы.',
      icon: 'devices',
    },
    {
      t: 'Актуальные материалы',
      d: 'Программы помогают закрывать требования обучения и проверок.',
      icon: 'verified_user',
    },
    {
      t: 'Контроль прогресса',
      d: 'HR и руководитель видят статусы сотрудников в личном кабинете.',
      icon: 'dashboard_customize',
    },
  ] as const;

  return (
    <div className="course-detail-page bg-background text-on-background flex min-h-screen flex-col font-body-md text-body-md antialiased">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumbs */}
        <nav
          aria-label="Навигация по разделам"
          className="border-outline-variant/40 bg-surface-container-low/80 border-b backdrop-blur-sm"
        >
          <div className="mx-auto w-full max-w-[1500px] px-margin-mobile py-3 md:px-margin-desktop xl:px-8">
            <div className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-on-surface-variant">
              <Link to="/" className="text-primary transition-colors hover:text-primary-container">
                Главная
              </Link>

              <span className="material-symbols-outlined text-[16px] opacity-60" aria-hidden>
                chevron_right
              </span>

              <Link to="/#nashi-kursy" className="transition-colors hover:text-primary">
                Курсы
              </Link>

              <span className="material-symbols-outlined text-[16px] opacity-60" aria-hidden>
                chevron_right
              </span>

              <span className="max-w-[min(100%,42rem)] truncate text-on-background">
                {course.title}
              </span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-surface py-section-padding">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />

          <div
            className="pointer-events-none absolute -top-32 right-1/4 h-[480px] w-[580px] rounded-full bg-secondary-fixed-dim/20 blur-[150px]"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute -bottom-32 left-1/4 h-[420px] w-[620px] rounded-full bg-primary-fixed/25 blur-[150px]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch xl:gap-10">
              {/* Hero left */}
              <div className="relative overflow-hidden rounded-[2.75rem] border border-outline-variant/50 bg-surface-container-lowest/85 p-6 shadow-sm backdrop-blur md:p-8 lg:p-10">
                <div
                  aria-hidden
                  className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary-fixed-dim/20 blur-3xl"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-fixed/20 blur-3xl"
                />

                <div className="relative z-10">
                  <div className="mb-6 flex flex-wrap items-center gap-2">
                    {vm.badges.map((b) => (
                      <span
                        key={b.label}
                        className={
                          b.variant === 'primary'
                            ? 'bg-primary-fixed text-primary inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold shadow-sm'
                            : 'border-outline-variant/55 bg-surface-container-lowest text-on-surface-variant inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold'
                        }
                      >
                        {b.icon ? (
                          <span className="material-symbols-outlined text-[14px]" aria-hidden>
                            {b.icon}
                          </span>
                        ) : null}
                        {b.label}
                      </span>
                    ))}
                  </div>

                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/45 px-4 py-2 text-[12px] font-semibold text-primary">
                    <span className="material-symbols-outlined text-[17px]">
                      school
                    </span>
                    Онлайн-курс SkillPass
                  </div>

                  <h1 className="max-w-4xl text-[36px] font-extrabold leading-[1.04] tracking-tight text-on-background md:text-[56px] lg:text-[64px]">
                    <BlobAccent>{vm.titleHighlight}</BlobAccent>

                    {vm.titleRest ? (
                      <>
                        <br />
                        <span className="text-on-background">{vm.titleRest}</span>
                      </>
                    ) : null}
                  </h1>

                  <p className="mt-6 max-w-3xl text-[16px] leading-[1.75] text-on-surface-variant md:text-[18px]">
                    {vm.heroLead}
                  </p>

                  {vm.heroSecond ? (
                    <p className="mt-4 max-w-3xl text-[15px] leading-[1.7] text-on-surface-variant md:text-[16px]">
                      {vm.heroSecond}
                    </p>
                  ) : null}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      to="/#cta-final"
                      className="btn-premium btn-premium--accent text-[15px]"
                    >
                      Записаться на курс
                      <span className="material-symbols-outlined text-[20px]" aria-hidden>
                        arrow_forward
                      </span>
                    </Link>

                    <Link
                      to="/#format-obucheniya"
                      className="btn-premium btn-premium--ghost text-[15px]"
                    >
                      <span className="material-symbols-outlined text-[20px]" aria-hidden>
                        business_center
                      </span>
                      Для бизнеса
                    </Link>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {vm.heroChecks.map((t) => (
                      <div
                        key={t}
                        className="flex items-start gap-3 rounded-2xl border border-outline-variant/45 bg-surface-container-low/70 p-4"
                      >
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                          <span className="material-symbols-outlined text-[17px]" aria-hidden>
                            check
                          </span>
                        </span>

                        <span className="text-[14px] font-medium leading-snug text-on-surface-variant">
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hero right mockup */}
              <div className="relative overflow-hidden rounded-[2.75rem] border border-outline-variant/50 bg-gradient-to-br from-primary via-[#004c69] to-[#001e2c] p-1 shadow-[0_30px_60px_-20px_rgba(0,30,44,0.45)]">
                <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-surface-container-lowest p-5 md:p-6 lg:p-7">
                  <div
                    aria-hidden
                    className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary-fixed-dim/25 blur-3xl"
                  />

                  <div
                    aria-hidden
                    className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-fixed/25 blur-3xl"
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-5 flex flex-wrap items-center gap-2 border-b border-outline-variant/40 pb-4">
                      <span className="h-3 w-3 rounded-full bg-error/70" />
                      <span className="h-3 w-3 rounded-full bg-secondary-container/80" />
                      <span className="h-3 w-3 rounded-full bg-primary/80" />

                      <span className="ml-0 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3 py-1 text-[11px] font-medium text-on-surface-variant sm:ml-3">
                        <span className="material-symbols-outlined text-[14px]">
                          lock
                        </span>
                        skillpass.kz/course
                      </span>
                    </div>

                    <div className="relative mb-5 overflow-hidden rounded-[2rem] border border-outline-variant/40 bg-surface-container-low/70">
                      <img
                        src={vm.heroImage}
                        alt=""
                        className="aspect-[16/9] w-full object-cover"
                      />

                      <div
                        className="absolute inset-0 bg-gradient-to-t from-on-background/55 via-transparent to-transparent"
                        aria-hidden
                      />

                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/90 p-3 text-on-background shadow-sm backdrop-blur">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary">
                          <span className="material-symbols-outlined text-[22px]">
                            play_arrow
                          </span>
                        </span>

                        <div>
                          <div className="text-[13px] font-extrabold">
                            Программа на платформе SkillPass
                          </div>
                          <div className="text-[11px] font-semibold text-on-surface-variant">
                            онлайн-обучение + тестирование
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-[1.5rem] border border-outline-variant/45 bg-surface-container-low/70 p-4">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed text-primary">
                          <span className="material-symbols-outlined text-[21px]">
                            verified
                          </span>
                        </span>
                        <div className="mt-3 text-[18px] font-extrabold text-on-background">
                          Стандарт
                        </div>
                        <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
                          требования
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-outline-variant/45 bg-surface-container-low/70 p-4">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed text-primary">
                          <span className="material-symbols-outlined text-[21px]">
                            devices
                          </span>
                        </span>
                        <div className="mt-3 text-[18px] font-extrabold text-on-background">
                          100%
                        </div>
                        <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
                          онлайн
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-outline-variant/45 bg-surface-container-low/70 p-4">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed text-primary">
                          <span className="material-symbols-outlined text-[21px]">
                            workspace_premium
                          </span>
                        </span>
                        <div className="mt-3 text-[18px] font-extrabold text-on-background">
                          Документ
                        </div>
                        <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
                          после курса
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 rounded-[1.75rem] border border-primary/25 bg-primary-fixed/45 p-4">
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                        Результат
                      </div>

                      <p className="text-[15px] font-semibold leading-snug text-on-background">
                        Сотрудник проходит курс, сдаёт тест и получает подтверждение
                        прохождения в системе.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="relative w-full overflow-hidden bg-surface-container-low py-section-padding">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />

          <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <span className="section-index mb-4 inline-block">Аудитория</span>

                <h2 className="max-w-3xl text-[32px] font-extrabold leading-tight text-on-background md:text-[46px]">
                  {vm.audienceTitle}
                </h2>
              </div>

              <p className="max-w-2xl text-[16px] leading-[1.75] text-on-surface-variant lg:ml-auto lg:text-right">
                {vm.audienceIntro}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {vm.audienceCards.map((card, idx) => (
                <article
                  key={card.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-outline-variant/45 bg-surface-container-lowest/85 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_50px_-28px_rgba(0,30,44,0.35)] md:p-7"
                >
                  <div
                    aria-hidden
                    className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary-fixed/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative z-10">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <span className="section-index tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <div
                        className={`flex h-13 w-13 items-center justify-center rounded-2xl ${
                          card.icon === 'engineering'
                            ? 'bg-secondary-fixed text-secondary'
                            : card.icon === 'groups'
                              ? 'bg-tertiary-fixed text-tertiary'
                              : 'bg-primary-fixed text-primary'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[27px]" aria-hidden>
                          {card.icon}
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-3 text-[22px] font-extrabold leading-snug text-on-background">
                      {card.title}
                    </h3>

                    <p className="text-[15px] leading-[1.7] text-on-surface-variant">
                      {card.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CourseIncludesSection course={course} courseShortLabel={vm.titleHighlight} />

        {/* Program */}
        <section className="relative w-full overflow-hidden bg-surface py-section-padding">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden />

          <div
            aria-hidden
            className="pointer-events-none absolute -top-28 right-1/4 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/20 blur-[140px]"
          />

          <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
            <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <span className="section-index">Программа</span>
                <span className="hairline hidden w-28 opacity-70 sm:block" />
              </div>

              <span className="eyebrow w-fit rounded-full border border-outline-variant/50 bg-surface-container-lowest/70 px-4 py-2 before:hidden">
                Modules · Test · Certificate
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[2.75rem] border border-outline-variant/50 bg-surface-container-lowest/80 p-5 shadow-sm backdrop-blur md:p-6 lg:p-7">
              <div
                aria-hidden
                className="absolute -bottom-32 -left-32 h-[420px] w-[560px] rounded-full bg-primary-fixed/25 blur-[150px]"
              />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
                <div className="relative overflow-hidden rounded-[2.25rem] border border-outline-variant/45 bg-surface/75 p-6 md:p-8">
                  <div
                    aria-hidden
                    className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary-fixed-dim/20 blur-3xl"
                  />

                  <div className="relative z-10">
                    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/45 px-4 py-2 text-[12px] font-semibold text-primary">
                      <span className="material-symbols-outlined text-[17px]">
                        list_alt
                      </span>
                      Содержание курса
                    </div>

                    <h2 className="mb-5 text-[32px] font-extrabold leading-tight text-on-background md:text-[44px]">
                      Что входит в <BlobAccent variant="alt">программу</BlobAccent>
                    </h2>

                    <p className="mb-7 text-[16px] leading-[1.75] text-on-surface-variant">
                      {vm.programIntro}
                    </p>

                    <div className="rounded-[1.75rem] border border-outline-variant/45 bg-surface-container-low/70 p-5">
                      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                        В программе
                      </p>

                      <ul className="flex flex-col gap-4 [list-style:none] [padding-inline-start:0]">
                        {vm.programHighlights.map((row) => (
                          <li key={row.text} className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-fixed text-primary">
                              <span className="material-symbols-outlined text-[21px]" aria-hidden>
                                {row.icon}
                              </span>
                            </span>

                            <span className="pt-1 text-[14px] font-semibold leading-snug text-on-background">
                              {row.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {vm.accordion.map((mod, i) => (
                    <details
                      key={mod.code}
                      className="group overflow-hidden rounded-[1.75rem] border border-outline-variant/45 bg-surface/75 shadow-sm transition-all open:border-primary/30 open:bg-surface-container-lowest"
                      open={i === 0}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6">
                        <div className="flex min-w-0 flex-1 items-center gap-4">
                          <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-2xl bg-primary-fixed text-sm font-extrabold tabular-nums text-primary">
                            {mod.code}
                          </span>

                          <span className="text-[18px] font-extrabold leading-snug text-on-background md:text-[20px]">
                            {mod.title}
                          </span>
                        </div>

                        <span
                          className="material-symbols-outlined shrink-0 text-on-surface-variant transition-transform duration-300 group-open:rotate-180"
                          aria-hidden
                        >
                          expand_more
                        </span>
                      </summary>

                      <div className="border-t border-outline-variant/30 px-5 pb-5 pt-0 text-on-surface-variant md:px-6 md:pb-6">
                        <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-relaxed marker:text-primary">
                          {mod.bullets.map((liText) => (
                            <li key={liText}>{liText}</li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative w-full overflow-hidden bg-surface-container-low py-section-padding">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />

          <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
            <div className="mb-12 text-center">
              <span className="section-index mb-4 inline-block">Процесс</span>

              <h2 className="mx-auto max-w-3xl text-[32px] font-extrabold leading-tight text-on-background md:text-[48px]">
                Как проходит обучение
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.7] text-on-surface-variant">
                Весь путь проходит онлайн: от заявки и доступа к материалам до
                тестирования и получения подтверждающего документа.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2.75rem] border border-outline-variant/45 bg-surface-container-lowest/80 p-5 shadow-sm backdrop-blur md:p-6 lg:p-8">
              <div
                className="pointer-events-none absolute left-[8%] right-[8%] top-[6.1rem] z-0 hidden h-px bg-outline-variant/60 lg:block"
                aria-hidden
              />

              <div className="relative z-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step) => (
                  <div
                    key={step.n}
                    className="group relative overflow-hidden rounded-[2rem] border border-outline-variant/45 bg-surface/75 p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/35 hover:bg-surface-container-lowest"
                  >
                    <div className="mx-auto mb-5 flex h-[5.25rem] w-[5.25rem] items-center justify-center rounded-full border-4 border-surface-container-lowest shadow-[0_12px_28px_-12px_rgba(0,30,44,0.25)]">
                      <div
                        className={`flex h-full w-full items-center justify-center rounded-full ${step.circle}`}
                      >
                        <span className="material-symbols-outlined text-[34px]" aria-hidden>
                          {step.icon}
                        </span>
                      </div>
                    </div>

                    <span className="mb-2 block text-xs font-bold tabular-nums text-primary">
                      {step.n}
                    </span>

                    <h3 className="mb-2 text-[20px] font-extrabold text-on-background">
                      {step.title}
                    </h3>

                    <p className="mx-auto max-w-[24ch] text-[14px] leading-[1.65] text-on-surface-variant">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certificate */}
        <section className="relative w-full overflow-hidden bg-surface py-section-padding">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden />

          <div
            className="pointer-events-none absolute -bottom-20 left-1/2 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-primary-fixed/25 blur-[130px]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 items-stretch gap-8 px-margin-mobile md:px-margin-desktop lg:grid-cols-[0.9fr_1.1fr] xl:px-8">
            <div className="relative overflow-hidden rounded-[2.75rem] border border-outline-variant/50 bg-surface-container-lowest/85 p-6 shadow-sm backdrop-blur md:p-8 lg:p-10">
              <div
                aria-hidden
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary-fixed-dim/20 blur-3xl"
              />

              <div className="relative z-10">
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/45 px-4 py-2 text-[12px] font-semibold text-primary">
                  <span className="material-symbols-outlined text-[17px]">
                    workspace_premium
                  </span>
                  Документ после прохождения
                </div>

                <h2 className="mb-6 text-[32px] font-extrabold leading-tight text-on-background md:text-[46px]">
                  <BlobAccent variant="squircle">Официальный</BlobAccent>{' '}
                  сертификат
                </h2>

                <p className="mb-8 text-[16px] leading-[1.75] text-on-surface-variant">
                  {vm.certificateParagraph}
                </p>

                <div className="mb-8 rounded-[2rem] border border-outline-variant/45 bg-surface-container-low/70 p-5 md:p-6">
                  <h3 className="mb-5 text-[22px] font-extrabold text-on-background">
                    Почему SkillPass
                  </h3>

                  <ul className="flex flex-col gap-4 [list-style:none] [padding-inline-start:0]">
                    {whyChoose.map((row) => (
                      <li key={row.t} className="flex items-start gap-4">
                        <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-fixed text-primary">
                          <span className="material-symbols-outlined text-[22px]" aria-hidden>
                            {row.icon}
                          </span>
                        </span>

                        <div>
                          <strong className="text-[16px] font-extrabold text-on-background">
                            {row.t}
                          </strong>

                          <p className="mt-1 text-[14px] leading-relaxed text-on-surface-variant">
                            {row.d}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/#cta-final"
                    className="btn-premium btn-premium--accent text-[15px]"
                  >
                    Начать обучение
                    <span className="material-symbols-outlined text-[20px]" aria-hidden>
                      arrow_forward
                    </span>
                  </Link>

                  <Link
                    to="/#nashi-kursy"
                    className="btn-premium btn-premium--ghost text-[15px]"
                  >
                    <span className="material-symbols-outlined text-[19px]" aria-hidden>
                      arrow_back
                    </span>
                    Все курсы
                  </Link>
                </div>
              </div>
            </div>

            {/* Certificate preview */}
            <div className="relative overflow-hidden rounded-[2.75rem] border border-outline-variant/50 bg-gradient-to-br from-primary via-[#004c69] to-[#001e2c] p-1 shadow-[0_30px_60px_-20px_rgba(0,30,44,0.45)]">
              <div className="relative flex h-full min-h-[520px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-surface-container-lowest p-6 md:p-10">
                <div
                  aria-hidden
                  className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary-fixed-dim/25 blur-3xl"
                />

                <div
                  aria-hidden
                  className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-fixed/25 blur-3xl"
                />

                <div className="relative w-full max-w-xl rotate-[-1.5deg] rounded-[1.75rem] border border-outline-variant/35 bg-white p-7 shadow-[0_30px_80px_-35px_rgba(0,30,44,0.45)] md:p-9">
                  <div className="absolute -right-5 -top-5 flex h-20 w-20 items-center justify-center rounded-full bg-secondary-container shadow-lg">
                    <span className="material-symbols-outlined text-[36px] text-on-secondary-container" aria-hidden>
                      verified
                    </span>
                  </div>

                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-on-primary">
                        <span className="material-symbols-outlined text-[26px]">
                          workspace_premium
                        </span>
                      </span>

                      <div>
                        <div className="text-[18px] font-extrabold text-on-background">
                          SkillPass.kz
                        </div>

                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                          Safety platform
                        </div>
                      </div>
                    </div>

                    <div className="text-right text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      Certificate
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-on-surface-variant">
                      подтверждение прохождения
                    </div>

                    <h4 className="mb-4 text-[30px] font-extrabold uppercase tracking-[0.08em] text-on-background md:text-[38px]">
                      Сертификат
                    </h4>

                    <p className="mx-auto mb-8 max-w-sm text-[13px] leading-relaxed text-on-surface-variant">
                      О прохождении проверки знаний по теме курса
                    </p>
                  </div>

                  <div className="mb-8 rounded-2xl border border-outline-variant/45 bg-surface-container-low p-5">
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                      Курс
                    </div>

                    <div className="text-[18px] font-extrabold leading-snug text-on-background">
                      {course.title}
                    </div>
                  </div>

                  <div className="mb-10">
                    <div className="mb-2 border-b border-outline-variant" />
                    <p className="text-center text-[11px] font-semibold text-on-surface-variant">
                      ФИО слушателя
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="mb-2 border-b border-outline-variant" />
                      <p className="text-center text-[10px] text-on-surface-variant">
                        Председатель комиссии
                      </p>
                    </div>

                    <div>
                      <div className="mb-2 border-b border-outline-variant" />
                      <p className="text-center text-[10px] text-on-surface-variant">
                        Дата выдачи
                      </p>
                    </div>
                  </div>

                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-5 rounded-[1.25rem] border border-primary/15"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final course CTA */}
        <section className="bg-surface pb-section-padding">
          <div className="mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
            <div className="relative overflow-hidden rounded-[2.75rem] border border-outline-variant/50 bg-gradient-to-br from-primary via-[#004c69] to-[#001e2c] p-1 shadow-[0_30px_60px_-20px_rgba(0,30,44,0.45)]">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-surface-container-lowest p-6 md:p-8 lg:p-10">
                <div
                  aria-hidden
                  className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary-fixed-dim/25 blur-3xl"
                />

                <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                      Готовы начать?
                    </div>

                    <h2 className="max-w-4xl text-[28px] font-extrabold leading-tight text-on-background md:text-[38px]">
                      Запустите обучение по курсу “{course.title}” через SkillPass
                    </h2>

                    <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-on-surface-variant">
                      Покажем платформу, объясним формат обучения и поможем
                      подключить сотрудников.
                    </p>
                  </div>

                  <Link
                    to="/#cta-final"
                    className="btn-premium btn-premium--accent w-fit shrink-0 text-[15px]"
                  >
                    Получить консультацию
                    <span className="material-symbols-outlined text-[20px]" aria-hidden>
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}