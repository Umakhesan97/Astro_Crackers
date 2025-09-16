import { useState } from "react";
import { useCart } from "../context/CartContext";
import logo from "../assets/Astro_crackers_logo.jpg";
import "./ProductCard.css";

export default function ProductCard({ item }) {
  const { addToCart } = useCart();
  const discountPercent = Math.round(
    ((item.actualprice.value - item.discountprice.value) / item.actualprice.value) * 100
  );

  const [quantity, setQuantity] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(item, quantity);

      // Show overlay
      setShowOverlay(true);
      setTimeout(() => setShowOverlay(false), 3000); // hide after 3 seconds
    }
  };

  return (
    <div className="product-card position-relative bg-white rounded shadow-sm p-3 d-flex flex-column align-items-center">
      {/* Discount Badge */}
      <span
        className="position-absolute top-0 start-0 bg-success text-white fw-bold px-2 py-1 rounded-end"
        style={{ fontSize: "10px" }}
      >
        -{discountPercent}%
      </span>

      {/* Image */}
      <div
        className="w-100 d-flex align-items-center justify-content-center bg-light rounded mb-2"
        style={{ height: "110px" }}
      >
        <img
          src={logo}
          alt={item.name?.value || "product"}
          style={{ maxHeight: "90%", maxWidth: "100%", objectFit: "contain" }}
        />
      </div>

      {/* Product Info */}
      <h3 className="fw-semibold text-center mb-1" style={{ fontSize: "14px" }}>
        {item.name.value}
      </h3>
      <p className="text-muted text-center mb-1 small">{item.content.value}</p>

      {/* Prices */}
      <div className="mb-2">
        <span className="text-decoration-line-through text-muted me-1 small">
          ₹{item.actualprice.value}
        </span>
        <span className="text-primary fw-bold small">₹{item.discountprice.value}</span>
      </div>

      {/* Quantity + Add */}
      <div className="mt-auto w-100">
        <div className="qty-row d-flex w-100 mb-2 align-items-center justify-content-center">
          <button
            className="btn btn-sm btn-light border qty-btn"
            onClick={() => setQuantity((q) => Math.max(0, q - 1))}
          >
            -
          </button>

          <input
            type="number"
            className="form-control text-center qty-input mx-2"
            value={quantity === 0 ? "" : quantity}
            onChange={(e) => {
              let val = e.target.value;
              if (/^0+/.test(val)) val = val.replace(/^0+/, "");
              setQuantity(Math.max(0, parseInt(val) || 0));
            }}
          />

          <button
            className="btn btn-sm btn-light border qty-btn"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary w-100 btn-sm"
            onClick={handleAddToCart}
            disabled={quantity === 0}
          >
            Add
          </button>
        </div>
      </div>

      {/* Full-card overlay */}
      {showOverlay && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-success bg-opacity-90 rounded"
          style={{ zIndex: 50, color: "#fff", fontWeight: "bold", fontSize: "14px" }}
        >
          ✅ Product added successfully!
        </div>
      )}
    </div>
  );
}
