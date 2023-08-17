import React from "react";

export default function Cart({
  carts,
  onCloseCart,
  onDeleteProduct,
  onChangeQuantity,
}) {
  return (
    <>
      <div className="modal show" tabIndex={-1} style={{ display: "block" }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onCloseCart}
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={item.img}
                            alt={item.name}
                            width="70px"
                            height="70px"
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              onChangeQuantity(item.id, -1);
                            }}
                          >
                            -
                          </button>
                          {item.quantity}
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              onChangeQuantity(item.id, 1);
                            }}
                          >
                            +
                          </button>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.price * item.quantity}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => onDeleteProduct(item.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={onCloseCart}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
}
