import styles from './SliderWrapper.module.scss';

const SliderWrapper = ({ children }) => {
  return (
    <ul className={styles.slider}>
      {children}
    </ul>
  );
};

export default SliderWrapper;
