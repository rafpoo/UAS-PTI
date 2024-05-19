
import React from 'react';
import { Link } from 'react-router-dom';
import foods from "./strukturmenu/foods";
import Card from "./strukturmenu/Card";
import "./menu.css";

function createCard(food) {
  return (
    <div className="col-lg-4 mb-4 d-flex justify-content-center mt-5" key={food.id}>
      <Link to={{
        pathname: `/detailmakanan/${food.id}`,
        state: { name: food.name } // Pass additional information
      }} className="card-link">
        <div className="card">
          <div className="contact-card  contact-card-content">
            <Card
              name={food.name}
              imgURL={food.imgURL}
              meaning={food.meaning}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

const Menumakanan = () => {
  return (
    <div className="container text-center">
      <div className="row">{foods.map(createCard)}</div>
    </div>
  );
}

export default Menumakanan;
