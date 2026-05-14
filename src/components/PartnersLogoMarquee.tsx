import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
  type ReactNode,
} from 'react';

/* ---------------------------------------------------------------
 * Логотипы подключаются как WebP (npm run optimize:assets создаёт
 * их рядом с исходными PNG в src/assets/logo).
 * --------------------------------------------------------------- */
const partnerModules = import.meta.glob('../assets/logo/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

type LogoItem =
  | { src: string; alt: string; href?: string; title?: string }
  | { node: ReactNode; alt: string; href?: string; title?: string };

function logoStemFromPath(p: string): string {
  const file = p.split(/[/\\]/).pop() ?? '';
  return file.replace(/\.webp$/i, '');
}

const PARTNER_LOGOS: LogoItem[] = Object.entries(partnerModules)
  .map(([path, src]) => {
    const alt = logoStemFromPath(path);

    return { src, alt } satisfies LogoItem;
  })
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
  fadeColor?: string;
}

const LogoLoop: FC<LogoLoopProps> = ({
  logos,
  speed = 60,
  direction = 'left',
  logoHeight = 56,
  gap = 96,
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

  useEffect(() => {
    const updateDimensions = () => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const seqRect = seqRef.current?.getBoundingClientRect();
      const sequenceWidth = seqRect?.width ?? 0;

      if (!containerWidth || !sequenceWidth) return;

      setSeqWidth(Math.ceil(sequenceWidth));

      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + 3;
      setCopyCount(Math.max(3, copiesNeeded));
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

  useEffect(() => {
    const track = trackRef.current;

    if (!track || !seqWidth) return;

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
                  className="pointer-events-none w-auto max-w-[20rem] object-contain opacity-95 transition-all duration-300 ease-out select-none group-hover:scale-[1.05] group-hover:opacity-100 md:max-w-[26rem] xl:max-w-[30rem]"
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [copyCount, logos, gap, logoHeight, effectiveHoverSpeed]
  );

  const fadeLeftStyle = {
    background: `linear-gradient(90deg, ${fadeColor} 0%, ${fadeColor} 12%, transparent 100%)`,
  };

  const fadeRightStyle = {
    background: `linear-gradient(270deg, ${fadeColor} 0%, ${fadeColor} 12%, transparent 100%)`,
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
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-10 md:w-14 lg:w-16"
            style={fadeLeftStyle}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-10 md:w-14 lg:w-16"
            style={fadeRightStyle}
          />
        </>
      ) : null}

      <div
        ref={trackRef}
        className="flex py-8 will-change-transform md:py-10 lg:py-12"
      >
        {logoLists}
      </div>
    </div>
  );
};

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

      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-margin-mobile py-12 md:px-margin-desktop md:py-14 xl:px-8">
        <div className="mb-8 flex items-center justify-between gap-6 md:mb-10">
          <span className="section-index">Trust · Partners</span>
          <span className="hairline hidden flex-1 sm:block" />
        </div>
      </div>

      <div className="relative z-10 w-full">
        <LogoLoop
          logos={PARTNER_LOGOS}
          speed={90}
          direction="right"
          logoHeight={112}
          gap={160}
          pauseOnHover
          fadeOut
          fadeColor="#f2f4f6"
          className="px-2 sm:px-4 md:px-6"
        />
      </div>
    </section>
  );
}