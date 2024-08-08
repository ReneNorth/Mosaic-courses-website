import { useState } from 'react';
import { useResize } from '../../hooks/useResize';
import iconInfoStyles from './IconInfo.module.scss';

const IconInfo = ({
  iconPath, alt, text, needQuestion,
}) => {
  const { width } = useResize();
  const [isHintVisible, setIsHintVisible] = useState(false);

  function handleHintVisibility() {
    setIsHintVisible(!isHintVisible);
  }
  console.log(text);
  return (
    <>
      <div className={iconInfoStyles.container}>
        <img className={iconInfoStyles.icon} src={iconPath} alt={alt} />
        <p className={iconInfoStyles.iconLabel}>{`${text || ''}`}</p>
        {needQuestion
          && (
            <button
              type="button"
              className={iconInfoStyles.question}
              aria-label="Иконка вопрос"
              onClick={handleHintVisibility}
            />
          )}
        {needQuestion && isHintVisible && width > 1320
          && (
            <div className={iconInfoStyles.hintContainer}>
              <p className={iconInfoStyles.hint}>
                Стоимость меняется в зависимости от курса и преподавателя
              </p>
            </div>
          )}
      </div>
      {needQuestion && isHintVisible && width <= 1320 && (
        <div className={iconInfoStyles.hintContainer}>
          <p className={iconInfoStyles.hint}>
            Стоимость меняется в зависимости от курса и преподавателя
          </p>
        </div>
      )}
    </>
  );
};

export default IconInfo;
