
import React from 'react';
import Bannerwisata from './bannerwisata';
import Navbar from './Navbar';
import Isiwisata from './isiwisata';
import Mapswisata from './mapswisata';
import { useParams } from 'react-router-dom';
import infowisata from './infowisata'; // Import additionalDetails
import "./menu.css";

const Detailwisata = () => {
  const { id } = useParams();
  const wisata = infowisata.find(item => item.id === parseInt(id));

  if (!wisata) {
      return <div>Product details not found</div>;
  }

  return (
      <div>
        <Navbar />
        <Bannerwisata />
        <Isiwisata />
        <Mapswisata />
      </div>
  );
};

export default Detailwisata;
