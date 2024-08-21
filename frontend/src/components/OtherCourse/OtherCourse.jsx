import otherCourseStyles from './OtherCourse.module.scss';

const OtherCourse = ({
  imagePath, title, price, duration, description,
}) => {
  return (
    <div className={otherCourseStyles.container}>
      <div className={otherCourseStyles.wrapper}>
        <img
          className={otherCourseStyles.image}
          src={imagePath}
          alt="Промо картинка"
        />
      </div>
      <div className={otherCourseStyles.courseBox}>
        <h4 className={otherCourseStyles.title}>
          {title}
        </h4>
        <div className={otherCourseStyles.wrapperAtribut}>
          <div className={otherCourseStyles.iconContainer}>
            <div className={otherCourseStyles.timeIcon} />
            <p>{duration}</p>
          </div>
          <div className={otherCourseStyles.iconContainer}>
            <div className={otherCourseStyles.rubleIcon} />
            <p>{price}</p>
          </div>
        </div>

        <p className={otherCourseStyles.description}>
          {description}
        </p>
        <button className={otherCourseStyles.btn} type="button">
          Узнать подробнее
        </button>
      </div>
    </div>
  );
};

export default OtherCourse;
