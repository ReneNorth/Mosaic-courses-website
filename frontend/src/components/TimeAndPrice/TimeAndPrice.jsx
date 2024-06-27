import timeAndPriceStyles from './TimeAndPrice.module.scss';

const TimeAndPrice = ({
  time, price, isSelected, handleClick,
}) => {
  return (
    <div className={`${timeAndPriceStyles.container} ${isSelected ? timeAndPriceStyles.selected : ''}`}>
      <button
        className={timeAndPriceStyles.button}
        type="button"
        onClick={handleClick}
      >
        <p className={timeAndPriceStyles.time}>{time}</p>
        <p className={timeAndPriceStyles.price}>{price}</p>
      </button>
    </div>
  );
};

export default TimeAndPrice;
