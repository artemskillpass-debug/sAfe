const STATS: { value: string; suffix?: string; label: string; hint: string }[] = [
  { value: '1 500', suffix: '+', label: 'компаний-клиентов', hint: 'от малого до крупного бизнеса' },
  { value: '54', suffix: 'k', label: 'выданных сертификатов', hint: 'все формы подтверждаются' },
  { value: '13', label: 'учебных направлений', hint: 'под все требования надзора' },
  { value: '24/7', label: 'доступ к платформе', hint: 'обучение в удобное время' },
];

/**
 * Узкая премиум-полоса с ключевыми метриками — мост между Hero и контентом.
 * Asymmetric grid 4 колонки на десктопе, 2×2 на планшете, 1×4 на мобиле.
 */
export default function StatsStrip() {
  return (
    <section
      aria-label="Ключевые показатели платформы"
      className="bg-surface-container-low relative w-full overflow-hidden"
    >
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-40"
      />
      <div className="max-w-container-max relative z-10 mx-auto px-margin-mobile py-14 md:px-margin-desktop md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:divide-x md:divide-outline-variant/40">
          {STATS.map(({ value, suffix, label, hint }, i) => (
            <div
              key={label}
              className="relative flex flex-col items-start md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <span className="section-index mb-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="text-on-background flex items-baseline gap-1 leading-none">
                <span className="display-number text-[44px] md:text-[52px]">
                  {value}
                </span>
                {suffix ? (
                  <span className="text-primary text-[24px] font-bold md:text-[28px]">
                    {suffix}
                  </span>
                ) : null}
              </div>
              <div className="text-on-background mt-3 text-[15px] font-semibold leading-snug">
                {label}
              </div>
              <div className="text-on-surface-variant mt-1 text-[13px] leading-snug">
                {hint}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
