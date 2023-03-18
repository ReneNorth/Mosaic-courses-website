import { Route, Routes } from 'react-router-dom';
import { CoursePage } from '../../pages/CoursePage/CoursePage';
import { MaingPage } from '../../pages/MainPage/MainPage';
import { Header } from '../Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MaingPage />} />
          <Route path="/course" element={<CoursePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
