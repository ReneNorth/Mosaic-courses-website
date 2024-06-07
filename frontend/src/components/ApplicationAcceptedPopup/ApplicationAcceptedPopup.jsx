import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import applicationAcceptedPopupStyles from './ApplicationAcceptedPopup.module.scss';
import mosaicHeartImage from '../../images/heart-mosaic.png';
import { Button } from '../Button/Button';

const ApplicationAcceptedPopup = () => {
  return (
    <ModalOverlay>
      <div className={applicationAcceptedPopupStyles.container}>
        <button
          type="button"
          aria-label="Кнопка закрыть"
          className={applicationAcceptedPopupStyles.closeButton}
        />
        <img
          src={mosaicHeartImage}
          alt="Сердечко из мозаики"
          className={applicationAcceptedPopupStyles.image}
        />
        <h2 className={applicationAcceptedPopupStyles.title}>Ваша заявка принята</h2>
        <p className={applicationAcceptedPopupStyles.text}>
          Оператор свяжется с вами в ближайшее время, для подтверждение заявки.
        </p>
        <p className={applicationAcceptedPopupStyles.text}>Спасибо за внимание к нашей студии!</p>
        <Button
          className="fill"
          decoration="black"
        >
          Нажми на меня
        </Button>
        <p className={applicationAcceptedPopupStyles.workTime}>Рабочее время студии:</p>
        <p className={applicationAcceptedPopupStyles.workTimeValue}>пн-сб — 9:00–19:00, вс — выходной</p>
      </div>
    </ModalOverlay>
  );
};

export default ApplicationAcceptedPopup;
