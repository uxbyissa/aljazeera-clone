import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import TopicNav from './components/layout/TopicNav';
import HomePage from './pages/HomePage';
import './assets/styles/main.css';
import './assets/styles/rtl.css';

function App() {
  return (
    <div className="App" >

      <BrowserRouter>
      <Header/>
      <TopicNav/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* Add more routes */}
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
