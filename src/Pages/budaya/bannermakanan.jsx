import React from "react";
import "./banner.css";
import { useParams } from 'react-router-dom';
import infomakanan from "./infomakanan";

function Bannermakanan() {
  const { id } = useParams();
  const makanan = infomakanan.find(item => item.id === parseInt(id));

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
            src={makanan.imgURL}
            className="d-block w-100"
            alt="..."
          />      
        </div>
      </div>
      <div className="carousel-caption">
        <h5>Kuliner</h5>
        <p>{makanan && makanan.name}</p>
      </div>
    </div>
  );
}
export default Bannermakanan;
