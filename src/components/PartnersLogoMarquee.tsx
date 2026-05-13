import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
  type ReactNode,
} from 'react';

/* ---------------------------------------------------------------
 * Импорт всех логотипов через Vite glob (eager + default-export).
 * Vite сам подставит правильные хешированные URL в build.
 * --------------------------------------------------------------- */
const partnerModules = import.meta.glob('../assets/partners/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

/** Slug → читаемое имя бренда (для alt-текста и tooltip). */
const SLUG_TO_NAME: Record<string, string> = {
  'astana-motors': 'ASTANA MOTORS',
  magnum: 'Magnum',
  helios: 'Helios',
  esentaimall: 'Esentai Mall',
  globus: 'Globus',
  wb: 'Wildberries',
  alibaba: 'Alibaba.com',
  kinopark: 'KINOPARK',
  'ufc-gym': 'UFC GYM',
  atakent: 'Atakent',
  technodom: 'TECHNODOM',
  'almaty-towers': 'ALMATY TOWERS',
  adidas: 'adidas',
  moskva: 'MOSKVA',
  gazprom: 'ГАЗПРОМ',
  'dostar-med': 'Dostar Med',
  'rahat-palace': 'RAHAT PALACE',
  promenade: 'PROMENADE',
  'bi-group': 'BI GROUP',
  footlab: 'FOOTLAB',
  technofit: 'TECHNOFIT',
};

type LogoItem =
  | { src: string; alt: string; href?: string; title?: string }
  | { node: ReactNode; alt: string; href?: string; title?: string };

const PARTNER_LOGOS: LogoItem[] = Object.entries(partnerModules)
  .map(([path, src]) => {
    const slug = path.split('/').pop()!.replace('.webp', '');
    return { src, alt: SLUG_TO_NAME[slug] ?? slug } satisfies LogoItem;
  })
  // Чуть-чуть «перетасуем» — чтобы рядом не стояли бренды одной категории.
  .sort((a, b) => a.alt.localeCompare(b.alt, 'en'));

const SMOOTH_TAU = 0.25;

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  className?: string;
  /** CSS-цвет фона у фейдов по краям (точно совпадает с фоном секции). */
  fadeColor?: string;
}

/**
 * Бесконечная карусель логотипов с плавным rAF-смещением, по мотивам
 * React Bits LogoLoop. Сохраняем фичи: pauseOnHover, direction, fadeOut.
 */
