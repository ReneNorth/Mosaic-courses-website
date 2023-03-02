import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Post } from '../Post/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/v1/blog/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
