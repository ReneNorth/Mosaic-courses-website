/* eslint-disable jsx-a11y/control-has-associated-label */
import cls from './AnswersToQuestions.module.scss';

export const AnswersToQuestions = () => {
  return (
    <section className={cls.section}>
      <h2 className={cls.title}>
        Ответы на часто задаваемые
        <span> вопросы</span>
      </h2>
      <ul className={cls.list}>
        <li className={cls.item}>
          <div className={cls.wrapper}>
            <h3 className={cls.questionTitle}>
              Я никогда не работал с мозаикой, смогу ли я научиться с нуля?
            </h3>
            <button type="button" className={cls.btn} />
          </div>
          <p className={cls.answer}>
            Недалеко от школы есть городские парковки на улицах Палиха, Лесной и
            Новослободской.
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.wrapper}>
            <h3 className={cls.questionTitle}>Что нужно принести с собой?</h3>
            <button type="button" className={cls.btn} />
          </div>
          <p className={cls.answer}>
            Недалеко от школы есть городские парковки на улицах Палиха, Лесной и
            Новослободской.
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.wrapper}>
            <h3 className={cls.questionTitle}>
              Какие материалы входят в стоимость курса?
            </h3>
            <button type="button" className={cls.btn} />
          </div>
          <p className={cls.answer}>
            Недалеко от школы есть городские парковки на улицах Палиха, Лесной и
            Новослободской.
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.wrapper}>
            <h3 className={cls.questionTitle}>
              Что я смогу освоить на курсах?
            </h3>
            <button type="button" className={cls.btn} />
          </div>
          <p className={cls.answer}>
            Недалеко от школы есть городские парковки на улицах Палиха, Лесной и
            Новослободской.
          </p>
        </li>
        <li className={cls.item}>
          <div className={cls.wrapper}>
            <h3 className={cls.questionTitle}>
              Рядом с вашей студией есть парковка?
            </h3>
            <button type="button" className={cls.btn} />
          </div>
          <p className={cls.answer}>
            Недалеко от школы есть городские парковки на улицах Палиха, Лесной и
            Новослободской.
          </p>
        </li>
      </ul>
    </section>
  );
};
