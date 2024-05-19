
import React from 'react';
import { Link } from 'react-router-dom';
import wisatas from "./infowisata";
import Card from "./strukturmenu/Card";
import "./menu.css";

function createCard(wisata) {
  return (
    <div className="col-lg-4 mb-4 d-flex justify-content-center" key={wisata.id}>
      <Link to={{
        pathname: `/detailwisata/${wisata.id}`,
        state: { name: wisata.name } // Pass additional information
      }} className="card-link">
        <div className="card">
          <div className="contact-card  contact-card-content">
            <Card
              name={wisata.name}
              imgURL={wisata.imgURL}
              meaning={wisata.meaning}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

const Menuwisata = () => {
  return (
    <div className="container text-center">
      <div className="row">{wisatas.map(createCard)}</div>
    </div>
  );
}

export default Menuwisata;
