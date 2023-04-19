import { AboutTeach } from '../../components/AboutTeach/AboutTeach';
import { AboutUs } from '../../components/AboutUs/AboutUs';
import { AnswersToQuestions } from '../../components/AnswersToQuestions/AnswersToQuestions';
import { ChooseCourseFinal } from '../../components/ChooseCourseFinal/ChooseCourseFinal';
import { Gallery } from '../../components/Gallery/Gallery';
import { MainPromo } from '../../components/MainPromo/MainPromo';
import { Reasons } from '../../components/Reasons/Reasons';
import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import { Slider } from '../../components/Slider/Slider';
import { StudentReviews } from '../../components/StudentReviews/StudentReviews';

export const MaingPage = () => {
  return (
    <>
      {/* <NewSettler /> */}
      <MainPromo />
      <Slider />
      <AboutUs />
      <Reasons />
      <Gallery />
      <ChooseCourseFinal />
      <AboutTeach />
      <AnswersToQuestions />
      <RemainedQuestion />
      <StudentReviews />
    </>
  );
};
