import { RemainedQuestion } from '../../components/RemainedQuestion/RemainedQuestion';
import { StudentReviews } from '../../components/StudentReviews/StudentReviews';
import { AllStudioHeader } from '../../components/AboutStudioHeader/AboutStudioHeader';
import { Atmosphere } from '../../components/Atmosphere/Atmosphere';

export const AboutStudio = () => {
  return (
    <>
      <AllStudioHeader />
      <Atmosphere />
      <RemainedQuestion />
      <StudentReviews />
    </>
  );
};
