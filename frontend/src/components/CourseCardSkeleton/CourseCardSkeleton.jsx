import cls from './CourseCardSkeleton.module.scss';
import { classNames } from '../../helpers/classNames';

export const CourseCardSkeleton = () => {
  return (
    <li className={cls.skeleton}>
      <div className={cls.skeletonImage} />
      <div className={cls.content}>
        <div className={cls.contentDescription} />
        <div className={cls.contentPriceWrapper}>
          <div className={cls.contentIcon} />
          <div className={cls.contentPrice} />
          <div className={cls.contentIcon} />
          <div className={cls.contentData} />
        </div>
        <div
          className={classNames(cls.contentDescription, {}, [
            cls.contentDescriptionMiddle,
          ])}
        />
        <div className={cls.contentButtonsWrapper}>
          <div
            className={classNames(cls.contentButton, {}, [
              cls.contentButtonMain,
            ])}
          />
          <div className={cls.contentButton} />
        </div>
      </div>
    </li>
  );
};
