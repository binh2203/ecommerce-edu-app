import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Products.css';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

function Products({ searchTerm, priceFilter }) {
  const [products, setProducts] = useState([]);

  // Cắt mô tả gọn gàng
  function truncate(text, maxLength) {
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace === -1) return truncated + '...';
    return truncated.slice(0, lastSpace) + '...';
  }

  // Gọi API khi mount
  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  // Lọc theo tên sản phẩm (không phân biệt hoa thường)
  const filtered = products
    .filter((p) => {
      const nameMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase());

      let priceMatch = true;
      if (priceFilter === "under500") priceMatch = p.price < 500000;
      else if (priceFilter === "500to1m") priceMatch = p.price >= 500000 && p.price <= 1000000;
      else if (priceFilter === "over1m") priceMatch = p.price > 1000000;

      return nameMatch && priceMatch;
  })
  .sort((a, b) => a.price - b.price);

  return (
    <div className="container-products">
      {filtered.length > 0 ? (
        <div className="grid">
          {filtered.map(product => (
            <div key={product.id} className="product-card">
              {product.image_url && (
                <img src={`/product-images/${product.image_url}`} alt={product.name} />
              )}
              <p className="description-font">{truncate(product.description, 40)}</p>
              <p className="price-red">{Number(product.price).toLocaleString('vi-VN')} ₫</p>
              <button className="btn-detail">
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
  );
}

export default Products;
