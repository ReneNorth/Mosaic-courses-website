import cls from './CardMoreContent.module.scss';

/*
  Компонент  карточки  с дополнительным  связаным  контентом.
  Пример  где используется: Связанные статьи, страница  404,  Также покупают
*/
export const CardMoreContent = ({
  srcImage, title, other, text, button,
}) => {
  return (
    <article className={cls.card}>
      <img className={cls.img} src={srcImage} alt={`Картинка для каторчки ${title}`} />
      <div className={cls.container}>
        <h3 className={cls.title}>{title}</h3>
        <span className={cls.other}>{other}</span>
        <p className={cls.text}>{text}</p>
        {button}
      </div>
    </article>
  );
};