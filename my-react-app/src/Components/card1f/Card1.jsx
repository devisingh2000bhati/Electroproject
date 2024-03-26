import React from 'react';
import './card1.css';
import { card12 } from '../../Dumydata.js/Dummydatat';

function Card1() {
  return (
    <div className="container-fluid my-5">
      <div className="row gx-4 gx-lg-5">
        {card12.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={item.imgUrl} className="card-img-top" alt="Company" />
              <div className="card-body">
                <h4 className="card-title">{item.Text}</h4>
                <p className="card-text">{item.title}</p>
                <p className="card-text">{item.spn}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card1;
