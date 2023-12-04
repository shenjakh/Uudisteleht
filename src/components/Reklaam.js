

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Reklaam.css'

const Reklaam = () => {
  return (
    <div className="reklaam-container">
      <h2>{genereeriReklaamiPealkiri()}</h2>
      <p>{genereeriReklaamiLõik()}</p>
      <Link to="/reklaam">Loe rohkem</Link>
    </div>
  );
};

// Funktsioon generatsiooniks reklaami pealkiri
const genereeriReklaamiPealkiri = () => {
  const reklaamiPealkirjad = ['Eripakkumine!', 'Piiratud aja pakkumine', 'Avasta põnevaid pakkumisi', 'Ära maga maha!'];
  const juhuslikIndeks = Math.floor(Math.random() * reklaamiPealkirjad.length);
  return reklaamiPealkirjad[juhuslikIndeks];
};

// Funktsioon generatsiooniks reklaami lõik
const genereeriReklaamiLõik = () => {
  const reklaamiLõigud = [
    'Uuri meie hämmastavaid tooteid ja leia endale täiuslik.',
    'Läbimõeldud hinnad kvaliteetsetel esemetel. Osta kohe!',
    'Liitu meie kogukonnaga ja koge vahet ostlemisel.',
    'Tõsta oma elukvaliteeti meie eksklusiivsete pakkumistega.'
  ];
  const juhuslikIndeks = Math.floor(Math.random() * reklaamiLõigud.length);
  return reklaamiLõigud[juhuslikIndeks];
};

export default Reklaam;
