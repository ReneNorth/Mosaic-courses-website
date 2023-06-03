import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import { StudentReviews } from '../../components/StudentReviews/StudentReviews';
import { AllStudioHeader } from '../../components/AboutStudioHeader/AboutStudioHeader';
import { Atmosphere } from '../../components/Atmosphere/Atmosphere';
import { GetToKnowUs } from '../../components/GetToKnowUs/GetToKnowUs';
import { CreateWithLove } from '../../components/CreateWithLove/CreateWithLove';

export const AboutStudio = () => {
  return (
    <>
      <AllStudioHeader />
      <GetToKnowUs />
      <Atmosphere />
      <CreateWithLove />
      <RemainedQuestion />
      <StudentReviews />
    </>
  );
};
