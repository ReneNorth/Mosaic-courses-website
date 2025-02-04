import { useState, useRef } from 'react';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import { GiftCertificatesHeader } from '../../components/GiftCertificatesHeader/GiftCertificatesHeader';
import { CertificateSection } from '../../components/CertificateSection/CertificateSection';
import NewSettler from '../../components/NewSettler/NewSettler';

export const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const certificateSectionRef = useRef(null);
  const handleClick = () => certificateSectionRef.current.scrollIntoView({ behavior: 'smooth' });

  const title = 'Закажите обратный звонок';
  const description = 'Заполните поля формы';
  return (
    <>
      <NewSettler isOpen={isOpen} setIsOpen={setIsOpen} title={title} description={description} />
      <GiftCertificatesHeader scrollFunction={handleClick} />
      <CertificateSection ref={certificateSectionRef} />
      <RemainedQuestion setIsOpen={setIsOpen} />
    </>
  );
};
