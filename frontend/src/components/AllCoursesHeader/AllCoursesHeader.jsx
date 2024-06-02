import cls from './AllCoursesHeader.module.scss';

export const AllCoursesHeader = () => {
  return (
    <section className={cls.section}>
      <div className={cls.block}>
        <h1 className={cls.title}>
          Курсы по мозаике в студии
          <span className={cls.span}>«Под горой»</span>
        </h1>
      </div>
    </section>
  );
};
