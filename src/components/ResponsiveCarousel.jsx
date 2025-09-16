// // src/components/ResponsiveCarousel.js
// import { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./ResponsiveCarousel.css";
// import default_category_image from "../assets/default_category_image.png";

// export default function ResponsiveCarousel({ categories }) {
//   const [currentIndex, setCurrentIndex] = useState(0); // first visible slide
//   const [slidesToShow, setSlidesToShow] = useState(5); // track visible count

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow,
//     slidesToScroll: 1,
//     arrows: true,
//     beforeChange: (_, newIndex) => setCurrentIndex(newIndex),
//     responsive: [
//       { breakpoint: 1200, settings: { slidesToShow: 4 } },
//       { breakpoint: 992, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 576, settings: { slidesToShow: 1 } },
//     ],
//   };

//   // function to update visible count based on screen size
//   const updateSlidesToShow = () => {
//     const width = window.innerWidth;
//     if (width < 576) return 1;
//     if (width < 768) return 2;
//     if (width < 992) return 3;
//     if (width < 1200) return 4;
//     return 5;
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setSlidesToShow(updateSlidesToShow());
//     };
//     handleResize(); // run once at start
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // "X out of Y" logic
//   const visibleCount = Math.min(slidesToShow, categories.length);
//   const total = categories.length;

//   return (
//     <div className="container-xxl">
//       <Slider {...settings}>
//         {categories.map((cat, index) => (
//           <div key={index} className="category-card">
//             {/* Fallback to default image if no image */}
//             <img
//               src={
//                 cat.image && cat.image.trim() !== ""
//                   ? cat.image
//                   : default_category_image
//               }
//               alt={cat.category || "Category"}
//               className="category-image"
//             />
//             <h5 className="category-title">{cat.category}</h5>
//             <p className="category-count">
//               {cat.items?.length || 0} products
//             </p>
//           </div>
//         ))}
//       </Slider>

//       {/* Counter */}
//       <div className="text-center mt-2">
//         <small className="text-muted">
//           {visibleCount} out of {total} products
//         </small>
//       </div>
//     </div>
//   );
// }


// src/components/ResponsiveCarousel.js
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ResponsiveCarousel.css";
import default_category_image from "../assets/default_category_image.png";

export default function ResponsiveCarousel({ categories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (_, newIndex) => setCurrentIndex(newIndex),
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 576) return 1;
    if (width < 768) return 2;
    if (width < 992) return 3;
    if (width < 1200) return 4;
    return 5;
  };

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(updateSlidesToShow());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = Math.min(slidesToShow, categories.length);
  const total = categories.length;

  // Scroll handler
  const handleCategoryClick = (index) => {
    const target = document.getElementById(`category-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container-xxl">
      <Slider {...settings}>
        {categories.map((cat, index) => (
          <div
            key={index}
            style={{ cursor: "pointer" }}   
            className="category-card cursor-pointer"
            onClick={() => handleCategoryClick(index)}
          >
            <img
              src={
                cat.image && cat.image.trim() !== ""
                  ? cat.image
                  : default_category_image
              }
              alt={cat.category || "Category"}
              className="category-image"
              style={{ cursor: "pointer" }}   
            />
            <h5 className="category-title" style={{ cursor: "pointer" }}>{cat.category}</h5>
            <p className="category-count">{cat.items?.length || 0} products</p>
          </div>
        ))}
      </Slider>

      {/* Counter */}
      <div className="text-center mt-2">
        <small className="text-muted">
          {visibleCount} out of {total} products
        </small>
      </div>
    </div>
  );
}
