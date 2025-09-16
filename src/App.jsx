import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Load Bootstrap JS
import "./App.css";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          {/* <Breadcrumbs /> */}
          <main className="flex-fill container-fluid p-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}


// function App() {
//   return (
//     <Router>
//       <div className="d-flex flex-column min-vh-100">
//         {/* Header fixed at top */}
//         <Header />
//         <Breadcrumbs />
//         {/* Main content expands */}
//         <main className="flex-fill container-fluid p-0">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </main>

//         {/* Footer sticks to bottom */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

export default App;
