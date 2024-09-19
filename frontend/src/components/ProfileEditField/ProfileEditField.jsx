import { useState } from 'react';
import cls from './ProfileEditField.module.scss';
import { classNames } from '../../helpers/classNames';

export const ProfileEditField = ({
  title,
  fieldValue,
  isChanging,
  setIsChanging,
  children,
}) => {
  return (
    <div className={cls.line}>
      <div className={cls.dataWrapper}>
        <h3
          className={classNames(
            cls.lineTitle,
            { [cls.lineTitleActive]: isChanging },
            [],
          )}
        >
          {title}
        </h3>
        {!isChanging && <p className={cls.fieldPlaceholder}>{fieldValue}</p>}
        {isChanging && children}
      </div>
      <button
        type="button"
        className={classNames(
          cls.editButton,
          { [cls.editButtonActive]: isChanging },
          [],
        )}
        onClick={() => setIsChanging(!isChanging)}
      >
        {!isChanging && 'Редактировать'}
        {isChanging && 'Отменить'}
      </button>
    </div>
  );
};
