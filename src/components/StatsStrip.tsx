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
    title: 'Ручной контроль обучения',
    text: 'Ответственные сотрудники ведут списки в Excel, чатах или на бумаге.',
  },
  {
    title: 'Документы разбросаны',
    text: 'Сертификаты, журналы и подтверждения сложно быстро найти при проверке.',
  },
  {
    title: 'Нет прозрачной картины',
    text: 'Непонятно, кто прошел обучение, кто просрочил, а кого еще нужно назначить.',
  },
  {
    title: 'Риски при проверках',
    text: 'Ошибки в обучении и документах могут привести к замечаниям и штрафам.',
  },
];

const AFTER = [
  {
    title: 'Обучение в одной системе',
    text: 'Курсы, сотрудники, прогресс и результаты собраны в единой онлайн-платформе.',
  },
  {
    title: 'Документы всегда под рукой',
    text: 'Сертификаты формируются и хранятся в личном кабинете компании.',
  },
  {
    title: 'Прозрачный контроль',
    text: 'Руководитель видит статусы прохождения и понимает, где есть проблемы.',
  },
  {
    title: 'Быстрее закрываются требования',
    text: 'Компания проще готовится к проверкам и снижает ручную нагрузку на сотрудников.',
  },
];

const RESULT_ITEMS = [
  {
    icon: Clock,
    title: 'Меньше ручной работы',
    text: 'не нужно вести процесс в таблицах',
  },
  {
    icon: FileCheck2,
    title: 'Порядок в документах',
    text: 'сертификаты хранятся в системе',
  },
  {
    icon: LayoutDashboard,
    title: 'Контроль статусов',
    text: 'видно, кто прошел обучение',
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
              Цифровизация обязательного обучения
            </div>

            <h2 className="text-on-background text-[32px] font-bold leading-tight md:text-[48px]">
              SkillPass убирает хаос из обязательного обучения
            </h2>

            <p className="text-on-surface-variant mt-4 max-w-2xl text-[16px] leading-relaxed md:text-[18px]">
              Вместо таблиц, бумажных журналов и ручного контроля — единая онлайн-платформа,
              где компания обучает сотрудников, отслеживает прогресс и получает подтверждающие документы.
            </p>
          </div>

          <div className="rounded-[28px] border border-outline-variant/40 bg-white/70 p-5 shadow-sm backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-on-background text-[16px] font-bold leading-snug">
                  Главная задача блока
                </p>
                <p className="text-on-surface-variant mt-1 text-[14px] leading-relaxed">
                  Сразу показать клиенту разницу: без платформы процесс разваливается,
                  со SkillPass обучение становится управляемым.
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
                  Чем больше сотрудников и направлений обучения, тем сложнее контролировать
                  процесс вручную.
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
                  обучение, контроль и документы в одном месте
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
                  Компания получает понятную систему: кого обучить, кто уже прошел,
                  какие документы готовы.
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
                  Обязательное обучение не должно держаться на ручном контроле
                </p>

                <p className="text-on-surface-variant mt-2 max-w-2xl text-[15px] leading-relaxed">
                  SkillPass помогает быстрее назначать обучение, отслеживать прохождение
                  и хранить подтверждающие документы в одном месте.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}