import React from "react";
import "../styles/EsimeneKon.css";
import fetchData from "../data/ContentfulData";

function Card({ imagePath, title }) {
  return (
      <div className="card">
        <img src={imagePath} />
        <div className="text-container">
          <h3>{title}</h3>
        </div>
      </div>
  );
}

function EsimeneKon() {
  const [cardDataArray, setCardDataArray] = React.useState(null);

  React.useEffect(() => {
    const entryKeys = ['2ZvrvIgnlTjBGX7uOXlo9d', 'qpw5XAO2M2gNLj9RV811u', '5tIPHdImAmivexRShYoWXl'];
    fetchData(entryKeys).then((dataArray) => {
      if (dataArray) {
        setCardDataArray(dataArray);
      }
    });
  }, []);

  return (
    <div>
      {cardDataArray &&
        cardDataArray.map((data, index) => (
          <Card
            key={index}
            imagePath={data.imagePath}
            title={data.title}
          />
        ))}
    </div>
  );
}

export default EsimeneKon;
