import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Cart() {
  const location = useLocation();
  const { cartItems = [], couponCode = "", grandTotal = 0 } = location.state || {};
  const [showModal, setShowModal] = useState(false);
  const [coupon, setCoupon] = useState(couponCode);

  if (cartItems.length === 0) {
    return (
      <div className="container my-5">
        <h1 className="mb-4">🛒 Your Cart</h1>
        <div className="alert alert-info">No items yet.</div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4">🛒 Your Cart</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-bordered table-striped table-hover text-center align-middle mb-4">
            <thead className="table-success">
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Discount Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => {
                const qty = parseInt(item.quantity.value);
                const price = parseFloat(item.discountprice.value) * qty;
                return (
                  <tr key={idx}>
                    <td>{item.name.value}</td>
                    <td>{qty}</td>
                    <td>₹ {item.discountprice.value}</td>
                    <td>₹ {price.toFixed(2)}</td>
                  </tr>
                );
              })}
              <tr className="table-warning fw-bold">
                <td colSpan="3" className="text-end">
                  Grand Total
                </td>
                <td>₹ {grandTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          {/* Checkout button */}
          <button
            className="btn btn-success w-100 py-2 fw-bold"
            onClick={() => setShowModal(true)}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Checkout</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p className="fw-bold">Grand Total: ₹ {grandTotal.toFixed(2)}</p>
                <div className="mb-3">
                  <label className="form-label">Coupon Code</label>
                  <input
                    type="text"
                    className="form-control"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon code"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    alert(`Order placed! Coupon: ${coupon || "None"}`);
                    setShowModal(false);
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
