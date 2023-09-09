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
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <YMaps>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MaingPage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/about" element={<AboutStudio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </YMaps>
    </div>
  );
}

export default App;
