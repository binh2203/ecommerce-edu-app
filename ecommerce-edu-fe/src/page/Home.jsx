import AutoSlider from '../components/AutoSlider';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import ProductModal from '../components/ProductModal';
import Favorite from './Favorite';
import '../styles/Home.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function Home({ userId }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [newFavorite, setNewFavorite] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSuggestionMode, setIsSuggestionMode] = useState(false);

  return (
    <div className="home-container">
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        priceFilter={priceFilter}  
        setPriceFilter={setPriceFilter}
        userId={userId}
        setSelectedProduct ={setSelectedProduct}
        newFavorite={newFavorite}
      />  
      {searchTerm.trim() === "" && priceFilter === "" && isSuggestionMode == false && <AutoSlider />}     
      <Routes>
        <Route
          path="/"
          element={
            <Products 
              searchTerm={searchTerm}
              priceFilter={priceFilter} 
              userId={userId}
              isSuggestionMode={isSuggestionMode}
              setIsSuggestionMode={setIsSuggestionMode}
              selectedProduct = {selectedProduct}
              setSelectedProduct ={setSelectedProduct}
            /> 
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorite 
              setSelectedProduct={setSelectedProduct} 
              userId={userId}
            />
          }
        />
      </Routes>
      <ProductModal
        setNewFavorite={setNewFavorite}
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)}/>
      <Footer />
    </div>
  );
}

export default Home;
