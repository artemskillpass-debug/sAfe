/**
 * Картинки (assets) для героя на странице каждого курса.
 *
 * КАК ЗАПОЛНИТЬ:
 * 1. Найди slug нужного курса ниже (например, "antiterror").
 * 2. Вставь URL картинки между кавычками "" в поле heroImage.
 *    - Можно вставить внешнюю ссылку: "https://example.com/picture.jpg"
 *    - Или путь к файлу из public/, например:
 *        положи файл в public/courses/antiterror.jpg,
 *        тогда heroImage = "/courses/antiterror.jpg".
 * 3. Если оставить пустую строку "" — в макете покажется аккуратный плейсхолдер,
 *    а не битая картинка.
 *
 * Этот файл правится РУКАМИ. При `npm run sync:stitch` он НЕ перезаписывается.
 */
export const COURSE_ASSETS: Record<string, { heroImage: string }> = {
  anticorruption: {
    heroImage: '',
  },
  antiterror: {
    heroImage: '',
  },
  'labor-protection': {
    heroImage: '',
  },
  bullying: {
    heroImage: '',
  },
  'civil-defense': {
    heroImage: '',
  },
  inclusivity: {
    heroImage: '',
  },
  cybersecurity: {
    heroImage: '',
  },
  paramedic: {
    heroImage: '',
  },
  'fire-ptm': {
    heroImage: '',
  },
  'industrial-safety': {
    heroImage: '',
  },
  'sanitary-epidemiological': {
    heroImage: '',
  },
  conciliation: {
    heroImage: '',
  },
  electrical: {
    heroImage: '',
  },
};

export function getCourseHeroImage(slug: string): string {
  return COURSE_ASSETS[slug]?.heroImage?.trim() ?? '';
}
