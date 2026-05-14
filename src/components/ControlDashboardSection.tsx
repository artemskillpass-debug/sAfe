import BlobAccent from './BlobAccent';

type Status = 'done' | 'in-progress' | 'overdue' | 'assigned';

type EmployeeRow = {
  initials: string;
  name: string;
  position: string;
  course: string;
  progress: number;
  status: Status;
};

const ROWS: EmployeeRow[] = [
  {
    initials: 'АК',
    name: 'Айдос Касымов',
    position: 'Электромонтёр · Алматы',
    course: 'Электробезопасность · III группа',
    progress: 100,
    status: 'done',
  },
  {
    initials: 'ДН',
    name: 'Динара Нурланова',
    position: 'HR-специалист · Астана',
    course: 'Антикоррупционные требования',
    progress: 65,
    status: 'in-progress',
  },
  {
    initials: 'РТ',
    name: 'Руслан Темиров',
    position: 'Мастер участка · Шымкент',
    course: 'Охрана труда для руководителей',
    progress: 30,
    status: 'overdue',
  },
  {
    initials: 'АС',
    name: 'Алина Сериккызы',
    position: 'Бухгалтер · Караганда',
    course: 'Внутренний контроль и комплаенс',
    progress: 0,
    status: 'assigned',
  },
  {
    initials: 'БМ',
    name: 'Бахытжан Маратов',
    position: 'Инженер-механик · Атырау',
    course: 'Промышленная безопасность',
    progress: 82,
    status: 'in-progress',
  },
];

const STATUS_META: Record<
  Status,
  { label: string; pill: string; dot: string; bar: string }
> = {
  done: {
    label: 'Завершено',
    pill: 'bg-primary text-on-primary',
    dot: 'bg-on-primary',
    bar: 'bg-primary',
  },
  'in-progress': {
    label: 'В процессе',
    pill: 'bg-primary-fixed text-primary',
    dot: 'bg-primary',
    bar: 'bg-primary/85',
  },
  overdue: {
    label: 'Просрочено',
    pill: 'bg-secondary-container text-on-secondary-container',
    dot: 'bg-on-secondary-container',
    bar: 'bg-on-secondary-container/75',
  },
  assigned: {
    label: 'Назначено',
    pill: 'border border-outline-variant/60 bg-surface text-on-surface-variant',
    dot: 'bg-on-surface-variant/60',
    bar: 'bg-outline-variant',
  },
};

const HIGHLIGHTS = [
  {
    icon: 'groups',
    title: 'Назначение по группам',
    desc: 'Один курс — для всего подразделения, должности или филиала, без ручного перебора сотрудников.',
  },
  {
    icon: 'notifications_active',
    title: 'Сроки и напоминания',
    desc: 'Платформа сама уведомляет сотрудника о дедлайне и аттестации, а ответственного — о просрочках.',
  },
  {
    icon: 'download',
    title: 'Экспорт для проверок',
    desc: 'Списки, статусы и подтверждающие документы выгружаются в PDF или Excel в один клик.',
  },
];

