import { getCourseHeroImage } from './courseAssets';
import { COURSES_CONTENT } from './coursesContent';

export type CourseModule = {
  title: string;
  duration: string;
};

/** Раскрывающийся блок программы курса (аккордеон). */
export type CourseAccordionModule = {
  code: string;
  title: string;
  bullets: string[];
};

/** Дополнительные блоки лендинга курса. */
export type CourseExpanded = {
  badges?: { label: string; icon?: string; variant: 'primary' | 'neutral' }[];
  heroLead?: string;
  heroChecks?: string[];
  /** Бенто, правая колонка героя */
  heroImage?: string;
  audienceTitle?: string;
  audienceIntro?: string;
  audienceCards?: { icon: string; title: string; body: string }[];
  programIntro?: string;
  programHighlights?: { icon: string; text: string }[];
  accordion?: CourseAccordionModule[];
  certificateParagraph?: string;
  /** Переопределение блока «Что включают в себя курсы» на странице курса. */
  includesBlock?: {
    orderAndTerms?: string[];
    perks?: string[];
    whoNeedsTraining?: string[];
  };
};

export type CourseDetail = {
  slug: string;
  title: string;
  teaser: string;
  /** Вводные абзацы под заголовком */
  intro: string[];
  /** Две колонки: «Для кого курс» */
  forWhom: { left: string; right: string };
  /** Маркированный список «Что вы узнаете» */
  learnPoints: string[];
  program: CourseModule[];
  /** Две колонки «Формат обучения» */
  format: { left: string; right: string };
  /** Расширенные блоки страницы курса. */
  expand?: CourseExpanded;
};

const DEFAULT_FORMAT: CourseDetail['format'] = {
  left:
    'Онлайн-формат SkillPass: учебные материалы, тесты и прогресс в личном кабинете сотрудника и администратора.',
  right:
    'Гибкий график прохождения, подтверждение результата и возможность выгрузки данных для кадрового учёта.',
};

const SLUG_ORDER = [
  'anticorruption',
  'antiterror',
  'labor-protection',
  'bullying',
  'civil-defense',
  'inclusivity',
  'cybersecurity',
  'paramedic',
  'fire-ptm',
  'industrial-safety',
  'sanitary-epidemiological',
  'conciliation',
  'electrical',
] as const;

function buildCourse(slug: string): CourseDetail {
  const content = COURSES_CONTENT[slug];
  if (!content) {
    throw new Error(`Нет контента курса для slug «${slug}». Добавьте запись в src/data/coursesContent.ts.`);
  }

  return {
    slug,
    title: content.title,
    teaser: content.teaser,
    intro: [...content.intro],
    forWhom: { left: content.forWhom.left, right: content.forWhom.right },
    learnPoints: [...content.learnPoints],
    program: content.program.map((m) => ({ ...m })),
    format: { ...DEFAULT_FORMAT },
    expand: {
      badges: content.expand.badges.map((b) => ({ ...b })),
      heroLead: content.expand.heroLead,
      heroChecks: [...content.expand.heroChecks],
      heroImage: getCourseHeroImage(slug),
      audienceTitle: content.expand.audienceTitle,
      audienceIntro: content.expand.audienceIntro,
      audienceCards: content.expand.audienceCards.map((c) => ({ ...c })),
      programIntro: content.expand.programIntro,
      programHighlights: content.expand.programHighlights.map((h) => ({ ...h })),
      accordion: content.expand.accordion.map((a) => ({
        ...a,
        bullets: [...a.bullets],
      })),
      certificateParagraph: content.expand.certificateParagraph,
      includesBlock: {
        orderAndTerms: [...content.expand.includesBlock.orderAndTerms],
        perks: [...content.expand.includesBlock.perks],
        whoNeedsTraining: [...content.expand.includesBlock.whoNeedsTraining],
      },
    },
  };
}

export const COURSES_DETAIL: CourseDetail[] = SLUG_ORDER.map((slug) => buildCourse(slug));

export function getCourseBySlug(slug: string | undefined): CourseDetail | undefined {
  if (!slug) return undefined;
  return COURSES_DETAIL.find((c) => c.slug === slug);
}

/** Карточки курсов на главной (без «electrical» — это 13-й курс, доступен по прямой ссылке). */
export const COURSE_CARDS = COURSES_DETAIL.filter((c) => c.slug !== 'electrical').map(
  ({ slug, title, teaser }) => ({
    slug,
    title,
    teaser,
  }),
);

/** Порядок и иконки для мега-меню «Курсы» в шапке. */
const ICONS: Record<string, string> = {
  anticorruption: 'policy',
  antiterror: 'shield_person',
  'labor-protection': 'engineering',
  bullying: 'psychology_alt',
  'civil-defense': 'emergency_home',
  inclusivity: 'diversity_3',
  cybersecurity: 'lock',
  paramedic: 'medical_services',
  'fire-ptm': 'local_fire_department',
  'industrial-safety': 'precision_manufacturing',
  'sanitary-epidemiological': 'science',
  conciliation: 'handshake',
  electrical: 'bolt',
};

export const HEADER_COURSES_NAV = COURSES_DETAIL.map((c) => ({
  title: c.title,
  slug: c.slug,
  href: `/courses/${c.slug}`,
  icon: ICONS[c.slug] ?? 'school',
}));
