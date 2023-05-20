import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './Pages/LoginPage/LoginPage';
import MyPage from './Pages/MyPage/MyPage';
import News from './Pages/News/News';
import Communication from './Pages/Communication/Communication';

import Header from './components/Header/Header';

import './app.css';
import { postsData, addPostToData } from './data/posts';
import usersData from './data/users';

function App() {
  const [posts, setPosts] = React.useState(postsData);
  const [users, setUsers] = React.useState(usersData);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
    addPostToData(newPost);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<MyPage posts={posts} setPosts={setPosts} addPost={addPost} users={users} />}
        />
        <Route
          path="/news"
          element={<News posts={posts} setPosts={setPosts} addPost={addPost} users={users} />}
        />
        <Route path="/communication/*" element={<Communication />} />
      </Routes>
    </div>
  );
}

export default App;
