
import React from 'react';
import { Link } from 'react-router-dom';
import budayas from "./strukturmenu/budayas";
import Card from "./strukturmenu/Card";
import "./menu.css";

function createCard(budaya) {
  return (
    <div className="col-lg-4 mb-4 d-flex justify-content-center" key={budaya.id}>
      <Link to={{
        pathname: `/detailbudaya/${budaya.id}`,
        state: { name: budaya.name } // Pass additional information
      }} className="card-link">
        <div className="card-menu-budaya">
          <div className="contact-card  contact-card-content">
            <Card
              name={budaya.name}
              imgURL={budaya.imgURL}
              meaning={budaya.meaning}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

const Menubudaya = () => {
  return (
    <div className="container text-center">
      <div className="row">{budayas.map(createCard)}</div>
    </div>
  );
}

export default Menubudaya;
