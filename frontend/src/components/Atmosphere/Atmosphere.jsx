import cls from './Atmosphere.module.scss';
import paint from '../../images/AtmospherePaint.png';
import arm from '../../images/AtmosphereArm.png';
import man from '../../images/AtmosphereMan.png';
import mosaic from '../../images/AtmosphereMosaic.png';
import table from '../../images/AtmosphereTable.png';

export const Atmosphere = () => {
  return (
    <section className={cls.AtmosphereBox}>
      <h1 className={cls.title}>
        О студии мозаики&nbsp;
        <span className={cls.span}>Tessera</span>
      </h1>
      <div className={cls.container}>
        {' '}
        <img
          className={cls.child1}
          src={paint}
          alt="атмосфера"
        />
        <img
          className={cls.child2}
          src={table}
          alt="атмосфера"
        />
        <img
          className={cls.child4}
          src={arm}
          alt="атмосфера"
        />
        <img
          className={cls.child5}
          src={mosaic}
          alt="атмосфера"
        />
        <img
          className={cls.child3}
          src={man}
          alt="атмосфера"
        />
      </div>
    </section>
  );
};
