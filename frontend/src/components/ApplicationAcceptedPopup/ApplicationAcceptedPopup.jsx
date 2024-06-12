import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import applicationAcceptedPopupStyles from './ApplicationAcceptedPopup.module.scss';
import mosaicHeartImage from '../../images/heart-mosaic.png';
import { Button } from '../Button/Button';
import { setIsApplicationAcceptedPopupOpen } from '../../services/slices/popupSlice';
import { useModalClose } from '../../hooks/useModalClose';
import CloseIcon from '../../images/CloseIcon';
import { useResize } from '../../hooks/useResize';

const ApplicationAcceptedPopup = () => {
  const dispatch = useDispatch();
  const { width } = useResize();

  function handleClose() {
    dispatch(setIsApplicationAcceptedPopupOpen(false));
  }

  useModalClose(handleClose);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className={applicationAcceptedPopupStyles.container}>
        <button
          type="button"
          aria-label="Кнопка закрыть"
          className={applicationAcceptedPopupStyles.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </button>
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
        <div className={applicationAcceptedPopupStyles.buttonContainer}>
          <Button
            className="fill"
            {...(width > 664 ? { decoration: 'black' } : {})}
            fill
          >
            Вернуться на главную
          </Button>
        </div>
        <p className={applicationAcceptedPopupStyles.workTime}>Рабочее время студии:</p>
        <p className={applicationAcceptedPopupStyles.workTimeValue}>пн-сб — 9:00–19:00, вс — выходной</p>
      </div>
    </ModalOverlay>,
    modalRoot,
  );
};

export default ApplicationAcceptedPopup;
