import AutoSlider from '../components/AutoSlider';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import '../styles/Home.css';
import { useState } from 'react';

function Home({ userId, selectedProduct, setSelectedProduct, newFavorite, setNewFavorite }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
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

      <Products 
        searchTerm={searchTerm}
        priceFilter={priceFilter} 
        userId={userId}
        isSuggestionMode={isSuggestionMode}
        setIsSuggestionMode={setIsSuggestionMode}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <Footer />
    </div>
  );
}

export default Home;
