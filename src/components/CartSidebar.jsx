import "./CartSidebar.css";
import { useCart } from "../context/CartContext";
import { useState } from "react";

import emailjs from "@emailjs/browser";
export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");


  // calculate total
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.discountprice.value * item.quantity,
    0
  );

  const finalTotal = Math.max(totalPrice - discount, 0); // avoid negative totals

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toLowerCase();

    if (code === "offer30") {
      const thirtyPercent = Math.floor(totalPrice * 0.3);
      setDiscount(thirtyPercent);
      setAppliedCoupon("30% discount applied ✅");
    } else if (code === "offer40") {
      const fortyPercent = Math.floor(totalPrice * 0.4);
      setDiscount(fortyPercent);
      setAppliedCoupon("40% discount applied ✅");
    } else {
      setDiscount(0);
      setAppliedCoupon("❌ Invalid coupon code");
    }
  };

const handlePlaceOrder = () => {
  // Build order summary with customer info
  let orderSummary = `🛒 Order Summary\n\nCustomer Info:\n`;
  orderSummary += `Name: ${customerName}\n`;
  orderSummary += `Mobile: ${customerMobile}\n`;
  orderSummary += `Email: ${customerEmail}\n`;
  orderSummary += `Address: ${customerAddress}\n\n`;
  
  orderSummary += "Products:\n";
  cartItems.forEach((item) => {
    const itemTotal = item.discountprice.value * item.quantity;
    orderSummary += `• ${item.name.value} | Qty: ${item.quantity} | Price: ₹${item.discountprice.value} | Total: ₹${itemTotal}\n`;
  });

  orderSummary += `\nOriginal Total: ₹${totalPrice}`;
  orderSummary += `\nDiscount: ₹${discount}`;
  orderSummary += `\nGrand Total: ₹${finalTotal}`;
  orderSummary += `\nCoupon Used: ${couponCode || "N/A"}`;

  // Send email via EmailJS
  emailjs
    .send(
      "service_vq8sfco",   // Your Service ID
      "template_3zynssi",  // Your Template ID
      {
        name: customerName,          // customer name
        phone: customerMobile,       // customer mobile
        email: customerEmail,        // customer email
        address: customerAddress,    // customer address
        message: orderSummary,       // full order + customer info
        from_name: "Customer",
        reply_to: customerEmail,
      },
      "fHP8OvoNdAlXT_xxu"  // Your Public Key
    )
    .then(
      (response) => {
        alert("Order email sent successfully!");
        // Reset checkout form
        setShowCheckout(false);
        setCouponCode("");
        setDiscount(0);
        setAppliedCoupon(null);
        setCustomerName("");
        setCustomerMobile("");
        setCustomerEmail("");
        setCustomerAddress("");
        onClose();
      },
      (error) => {
        alert("Failed to send email. Try again.");
        console.error(error);
      }
    );
};



// const handlePlaceOrder = () => {
//   let orderSummary = "🛒 Order Summary:\n";
//   cartItems.forEach((item) => {
//     const itemTotal = item.discountprice.value * item.quantity;
//     orderSummary += `\n• ${item.name.value} | Qty: ${item.quantity} | Price: ₹${item.discountprice.value} | Total: ₹${itemTotal}`;
//   });
//   orderSummary += `\n\nOriginal Total: ₹${totalPrice}`;
//   orderSummary += `\nDiscount: ₹${discount}`;
//   orderSummary += `\nGrand Total: ₹${finalTotal}`;
//   orderSummary += `\nCoupon Used: ${couponCode || "N/A"}`;

