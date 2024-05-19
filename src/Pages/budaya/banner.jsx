import React from "react";
import "./banner.css";
import { useParams } from 'react-router-dom';
import additionalDetails from './additionalDetails';

function Banner() {
  const { id } = useParams();
  const detail = additionalDetails.find(item => item.id === parseInt(id));

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ marginBottom: "10px" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={detail.imgURL}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption">
            <h5>Budaya</h5>
            <p>Yogyakarta</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
