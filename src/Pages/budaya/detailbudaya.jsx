
import React from 'react';
import Bannerbudaya from './bannerbudaya';
import Navbar from './Navbar';
import Isibudaya from './isibudaya';
import { useParams } from 'react-router-dom';
import infobudaya from './infobudaya'; // Import additionalDetails
import "./menu.css";

const Detailbudaya = () => {
  const { id } = useParams();
  const budaya = infobudaya.find(item => item.id === parseInt(id));

  if (!budaya) {
      return <div>Product details not found</div>;
  }

  return (
      <div>
        <Navbar />
        <Bannerbudaya />
        <Isibudaya />
      </div>
  );
};

export default Detailbudaya;
