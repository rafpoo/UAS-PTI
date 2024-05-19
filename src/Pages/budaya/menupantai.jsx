
import React from 'react';
import { Link } from 'react-router-dom';
import pantais from "./strukturmenu/pantais";
import Card from "./strukturmenu/Card";
import "./menu.css";

function createCard(pantai) {
  return (
    <div className="col-lg-4 mb-4 d-flex justify-content-center" key={pantai.id}>
      <Link to={{
        pathname: `/detailpantai/${pantai.id}`,
        state: { name: pantai.name } // Pass additional information
      }} className="card-link">
        <div className="card">
          <div className="contact-card  contact-card-content">
            <Card
              name={pantai.name}
              imgURL={pantai.imgURL}
              meaning={pantai.meaning}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

const Menupantai = () => {
  return (
    <div className="container text-center">
      <div className="row">{pantais.map(createCard)}</div>
    </div>
  );
}

export default Menupantai;
