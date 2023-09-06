import { useState, useRef } from 'react';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import { GiftCertificatesHeader } from '../../components/GiftCertificatesHeader/GiftCertificatesHeader';
import { CertificateSection } from '../../components/CertificateSection/CertificateSection';
import NewSettler from '../../components/NewSettler/NewSettler';

export const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const certificateSectionRef = useRef(null); // Create a ref for CertificateSection
  return (
    <>
      <NewSettler isOpen={isOpen} setIsOpen={setIsOpen} />
      <GiftCertificatesHeader
        scrollFunction={() => certificateSectionRef.current.scrollIntoView({ behavior: 'smooth' })}
      />
      <CertificateSection ref={certificateSectionRef} />
      <RemainedQuestion setIsOpen={setIsOpen} />
    </>
  );
};
