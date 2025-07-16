import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Favorite from './page/Favorite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [userId] = useState(11); // hoặc lấy từ localStorage/context sau

  return (
    <>
      <Routes>
        <Route path="/" element={<Home userId={userId} />} />
        <Route path="/favorite" element={<Favorite userId={userId} />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
