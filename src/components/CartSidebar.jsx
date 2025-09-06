// import "./CartSidebar.css";
// import { useCart } from "../context/CartContext";

// export default function CartSidebar({ isOpen, onClose }) {
//   const { cartItems, removeFromCart } = useCart();

//   // calculate total
//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.discountprice.value * item.quantity,
//     0
//   );

//   return (
//     <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
//       {/* Header */}
//       <div className="cart-header d-flex justify-content-between align-items-center p-3 border-bottom navbar_yellow">
//         <h5 className="mb-0">Your Cart</h5>
//         <button className="btn btn-link text-dark fs-4" onClick={onClose}>
//           &times;
//         </button>
//       </div>

//       {/* Body */}
//       <div className="cart-body p-3">
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty</p>
//         ) : (
//           <>
//             <ul className="list-group mb-3">
//               {cartItems.map((item, idx) => {
//                 const itemTotal = item.discountprice.value * item.quantity;
//                 return (
//                   <li
//                     key={idx}
//                     className="list-group-item d-flex justify-content-between align-items-center"
//                   >
//                     <div>
//                       <strong>{item.name.value}</strong> <br />
//                       Qty: {item.quantity} <br />
//                       <small className="text-muted">
//                         ₹{item.discountprice.value} × {item.quantity} ={" "}
//                         <strong>₹{itemTotal}</strong>
//                       </small>
//                     </div>
//                     <button
//                       className="btn btn-sm btn-danger"
//                       onClick={() => removeFromCart(item.name.value)}
//                     >
//                       Remove
//                     </button>
//                   </li>
//                 );
//               })}
//             </ul>

//             {/* Total */}
//             <div className="border-top pt-3 d-flex justify-content-between">
//               <strong>Total:</strong>
//               <strong>₹{totalPrice}</strong>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


import "./CartSidebar.css";
import { useCart } from "../context/CartContext";

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // calculate total
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.discountprice.value * item.quantity,
    0
  );

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
      <div className="cart-body p-3 flex-grow-1 overflow-auto" style={{ maxHeight: "80vh" }}>
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
                        onClick={() => updateQuantity(item.name.value, item.quantity + 1)}
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
        <div className="cart-footer border-top p-3 d-flex justify-content-between position-absolute bottom-0 w-100">
          <strong>Total:</strong>
          <strong>₹{totalPrice}</strong>
        </div>
      )}
    </div>
  );
}
