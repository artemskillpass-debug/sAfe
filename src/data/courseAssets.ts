export const COURSE_ASSETS: Record<string, { heroImage: string }> = {
  anticorruption: {
    heroImage: '/src/assets/cours/антикоррупция.png',
  },
  antiterror: {
    heroImage: '/src/assets/cours/антитеррор (2).png',
  },
  'labor-protection': {
    heroImage: '/src/assets/cours/Безопасность и Охрана Труда.png',
  },
  bullying: {
    heroImage: '/src/assets/cours/буллингарт.png',
  },
  'civil-defense': {
    heroImage: '/src/assets/cours/Гражданнская оборона.png',
  },
  inclusivity: {
    heroImage: '/src/assets/cours/Инклюзивность.png',
  },
  cybersecurity: {
    heroImage: '/src/assets/cours/кибербез.png',
  },
  paramedic: {
    heroImage: '/src/assets/cours/Парамедика.png',
  },
  'fire-ptm': {
    heroImage: '/src/assets/cours/пожарная безопасность.png',
  },
  'industrial-safety': {
    heroImage: '/src/assets/cours/промышленная безопасность .png',
  },
  'sanitary-epidemiological': {
    heroImage: '/src/assets/cours/СЭЗ (2).png',
  },
  conciliation: {
    heroImage: '/src/assets/cours/Согласительная коммисия.png',
  },
  electrical: {
    heroImage: '/src/assets/cours/Электробезопасность.png',
  },
};

export function getCourseHeroImage(slug: string): string {
  return COURSE_ASSETS[slug]?.heroImage?.trim() ?? '';
}