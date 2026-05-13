import { getCourseHeroImage } from './courseAssets';
import { STITCH_COURSE_PATCHES } from './stitchCoursePatches.generated';

export type CourseModule = {
  title: string;
  duration: string;
};

/** Раскрывающийся блок программы (как в Stitch «Расширенная»). */
export type CourseAccordionModule = {
  code: string;
  title: string;
  bullets: string[];
};

/** Дополнительные блоки лендинга курса (Stitch «Детальная информация о курсе (Расширенная)»). */
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
  /** Расширенный макет Stitch (необязательно). */
  expand?: CourseExpanded;
};

const DEFAULT_FORMAT: CourseDetail['format'] = {
  left:
    'Онлайн-формат SkillPass: учебные материалы, тесты и прогресс в личном кабинете сотрудника и администратора.',
  right:
    'Гибкий график прохождения, подтверждение результата и возможность выгрузки данных для кадрового учёта.',
};

/** Краткое описание в каталоге (рус.). Контент страницы курса — из Stitch, см. stitchCoursePatches.generated.ts */
const TEASERS: Record<string, string> = {
  anticorruption:
    'Комплаенс, стандарты и практика предотвращения коррупционных рисков в организации…',
  antiterror:
    'Требования законодательства, меры защиты объектов и поведение персонала при угрозах…',
  'labor-protection':
    'Инструктажи, аттестация рабочих мест, СИЗ и документооборот по ОТ в одном контуре…',
  bullying: 'Профилактика токсичной среды, реагирование и корпоративная культура уважения…',
  'civil-defense': 'ГО, оповещение населения, запас прочности объектов и действия при ЧС…',
  inclusivity:
    'Равные возможности, коммуникация и адаптация рабочих процессов для всех сотрудников…',
  cybersecurity:
    'Фишинг, пароли, утечки данных и базовые правила защиты корпоративной инфраструктуры…',
  paramedic:
    'Первая помощь на производстве и в офисе: алгоритмы до приезда скорой помощи…',
  'fire-ptm':
    'ПТМ для персонала: огнетушители, эвакуация, средства пожаротушения и инструктажи…',
  'industrial-safety':
    'Опасные производственные объекты, допуски и контроль соблюдения норм ПБ…',
  'sanitary-epidemiological':
    'Режимы, гигиена, инфекционный контроль и требования надзорных органов…',
  conciliation:
    'Работа СК: досудебное урегулирование споров и снижение числа трудовых конфликтов…',
  electrical:
    'Допуски, работы под напряжением и безопасная эксплуатация электроустановок…',
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

function patchToCourse(slug: string): CourseDetail {
  const patch = STITCH_COURSE_PATCHES[slug as keyof typeof STITCH_COURSE_PATCHES];
  if (!patch) throw new Error(`Нет выгрузки Stitch для slug «${slug}». Запустите: npm run sync:stitch`);

  const teaser = TEASERS[slug];
  if (!teaser) throw new Error(`Нет teaser для «${slug}»`);

  return {
    slug,
    teaser,
    title: patch.title,
    intro: [...patch.intro],
    forWhom: { left: patch.forWhom.left, right: patch.forWhom.right },
    learnPoints: [...patch.learnPoints],
    program: patch.program.map((m) => ({ ...m })),
    format: { ...DEFAULT_FORMAT },
    expand: {
      ...patch.expand,
      heroImage: getCourseHeroImage(slug),
      heroChecks:
        'heroChecks' in patch.expand && patch.expand.heroChecks
          ? [...patch.expand.heroChecks]
          : undefined,
      badges: patch.expand.badges?.map((b) => {
        const badge: { label: string; variant: 'primary' | 'neutral'; icon?: string } = {
          label: b.label,
          variant: b.variant as 'primary' | 'neutral',
        };
        if ('icon' in b && b.icon !== undefined) badge.icon = b.icon;
        return badge;
      }),
      audienceCards: patch.expand.audienceCards?.map((c) => ({ ...c })),
      programHighlights: patch.expand.programHighlights?.map((h) => ({ ...h })),
      accordion: patch.expand.accordion?.map((a) => ({
        ...a,
        bullets: [...a.bullets],
      })),
    },
  };
}

export const COURSES_DETAIL: CourseDetail[] = SLUG_ORDER.map((slug) => patchToCourse(slug));

export function getCourseBySlug(slug: string | undefined): CourseDetail | undefined {
  if (!slug) return undefined;
  return COURSES_DETAIL.find((c) => c.slug === slug);
}

export const COURSE_CARDS = COURSES_DETAIL.filter((c) => c.slug !== 'electrical').map(({ slug, title, teaser }) => ({
  slug,
  title,
  teaser,
}));

/** Порядок и иконки для мега-меню «Курсы» в шапке */
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
