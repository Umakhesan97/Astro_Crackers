import { useLocation } from "react-router-dom";

export default function Cart() {
  const location = useLocation();
  const { cartItems = [], couponCode = "", grandTotal = 0 } = location.state || {};

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
            </tbody>
          </table>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>Coupon: <span className="text-primary">{couponCode || "None"}</span></h5>
            </div>
            <div>
              <h4 className="fw-bold">Grand Total: ₹ {grandTotal.toFixed(2)}</h4>
            </div>
          </div>

          <div className="mt-4 text-end">
            <button className="btn btn-success btn-lg">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
