import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Home_image from "../assets/Astro_crackers_home_image.png";
import "./Home.css"; // import external CSS

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Button
        size="lg"
        className="shop-now-btn yellow_background"
        onClick={() => navigate("/products")}
      >
        <strong>Shop Now</strong>
      </Button>
    </div>
  );
}
