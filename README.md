# LEANO - Website Học Trực Tuyến

LEANO là một trang web thương mại điện tử đơn giản được xây dựng với **React + Vite**, cho phép người dùng tìm kiếm, yêu thích và xem chi tiết các sản phẩm sách.

## Công nghệ sử dụng

- React + Vite
- React Router DOM
- json-server (giả lập API)
- Toastify (thông báo)
- Font Awesome
- Axios
- useEffect, useState
## Cài đặt

### 1. Clone project

```bash
git clone https://github.com/binh2203/ecommerce-edu-app
cd ecommerce-edu-fe
```

### 2. Cài đặt dependencies

```bash
npm install
```

> Đảm bảo bạn đã cài đặt **Node.js** và **npm**. (Đề xuất: Node.js >= 18, npm >= 9)

### 3. Chạy mock API (json-server)

Tạo file `db.json` trong thư mục `mock-api/` và thêm dữ liệu mẫu:

```bash
npx json-server --watch mock-api/db.json --port 8000
```

> Mặc định app sẽ gửi request đến `http://localhost:8000` trong bài này dùng JSON Server + Render: `https://mock-api-f5mz.onrender.com`.

### 4. Chạy ứng dụng React

```bash
npm run dev
```

Truy cập trên trình duyệt: [http://localhost:5173](http://localhost:5173)

---

## Build cho production

```bash
npm run build
```

Thư mục `dist/` sẽ chứa output build.

---

## Cấu trúc thư mục

```
ecommerce-edu-app/
└── ecommerce-edu-fe/
    ├── mock-api/
    │   └── db.json             # Mock API data
    ├── public/
    ├── src/
    │   ├── assets/             # Ảnh, icon,...
    │   ├── components/         # Navbar, Footer, ProductModal, AutoSlider,...
    │   ├── page/               # Home.jsx, Favorite.jsx,...
    │   ├── styles/             # CSS file
    │   ├── utils/              # function.js, fetchFavoritesData,...
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    ├── README.md
    └── vite.config.js
```

---

## Ghi chú

- `userId` đang được gán cứng là `11` trong App. Bạn có thể thay đổi sang localStorage hoặc context.
- Đảm bảo `db.json` có đủ `products`, `favorites`, `suggestions`,...

---
## Ảnh minh hoạ
### Trang chủ
<img width="1896" height="894" alt="image" src="https://github.com/user-attachments/assets/1ebde14d-7a4b-4045-a132-eece93a09cce" />

### Loading skeleton khi gọi API gợi ý 
<img width="1902" height="890" alt="image" src="https://github.com/user-attachments/assets/1d043c48-aac5-40ec-b7ac-99640f902619" />

### Xem chi tiết sản phẩm
<img width="1919" height="907" alt="image" src="https://github.com/user-attachments/assets/ff6d13a8-9633-47db-8b84-c19bd0c1d87c" />

### Thông báo toast khi thêm vào yêu thích
<img width="1900" height="891" alt="image" src="https://github.com/user-attachments/assets/cd65691d-60e3-4cf2-a51f-d7e8f11fce5f" />

### Thông báo popup khi hover icon yêu thích
<img width="846" height="741" alt="image" src="https://github.com/user-attachments/assets/5489388a-3a4e-4b0a-b3f9-87994426c5e6" />

### Trang sản phẩm yêu thích
<img width="1899" height="888" alt="image" src="https://github.com/user-attachments/assets/d2ae8afe-1f4c-44d5-9492-5a6739d3c85f" />

## Liên hệ

Liên hệ tác giả qua [Facebook](https://www.facebook.com/dcb2203)
Gmail: [diemcongbinh2002@gmail.com](mailto\:diemcongbinh2002@gmail.com)

