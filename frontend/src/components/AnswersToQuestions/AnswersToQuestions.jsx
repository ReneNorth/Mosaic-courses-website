/* eslint-disable jsx-a11y/label-has-associated-control */
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
        <li className={cls.acorСontainer}>
          <input
            type="checkbox"
            name="chacor"
            id="chacor1"
            defaultChecked="checked"
          />
          <label htmlFor="chacor1">
            Я никогда не работал с мозаикой, смогу ли я научиться с нуля?
          </label>
          <div className={cls.answerWrapper}>
            <p className={cls.answer}>
              Недалеко от школы есть городские парковки на улицах Палиха, Лесной
              и Новослободской.
            </p>
          </div>
        </li>
        <li className={cls.acorСontainer}>
          <input type="checkbox" name="chacor" id="chacor2" />
          <label htmlFor="chacor2">Что нужно принести с собой?</label>
          <div className={cls.answerWrapper}>
            <p className={cls.answer}>
              Недалеко от школы есть городские парковки на улицах Палиха, Лесной
              и Новослободской.
            </p>
          </div>
        </li>
        <li className={cls.acorСontainer}>
          <input type="checkbox" name="chacor" id="chacor3" />
          <label htmlFor="chacor3">
            Какие материалы входят в стоимость курса?
          </label>
          <div className={cls.answerWrapper}>
            <p className={cls.answer}>
              Недалеко от школы есть городские парковки на улицах Палиха, Лесной
              и Новослободской.
            </p>
          </div>
        </li>
        <li className={cls.acorСontainer}>
          <input type="checkbox" name="chacor" id="chacor4" />
          <label htmlFor="chacor4">Что я смогу освоить на курсах?</label>
          <div className={cls.answerWrapper}>
            <p className={cls.answer}>
              Недалеко от школы есть городские парковки на улицах Палиха, Лесной
              и Новослободской.
            </p>
          </div>
        </li>
        <li className={cls.acorСontainer}>
          <input type="checkbox" name="chacor" id="chacor5" />
          <label htmlFor="chacor5">Рядом с вашей студией есть парковка?</label>
          <div className={cls.answerWrapper}>
            <p className={cls.answer}>
              Недалеко от школы есть городские парковки на улицах Палиха, Лесной
              и Новослободской.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
