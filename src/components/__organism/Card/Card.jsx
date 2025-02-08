import React from "react";
import "./Card.css";
import Header from "../../__atoms/Header/Header";
import Boxes from "../../__molecules/Boxes/Boxes";

const Card = () => {
  return (
    <div className="Card">
      <Header />
      <Boxes />
    </div>
  );
};

export default Card;
