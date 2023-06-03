import cls from './Atmosphere.module.scss';
import paint from '../../images/atmospherePaint.png';
import arm from '../../images/atmosphereArm.png';
import man from '../../images/atmosphereMan.png';
import mosaic from '../../images/atmosphereMosaic.png';
import table from '../../images/atmosphereTable.png';

export const Atmosphere = () => {
  return (
    <section className={cls.AtmosphereBox}>
      <h1 className={cls.title}>
        Атмосфера&nbsp;
        <span className={cls.span}>в студии</span>
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
