import { InfoFooter } from '../InfoFooter/InfoFooter';
import { MapAndContacts } from '../MapAndContacts/MapAndContacts';
import cls from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <MapAndContacts />
      <InfoFooter />
    </footer>
  );
};
