import cls from './TeacherSection.module.scss';
import teacherImg from '../../images/teacher-photo.jpg';

export const TeacherSection = () => {
  return (
    <div className={cls.infoBlock}>
      <h3 className={cls.containerHeading}>Преподаватель</h3>
      <div className={cls.containerInfo}>
        <img className={cls.teacherImg} src={teacherImg} alt="Промо картинка" />

        <div>
          <h4>Алена Петрова</h4>
          <div className={cls.text}>
            Мы проводим мастер-классы по живописи и гончарному делу для деток и
            взрослых.
            <p>
              Мы делаем рисование доступным с помощью пошаговой программы и
              вовлечённых преподавателей. Вы как ученик обязательно
              прочувствуете нашу дружескую и лёгкую атмосферу.
            </p>
          </div>
        </div>
      </div>
      {/* <h3 class="container-heading">Также покупают</h3>
      <div class="container-info"></div>
    </section>
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script> */}
    </div>
  );
};
