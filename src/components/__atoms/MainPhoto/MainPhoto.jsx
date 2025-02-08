import React from "react";
import "./MainPhoto.css";
import MainImg from "../../../assets/images/asdf.png";

const MainPhoto = () => {
  return (
    <div className="MainPhoto">
      <img src={MainImg} alt="MainImg" />
    </div>
  );
};

export default MainPhoto;
