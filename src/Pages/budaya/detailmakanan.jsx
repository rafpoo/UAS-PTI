
import React from 'react';
import Bannermakanan from './bannermakanan';
import Navbar from './Navbar';
import Isimakanan from './isimakanan';
import Mapsmakanan from './mapsmakanan';
import { useParams } from 'react-router-dom';
import infomakanan from './infomakanan'; // Import additionalDetails
import "./menu.css";

const Detailmakanan = () => {
  const { id } = useParams();
  const makanan = infomakanan.find(item => item.id === parseInt(id));

  if (!makanan) {
      return <div>Product details not found</div>;
  }

  return (
      <div>
        <Navbar />
        <Bannermakanan />
        <Isimakanan />
        <Mapsmakanan />
      </div>
  );
};

export default Detailmakanan;
