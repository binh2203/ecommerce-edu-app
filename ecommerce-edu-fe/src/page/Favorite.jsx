import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell as Bell, faCircleInfo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import '../styles/Favorite.css';
import { removeFromFavorites,  fetchFavoritesData } from '../utils/function'; 
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favorite({userId, url }) {
  const handleRemove = async (productId) => {
    const success = await removeFromFavorites(userId, productId, url);
    if (success) {
      toast.success("Đã xoá sản phẩm khỏi yêu thích");
      const updated = await fetchFavoritesData(userId, url);
      setFavorites(updated);
    } else {
      toast.error("Không thể xoá sản phẩm");
    }
  };
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetchFavoritesData(userId, url).then(setFavorites);
  }, [userId]);
  return (
    <div className="favorite-page-container">
      <nav className="navbar-favorite-page">
        <div className="navbar-top">
          <div className="navbar-top-left">
            <ul className="navbar-links">
              <li><Link to="/">Trang chủ</Link></li>
              <li className="separator">|</li>
              <li>
                <a href="https://www.facebook.com/dcb2203" target="_blank" rel="noreferrer">
                  Liên hệ &nbsp; <FontAwesomeIcon icon={faSquareFacebook} />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-top-right">
            <ul className="navbar-links">
              <li>
                <div className="notice-container">
                  <Link to="/notice">
                    Thông Báo &nbsp; <FontAwesomeIcon icon={Bell} />
                  </Link>
                  <div className="notice-popup">
                    <div className="arrow-up"></div>
                    <p>Bạn chưa có thông báo nào</p>
                  </div>
                </div>
              </li>
              <li><a href="/">Hỗ Trợ &nbsp; <FontAwesomeIcon icon={faCircleInfo} /></a></li>
              <li><a href="/">Đăng ký</a></li>
              <li className="separator">|</li>
              <li><a href="/">Đăng nhập</a></li>
            </ul>
          </div>
        </div>

        <div className="navbar-favorite-bottom">
          <Link to="/" className="navbar-favorite-logo">
            <img className="image-logo" src={`/book.svg`} alt="logo" />
            <div>
              <p className="navbar-favorite-logo-top"><b>LEANO</b></p>
              <p className="navbar-favorite-logo-bottom">Learn Anything Online</p>
            </div>
          </Link>
          <p className="title-favorite">Sản phẩm yêu thích</p>
        </div>
      </nav>

      <div className="favorite-content">
        <p className="favorite-description">
          Danh sách sản phẩm yêu thích của bạn sẽ được hiển thị tại đây. Bạn có thể <b>Mua Ngay </b> hoặc <b>Xóa</b> khỏi danh sách yêu thích.
        </p>
        <div className="favorite-products">
          {favorites.length > 0 ? (
            <div className="favorite-page-list">
              {favorites.map((product) => (
                <div
                  key={product.id}
                  className="favorite-page-item"
                >
                  <div className="favorite-page-item-image">
                    <img src={`/product-images/${product.image_url}`} alt={product.name} />
                    <div>
                      <p><b>{product.name}</b></p>
                      <p className='des-fav-item'>{product.description}</p>
                    </div>
                  </div>

                  <p className="price-red-fav-page">{Number(product.price).toLocaleString('vi-VN')} ₫</p>

                  <div className="btn-fav-item">
                    <button className='btn-remove-fav' onClick={() => {
                      if (window.confirm("Bạn chắc chắn muốn xoá sản phẩm này khỏi yêu thích?")) {
                        handleRemove(product.id);
                      }
                    }}>        
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="btn-buy-now">
                      Mua Ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-favorites">Chưa có sản phẩm yêu thích</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Favorite;
