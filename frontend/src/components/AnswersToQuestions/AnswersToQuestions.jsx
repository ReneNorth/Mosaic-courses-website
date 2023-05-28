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
              Да, никаких предварительных навыков не требуется.
              Мы рекомендуем начать с короткого мастер-класса, чтобы понять ваше ли это ремесло.
            </p>
          </div>
        </li>
        <li className={cls.acorСontainer}>
          <input type="checkbox" name="chacor" id="chacor2" />
          <label htmlFor="chacor2">Что нужно принести с собой?</label>
          <div className={cls.answerWrapper}>
            <p className={cls.answer}>
              Ничего, мы работаем по принципу &quot;всё включено&quot;.
              Мы даем вам материалы и инструменты, вы получаете результат
              и забираете вашу работу с собой.
            </p>
          </div>
        </li>
        <li className={cls.acorСontainer}>
          <input type="checkbox" name="chacor" id="chacor4" />
          <label htmlFor="chacor4">Что я смогу освоить на курсах?</label>
          <div className={cls.answerWrapper}>
            <p className={cls.answer}>
              В зависимости от курса вы создадите небольшой арт-объект
              или целый портрет.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
