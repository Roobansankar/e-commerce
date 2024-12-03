import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  if (
    location.pathname === "/cart" ||
    location.pathname.includes("/product/")
  ) {
    return null;
  }

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./image1.webp" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./image2.webp" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./image3.webp" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./image4.webp" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
