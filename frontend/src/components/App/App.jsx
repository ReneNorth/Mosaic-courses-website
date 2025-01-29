import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { YMaps } from '@pbe/react-yandex-maps';
import { Route, Routes } from 'react-router-dom';
import { BlogPage } from '../../pages/BlogPage/BlogPage';
import { MainPage } from '../../pages/MainPage/MainPage';
import { CoursePage } from '../../pages/CoursePage/CoursePage';
import { GalleryPage } from '../../pages/GalleryPage/GalleryPage';
import { NotFound } from '../../pages/NotFound/NotFound';
import { AllCourses } from '../../pages/AllCourses/AllCourses';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.scss';
import { Certificates } from '../../pages/Certificates/Certificates';
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
import { ENDPOINTS } from '../../utils/consts/constants';
import { verifyToken } from '../../services/slices/authSlice';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { MyMasterclassesPage } from '../../pages/MyMasterclassesPage/MyMasterclassesPage';
import { MyMasterclassesPastPage } from '../../pages/MyMasterclassesPastPage/MyMasterclassesPastPage';
import { GalleryCard } from '../GalleryCard/GalleryCard';
import { GalleryCardInfo } from '../GalleryCardInfo/GalleryCardInfo';

function App() {
  const dispatch = useDispatch();
  const { access, refresh } = useSelector((store) => store.auth.tokens);
  const isAuthorized = useSelector((store) => store.auth.isAuthorized);

  useEffect(() => {
    dispatch(verifyToken(localStorage.getItem('accessToken')));
  }, [dispatch]);

  useEffect(() => {
    if (access) {
      localStorage.setItem('accessToken', access);
    }
    if (refresh) {
      localStorage.setItem('refreshToken', refresh);
    }
  }, [access, refresh]);

  return (
    <div className="App">
      <YMaps>
        <Header />
        <main>
          <Routes>
            <Route path={ENDPOINTS.main} element={<MainPage />} />
            <Route
              path={`${ENDPOINTS.course}/:slug`}
              element={<CoursePage />}
            />
            <Route path={ENDPOINTS.test} element={<GalleryCard />} />
            {/* Удалить то, что выше */}
            <Route path={ENDPOINTS.gallery} element={<GalleryPage />} />
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
            <Route
              path={ENDPOINTS.profile}
              element={(
                <ProtectedRoute isAuthorized={isAuthorized}>
                  <ProfilePage />
                </ProtectedRoute>
              )}
            />
            <Route
              path={ENDPOINTS.profilePersonalData}
              element={(
                <ProtectedRoute isAuthorized={isAuthorized}>
                  <ProfilePersonalDataPage />
                </ProtectedRoute>
              )}
            />
            <Route
              path={ENDPOINTS.profileSecurity}
              element={(
                <ProtectedRoute isAuthorized={isAuthorized}>
                  <ProfileSecurityPage />
                </ProtectedRoute>
              )}
            />
            <Route
              path={ENDPOINTS.profileAlert}
              element={(
                <ProtectedRoute isAuthorized={isAuthorized}>
                  <ProfileAlertPage />
                </ProtectedRoute>
              )}
            />

            <Route
              path={ENDPOINTS.myMasterclasses}
              element={(
                <ProtectedRoute isAuthorized={isAuthorized}>
                  <MyMasterclassesPage />
                </ProtectedRoute>
              )}
            />

            <Route
              path={ENDPOINTS.myMasterclassesPast}
              element={(
                <ProtectedRoute isAuthorized={isAuthorized}>
                  <MyMasterclassesPastPage />
                </ProtectedRoute>
              )}
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
