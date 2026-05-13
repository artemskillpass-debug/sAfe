/**
 * Выгрузка детальных экранов Stitch и генерация src/data/stitchCoursePatches.generated.ts
 *
 * Требуется: STITCH_API_KEY в окружении (не коммитить ключ).
 * Запуск: npm run sync:stitch
 */
import * as cheerio from 'cheerio';
import { stitch } from '@google/stitch-sdk';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'src', 'data', 'stitchCoursePatches.generated.ts');

const PROJECT_ID = '15146325854578278163';

const SLUG_TO_SCREEN = {
  anticorruption: '442311a6705d472fad56cb8e7bb99f83',
  antiterror: 'e8032d2f742f4ddbb1b7c351a100fefb',
  'labor-protection': '7ea276cc639941259f32872d63887a15',
  bullying: 'eb0cba5f28894994bc1360c0b56db36f',
  'civil-defense': 'be076ddcedae46e88e3593aa7a6e9e97',
  inclusivity: '025ad6885066401fba1c03c8e1ee2da3',
  cybersecurity: 'e16e176d1c7e41418fa811b6496726db',
  paramedic: '517d326180ac483cbd732c023bb2c606',
  'fire-ptm': '2e17e2935dba4737b2c055e42a0c2dae',
  'industrial-safety': '8a86753f56714812a5f99f2719095a49',
  'sanitary-epidemiological': '7688e551032b4cec93a78305bf4c621e',
  conciliation: '56507ac4ad6e43958a0c409f0705bbb8',
  electrical: '0240d5241664486b9924900b449728b5',
};

const ORDER = [
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
];

function norm(s) {
  return (s || '')
    .replace(/\s+/g, ' ')
    .replace(/\u00a0/g, ' ')
    .trim();
}

function parseHoursFromBadges(badges) {
  for (const b of badges) {
    const m = norm(b.label).match(/(\d+)\s*(час|hour)/i);
    if (m) return parseInt(m[1], 10);
  }
  return null;
}

function buildProgramFromAccordion(accordion, totalHours) {
  const n = accordion.length;
  const per = totalHours && n > 0 ? Math.max(1, Math.round(totalHours / n)) : 2;
  return accordion.map((a, i) => {
    const isFinal = /итогов/i.test(a.title);
    return {
      title: `Модуль ${i + 1}. ${norm(a.title)}`,
      duration: isFinal ? '1 час' : `${per} часа`,
    };
  });
}

