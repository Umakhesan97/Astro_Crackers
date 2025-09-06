// src/components/ProductGrid.jsx
import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductGrid({ category, items }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

return (
  <div className="mb-4">
    <h3 className="bg-warning text-dark fw-bold p-2 rounded">
      {category}
    </h3>
    <Slider {...settings}>
      {items.map((item, idx) => (
        <div key={idx} className="p-2">
          <ProductCard item={item} />
        </div>
      ))}
    </Slider>
  </div>
);

}
