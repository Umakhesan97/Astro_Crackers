import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <Carousel
        fade
        controls={true}
        indicators={false}
        interval={3000} // optional auto-slide
        className="h-100 d-flex flex-column justify-content-center align-items-center text-center"
        nextIcon={
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
            style={{ backgroundColor: "black", borderRadius: "50%" }}
          />
        }
        prevIcon={
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
            style={{ backgroundColor: "black", borderRadius: "50%" }}
          />
        }
      >
        <Carousel.Item
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", backgroundColor: "#ff6b6b" }}
        >
          <h2 className="text-white">First Text Slide</h2>
        </Carousel.Item>

        <Carousel.Item
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", backgroundColor: "#4ecdc4" }}
        >
          <h2 className="text-white">Second Text Slide</h2>
        </Carousel.Item>

        <Carousel.Item
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", backgroundColor: "#1a535c" }}
        >
          <h2 className="text-white">Third Text Slide</h2>
        </Carousel.Item>
      </Carousel>

      {/* Custom control container at bottom */}
      <div
        className="d-flex justify-content-between w-100 position-absolute"
        style={{ bottom: "20px", padding: "0 2rem" }}
      >
        <button
          className="btn btn-dark"
          onClick={() =>
            document
              .querySelector(".carousel")
              .carousel.prev()
          }
        >
        </button>
        <button
          className="btn btn-dark"
          onClick={() =>
            document
              .querySelector(".carousel")
              .carousel.next()
          }
        >
        </button>
      </div>
    </div>
  );
}