const LogoLoop: FC<LogoLoopProps> = ({
  logos,
  speed = 60,
  direction = 'left',
  logoHeight = 48,
  gap = 80,
  pauseOnHover = true,
  hoverSpeed,
  fadeOut = true,
  className = '',
  fadeColor = '#f2f4f6',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const seqRef = useRef<HTMLUListElement | null>(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);

  /* --- замер ширины одной «копии» списка для бесшовного цикла --- */
  useEffect(() => {
    const updateDimensions = () => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const seqRect = seqRef.current?.getBoundingClientRect();
      const sequenceWidth = seqRect?.width ?? 0;

      if (!containerWidth || !sequenceWidth) return;

      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + 2;
      setCopyCount(Math.max(2, copiesNeeded));
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const images = seqRef.current?.querySelectorAll('img') ?? [];
    images.forEach((img) => {
      const htmlImg = img as HTMLImageElement;
      if (!htmlImg.complete) {
        htmlImg.addEventListener('load', updateDimensions, { once: true });
        htmlImg.addEventListener('error', updateDimensions, { once: true });
      }
    });

    return () => {
      window.removeEventListener('resize', updateDimensions);
      images.forEach((img) => {
        img.removeEventListener('load', updateDimensions);
        img.removeEventListener('error', updateDimensions);
      });
    };
  }, [logos, gap, logoHeight]);

  const effectiveHoverSpeed = useMemo(() => {
    if (hoverSpeed !== undefined) return hoverSpeed;
    if (pauseOnHover) return 0;
    return undefined;
  }, [hoverSpeed, pauseOnHover]);

  /* --- основной rAF-цикл с экспоненциальным сглаживанием скорости --- */
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !seqWidth) return;

    // Уважение к prefers-reduced-motion: статичный стек без анимации.
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    const baseSpeed = Math.abs(speed);
    const directionMultiplier = direction === 'left' ? 1 : -1;
    const baseTargetVelocity = directionMultiplier * baseSpeed;

    let rafId: number | null = null;

    const animate = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const target =
        isHovered && effectiveHoverSpeed !== undefined
          ? directionMultiplier * effectiveHoverSpeed
          : baseTargetVelocity;

      const easingFactor = 1 - Math.exp(-dt / SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      let nextOffset = offsetRef.current + velocityRef.current * dt;
      nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
      offsetRef.current = nextOffset;

      track.style.transform = `translate3d(${-nextOffset}px, 0, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      lastTsRef.current = null;
    };
  }, [seqWidth, speed, direction, isHovered, effectiveHoverSpeed]);

  const handleMouseEnter = () => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(true);
  };
  const handleMouseLeave = () => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(false);
  };

  const logoLists = useMemo(
    () =>
      Array.from({ length: copyCount }, (_, copyIndex) => (
        <ul
          key={copyIndex}
          ref={copyIndex === 0 ? seqRef : undefined}
          className="flex shrink-0 items-center [list-style:none] [padding-inline-start:0]"
          aria-hidden={copyIndex > 0}
        >
          {logos.map((logo, index) => {
            let content: ReactNode;

            if ('node' in logo) {
              content = (
                <span
                  className="text-on-surface-variant inline-flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105"
                  style={{ height: logoHeight }}
                >
                  {logo.node}
                </span>
              );
            } else {
              content = (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: logoHeight }}
                  className="pointer-events-none w-auto max-w-[18rem] object-contain opacity-95 transition-all duration-300 ease-out select-none group-hover:opacity-100 group-hover:scale-[1.06] md:max-w-[22rem]"
                  loading="lazy"
                  decoding="async"
                />
              );
            }

            const wrapped = logo.href ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center"
                title={logo.title ?? logo.alt}
              >
                {content}
              </a>
            ) : (
              <span
                className="group inline-flex items-center"
                title={logo.title ?? logo.alt}
              >
                {content}
              </span>
            );

            return (
              <li
                key={`${copyIndex}-${index}`}
                className="group flex items-center justify-center"
                style={{ marginRight: gap }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {wrapped}
              </li>
            );
          })}
        </ul>
      )),
    // зависимости: пересборка списка при смене копий/контента
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [copyCount, logos, gap, logoHeight, effectiveHoverSpeed]
  );

  // Inline стили для фейдов — гарантированный градиент в нужный цвет секции.
  const fadeLeftStyle = {
    background: `linear-gradient(90deg, ${fadeColor} 0%, ${fadeColor} 35%, transparent 100%)`,
  };
  const fadeRightStyle = {
    background: `linear-gradient(270deg, ${fadeColor} 0%, ${fadeColor} 35%, transparent 100%)`,
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {fadeOut ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-32 md:w-40"
            style={fadeLeftStyle}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-32 md:w-40"
            style={fadeRightStyle}
          />
        </>
      ) : null}

      <div
        ref={trackRef}
        className="flex py-10 will-change-transform md:py-12"
      >
        {logoLists}
      </div>
    </div>
  );
};

/**
 * Premium-секция «Нам доверяют» с бесшовной каруселью логотипов
 * партнёров. Используется как social-proof мост между Hero и Stats.
 */
export default function PartnersLogoMarquee() {
  return (
    <section
      aria-labelledby="partners-marquee-heading"
      className="bg-surface-container-low relative w-full overflow-hidden border-y border-outline-variant/40"
    >
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-30"
      />
      <div className="max-w-container-max relative z-10 mx-auto px-margin-mobile py-14 md:px-margin-desktop md:py-16">
        {/* Header строки в стиле eyebrow */}
        <div className="mb-8 flex items-center justify-between gap-6 md:mb-10">
          <span className="section-index">Trust · Partners</span>
          <span className="hairline hidden flex-1 sm:block max-w-[24rem]" />
        </div>

        {/* Сам Logo Loop — цветные логотипы, мягкое hover-увеличение */}
        <LogoLoop
          logos={PARTNER_LOGOS}
          speed={50}
          direction="left"
          logoHeight={80}
          gap={96}
          pauseOnHover
          fadeOut
          fadeColor="#f2f4f6"
        />
      </div>
    </section>
  );
}
