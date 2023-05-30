import { useState } from 'react';
import { AboutTeach } from '../../components/AboutTeach/AboutTeach';
import { AboutUs } from '../../components/AboutUs/AboutUs';
import { AnswersToQuestions } from '../../components/AnswersToQuestions/AnswersToQuestions';
import { ChooseCourseFinal } from '../../components/ChooseCourseFinal/ChooseCourseFinal';
import { Gallery } from '../../components/Gallery/Gallery';
import { MainPromo } from '../../components/MainPromo/MainPromo';
import { Reasons } from '../../components/Reasons/Reasons';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import { StudentReviews } from '../../components/StudentReviews/StudentReviews';
import Slider from '../../components/Slider/Slider';
import NewSettler from '../../components/NewSettler/NewSettler';

export const MaingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NewSettler isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainPromo isOpen={isOpen} setIsOpen={setIsOpen} />
      <Slider />
      <AboutUs />
      <Reasons />
      <Gallery />
      <ChooseCourseFinal />
      <AboutTeach />
      <AnswersToQuestions />
      <RemainedQuestion setIsOpen={setIsOpen} />
      <StudentReviews />
    </>
  );
};
