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
      <Communication />
    </div>
  );
}

export default App;
