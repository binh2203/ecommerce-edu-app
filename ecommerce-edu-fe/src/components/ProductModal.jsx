import "../styles/ProductModal.css";
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function ProductModal({ product, onClose }) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [product]);
  if (!product) return null;
  const addFavorite = async (user_id, product) => {
    try {
      const response = await fetch(`http://localhost:8000/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user_id: user_id, product_id: product.id }),
      });
      if (!response.ok) {
        throw new Error('Failed to add to favorites');
      }
      toast.success(`Đã thêm sản phẩm: ${product.name} vào yêu thích`);
    } catch (err) {
      console.error(err);
      toast.error('Không thể thêm vào yêu thích');
    }
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✖</button>
        <img src={`/product-images/${product.image_url}`} alt={product.name} />
        <div className="product-info">
          <div>
            <h2>{product.name}</h2>
            <p className="description">{product.description}</p>
          </div>
          <p className="price">{Number(product.price).toLocaleString("vi-VN")} ₫</p>
          <div className="btn-content">
            <button className="btn-add-favorite" onClick={() => addFavorite(11, product)}>
              <img src="./heart-regular.svg" alt="icon-heart-regular" />
              Thêm vào yêu thích
            </button>
            <button className="btn-buy-now">Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
