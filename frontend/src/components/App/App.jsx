import { MaingPage } from '../../pages/MainPage/MainPage';
import { Header } from '../Header/Header';
import './App.scss';
import { CoursePage } from '../../pages/CoursePage/CoursePage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MaingPage />
        <CoursePage />
      </main>
    </div>
  );
}

export default App;
