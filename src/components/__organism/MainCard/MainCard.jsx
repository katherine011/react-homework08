import React from "react";
import "./MainCard.css";
import MainPhoto from "../../__atoms/MainPhoto/MainPhoto";
import Card from "../Card/Card";

const MainCard = () => {
  return (
    <div className="MainCard">
      <MainPhoto />
      <Card />
    </div>
  );
};

export default MainCard;
