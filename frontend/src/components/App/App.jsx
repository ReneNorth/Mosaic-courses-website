import { MaingPage } from '../../pages/MainPage/MainPage';
import { Header } from '../Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MaingPage />
      </main>
    </div>
  );
}

export default App;
