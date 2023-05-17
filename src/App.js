import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './Pages/LoginPage/LoginPage';
import MyPage from './Pages/MyPage/MyPage';
import News from './Pages/News/News';
import Communication from './Pages/Communication/Communication';

import Header from './components/Header/Header';

import './app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<MyPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/communication/*" element={<Communication />} />
      </Routes>
    </div>
  );
}

export default App;
