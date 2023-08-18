import React from "react";
import I1 from "../../Images/s1.jpg";
import I2 from "../../Images/s2.jpg";
import I3 from "../../Images/s3.jpg";
import I4 from "../../Images/s4.jpg";
import I5 from "../../Images/s5.jpg";
import I6 from "../../Images/s6.jpg";

const Crousal = () => {
  return (
    <div class="container-fluid mt-2" style={{ width: "100%" }}>
      <div class="row">
        <div
          id="carouselExample"
          class="carousel slide d-none d-sm-none d-md-block"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-4">
                  <img class="d-block w-100" src={I1} alt="First slide" />
                </div>
                <div class="col-md-4">
                  <img class="d-block w-100" src={I3} alt="Second slide" />
                </div>
                <div class="col-md-4">
                  <img class="d-block w-100" src={I5} alt="Third slide" />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <img class="d-block w-100" src={I2} alt="Fourth slide" />
                </div>
                <div class="col-md-4">
                  <img class="d-block w-100" src={I4} alt="Fifth slide" />
                </div>
                <div class="col-md-4">
                  <img class="d-block w-100" src={I6} alt="sixth slide" />
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExample"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExample"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div
          id="carouselExampleMobile"
          class="carousel slide d-md-none d-lg-none d-xl-none"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={I1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={I2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={I3} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={I4} alt="Fourth slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={I5} alt="Fifth slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={I6} alt="Sixth slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleMobile"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleMobile"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Crousal;
