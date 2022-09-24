
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import EditPage from './pages/EditPage/EditPage';
import NewTweetPage from './pages/NewTweetPage/NewTweetPage';
import DetailPage from './pages/DetailPage/DetailPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/edit/:id' element={<EditPage />}/>
      <Route path='/new' element={<NewTweetPage />}/>
      <Route path='/detail/:id' element={<DetailPage />}/>
      </Routes>
    </div>
  );
}

export default App;
