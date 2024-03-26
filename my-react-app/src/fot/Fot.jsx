import React from 'react';
import "./fot.css";
import c1 from "../img/potos/c1.png";
import c2 from "../img/potos/c2.png";
import c3 from "../img/potos/c3.png";
import c4 from "../img/potos/c4.png";
import c5 from "../img/potos/c5.png";

function Fot() {
  return (
    <div className="container-fluid bg-light">
      <div className="row m-5">
        <div className="img-container d-flex justify-content-between gap-3">
          <img src={c1} alt="brand-image" className="img-fluid" />
          <img src={c2} alt="brand-image" className="img-fluid" />
          <img src={c3} alt="brand-image" className="img-fluid" />
          <img src={c4} alt="brand-image" className="img-fluid" />
          <img src={c5} alt="brand-image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Fot;
