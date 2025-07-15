import AutoSlider from '../components/AutoSlider';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import '../styles/Home.css';
import { useState } from 'react';

function Home() {
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
      />  
      {searchTerm.trim() === "" && priceFilter === "" && isSuggestionMode == false && <AutoSlider />}
      <Products 
        searchTerm={searchTerm}
        priceFilter={priceFilter} 
        userId={11}
        isSuggestionMode={isSuggestionMode}
        setIsSuggestionMode={setIsSuggestionMode}
      />
      <Footer />
    </div>
  );
}

export default Home;
