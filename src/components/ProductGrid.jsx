import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ category, items }) {
  const [itemsPerView, setItemsPerView] = useState(4); // default desktop
  const sliderRef = useRef(null);

  // Update items per view based on window width
  const updateItemsPerView = () => {
    const width = window.innerWidth;
    if (width <= 576) setItemsPerView(1);
    else if (width <= 768) setItemsPerView(2);
    else if (width <= 1024) setItemsPerView(3);
    else setItemsPerView(4);
  };

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  return (
    <div className="mb-4">
      {/* Header */}
      <div className="bg-warning p-2 d-flex justify-content-between align-items-center mb-2">
        <h3 className=" text-dark fw-bold  rounded m-0">{category}</h3>
        <span className="fw-bold">{`${Math.min(itemsPerView, items.length)}/${items.length}`}</span>

      </div>

      {/* Slider with arrows */}
      <div className="slider-wrapper position-relative">
        <button className="slider-arrow left" onClick={() => {
          sliderRef.current.scrollBy({ left: -sliderRef.current.firstChild.offsetWidth - 16, behavior: "smooth" });
        }}>
          &#10094;
        </button>

        <div className="product-slider" ref={sliderRef}>
          {items.map((item, idx) => (
            <div className="slider-item" key={idx}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>

        <button className="slider-arrow right" onClick={() => {
          sliderRef.current.scrollBy({ left: sliderRef.current.firstChild.offsetWidth + 16, behavior: "smooth" });
        }}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
