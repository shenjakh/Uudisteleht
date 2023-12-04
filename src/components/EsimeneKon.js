import React from "react";
import { Link } from "react-router-dom";
import "../styles/EsimeneKon.css";
import EsileheUu from "../data/Data"

function Card({ imagePath, title, linkTo }) {
  return (
    <Link to={linkTo} className="card-link">
      <div className="card">
        <img src={imagePath} alt={title} />
        <div className="text-container">
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
}

function EsimeneKon() {
  return (
    <div className="esimene-kon-container">
      {EsileheUu.map((item, index) => (
        <Card
          key={index}
          imagePath={item.image}
          title={item.title}
          linkTo={`/card${index + 1}`}
        />
      ))}
    </div>
  );
}

export default EsimeneKon;
