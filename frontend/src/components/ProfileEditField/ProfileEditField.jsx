import { useState } from 'react';
import cls from './ProfileEditField.module.scss';
import { classNames } from '../../helpers/classNames';

export const ProfileEditField = ({ title, fieldValue, children }) => {
  const [fieldName, setfieldName] = useState(false);
  const openToEditName = (e) => {
    e.preventDefault();
    setfieldName(!fieldName);
  };
  return (
    <div className={cls.line}>
      <div className={cls.dataWrapper}>
        <h3 className={classNames(cls.lineTitle, { [cls.lineTitleActive]: fieldName }, [])}>{title}</h3>
        {!fieldName && (<p className={cls.fieldPlaceholder}>{fieldValue}</p>)}
        {fieldName && (children)}
      </div>
      <button
        type="button"
        className={classNames(cls.editButton, { [cls.editButtonActive]: fieldName }, [])}
        onClick={(e) => openToEditName(e)}
      >
        {!fieldName && ('Редактировать')}
        {fieldName && ('Отменить')}
      </button>
    </div>
  );
};
