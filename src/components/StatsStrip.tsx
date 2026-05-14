import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileCheck2,
  FileWarning,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  XCircle,
} from 'lucide-react';

const BEFORE = [
  {
    title: 'Ручной контроль процессов',
    text: 'Ответственные сотрудники ведут обучение, сроки и статусы в Excel, чатах или на бумаге.',
  },
  {
    title: 'Документы разбросаны',
    text: 'Сертификаты, журналы и подтверждения сложно быстро найти перед проверкой.',
  },
  {
    title: 'Нет единой картины',
    text: 'Непонятно, кто прошел обучение, у кого истекают сроки и где есть нарушения.',
  },
  {
    title: 'Риски штрафов и замечаний',
    text: 'Ошибки в обучении, журналах и документах могут привести к проблемам при проверках.',
  },
];

const AFTER = [
  {
    title: 'Все обучение в одной системе',
    text: 'Курсы, сотрудники, тесты, прогресс и результаты собраны в единой онлайн-платформе.',
  },
  {
    title: 'Документы всегда под рукой',
    text: 'Сертификаты, журналы и подтверждения формируются и хранятся в кабинете компании.',
  },
  {
    title: 'Прозрачный контроль сроков',
    text: 'Руководитель видит статусы прохождения, просрочки и зоны риска по каждому направлению.',
  },
  {
    title: 'Готовность к проверкам',
    text: 'Компания быстрее закрывает обязательные требования и снижает ручную нагрузку на сотрудников.',
  },
];

const RESULT_ITEMS = [
  {
    icon: Clock,
    title: 'Меньше ручной работы',
    text: 'процессы не нужно вести в таблицах и чатах',
  },
  {
    icon: FileCheck2,
    title: 'Порядок в документах',
    text: 'сертификаты и журналы хранятся в системе',
  },
  {
    icon: LayoutDashboard,
    title: 'Контроль статусов',
    text: 'видно, кто прошел, кто просрочил и что требует внимания',
  },
];

export default function PlatformValueBlock() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low">
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-30"
      />

      <div
        aria-hidden
        className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Автоматизация безопасности бизнеса
            </div>

            <h2 className="text-on-background max-w-[760px] text-[34px] font-bold leading-[1.08] tracking-tight md:text-[52px]">
              Контроль безопасности
              <span className="block">без хаоса и ручной рутины</span>
            </h2>

            <p className="text-on-surface-variant mt-5 max-w-[680px] text-[16px] leading-relaxed md:text-[18px]">
              SkillPass объединяет обучение, электронные журналы, документы,
              сроки и готовность к проверкам в одной системе — чтобы процессы
              безопасности не зависели от Excel, чатов и бумажных папок.
            </p>
          </div>

          <div className="rounded-[28px] border border-outline-variant/40 bg-white/70 p-5 shadow-sm backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-on-background text-[16px] font-bold leading-snug">
                  От ручного контроля к управляемой системе
                </p>
                <p className="text-on-surface-variant mt-1 text-[14px] leading-relaxed">
                  SkillPass помогает заменить Excel, бумажные журналы и
                  разрозненные документы единым цифровым контуром для обучения,
                  контроля сроков и подготовки к проверкам.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[32px] border border-outline-variant/50 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md md:p-8">
            <div
              aria-hidden
              className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-red-50"
            />

            <div className="relative z-10 mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                <FileWarning className="h-6 w-6 text-red-500" />
              </div>

              <div>
                <h3 className="text-on-background text-[22px] font-bold">
                  Без SkillPass
                </h3>
                <p className="text-on-surface-variant text-sm">
                  много ручной работы, нет единого контроля
                </p>
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              {BEFORE.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-red-100/80 bg-white/70 p-4"
                >
                  <div className="flex gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />

                    <div>
                      <p className="text-on-background text-[15px] font-semibold leading-snug">
                        {item.title}
                      </p>
                      <p className="text-on-surface-variant mt-1 text-[14px] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-6 rounded-[22px] border border-red-100 bg-red-50/70 p-4">
              <div className="flex gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <p className="text-[14px] leading-relaxed text-red-700">
                  Чем больше сотрудников, объектов и направлений безопасности,
                  тем сложнее контролировать процесс вручную.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[32px] border border-primary/25 bg-primary/10 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md md:p-8">
            <div
              aria-hidden
              className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-primary/10"
            />

            <div className="relative z-10 mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="text-on-background text-[22px] font-bold">
                  Со SkillPass
                </h3>
                <p className="text-on-surface-variant text-sm">
                  обучение, документы и контроль в одном месте
                </p>
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              {AFTER.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-primary/15 bg-white/70 p-4"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                    <div>
                      <p className="text-on-background text-[15px] font-semibold leading-snug">
                        {item.title}
                      </p>
                      <p className="text-on-surface-variant mt-1 text-[14px] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-6 rounded-[22px] border border-primary/20 bg-white/70 p-4">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-on-background text-[14px] font-medium leading-relaxed">
                  Компания получает понятную систему: кого обучить, кто уже
                  прошел, какие документы готовы и где есть риски.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {RESULT_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[24px] border border-outline-variant/40 bg-white/65 p-5 shadow-sm backdrop-blur"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <p className="text-on-background text-[16px] font-bold">
                  {item.title}
                </p>

                <p className="text-on-surface-variant mt-1 text-[14px] leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 overflow-hidden rounded-[28px] border border-outline-variant/40 bg-white/70 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>

              <div>
                <p className="text-on-background text-[18px] font-bold leading-snug">
                  Процессы безопасности не должны держаться на ручном контроле
                </p>

                <p className="text-on-surface-variant mt-2 max-w-2xl text-[15px] leading-relaxed">
                  SkillPass помогает быстрее назначать обучение, отслеживать
                  прохождение, контролировать сроки и хранить подтверждающие
                  документы в одном месте.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}