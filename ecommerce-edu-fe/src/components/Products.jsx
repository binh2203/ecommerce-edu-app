import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Products.css';
import ProductModal from './ProductModal';

function Products({ searchTerm, priceFilter, userId, isSuggestionMode, setIsSuggestionMode }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  // Lấy tất cả sản phẩm ban đầu
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8000/products');
      setProducts(res.data);
      setIsSuggestionMode(false);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchSuggestions = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:8000/suggestions?user_id=${userId}`);
      const suggestionProductIds = res.data.map((s) => s.product_id);

      const resProducts = await axios.get('http://localhost:8000/products');
      const allProducts = resProducts.data;

      const suggestedProducts = allProducts.filter((p) =>
        suggestionProductIds.includes(Number(p.id))
      );

      setProducts(suggestedProducts);
      setIsSuggestionMode(true);
    } catch (err) {
      setError('Không thể lấy gợi ý lúc này');
    } finally {
      setLoading(false);
    }
  };

  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace === -1) return truncated + '...';
    return truncated.slice(0, lastSpace) + '...';
  };

  const filtered = products
    .filter((p) => {
      const nameMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase());

      let priceMatch = true;
      if (priceFilter === 'under500') priceMatch = p.price < 500000;
      else if (priceFilter === '500to1m')
        priceMatch = p.price >= 500000 && p.price <= 1000000;
      else if (priceFilter === 'over1m') priceMatch = p.price > 1000000;

      return nameMatch && priceMatch;
    })
    .sort((a, b) => a.price - b.price);

  return (
    <>
      <div className="recommend-actions">
        <a
          className="recommend-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            fetchSuggestions();
          }}
        >
          GỢI Ý SẢN PHẨM PHÙ HỢP
        </a>
      </div>

      {loading && <p>Đang tải gợi ý...</p>}
      {error && <p className="no-products" style={{ color: 'red' }}>{error}</p>}

      <div className="container-products">
        {filtered.length > 0 ? (
          <div className="grid">
            {filtered.map((product) => (
              <div key={product.id} className="product-card">
                {product.image_url && (
                  <img
                    src={`/product-images/${product.image_url}`}
                    alt={product.name}
                  />
                )}
                <p className="description-font">
                  {truncate(product.description, 40)}
                </p>
                <p className="price-red">
                  {Number(product.price).toLocaleString('vi-VN')} ₫
                </p>
                <button
                  className="btn-detail"
                  onClick={() => setSelectedProduct(product)}
                >
                  <p>Xem chi tiết</p>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>Không tìm thấy sản phẩm phù hợp.</p>
          </div>
        )}
      </div>
      {isSuggestionMode && (
          <a
            className="recommend-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              fetchAllProducts();
            }}
          >
            XEM TẤT CẢ SẢN PHẨM
          </a>
      )}  
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default Products;
