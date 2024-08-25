import cls from './PromoSection.module.scss';
/**
 * Renders a promo section with the provided images, title, text, and otherElements.
 *
 * @param {string} title - The title for the promo section, you can wrap the word in a span and it will be highlighted.
 * @param {string} text - The text content for the promo section.
 * @param {object} otherElements - This element for buttons, information curse, information post and other. This element must be styled before being sent to the component.
 * @return {object} The rendered promo section component.
 */

export const PromoSectionWithoutImage = ({
  title, text, otherElements,
}) => {
  return (
    <section className={cls.section}>
      <div className={cls.left}>
        <h1 className={cls.title}>{title}</h1>
        <p className={cls.paragraph}>{text}</p>
        <div className={cls.otherElements}>
          {otherElements}
        </div>
      </div>
    </section>
  );
};
