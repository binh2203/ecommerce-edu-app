import AutoSlider from '../components/AutoSlider';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import '../styles/Home.css';
import { useState } from 'react';

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  return (
    <div className="home-container">
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        priceFilter={priceFilter}  
        setPriceFilter={setPriceFilter}
      />  
      <AutoSlider />
      <a className='recommend-link' href="/">GỢI Ý CHO BẠN</a>
      <Products searchTerm={searchTerm}  priceFilter={priceFilter}/>
      <Footer />
    </div>
  );
}

export default Home;
