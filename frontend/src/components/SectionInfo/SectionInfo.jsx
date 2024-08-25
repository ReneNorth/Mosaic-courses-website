import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import sectionInfoStyles from './SectionInfo.module.scss';
import { OtherCourses } from '../OtherCourses/OtherCourses';

export const SectionInfo = () => {
  const currentCourse = useSelector((store) => store.courses.currentCourse);
  return (
    <>
      <div className={sectionInfoStyles.container}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className={sectionInfoStyles.reactMarkdown}
        >
          {currentCourse.full_description}
        </ReactMarkdown>
        <h3 className={`${sectionInfoStyles.title} ${sectionInfoStyles.lastTitle}`}>Также покупают</h3>
      </div>
      <OtherCourses />
    </>
  );
};
