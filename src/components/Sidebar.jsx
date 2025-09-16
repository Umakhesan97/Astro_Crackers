import { useState } from "react";
import { ChevronRight } from "lucide-react";
import categories from "../data/categories"; // 👈 import your categories data

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Filter By Price</h2>
        </div>

        {/* Price Filter */}
        <div className="p-4">
          <p className="mb-2">Price: ₹10 — ₹4,680</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
        </div>

        {/* Categories */}
        <div className="p-4 border-t">
          <h3 className="text-md font-semibold mb-2">Product Categories</h3>
          <ul className="space-y-2">
            {categories.map((cat, index) => (
              <li key={index} className="flex justify-between">
                {cat.category}
                <span className="bg-gray-200 px-2 rounded">
                  {cat.items.length}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Toggle button (only on mobile) */}
      <button
        className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-l-lg shadow-md md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronRight
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
    </>
  );
}
