// import ResponsiveCarousel from "../components/ResponsiveCarousel";
// import ProductGrid from "../components/ProductGrid";
// import categories from "../data/categories";

// export default function Products() {
//   return (
//     <div className="flex container">
//       {/* Main Content */}
//       <div className="flex-1 p-4 md:ml-64">
//         <h1 className="text-2xl font-bold mb-6">🔥 Products</h1>

//         {/* Top Carousel */}
//         <ResponsiveCarousel categories={categories} />

//         {/* Each Category */}
//         <div className="p-6">
//           {categories.map((cat, idx) => (
//             <ProductGrid key={idx} category={cat.category} items={cat.items} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import ResponsiveCarousel from "../components/ResponsiveCarousel";
import ProductGrid from "../components/ProductGrid";
import categories from "../data/categories";

export default function Products() {
  return (
    <div className="flex container">
      {/* Main Content */}
      <div className="flex-1 p-4 md:ml-64">
        <h1 className="text-2xl font-bold mb-6">🔥 Products</h1>

        {/* Top Carousel */}
        <ResponsiveCarousel categories={categories} />

        {/* Each Category */}
        <div className="p-6">
          {categories.map((cat, idx) => (
            <div id={`category-${idx}`} key={idx}>
              <ProductGrid category={cat.category} items={cat.items} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