function parseStitchHtml(html, slug) {
  const $ = cheerio.load(html);

  const hero = $('main section, body > section')
    .filter((_, el) => $(el).find('h1').length > 0)
    .first();
  if (!hero.length) throw new Error(`[${slug}] hero section not found`);

  const badges = [];
  hero
    .find('div.flex.flex-col.gap-gutter > div.flex.items-center.gap-2.mb-2 span.font-label-sm')
    .each((_, el) => {
      const $el = $(el);
      const iconEl = $el.find('span.material-symbols-outlined').first();
      const icon = iconEl.length ? norm(iconEl.text()) : undefined;
      let label = norm($el.clone().children().remove().end().text());
      if (!label) label = norm($el.text());
      const cls = $el.attr('class') || '';
      const variant = cls.includes('bg-primary-fixed') ? 'primary' : 'neutral';
      const b = { label, variant };
      if (icon) b.icon = icon;
      badges.push(b);
    });

  if (!badges.length) {
    hero.find('div.flex.items-center.gap-2.mb-2 span.font-label-sm').each((_, el) => {
      const $el = $(el);
      const iconEl = $el.find('span.material-symbols-outlined').first();
      const icon = iconEl.length ? norm(iconEl.text()) : undefined;
      let label = norm($el.clone().children().remove().end().text());
      if (!label) label = norm($el.text());
      const cls = $el.attr('class') || '';
      const variant = cls.includes('bg-primary-fixed') ? 'primary' : 'neutral';
      const b = { label, variant };
      if (icon) b.icon = icon;
      if (label) badges.push(b);
    });
  }

  if (!badges.length) {
    const pill = hero
      .find('div.inline-flex.items-center')
      .filter((_, el) => $(el).find('span.material-symbols-outlined').length > 0)
      .first();
    if (pill.length) {
      const icon = norm(pill.find('span.material-symbols-outlined').first().text());
      const label = norm(pill.clone().find('span.material-symbols-outlined').remove().end().text());
      if (label) badges.push({ label, variant: 'primary', icon: icon || undefined });
    }
  }

  if (!badges.length) {
    hero.find('span.font-label-sm.rounded-full').each((_, el) => {
      const $el = $(el);
      const label = norm($el.text());
      if (label) badges.push({ label, variant: 'primary' });
    });
  }

  const h1 = hero.find('h1').first();
  const titleHighlight = norm(h1.find('span.text-on-primary').first().text());
  const h1RestEl = h1.clone();
  h1RestEl.find('span.relative.inline-block').remove();
  const titleRest = norm(h1RestEl.text());
  const title = norm([titleHighlight, titleRest].filter(Boolean).join(' ')) || norm(h1.text());

  const heroPs = [];
  hero.find('p.font-body-lg').each((_, el) => {
    const t = norm($(el).text());
    if (t) heroPs.push(t);
  });
  const intro = heroPs.length >= 2 ? heroPs : heroPs.length === 1 ? [heroPs[0]] : [];

  const heroChecks = [];
  hero.find('div.flex.items-center.gap-4.mt-4 div.flex.items-center.gap-1').each((_, el) => {
    const t = norm($(el).clone().find('span.material-symbols-outlined').remove().end().text());
    if (t) heroChecks.push(t);
  });

  // heroImage намеренно не выгружаем из Stitch.
  // URL картинок для героя задаются вручную в src/data/courseAssets.ts.
  const heroImage = '';

  const audienceSection = $('h2')
    .filter((_, el) => {
      const t = norm($(el).text());
      return /кому |для кого|who is|target audience/i.test(t);
    })
    .first()
    .closest('section');

  let audienceTitle = 'Кому будет полезен курс?';
  let audienceIntro = '';
  const audienceCards = [];

  if (audienceSection.length) {
    audienceTitle = norm(audienceSection.find('h2.font-headline-lg').first().text() || audienceTitle);
    audienceSection.find('div.text-center p.font-body-lg').first().each((_, el) => {
      audienceIntro = norm($(el).text());
    });
    if (!audienceIntro) {
      audienceSection.find('p.font-body-lg').first().each((_, el) => {
        audienceIntro = norm($(el).text());
      });
    }
    audienceSection.find('div.grid > div.bg-surface-container-lowest').each((_, card) => {
      const $c = $(card);
      const icon = norm($c.find('div span.material-symbols-outlined').first().text());
      const titleC = norm($c.find('h3').first().text());
      const body = norm($c.find('p.flex-grow').first().text() || $c.find('p').last().text());
      if (titleC) audienceCards.push({ icon: icon || 'groups', title: titleC, body: body || '' });
    });
  } else {
    audienceIntro =
      intro[0] ||
      `Программа «${title}» на платформе SkillPass для сотрудников и руководителей организаций.`;
    audienceCards.push(
      {
        icon: 'manage_accounts',
        title: 'Руководители',
        body: 'Лица, ответственные за организацию обучения и соблюдение требований в компании.',
      },
      {
        icon: 'engineering',
        title: 'Специалисты',
        body: 'Службы ОТ, безопасности, внутреннего контроля, HR и комплаенса.',
      },
      {
        icon: 'groups',
        title: 'Сотрудники',
        body: 'Персонал, проходящий обучение по должностным инструкциям и плану квалификации.',
      },
    );
  }

  let programHeading = $('h2')
    .filter((_, el) => {
      const t = norm($(el).text());
      return /программа курса|учебный план|^программа$|syllabus|course syllabus|модули курса|course modules|modules\b|учебн|curriculum|содержание|highlights|основные темы|структура курса|overview|course overview|breakdown|syllabus breakdown/i.test(
        t,
      );
    })
    .first();

  let programSection;
  if (programHeading.length) {
    programSection = programHeading.closest('section');
  } else {
    programSection = $('main section')
      .has('div.grid')
      .filter((_, el) => $(el).find('h3.font-headline-md').length >= 2)
      .filter((_, el) => $(el).find('h1').length === 0)
      .first();
  }
  if (!programSection.length) throw new Error(`[${slug}] program section not found`);

  let programIntro = '';
  if (programHeading.length) {
    programHeading.nextAll('p').first().each((_, el) => {
      const t = norm($(el).text());
      if (t) programIntro = t;
    });
  }
  if (!programIntro) {
    programSection.find('p.font-body-md, p.font-body-lg').first().each((_, el) => {
      const t = norm($(el).text());
      if (t) programIntro = t;
    });
  }

  const sidebar = programSection.find('div.lg\\:col-span-1').first();
  if (sidebar.length) {
    sidebar.find('p.font-body-lg').first().each((_, el) => {
      const t = norm($(el).text());
      if (t) programIntro = t;
    });
  }

  const programHighlights = [];
  if (sidebar.length) {
    sidebar.find('ul li').each((_, li) => {
      const $li = $(li);
      const icon = norm($li.find('span.material-symbols-outlined').first().text());
      const text = norm($li.find('span.font-body-md').first().text() || $li.text());
      if (text) programHighlights.push({ icon: icon || 'play_lesson', text });
    });
  }

  let certificateParagraph = '';
  let accordion = [];
  programSection.find('details').each((_, det) => {
    const $d = $(det);
    const $sum = $d.find('summary').first();
    const code = norm($sum.find('span.text-primary-container').first().text());
    let titleAcc = '';
    const flex = $sum.find('div.flex.items-center.gap-4').first();
    if (flex.length) {
      titleAcc = norm(flex.clone().find('span.text-primary-container').remove().end().text());
    } else {
      titleAcc = norm($sum.clone().find('span.material-symbols-outlined').remove().end().text());
    }
    const bullets = [];
    $d.find('ul.list-disc li').each((_, li) => {
      const b = norm($(li).text());
      if (b) bullets.push(b);
    });
    if (code && titleAcc) accordion.push({ code, title: titleAcc, bullets });
  });

  if (!accordion.length) {
    const syllabusUl = programSection
      .find('ul')
      .filter((_, ul) => $(ul).find('li h4').length >= 2)
      .first();
    if (syllabusUl.length) {
      let k = 0;
      syllabusUl.find('li').each((_, li) => {
        const $li = $(li);
        const titleAcc = norm($li.find('h4').first().text());
        const desc = norm($li.find('p.font-body-md').first().text());
        if (!titleAcc) return;
        k += 1;
        accordion.push({
          code: String(k).padStart(2, '0'),
          title: titleAcc,
          bullets: desc ? [desc] : [],
        });
      });
    }
  }

  if (!accordion.length) {
    const grid = programSection.find('div.grid').first();
    let accIdx = 0;
    grid.children('div').each((_, el) => {
      const $card = $(el);
      const h3 = $card.find('h3.font-headline-md').first();
      if (!h3.length) return;
      const titleAcc = norm(h3.text());
      if (/certif|сертификат|certificate/i.test(titleAcc)) {
        const cp = norm($card.find('p.font-body-md').first().text());
        if (cp) certificateParagraph = cp;
        return;
      }
      const bodyP = norm($card.find('p.font-body-md').first().text());
      const bullets = [];
      $card.find('ul li').each((_, li) => {
        const $li = $(li);
        const line = norm($li.find('span.font-body-md').last().text() || $li.text());
        if (line) bullets.push(line);
      });
      if (!bullets.length && bodyP) {
        bodyP
          .split(/(?<=[.!?])\s+/)
          .map((x) => norm(x))
          .filter(Boolean)
          .forEach((s) => bullets.push(s));
      }
      accIdx += 1;
      const code = String(accIdx).padStart(2, '0');
      if (titleAcc)
        accordion.push({ code, title: titleAcc, bullets: bullets.length ? bullets : [bodyP].filter(Boolean) });
    });
  }

  if (!programHighlights.length && accordion.length) {
    programHighlights.push(
      { icon: 'play_lesson', text: `${accordion.length} учебных модулей` },
      { icon: 'assignment', text: 'Практические материалы и тесты' },
      { icon: 'quiz', text: 'Итоговое тестирование' },
    );
  }

  const certH2 = $('h2')
    .filter((_, el) => /сертификат|certification|certificate/i.test(norm($(el).text())))
    .first();
  if (certH2.length) {
    certH2
      .nextAll('p.font-body-lg')
      .first()
      .each((_, el) => {
        certificateParagraph = norm($(el).text());
      });
    if (!certificateParagraph) {
      certH2.parent().find('p.font-body-lg').first().each((_, el) => {
        certificateParagraph = norm($(el).text());
      });
    }
  }

  if (!certificateParagraph) {
    const certH3 = $('h3')
      .filter((_, el) => /certif|сертификат|certificate/i.test(norm($(el).text())))
      .first();
    if (certH3.length) {
      certH3
        .nextAll('p.font-body-md')
        .first()
        .each((_, el) => {
          certificateParagraph = norm($(el).text());
        });
    }
  }

  if (!certificateParagraph) {
    certificateParagraph = `По завершении обучения и успешной сдачи итогового теста вы получаете подтверждение на платформе SkillPass для кадрового учёта.`;
  }

  if (!accordion.length) {
    accordion.push({
      code: '01',
      title: 'Содержание курса',
      bullets: [
        programIntro ||
          'Структура программы отображается в личном кабинете SkillPass после записи на курс.',
      ],
    });
  }

  const totalH = parseHoursFromBadges(badges);
  const program = buildProgramFromAccordion(accordion, totalH);

  const learnPoints = accordion.map((a) => a.bullets[0]).filter(Boolean);
  if (learnPoints.length < 3) {
    for (const a of accordion) {
      for (const b of a.bullets.slice(1)) {
        if (b && !learnPoints.includes(b)) learnPoints.push(b);
        if (learnPoints.length >= 6) break;
      }
      if (learnPoints.length >= 6) break;
    }
  }

  let forWhom;
  if (audienceCards.length >= 3) {
    forWhom = {
      left: `${audienceCards[0].body} ${audienceCards[1].body}`.trim(),
      right: audienceCards[2].body,
    };
  } else if (audienceCards.length === 2) {
    forWhom = { left: audienceCards[0].body, right: audienceCards[1].body };
  } else {
    forWhom = {
      left:
        audienceIntro ||
        `Сотрудники и руководители, для которых актуальна тема «${title}».`,
      right: 'Специалисты по внутреннему контролю и кадровому сопровождению.',
    };
  }

  const expand = {
    badges,
    heroLead: intro[0] || programIntro || title,
    heroChecks: heroChecks.length ? heroChecks : undefined,
    heroImage: '',
    audienceTitle,
    audienceIntro: audienceIntro || undefined,
    audienceCards: audienceCards.length ? audienceCards : undefined,
    programIntro,
    programHighlights: programHighlights.length ? programHighlights : undefined,
    accordion: accordion.length ? accordion : undefined,
    certificateParagraph: certificateParagraph || undefined,
  };

  return {
    title,
    intro: intro.length ? intro : [expand.heroLead || title],
    forWhom,
    learnPoints:
      learnPoints.length >= 3
        ? learnPoints
        : [
            'Структурированные материалы и практические акценты программы.',
            'Промежуточные проверки знаний и итоговое тестирование на платформе SkillPass.',
            'Подтверждение прохождения для кадрового и внутреннего учёта.',
          ],
    program,
    expand,
  };
}

