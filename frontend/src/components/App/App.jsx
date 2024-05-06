import { YMaps } from '@pbe/react-yandex-maps';
import React from 'react';

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

function App() {
  return (
    <div className="App">
      <YMaps>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MaingPage />} />
            <Route path="/course/:slug" element={<CoursePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/about" element={<AboutStudio />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/activate/:uid/:token" element={<ActivatePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/password-reset" element={<PasswordResetPage />} />
            <Route path="/password-reset/:uid/:token" element={<PasswordResetConfirm />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/personal-data" element={<ProfilePersonalDataPage />} />
            <Route path="/profile/security" element={<ProfileSecurityPage />} />
            <Route path="/profile/alert" element={<ProfileAlertPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </YMaps>
    </div>
  );
}

export default App;
