import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import astro_logo from "../assets/astro_crackers_logo.jpg";
import CartSidebar from "./CartSidebar";

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleNavToggle = () => setIsNavCollapsed(!isNavCollapsed);
  const handleNavLinkClick = () => setIsNavCollapsed(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar_yellow">
        <div className="container-xxl">
          {/* Brand/Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleNavLinkClick}>
            <img
              src={astro_logo}
              alt="Astro Crackers Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <h1>Astro Crackers</h1>
          </Link>

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavToggle}
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/" onClick={handleNavLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/products" onClick={handleNavLinkClick}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                {/* Cart opens sidebar */}
                <span
                  className="nav-link text-white"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsNavCollapsed(true); // ✅ close navbar on mobile when cart opens
                  }}
                >
                  Cart
                </span>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/about" onClick={handleNavLinkClick}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
