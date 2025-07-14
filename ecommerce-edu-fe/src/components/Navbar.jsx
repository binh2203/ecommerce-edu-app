import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell as Bell, faCircleInfo, faBars, faXmark, faHeadset,
    faRightToBracket, faUser, faHeart  } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { Link } from 'react-router-dom';

function Navbar({ searchTerm, setSearchTerm, priceFilter, setPriceFilter }) {
  const handleSearch = () => {
    searchTerm = document.getElementById('input-search').value;
    setSearchTerm(searchTerm);
    priceFilter = document.getElementById('priceFilter').value;
    setPriceFilter(priceFilter);
};  
  return (
    <nav className="navbar">
        <div className='navbar-top'>
            <div className='navbar-top-left'>
                <ul className='navbar-links'>
                    <li><a href="/">Trang chủ</a></li>
                    <li className="separator">|</li>
                    <li><a href="https://www.facebook.com/dcb2203">Liên hệ &nbsp; <FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                </ul>
            </div>
            <div className='navbar-top-right'>
                <ul className="navbar-links">
                    <li>
                        <div className="notice-container">
                            <a href="/notice">Thông Báo &nbsp; <FontAwesomeIcon icon={Bell} /></a>
                            <div className="notice-popup">
                                <div className="arrow-up"></div>
                                <p>Đăng nhập để xem thông báo của bạn</p>
                            </div>
                        </div>  
                    </li>
                    <li>
                        <a href="/support">Hỗ Trợ &nbsp; <FontAwesomeIcon icon={faCircleInfo} /></a>
                    </li>
                    <li><a href="/register">Đăng ký</a></li>
                    <li className="separator">|</li>
                    <li><a href="/login">Đăng nhập</a></li>
                </ul>
            </div>
        </div>
        <div className="navbar-bottom">
            <Link to="/" className="navbar-logo">
                <img className="image-logo" src={`/book.svg`} alt="logo" />
                <div>
                    <p className="navbar-logo-top"><b>LEANO</b></p>
                    <p className="navbar-logo-bottom">Learn Anything Online</p>  
                </div>
            </Link>
            <div className="notice-mobile">
                <a href="/notice"><FontAwesomeIcon icon={Bell} /></a>
            </div>
            <div className="navbar-search">
                <form
                    className="search-form"
                    onSubmit={(e) => {
                        e.preventDefault();        
                        handleSearch();           
                    }}
                    >
                    <input
                        id="input-search"
                        className="input-search"
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                    />
                    <select className='select-price' name="price" id="priceFilter">
                        <option value="">Tất cả mức giá</option>
                        <option value="under500">Dưới 500K</option>
                        <option value="500to1m">500K – 1 triệu</option>
                        <option value="over1m">Trên 1 triệu</option>
                    </select>
                    <button type="submit" aria-label="Tìm kiếm">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
            </div>
            <div className="cart-container">
                <a  href="/cart" className="navbar-cart">
                    <FontAwesomeIcon  className='shop-cart-icon' icon={faHeart} />
                </a>
                <div className="cart-popup">
                    <div className="arrow-up"></div>
                    <p>Chưa Có Sản Phẩm</p>
                </div>
            </div>
            <label htmlFor="bars_open" className='nav_bars_icon'><FontAwesomeIcon icon={faBars} /></label>
            <input className="nav_bars_open" id="bars_open" type="checkbox"/>
            <label htmlFor="bars_open" className="nav_overlay"></label>
            {/* navbar-mobile */}
            <div className='navbar-mobile'>
                <label htmlFor="bars_open" className='nav_bars_close'><FontAwesomeIcon icon={faXmark} /></label>    
                <div className="link_register_mobile">
                    <a href="/register">Đăng ký</a>
                    <a href="/login">Đăng nhập</a>
                </div>
                <div className='line_nav_mobile'></div>

                <ul className="navbar-mobile-links">
                        <li>
                            <FontAwesomeIcon icon={faUser} />
                            <a href="/user">Thông tin cá nhân</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faHeart} />
                            <a href="/orders">Sản phẩm yêu thích</a> 
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faHeadset} />
                            <a href="/support">Hỗ trợ</a> 
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <a href="https://www.facebook.com/dcb2203">Liên hệ</a> 
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faRightToBracket} />
                            <a href="/">Đăng xuất</a>                            
                        </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
