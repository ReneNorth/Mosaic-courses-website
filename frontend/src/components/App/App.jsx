import { YMaps } from '@pbe/react-yandex-maps';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BlogPage } from '../../pages/BlogPage/BlogPage';
import { MaingPage } from '../../pages/MainPage/MainPage';
import { CoursePageFinal } from '../CoursePageFinal/CoursePageFinal';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <YMaps>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MaingPage />} />
            <Route path="/courses" element={<CoursePageFinal />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </YMaps>
    </div>
  );
}

export default App;
