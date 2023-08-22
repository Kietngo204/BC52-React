import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import data from "./data.json";
import Cart from "./Cart";
export default function Shopping() {
  // state quản lí giá trị sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setSelectedProduct] = useState(null);
  // state quản lí trạng thái ẩn/hiện của modal giỏ hàng
  const [isOpen, setIsOpen] = useState(false);
  const handleGetProduct = (product) => {
    setSelectedProduct(product);
  };
  // state quản lí giỏ hàng
  const [carts, setCarts] = useState([]);

  const totalProduct = carts.reduce((result, item) => {
    return result + item.quantity;
  }, 0);

  // hàm thêm sản phẩm vào giở hàng, tăng số lượng sản phẩm nếu sản phẩm đã tồn tại trong giỏ hàng
  const handleAddToCart = (product) => {
    // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const found = carts.find((item) => item.id === product.id);
    if (found) {
      // Sản phẩm đã tồn tại trong giỏ hàng
      const newCarts = carts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCarts(newCarts);
    } else {
      // Sản phẩm chưa tồn tại trong giỏ hàng
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
  };

  // hàm đóng thẻ modal
  const handleCloseCart = () => {
    setIsOpen(false);
  };

  // hàm xoá sản phẩm trong giỏ hàng
  const handleDeleteProductFromCart = (productID) => {
    const newCarts = carts.filter((item) => item.id !== productID);
    setCarts(newCarts);
  };

  // Hàm cộng trừ số lượng sản phẩm trong giỏ hàng, xoá bỏ phẩn tử nếu quantity = 0
  const handleChangeQuantityFromCart = (productID, quantity) => {
    const cart = carts.find((item) => item.id === productID);

    if (cart) {
      const newCarts = carts
        .map((item) => {
          if (item.id === productID) {
            const newQuantity = item.quantity + quantity;
            if (newQuantity <= 0) {
              return null; // Trả về null để xóa khỏi mảng
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item !== null); // Lọc bỏ các phần tử null

      setCarts(newCarts);
    }
  };
  return (
    <div className="container">
      <h1 className="text-center text primary">Phone Shop</h1>

      <div className="d-flex justify-content-end">
        <button
          className="btn btn-danger"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Giỏ hàng ({totalProduct})
        </button>
      </div>

      <ProductList
        products={data}
        onGetProduct={handleGetProduct}
        onAddToCart={handleAddToCart}
      />

      <ProductDetails product={selectedProduct} />

      {isOpen && (
        <Cart
          onCloseCart={handleCloseCart}
          carts={carts}
          onDeleteProduct={handleDeleteProductFromCart}
          onChangeQuantity={handleChangeQuantityFromCart}
        />
      )}
    </div>
  );
}
