import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import { GiftCertificatesHeader } from '../../components/GiftCertificatesHeader/GiftCertificatesHeader';
import { CertificateSection } from '../../components/CertificateSection/CertificateSection';

export const Certificates = () => {
  return (
    <>
      <GiftCertificatesHeader />
      <CertificateSection />
      <RemainedQuestion />
    </>
  );
};
