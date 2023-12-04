import React from "react";
import { Link } from "react-router-dom";
import "../styles/EsimeneKon.css"

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
      <Card imagePath="https://images.unsplash.com/photo-1624821710880-d3217ac41792?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Card 1" linkTo="/card1" />
      <div className="card-gap" />
      <Card imagePath="https://images.unsplash.com/photo-1701209786009-38946c926513?q=80&w=2892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Card 2" linkTo="/card2" />
    </div>
  );
}

export default EsimeneKon;
