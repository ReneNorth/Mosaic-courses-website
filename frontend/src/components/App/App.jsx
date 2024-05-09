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
            <Route path={ENDPOINTS.main} element={<MaingPage />} />
            <Route path={`${ENDPOINTS.course}/:slug`} element={<CoursePage />} />
            <Route path={ENDPOINTS.blog} element={<BlogPage />} />
            <Route path={`${ENDPOINTS.blog}/:slug`} element={<PostPage />} />
            <Route path={ENDPOINTS.courses} element={<AllCourses />} />
            <Route path={ENDPOINTS.certificates} element={<Certificates />} />
            <Route path={ENDPOINTS.about} element={<AboutStudio />} />
            <Route path={ENDPOINTS.register} element={<RegisterPage />} />
            <Route
              path={`${ENDPOINTS.activate}/:uid/:token`}
              element={<ActivatePage />}
            />
            <Route path={ENDPOINTS.signIn} element={<SignInPage />} />
            <Route
              path={ENDPOINTS.passwordReset}
              element={<PasswordResetPage />}
            />
            <Route
              path={`${ENDPOINTS.passwordReset}/:uid/:token`}
              element={<PasswordResetConfirm />}
            />
            <Route path={ENDPOINTS.profile} element={<ProfilePage />} />
            <Route
              path={ENDPOINTS.profilePersonalData}
              element={<ProfilePersonalDataPage />}
            />
            <Route
              path={ENDPOINTS.profileSecurity}
              element={<ProfileSecurityPage />}
            />
            <Route
              path={ENDPOINTS.profileAlert}
              element={<ProfileAlertPage />}
            />
            <Route path={ENDPOINTS.notFound} element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </YMaps>
    </div>
  );
}

export default App;
