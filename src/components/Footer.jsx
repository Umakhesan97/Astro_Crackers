import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container">
        <div className="row text-center text-lg-start align-items-center">
          {/* Logo */}
          <div className="col-12 col-lg-4 mb-2 mb-lg-0 d-flex justify-content-center justify-content-lg-start">
            <Link className="navbar-brand text-white" to="/">
              Astro Crackers
            </Link>
          </div>

          {/* Middle text */}
          <div className="col-12 col-lg-4 mb-2 mb-lg-0 d-flex justify-content-center">
            <p className="mb-0">Made with ❤️ by Astro Crackers</p>
          </div>

          {/* Copyright */}
          <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end">
            <small>© {new Date().getFullYear()} Astro Crackers. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
