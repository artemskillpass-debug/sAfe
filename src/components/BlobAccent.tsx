import { useId, type ReactNode } from 'react';

/**
 * Brush highlight — обводка «мокрой кистью» под inline-текст.
 *
 * Анатомия мазка:
 *  1. body          — основная заливка с feTurbulence-краем
 *  2. ghost         — лёгкий под-мазок со сдвигом (двойной проход кистью)
 *  3. bristle lines — две тонкие светлые прожилки от ворса
 *  4. highlight     — узкая «мокрая» полоса сверху (отблеск свежей краски)
 *  5. gradient body — едва заметный градиент: «загрузка» краски на одном конце
 *
 * Варианты:
 *  - 'default'  → широкий мазок слева-направо, лёгкий наклон вниз
 *  - 'alt'      → зеркальный мазок справа-налево, наклон вверх
 *  - 'squircle' → плотный «маркер», почти горизонтальный, минимум тапера
 *
 * `onDark` — усиленный glow для тёмных секций.
 */
export default function BlobAccent({
  children,
  variant = 'default',
  onDark = false,
  className = '',
}: {
  children: ReactNode;
  variant?: 'default' | 'alt' | 'squircle';
  onDark?: boolean;
  className?: string;
}) {
  // Уникальные id — несколько мазков на странице не должны делить filter/gradient
  const rid = useId().replace(/:/g, '');
  const filterId = `brush-f-${rid}`;
  const gradId = `brush-g-${rid}`;

  const variantClass =
    variant === 'alt'
      ? 'blob-accent--alt'
      : variant === 'squircle'
        ? 'blob-accent--squircle'
        : '';
  const darkClass = onDark ? 'blob-accent--on-dark' : '';

  // --- Геометрия мазка ---------------------------------------------------
  // Все пути в viewBox="0 0 300 100", без preserveAspectRatio → растягиваются
  // по ширине/высоте. Концы намеренно сведены в острые точки (тапер).

  // DEFAULT: классический горизонтальный мазок, лёгкий низовой изгиб.
  //  - левый конец острый (10,52)
  //  - тело провисает к (150,82)
  //  - правый конец «флик» вверх (296,38) → переход обратно к (288,46)
  const defaultBody =
    'M10,52 C40,30 110,22 178,24 C238,26 274,32 296,38 C292,52 268,60 222,66 C170,74 110,82 60,80 C28,78 12,70 10,52 Z';
  const defaultGhost =
    'M14,58 C46,38 112,30 184,32 C240,34 274,40 290,48 C284,60 250,68 208,72 C158,76 102,80 56,76 C30,72 14,68 14,58 Z';

  // ALT: справа-налево, лёгкий верховой изгиб (зеркало default)
  const altBody =
    'M4,42 C24,30 56,24 106,22 C168,20 230,26 266,34 C286,40 296,50 290,62 C272,72 210,78 142,76 C82,74 38,70 14,66 C2,60 0,52 4,42 Z';
  const altGhost =
    'M10,48 C32,36 60,30 110,28 C170,28 224,32 258,40 C278,46 286,54 282,62 C266,70 214,74 148,72 C92,70 48,68 22,64 C10,60 8,54 10,48 Z';

  // SQUIRCLE: толстый «маркер», концы скруглены но не острые
  const squircleBody =
    'M14,18 C56,10 128,8 196,10 C254,12 286,18 294,30 C298,52 290,72 274,80 C214,90 88,90 30,82 C12,78 6,64 6,42 C6,30 8,22 14,18 Z';
  const squircleGhost =
    'M22,24 C62,16 130,14 192,16 C248,18 280,24 286,34 C290,52 280,68 264,74 C208,82 92,82 38,76 C22,72 16,62 16,44 C16,34 18,28 22,24 Z';

  const body =
    variant === 'alt'
      ? altBody
      : variant === 'squircle'
        ? squircleBody
        : defaultBody;
  const ghost =
    variant === 'alt'
      ? altGhost
      : variant === 'squircle'
        ? squircleGhost
        : defaultGhost;

  // Уникальный seed для feTurbulence — иначе все мазки имеют одинаковый шум
  const seed = variant === 'alt' ? 11 : variant === 'squircle' ? 19 : 5;

  // Бороздки от ворса — тонкие светлые линии вдоль тела мазка.
  // Координаты подобраны так, чтобы они шли «потоком» внутри path и не вылезали.
  const bristles =
    variant === 'squircle'
      ? [
          { d: 'M28,32 C90,28 200,28 282,34', op: 0.18 },
          { d: 'M32,54 C100,50 210,52 280,58', op: 0.12 },
        ]
      : variant === 'alt'
        ? [
            { d: 'M18,38 C60,30 160,30 274,40', op: 0.2 },
            { d: 'M14,56 C70,52 180,54 282,60', op: 0.12 },
          ]
        : [
            { d: 'M24,38 C70,28 170,28 286,40', op: 0.2 },
            { d: 'M20,58 C80,54 180,58 282,62', op: 0.12 },
          ];

  // Градиент-направление: для alt разворачиваем, чтобы «загрузка» была с того же
  // конца, что и начало мазка — выглядит как естественное движение кисти.
  const gradFrom = variant === 'alt' ? '100%' : '0%';
  const gradTo = variant === 'alt' ? '0%' : '100%';

  return (
    <span
      className={`blob-accent ${variantClass} ${darkClass} ${className}`.trim()}
    >
      <svg
        aria-hidden="true"
        className="blob-accent__brush"
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Рваный край: feTurbulence → feDisplacementMap.
              Базовая частота анизотропна — больше дрожи по вертикали, что
              даёт «волосистый» край сверху и снизу мазка. */}
          <filter
            id={filterId}
            x="-10%"
            y="-18%"
            width="120%"
            height="136%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.085"
              numOctaves="2"
              seed={seed}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="5.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Лёгкий горизонтальный градиент по ходу мазка —
              имитация «загрузки» краски на ворсе. */}
          <linearGradient
            id={gradId}
            x1={gradFrom}
            y1="0%"
            x2={gradTo}
            y2="0%"
          >
            <stop offset="0%" stopColor="#2eb6f5" />
            <stop offset="55%" stopColor="#3abef9" />
            <stop offset="100%" stopColor="#5bcffa" />
          </linearGradient>
        </defs>

        {/* Filtered group: и тело и прожилки получают одинаковую «дрожь» —
            прожилки колышутся вместе с краем, не выглядят наклеенными. */}
        <g filter={`url(#${filterId})`}>
          {/* Призрачный под-мазок — даёт двойной проход кистью */}
          <path
            d={ghost}
            fill="#7ad6fb"
            opacity="0.55"
            className="blob-accent__brush-ghost"
          />
          {/* Основной мазок с градиентом */}
          <path
            d={body}
            fill={`url(#${gradId})`}
            className="blob-accent__brush-body"
          />
          {/* Бороздки ворса — тонкие светлые штрихи вдоль */}
          {bristles.map((b, i) => (
            <path
              key={i}
              d={b.d}
              fill="none"
              stroke="#ffffff"
              strokeWidth={i === 0 ? 1.6 : 1.2}
              strokeLinecap="round"
              opacity={b.op}
              className="blob-accent__brush-bristle"
            />
          ))}
        </g>
      </svg>
      <span className="blob-accent__text">{children}</span>
    </span>
  );
}
