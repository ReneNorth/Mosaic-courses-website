import { YMaps } from '@pbe/react-yandex-maps';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BlogPage } from '../../pages/BlogPage/BlogPage';
import { CoursePage } from '../../pages/CoursePage/CoursePage';
import { MaingPage } from '../../pages/MainPage/MainPage';
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
            <Route path="/course" element={<CoursePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </YMaps>
    </div>
  );
}

export default App;
