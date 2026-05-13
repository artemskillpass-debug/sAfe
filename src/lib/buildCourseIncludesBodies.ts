import type { CourseDetail } from '../data/courses';

const trimSentence = (s: string, max: number): string =>
  s.length <= max ? s : `${s.slice(0, max - 1).trim()}…`;

/**
 * Три набора абзацев для блока «Что включают в себя курсы»: порядок, бонусы SkillPass, целевая аудитория.
 * Можно переопределить через course.expand.includesBlock.
 */
export function buildCourseIncludesBodies(course: CourseDetail): readonly [string[], string[], string[]] {
  const custom = course.expand?.includesBlock;
  if (
    custom?.orderAndTerms?.length &&
    custom?.perks?.length &&
    custom?.whoNeedsTraining?.length
  ) {
    return [custom.orderAndTerms, custom.perks, custom.whoNeedsTraining];
  }

  const modules = course.program.filter((p) => !/итогов/i.test(p.title));
  const modCount = modules.length;
  const durationLine =
    modules.length > 0
      ? modules.map((m) => `${m.title.replace(/^Модуль \d+\.\s*/, '')} — ${m.duration}`).join('; ')
      : '';

  const order: string[] = [
    `Порядок и сроки обучения по курсу «${course.title}» определяются дистанционным регламентом платформы SkillPass и внутренними правилами вашей организации.`,
    modCount > 0
      ? `Программа включает ${modCount} ${modCount === 1 ? 'учебный модуль' : modCount < 5 ? 'учебных модуля' : 'учебных модулей'}. ${durationLine ? `Объём по модулям: ${durationLine}.` : ''} После освоения материалов предусмотрена итоговая проверка знаний по курсу.`
      : `После освоения материалов предусмотрена итоговая проверка знаний по теме «${course.title}».`,
    `${trimSentence(course.format.left, 520)}`,
  ];

  const perks: string[] = [
    'Работая со SkillPass, вы без отдельной оплаты за перечень ниже получаете готовый дистанционный контур обучения: доступ к структурированным учебным материалам, личный кабинет слушателя, промежуточные проверки и фиксацию прогресса.',
    'Технические вопросы по доступу решаются поддержкой платформы; по завершении курса результат оформляется в установленном порядке — вы получаете прозрачное подтверждение прохождения обучения и проверки знаний.',
  ];

  const who: string[] = [
    `К обучению по программе «${course.title}» относятся сотрудники и должностные лица, для которых по нормам РК или по политике компании требуется подтвердить подготовку по этой теме.`,
    `${trimSentence(course.forWhom.left, 560)}`,
    `${trimSentence(course.forWhom.right, 560)}`,
  ];

  if (course.learnPoints?.length) {
    who.push(
      `Ключевые темы программы включают: ${course.learnPoints
        .map((li) =>
          trimSentence(li.replace(/^\s*check_circle\s*/i, '').replace(/^[^\p{L}]+\s*/u, '').trim(), 180),
        )
        .filter(Boolean)
        .slice(0, 4)
        .join('; ')}.`,
    );
  }

  return [order, perks, who];
}
