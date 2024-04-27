import React from 'react';
import './card.css'; // Import CSS file for styling

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="description">{description}</p>
      {/* Full description displayed on hover */}
      <div className="full-description">{description}</div>
    </div>
  );
};

export default Card;