//   emailjs
//     .send(
//       "service_vq8sfco",   // from EmailJS dashboard
//       "template_3zynssi",  // from EmailJS dashboard
//       {
//         name: "Admin",
//         message: orderSummary,
//         from_name: "Customer",
//         reply_to: "astrocrackers25@gmail.com",
//       },
//       "fHP8OvoNdAlXT_xxu"     // from EmailJS dashboard
//     )
//     .then(
//       (response) => {
//         alert("Order email sent successfully!");
//         setShowCheckout(false);
//         setCouponCode("");
//         setDiscount(0);
//         setAppliedCoupon(null);
//         onClose();
//       },
//       (error) => {
//         alert("Failed to send email. Try again.");
//         console.error(error);
//       }
//     );
// };



  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      {/* Header */}
      <div className="cart-header d-flex justify-content-between align-items-center p-3 border-bottom navbar_yellow">
        <h5 className="mb-0">Your Cart</h5>
        <button className="btn btn-link text-dark fs-4" onClick={onClose}>
          &times;
        </button>
      </div>

      {/* Scrollable Body */}
      <div
        className="cart-body p-3 flex-grow-1 overflow-auto"
        style={{ maxHeight: "80vh" }}
      >
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="list-group mb-3">
            {cartItems.map((item, idx) => {
              const itemTotal = item.discountprice.value * item.quantity;
              return (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.name.value}</strong> <br />
                    <div className="d-flex align-items-center my-1">
                      <button
                        className="btn btn-sm btn-light border"
                        onClick={() =>
                          updateQuantity(item.name.value, Math.max(1, item.quantity - 1))
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-light border"
                        onClick={() =>
                          updateQuantity(item.name.value, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <small className="text-muted">
                      ₹{item.discountprice.value} × {item.quantity} ={" "}
                      <strong>₹{itemTotal}</strong>
                    </small>
                  </div>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(item.name.value)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Sticky Footer */}
      {cartItems.length > 0 && (
        <div className="cart-footer border-top p-3 d-flex justify-content-between align-items-center position-absolute bottom-0 w-100 bg-white">
          <div>
            <strong>Total: ₹{finalTotal}</strong>
          </div>
          <button
            className="btn btn-success btn-sm"
            onClick={() => setShowCheckout(true)}
          >
            Checkout
          </button>
        </div>
      )}

      {/* Checkout Modal */}
      {/* {showCheckout && (
        <div className="checkout-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
          <div className="bg-white p-4 rounded shadow" style={{ width: "320px" }}>
            <h5 className="mb-3">Checkout</h5>
            <p>
              <strong>Original Total: </strong>₹{totalPrice}
            </p>

            <div className="d-flex mb-2">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="btn btn-outline-primary" onClick={handleApplyCoupon}>
                Apply
              </button>
            </div>

            {appliedCoupon && (
              <p className={`small ${discount > 0 ? "text-success" : "text-danger"}`}>
                {appliedCoupon}
              </p>
            )}

            {discount > 0 && (
              <p>
                <strong>Discount:</strong> -₹{discount}
              </p>
            )}

            <p>
              <strong>Grand Total: </strong>₹{finalTotal}
            </p>

            <div className="d-flex justify-content-between">
              <button
                className="btn btn-secondary"
                onClick={() => setShowCheckout(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* Checkout Modal */}
{showCheckout && (
  <div className="checkout-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
    <div className="bg-white p-4 rounded shadow" style={{ width: "320px" }}>
      <h5 className="mb-3">Checkout</h5>
      <p>
        <strong>Original Total: </strong>₹{totalPrice}
      </p>

      {/* Customer Info Fields */}
      <div className="mb-2">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <input
          type="tel"
          className="form-control mb-2"
          placeholder="Mobile Number"
          value={customerMobile}
          onChange={(e) => setCustomerMobile(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email Address"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-2"
          placeholder="Address"
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          required
        />
      </div>

      {/* Coupon Code */}
      <div className="d-flex mb-2">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button className="btn btn-outline-primary" onClick={handleApplyCoupon}>
          Apply
        </button>
      </div>

      {appliedCoupon && (
        <p className={`small ${discount > 0 ? "text-success" : "text-danger"}`}>
          {appliedCoupon}
        </p>
      )}

      {discount > 0 && (
        <p>
          <strong>Discount:</strong> -₹{discount}
        </p>
      )}

      <p>
        <strong>Grand Total: </strong>₹{finalTotal}
      </p>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-secondary"
          onClick={() => setShowCheckout(false)}
        >
          Cancel
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (!customerName || !customerMobile || !customerEmail || !customerAddress) {
              alert("Please fill all required fields");
              return;
            }
            handlePlaceOrder();
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
