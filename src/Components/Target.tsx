import React from "react";
import bcr from "../assets/objectsCard/bcr.svg";
import chip from "../assets/objectsCard/chip.jpg";
import master from "../assets/objectsCard/mastercard.png";

import "../Styles/target.scss";

const Target = ({ number, expir, username, typetarget }) => {
  return (
    <div id="card" className="mediaPrint">
      <div className="order">
        <div className="head">
          <img src={master} alt="master card" className="master" />
          <img src={bcr} alt="bcr" className="bcr" />
        </div>
        <div className="main-card">
          <img src={chip} alt="card-chip" className="card-chip" />
          <h3 className="rotate-icon">
            <i className="fa fa-wifi" aria-hidden="true"></i>
            <span>1234</span>
          </h3>
        </div>
      </div>
      <div className="foot-target">
        <p className="number-count">{number}</p>
        <p className="expired">expired:{expir}</p>
        <p className="username">{username}</p>
        <p className="type-target">{typetarget}</p>
      </div>
    </div>
  );
};

export default Target;
