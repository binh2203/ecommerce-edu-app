export   const truncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace === -1) return truncated + '...';
    return truncated.slice(0, lastSpace) + '...';
};
export async function fetchFavoritesData(userId) {
  try {
    const resFav = await fetch(`http://localhost:8000/favorites?user_id=${userId}`);
    const favoritesData = await resFav.json();
    const productIds = favoritesData.map(f => f.product_id);

    const resProducts = await fetch('http://localhost:8000/products');
    const productsData = await resProducts.json();

    const favoriteProducts = productsData.filter(p => productIds.includes(Number(p.id)));

    return favoriteProducts;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu yêu thích:", error);
    return [];
  }
}

export const removeFromFavorites = async (userId, productId) => {
  try {
    // Lấy danh sách favorite để tìm id cần xoá
    const res = await fetch(`http://localhost:8000/favorites?user_id=${userId}&product_id=${productId}`);
    const data = await res.json();

    if (data.length === 0) {
      console.warn("Không tìm thấy mục yêu thích để xoá.");
      return false;
    }

    const favoriteId = data[0].id;

    // Gửi request DELETE
    const deleteRes = await fetch(`http://localhost:8000/favorites/${favoriteId}`, {
      method: "DELETE",
    });

    if (!deleteRes.ok) {
      throw new Error("Lỗi khi xoá khỏi yêu thích");
    }

    return true;
  } catch (error) {
    console.error("Lỗi xoá khỏi yêu thích:", error);
    return false;
  }
};
