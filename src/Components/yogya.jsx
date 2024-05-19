import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Components/yogya.css';

const Yogya = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Set zoom to true immediately when the component mounts
    setIsZoomed(true);
  }, []);

  return (
    <div className="yogya-container">
      <div className="map-container">
        <svg
          fill="#000000"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="400%"
          height="auto"
          viewBox="0 0 300 150"
          enableBackground="new 0 0 260 82"
          xmlSpace="preserve"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          {/* Island */}
          <path
            id="jawa"
            fill="#56A232"
            d="M101.002,68.098l-1.014-3.303l-5.026-0.661l-5.403-0.944l-0.92,2.431l-8.471-0.213l-3.893-2.902l-6.535-0.401
            l-1.392-0.024l-3.705-0.707l-1.227,3.468l3.516,2.359l0.778,2.195l10.429,1.533l1.793-0.943l6.701,0.802l4.365,1.415l0.543,0.118
            l11.986-0.377l4.247,1.628l2.383-4.341l-6.229,0.094L101.002,68.098z"
            className={isZoomed ? "zoom-in-animation" : ""}
          />

          {/* Text box */}
          <rect
            x="40"
            y="40"
            rx="10"
            ry="10"
            width="120"
            height="40"
            fill="red"
            stroke="red"
            strokeWidth="2"
          />

          {/* Text */}
          <text
            id="yogyakarta-text"
            x="100"
            y="65"
            fill="white"
            fontSize="14"
            textAnchor="middle"
            alignmentBaseline="middle"
            className="fade-in"
          >
            Yogyakarta
          </text>
        </svg>
      </div>
      {isZoomed && (
        <div className="info-container">
          <h1>Yogyakarta</h1>
          <p>Ini adalah beberapa hal yang di explore di Yogyakarta, etc.</p>
          <div className="cards-container">
            <Link to="/menubudaya" className="card">
              <img src="budaya.jpg" alt="Budaya" className="card-img"/>
              <p className="budaya">Budaya</p>
            </Link>
            <Link to="/makanan" className="card">
              <img src="gudeg.jpeg" alt="Makanan" className="card-img"/>
              <p className="makanan">Makanan</p>
            </Link>
            <Link to="/pantai" className="card">
              <img src="pantai.jpg" alt="Pantai" className="card-img"/>
              <p className="pantai">Pantai</p>
            </Link>
            <Link to="/wisata" className="card">
              <img src="wisata.jpg" alt="Wisata" className="card-img"/>
              <p className="wisata">Tempat Wisata</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Yogya;
