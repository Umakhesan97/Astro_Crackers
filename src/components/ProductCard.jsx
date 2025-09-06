import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ item }) {
  const { addToCart } = useCart();
  const discountPercent = Math.round(
    ((item.actualprice.value - item.discountprice.value) / item.actualprice.value) * 100
  );

  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(item, quantity);
    }
  };

  return (
    <div className="position-relative bg-white rounded shadow p-4 d-flex flex-column align-items-center">
      {/* Discount Badge */}
      <span
        className="position-absolute top-1 start-0 translate-middle-y bg-success text-white fw-bold px-2 py-1 rounded-pill"
        style={{ fontSize: "12px" }}
      >
        -{discountPercent}%
      </span>

      {/* Image */}
      <div
        className="w-100 d-flex align-items-center justify-content-center bg-light rounded mb-3"
        style={{ height: "130px" }}
      >
        <span className="text-muted small">Image</span>
      </div>

      {/* Product Info */}
      <h3 className="fw-semibold text-center" style={{ fontSize: "16px" }}>
        {item.name.value}
      </h3>
      <p className="text-muted text-center mb-2">{item.content.value}</p>

      {/* Prices */}
      <div className="mt-2">
        <span className="text-decoration-line-through text-muted me-2">
          ₹{item.actualprice.value}
        </span>
        <span className="text-primary fw-bold">₹{item.discountprice.value}</span>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="mt-3 w-100">
        <div className="d-flex w-100 mb-2">
          <button
            className="btn btn-sm btn-light border"
            style={{ width: "35px", height: "35px", padding: 0 }}
            onClick={() => setQuantity((q) => Math.max(0, q - 1))}
          >
            -
          </button>

          <input
            type="number"
            className="form-control text-center flex-fill mx-2"
            value={quantity === 0 ? "" : quantity} // 👈 show empty if 0
            onChange={(e) => {
              let val = e.target.value;

              // Remove leading zeros
              if (/^0+/.test(val)) {
                val = val.replace(/^0+/, "");
              }

              setQuantity(Math.max(0, parseInt(val) || 0));
            }}
          />

          <button
            className="btn btn-sm btn-light border"
            style={{ width: "35px", height: "35px", padding: 0 }}
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary w-100"
            onClick={handleAddToCart}
            disabled={quantity === 0} // 👈 disable when 0
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Remove number input arrows */}
      <style>
        {`
          input[type=number]::-webkit-outer-spin-button,
          input[type=number]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type=number] {
            -moz-appearance: textfield;
          }
        `}
      </style>
    </div>
  );
}
