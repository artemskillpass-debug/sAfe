/**

 * Изображения героя курса: только WebP из src/assets/cours/

 * (генерируются командой npm run optimize:assets из исходных PNG/JPEG).

 */

const coursModules = import.meta.glob('../assets/cours/*.webp', {

  eager: true,

  import: 'default',

}) as Record<string, string>;



/** slug курса → имя файла без расширения (как в папке cours) */

const SLUG_TO_FILE_STEM: Record<string, string> = {

  anticorruption: 'антикоррупция',

  antiterror: 'антитеррор (2)',

  'labor-protection': 'Безопасность и Охрана Труда',

  bullying: 'буллингарт',

  'civil-defense': 'Гражданнская оборона',

  inclusivity: 'Инклюзивность',

  cybersecurity: 'кибербез',

  paramedic: 'Парамедика',

  'fire-ptm': 'пожарная безопасность',

  'industrial-safety': 'промышленная безопасность ',

  'sanitary-epidemiological': 'СЭЗ (2)',

  conciliation: 'Согласительная коммисия',

  electrical: 'Электробезопасность',

};



function stemFromCoursPath(assetPath: string): string {

  const file = assetPath.split(/[/\\]/).pop() ?? '';

  return file.replace(/\.webp$/i, '');

}



const heroUrlByStem = (() => {

  const m = new Map<string, string>();

  for (const [p, url] of Object.entries(coursModules)) {

    m.set(stemFromCoursPath(p), url);

  }

  return m;

})();



export const COURSE_ASSETS: Record<string, { heroImage: string }> = Object.fromEntries(

  Object.entries(SLUG_TO_FILE_STEM).map(([slug, stem]) => {

    const url = heroUrlByStem.get(stem) ?? '';

    return [slug, { heroImage: url }];

  }),

) as Record<string, { heroImage: string }>;



export function getCourseHeroImage(slug: string): string {

  return COURSE_ASSETS[slug]?.heroImage?.trim() ?? '';

}