async function fetchHtml(projectId, screenId, apiKey) {
  const project = stitch.project(projectId);
  const screen = await project.getScreen(screenId);
  const url = await screen.getHtml();
  if (!url) throw new Error('Empty html download URL');
  const res = await fetch(url, { headers: { 'X-Goog-Api-Key': apiKey } });
  if (!res.ok) throw new Error(`HTML fetch ${res.status}`);
  return res.text();
}

async function main() {
  const apiKey = process.env.STITCH_API_KEY;
  if (!apiKey) {
    console.error('Задайте STITCH_API_KEY в окружении.');
    process.exit(1);
  }

  const patches = {};
  for (const slug of ORDER) {
    const screenId = SLUG_TO_SCREEN[slug];
    console.log(slug, screenId, '…');
    try {
      const html = await fetchHtml(PROJECT_ID, screenId, apiKey);
      patches[slug] = parseStitchHtml(html, slug);
      console.log('  OK:', patches[slug].title);
    } catch (e) {
      console.error('  FAIL', slug, e.message);
      process.exitCode = 1;
      throw e;
    }
  }

  const header = `/**
 * Автовыгрузка из Stitch (npm run sync:stitch). Не править вручную.
 */
`;

  const body = `export const STITCH_COURSE_PATCHES = ${JSON.stringify(patches, null, 2)} as const;

export type StitchCoursePatch = (typeof STITCH_COURSE_PATCHES)[keyof typeof STITCH_COURSE_PATCHES];
`;
  writeFileSync(OUT, header + body, 'utf8');
  console.log('Written', OUT);
}

main();
