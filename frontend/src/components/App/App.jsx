import { YMaps } from '@pbe/react-yandex-maps';

import { Route, Routes } from 'react-router-dom';
import { BlogPage } from '../../pages/BlogPage/BlogPage';
import { MaingPage } from '../../pages/MainPage/MainPage';
import { CoursePage } from '../../pages/CoursePage/CoursePage';
import { NotFound } from '../../pages/NotFound/NotFound';
import { AllCourses } from '../../pages/AllCourses/AllCourses';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import './App.scss';
import { Certificates } from '../../pages/Certificates/Certificates';
import { AboutUs } from '../AboutUs/AboutUs';
import { AboutStudio } from '../../pages/AboutStudio/AboutStudio';
import { PostPage } from '../../pages/PostPage/PostPage';
import { RegisterPage } from '../../pages/RegisterPage/RegisterPage';
import { ActivatePage } from '../../pages/ActivatePage/ActivatePage';
import { SignInPage } from '../../pages/SignInPage/SignInPage';
import { PasswordResetPage } from '../../pages/PasswordResetPage/PasswordResetPage';
import { PasswordResetConfirm } from '../../pages/PasswordResetConfirm/PasswordResetConfirm';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { ProfilePersonalDataPage } from '../../pages/ProfilePersonalDataPage/ProfilePersonalDataPage';
import { ProfileSecurityPage } from '../../pages/ProfileSecurityPage/ProfileSecurityPage';
import { ProfileAlertPage } from '../../pages/ProfileAlertPage/ProfileAlertPage';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { ENDPOINTS } from '../../utils/consts/constants';

function App() {
  return (
    <div className="App">
      <YMaps>
        <Header />
        <main>
          <Routes>
            <Route path={ENDPOINTS.MAIN} element={<MaingPage />} />
            <Route path={ENDPOINTS.COURSE} element={<CoursePage />} />
            <Route path={ENDPOINTS.BLOG} element={<BlogPage />} />
            <Route path={`${ENDPOINTS.BLOG}/:slug`} element={<PostPage />} />
            <Route path={ENDPOINTS.COURSES} element={<AllCourses />} />
            <Route path={ENDPOINTS.CERTIFICATES} element={<Certificates />} />
            <Route path={ENDPOINTS.ABOUT} element={<AboutStudio />} />
            <Route path={ENDPOINTS.REGISTER} element={<RegisterPage />} />
            <Route
              path={`${ENDPOINTS.ACTIVATE}/:uid/:token`}
              element={<ActivatePage />}
            />
            <Route path={ENDPOINTS.SIGN_IN} element={<SignInPage />} />
            <Route
              path={ENDPOINTS.PASSWORD_RESET}
              element={<PasswordResetPage />}
            />
            <Route
              path={`${ENDPOINTS.PASSWORD_RESET}/:uid/:token`}
              element={<PasswordResetConfirm />}
            />
            <Route path={ENDPOINTS.PROFILE} element={<ProfilePage />} />
            <Route
              path={ENDPOINTS.PROFILE_PERSONAL_DATA}
              element={<ProfilePersonalDataPage />}
            />
            <Route
              path={ENDPOINTS.PROFILE_SECURITY}
              element={<ProfileSecurityPage />}
            />
            <Route
              path={ENDPOINTS.PROFILE_ALERT}
              element={<ProfileAlertPage />}
            />
            <Route path={ENDPOINTS.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </YMaps>
    </div>
  );
}

export default App;
