import timeAndPriceStyles from './TimeAndPrice.module.scss';

const TimeAndPrice = ({ time, price }) => {
  return (
    <div className={timeAndPriceStyles.container}>
      <p className={timeAndPriceStyles.time}>{time}</p>
      <p className={timeAndPriceStyles.price}>{price}</p>
    </div>
  );
};

export default TimeAndPrice;
