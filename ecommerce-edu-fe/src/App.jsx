// App.jsx
import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Favorite from './page/Favorite';
import ProductModal from './components/ProductModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [userId] = useState(11);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newFavorite, setNewFavorite] = useState(null);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              userId={userId}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              newFavorite={newFavorite}
              setNewFavorite={setNewFavorite}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              userId={userId}
              setSelectedProduct={setSelectedProduct}
            />
          }
        />
      </Routes>
      <ProductModal
        setNewFavorite={setNewFavorite}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <ToastContainer />
    </>
  );
}

export default App;
