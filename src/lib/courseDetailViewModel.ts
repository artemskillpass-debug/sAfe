import type { CourseAccordionModule, CourseDetail } from '../data/courses';

export type CoursePageViewModel = {
  badges: { label: string; icon?: string; variant: 'primary' | 'neutral' }[];
  titleHighlight: string;
  titleRest: string;
  heroLead: string;
  heroSecond?: string;
  heroChecks: string[];
  heroImage: string;
  audienceTitle: string;
  audienceIntro: string;
  audienceCards: { icon: string; title: string; body: string }[];
  programIntro: string;
  programHighlights: { icon: string; text: string }[];
  accordion: CourseAccordionModule[];
  certificateParagraph: string;
};

// Если у курса не задан heroImage в src/data/courseAssets.ts —
// в UI покажется аккуратный плейсхолдер, а не битая картинка.
const FALLBACK_HERO = '';

function splitTitle(title: string): { h: string; r: string } {
  const andIdx = title.indexOf(' и ');
  if (andIdx > 0) {
    return { h: title.slice(0, andIdx), r: title.slice(andIdx + 3) };
  }
  const dash = title.indexOf(' — ');
  if (dash > 0) {
    return { h: title.slice(0, dash), r: title.slice(dash + 3) };
  }
  const sp = title.indexOf(' ');
  if (sp > 0) {
    return { h: title.slice(0, sp), r: title.slice(sp + 1) };
  }
  return { h: title, r: '' };
}

function defaultAudienceCards(c: CourseDetail): CoursePageViewModel['audienceCards'] {
  const trim = (s: string, n: number) => (s.length <= n ? s : `${s.slice(0, n - 1)}…`);
  return [
    {
      icon: 'manage_accounts',
      title: 'Руководители и ответственные',
      body: trim(c.forWhom.left, 220),
    },
    {
      icon: 'engineering',
      title: 'Специалисты и службы',
      body: trim(c.forWhom.right, 220),
    },
    {
      icon: 'groups',
      title: 'Практический фокус',
      body: c.learnPoints[0] ?? 'Материалы, тесты и учёт результата в SkillPass.',
    },
  ];
}

function defaultAccordion(c: CourseDetail): CourseAccordionModule[] {
  const modules = c.program.filter((p) => !/итогов/i.test(p.title));
  return modules.map((m, idx) => ({
    code: String(idx + 1).padStart(2, '0'),
    title: m.title.replace(/^Модуль \d+\.\s*/, ''),
    bullets: [
      `Раздел программы: ${m.title} (объём ${m.duration}).`,
      c.learnPoints[idx] ??
        'Лекционные материалы, практические задания и промежуточные проверки в личном кабинете.',
    ],
  }));
}

function defaultHighlights(c: CourseDetail): CoursePageViewModel['programHighlights'] {
  const n = c.program.filter((p) => !/итогов/i.test(p.title)).length;
  return [
    { icon: 'play_lesson', text: `${n} учебных модулей` },
    { icon: 'assignment', text: 'Промежуточные тесты' },
    { icon: 'quiz', text: 'Итоговое тестирование' },
  ];
}

export function buildCoursePageViewModel(c: CourseDetail): CoursePageViewModel {
  const ex = c.expand ?? {};
  const { h, r } = splitTitle(c.title);

  const accordion = ex.accordion?.length ? ex.accordion : defaultAccordion(c);

  const formatBlurb = `${c.format.left} ${c.format.right}`.trim();
  const certificateParagraph =
    ex.certificateParagraph ??
    (formatBlurb.length > 380 ? `${formatBlurb.slice(0, 379)}…` : formatBlurb);

  let heroChecks = ex.heroChecks;
  if (!heroChecks?.length) {
    const a = c.learnPoints[0];
    heroChecks = [
      a && a.length > 90 ? `${a.slice(0, 89)}…` : a || 'Соответствие типовым требованиям к обучению',
      'Доступ к материалам сразу после регистрации',
    ];
  }

  return {
    badges:
      ex.badges ??
      ([
        { label: 'Онлайн SkillPass', variant: 'primary' },
        {
          label: `${c.program.filter((p) => !/итогов/i.test(p.title)).length} модулей`,
          variant: 'neutral',
          icon: 'schedule',
        },
      ] as CoursePageViewModel['badges']),
    titleHighlight: h,
    titleRest: r,
    heroLead: ex.heroLead ?? c.intro[0] ?? c.teaser,
    heroSecond: c.intro[1],
    heroChecks,
    heroImage: ex.heroImage && ex.heroImage.trim() ? ex.heroImage : FALLBACK_HERO,
    audienceTitle: ex.audienceTitle ?? 'Кому будет полезен курс?',
    audienceIntro:
      ex.audienceIntro ??
      'Программа подходит для сотрудников и руководителей, которым необходимо пройти обучение и зафиксировать результат.',
    audienceCards: ex.audienceCards?.length ? ex.audienceCards : defaultAudienceCards(c),
    programIntro:
      ex.programIntro ??
      `Структурированная программа по теме «${c.title}» с модулями, тестами и итоговой аттестацией.`,
    programHighlights: ex.programHighlights?.length ? ex.programHighlights : defaultHighlights(c),
    accordion,
    certificateParagraph,
  };
}
