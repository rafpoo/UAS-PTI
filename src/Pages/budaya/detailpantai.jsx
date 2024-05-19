
import React from 'react';
import Bannerpantai from './bannerpantai';
import Navbar from './Navbar';
import Isipantai from './isipantai';
import Mapspantai from './mapspantai';
import { useParams } from 'react-router-dom';
import infopantai from './infopantai'; // Import additionalDetails
import "./menu.css";

const Detailpantai = () => {
  const { id } = useParams();
  const pantai = infopantai.find(item => item.id === parseInt(id));

  if (!pantai) {
      return <div>Product details not found</div>;
  }

  return (
      <div>
        <Navbar />
        <Bannerpantai />
        <Isipantai />
        <Mapspantai />
      </div>
  );
};

export default Detailpantai;
