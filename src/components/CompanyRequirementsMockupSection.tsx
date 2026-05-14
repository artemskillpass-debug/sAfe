import { useState } from 'react';
import BlobAccent from './BlobAccent';

const POPULAR_REQUESTS = [
  'Охрана труда',
  'Пожарная безопасность',
  'Промышленная безопасность',
  'ГО и ЧС',
];

const FEATURE_ITEMS = [
  {
    icon: 'school',
    title: 'Обучение',
    text: 'какие курсы нужно назначить сотрудникам',
  },
  {
    icon: 'description',
    title: 'Документы',
    text: 'какие сертификаты и подтверждения должны быть готовы',
  },
  {
    icon: 'fact_check',
    title: 'Проверки',
    text: 'что уже закрыто, а где есть пробелы',
  },
];

export default function CompanyRequirementsMockupSection() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Здесь позже можно подключить реальный поиск / API
    console.log('Проверка требований:', query);
  };

  const handlePopularClick = (value: string) => {
    setQuery(value);
  };

  return (
    <section
      id="company-requirements-check"
      className="relative w-full overflow-hidden bg-surface py-section-padding"
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

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-margin-mobile md:px-margin-desktop xl:px-8">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-outline-variant/50 bg-surface-container-lowest/85 p-5 shadow-sm backdrop-blur md:p-6 lg:p-8">
          <div
            aria-hidden
            className="absolute -right-32 -top-32 h-[420px] w-[520px] rounded-full bg-secondary-fixed-dim/18 blur-[140px]"
          />

          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 h-[420px] w-[560px] rounded-full bg-primary-fixed/22 blur-[150px]"
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-fixed/45 px-4 py-2 text-[12px] font-semibold text-primary">
                <span className="material-symbols-outlined text-[17px]">
                  manage_search
                </span>
                Быстрая проверка требований
              </div>

              <h2 className="text-[36px] font-extrabold leading-[1.04] tracking-tight text-on-background md:text-[56px] lg:text-[68px]">
                Проверка требований{' '}
                <BlobAccent>
                  компании
                </BlobAccent>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-[1.75] text-on-surface-variant md:text-[18px]">
                Введите БИН, название компании или сферу деятельности —
                SkillPass покажет, какие направления обучения, документы и
                проверки нужно закрыть.
              </p>
            </div>

            {/* Search form */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-5xl rounded-[2.25rem] border border-outline-variant/45 bg-surface/75 p-4 shadow-sm backdrop-blur md:p-5"
            >
              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[24px] text-on-surface-variant">
                    search
                  </span>

                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Введите БИН, название компании или сферу деятельности"
                    className="h-16 w-full rounded-[1.5rem] border border-outline-variant/45 bg-surface-container-lowest/95 pl-14 pr-5 text-[15px] font-medium text-on-background outline-none transition placeholder:text-on-surface-variant focus:border-primary/45 focus:ring-4 focus:ring-primary/10 md:text-[16px]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-16 items-center justify-center gap-2 rounded-[1.5rem] bg-primary px-8 text-[15px] font-bold text-on-primary shadow-[0_18px_36px_-20px_rgba(0,102,138,0.85)] transition hover:brightness-110 md:text-[16px]"
                >
                  Проверить
                  <span className="material-symbols-outlined text-[21px]">
                    arrow_forward
                  </span>
                </button>
              </div>

              {/* Popular requests */}
              <div className="mt-4 flex flex-wrap items-center gap-2 px-1">
                <span className="text-[13px] font-medium text-on-surface-variant">
                  Популярные запросы:
                </span>

                {POPULAR_REQUESTS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handlePopularClick(item)}
                    className="rounded-full border border-outline-variant/45 bg-surface-container-lowest px-3.5 py-1.5 text-[12px] font-semibold text-primary transition hover:border-primary/35 hover:bg-primary-fixed/45"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </form>

            {/* Feature strip */}
            <div className="mx-auto mt-6 grid max-w-5xl gap-3 md:grid-cols-3">
              {FEATURE_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-outline-variant/45 bg-surface/75 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-fixed text-primary">
                    <span className="material-symbols-outlined text-[22px]">
                      {item.icon}
                    </span>
                  </span>

                  <h4 className="mt-4 text-[16px] font-extrabold text-on-background">
                    {item.title}
                  </h4>

                  <p className="mt-1.5 text-[13px] leading-snug text-on-surface-variant">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mx-auto mt-6 max-w-5xl rounded-[2rem] border border-primary/20 bg-primary-fixed/35 p-5 md:p-6">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                Что делает система
              </div>

              <h3 className="max-w-4xl text-[20px] font-extrabold leading-tight text-on-background md:text-[26px]">
                SkillPass формирует понятный список действий: какие курсы
                назначить, какие документы подготовить и какие требования ещё
                нужно закрыть.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}