function EmployeeRowItem({ row, first }: { row: EmployeeRow; first: boolean }) {
  const meta = STATUS_META[row.status];

  return (
    <div
      className={`grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-3.5 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.15fr)_auto] md:px-6 ${
        first ? '' : 'border-t border-outline-variant/35'
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-[12px] font-bold text-primary">
          {row.initials}
        </span>

        <div className="min-w-0">
          <div className="truncate text-[13px] font-bold text-on-background">
            {row.name}
          </div>

          <div className="truncate text-[11px] text-on-surface-variant">
            {row.position}
          </div>
        </div>
      </div>

      <div className="hidden min-w-0 flex-col gap-1.5 md:flex">
        <div className="truncate text-[11.5px] text-on-surface-variant">
          {row.course}
        </div>

        <div className="flex items-center gap-2.5">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
            <div
              className={`absolute inset-y-0 left-0 rounded-full transition-all ${meta.bar}`}
              style={{ width: `${row.progress}%` }}
            />
          </div>

          <span className="w-9 shrink-0 text-right text-[10.5px] font-bold tabular-nums text-on-surface-variant">
            {row.progress}%
          </span>
        </div>
      </div>

      <span
        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider ${meta.pill}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
        {meta.label}
      </span>
    </div>
  );
}

export default function ControlDashboardSection() {
  return (
    <section
      id="kontrol"
      className="relative w-full overflow-hidden bg-surface py-section-padding"
    >
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-25"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[460px] w-[560px] rounded-full bg-primary-fixed/25 blur-[150px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/5 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/18 blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-margin-mobile md:px-margin-desktop xl:px-8">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="section-index">02 · Контроль</span>
            <span
              aria-hidden
              className="hairline hidden w-28 opacity-70 sm:block"
            />
          </div>

          <span className="eyebrow w-fit rounded-full border border-outline-variant/50 bg-surface-container-lowest/70 px-4 py-2 before:hidden">
            Dashboard · Statuses · Reports
          </span>
        </div>

        {/* Intro */}
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end xl:mb-12">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/45 px-4 py-2 text-[12px] font-semibold text-primary">
              <span className="material-symbols-outlined text-[17px]">
                monitoring
              </span>
              Сценарий 2 · назначение и контроль
            </div>

            <h2 className="text-[34px] font-extrabold leading-[1.04] tracking-tight text-on-background md:text-[50px] lg:text-[58px]">
              <span className="block">Один кабинет</span>
              <span className="block">
                вместо десятков <BlobAccent variant="alt">таблиц</BlobAccent>
              </span>
              <span className="block font-medium italic text-on-surface-variant">
                и сообщений в чатах
              </span>
            </h2>
          </div>

          <div className="rounded-[2rem] border border-outline-variant/45 bg-surface-container-lowest/80 p-5 shadow-sm backdrop-blur md:p-6">
            <p className="text-[15px] leading-[1.75] text-on-surface-variant md:text-[16px]">
              Назначайте курсы по подразделениям, отслеживайте прохождение в
              реальном времени и видите, кто завершил обучение, у кого подходит
              срок и кому нужно напомнить — всё на одном экране ответственного.
            </p>
          </div>
        </div>

        {/* Dashboard mockup + side panel */}
        <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr]">
          {/* Dashboard mockup */}
          <article
            aria-label="Пример кабинета HR в SkillPass"
            className="relative overflow-hidden rounded-[2.5rem] border border-outline-variant/50 bg-surface-container-lowest/90 shadow-sm backdrop-blur"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-primary-fixed/30 blur-3xl"
            />

            {/* Toolbar */}
            <div className="relative z-10 flex items-center justify-between gap-4 border-b border-outline-variant/40 px-5 py-4 md:px-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary shadow-[0_8px_18px_-8px_rgba(0,102,138,0.55)]">
                  <span className="material-symbols-outlined text-[20px]">
                    space_dashboard
                  </span>
                </span>

                <div>
                  <div className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
                    Кабинет HR
                  </div>

                  <div className="text-[14px] font-extrabold leading-tight text-on-background md:text-[15px]">
                    Обучение по охране труда
                  </div>
                </div>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/50 bg-surface px-3 py-1.5 text-[11px] font-semibold text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px]">
                    filter_list
                  </span>
                  Все филиалы
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary-fixed/55 px-3 py-1.5 text-[11px] font-bold text-primary">
                  Q2 · 2025
                </span>
              </div>
            </div>

            {/* Rows */}
            <div className="relative z-10">
              {ROWS.map((row, i) => (
                <EmployeeRowItem key={row.name} row={row} first={i === 0} />
              ))}
            </div>

            {/* Footer */}
            <div className="relative z-10 flex flex-col items-start justify-between gap-3 border-t border-outline-variant/40 bg-surface/60 px-5 py-3.5 md:flex-row md:items-center md:px-6">
              <div className="flex items-center gap-2 text-[12px] text-on-surface-variant">
                <span className="text-[15px] font-extrabold tabular-nums text-on-background">
                  12 / 16
                </span>
                сотрудников завершили обучение
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-on-primary shadow-[0_8px_18px_-8px_rgba(0,102,138,0.55)]">
                <span className="material-symbols-outlined text-[14px]">
                  file_download
                </span>
                Выгрузить отчёт
              </span>
            </div>
          </article>

          {/* Side column */}
          <div className="flex flex-col gap-4">
            <article className="relative overflow-hidden rounded-[2rem] border border-outline-variant/50 bg-surface-container-lowest/90 p-6 shadow-sm backdrop-blur md:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-secondary-fixed-dim/22 blur-3xl"
              />

              <div className="relative z-10">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                  Сводка по компании
                </div>

                <h3 className="text-[20px] font-extrabold leading-tight text-on-background md:text-[22px]">
                  Видно сразу, без выгрузок
                </h3>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { num: '128', label: 'сотрудников' },
                    { num: '9', label: 'курсов' },
                    { num: '4', label: 'филиала' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-outline-variant/40 bg-surface/70 p-3 text-center"
                    >
                      <div className="text-[22px] font-extrabold leading-none tabular-nums text-on-background">
                        {s.num}
                      </div>

                      <div className="mt-1 text-[10.5px] font-semibold text-on-surface-variant">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-primary/20 bg-primary-fixed/40 p-4">
                  <div className="flex items-center justify-between text-[12px] font-bold text-primary">
                    <span>Готовность к проверке</span>
                    <span className="tabular-nums">87%</span>
                  </div>

                  <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-surface">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: '87%' }}
                    />
                  </div>

                  <p className="mt-3 text-[11.5px] leading-snug text-on-surface-variant">
                    Осталось закрыть 4 направления — платформа подскажет, каких
                    сотрудников это касается.
                  </p>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary-fixed/35 p-5 backdrop-blur md:p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-primary-fixed/45 blur-3xl"
              />

              <div className="relative z-10 flex items-start gap-3.5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary-container text-on-secondary-container">
                  <span className="material-symbols-outlined text-[22px]">
                    schedule
                  </span>
                </span>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                    Напоминание
                  </div>

                  <p className="mt-1 text-[13.5px] font-bold leading-snug text-on-background">
                    У 3 сотрудников срок аттестации истекает через 14 дней —
                    система отправит уведомления автоматически.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {HIGHLIGHTS.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-outline-variant/45 bg-surface-container-lowest/80 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:bg-surface-container-lowest"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-fixed/25 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              />

              <div className="relative z-10 flex items-start gap-3.5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-fixed text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                  <span className="material-symbols-outlined text-[22px]">
                    {icon}
                  </span>
                </span>

                <div>
                  <h4 className="text-[15px] font-bold leading-snug text-on-background">
                    {title}
                  </h4>

                  <p className="mt-1.5 text-[12.5px] leading-snug text-on-surface-variant">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
