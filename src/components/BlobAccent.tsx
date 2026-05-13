import type { ReactNode } from 'react';

/**
 * Фигурная цветная подложка под inline-текст в стиле SkillPass — «капля»
 * с асимметричным border-radius и лёгким наклоном.
 *
 * Варианты:
 *  - 'default'  → форма #1, наклон -2°
 *  - 'alt'      → зеркальная форма, наклон +2° (хорошо чередовать с default)
 *  - 'squircle' → почти-квадрат с лёгким наклоном
 *
 * `onDark` добавляет дополнительный glow для тёмных секций.
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
  const variantClass =
    variant === 'alt'
      ? 'blob-accent--alt'
      : variant === 'squircle'
      ? 'blob-accent--squircle'
      : '';
  const darkClass = onDark ? 'blob-accent--on-dark' : '';

  return (
    <span className={`blob-accent ${variantClass} ${darkClass} ${className}`.trim()}>
      {children}
    </span>
  );
}
