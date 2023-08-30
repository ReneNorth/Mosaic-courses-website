import { useState } from 'react';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import { StudentReviews } from '../../components/StudentReviews/StudentReviews';
import { AllStudioHeader } from '../../components/AboutStudioHeader/AboutStudioHeader';
import { Atmosphere } from '../../components/Atmosphere/Atmosphere';
import { GetToKnowUs } from '../../components/GetToKnowUs/GetToKnowUs';
import { CreateWithLove } from '../../components/CreateWithLove/CreateWithLove';
import NewSettler from '../../components/NewSettler/NewSettler';

export const AboutStudio = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NewSettler isOpen={isOpen} setIsOpen={setIsOpen} />
      <AllStudioHeader setIsOpen={setIsOpen} />
      <GetToKnowUs />
      <Atmosphere />
      <CreateWithLove />
      <RemainedQuestion />
      <StudentReviews />
    </>
  );
};
