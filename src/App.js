import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Menu from './components/Menu';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <div>
      <Menu></Menu>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/friend/:friendId' element={<FriendDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;