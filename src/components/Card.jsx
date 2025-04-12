import React from "react";

const Card = ({ title, amount, percent, image, color }) => {
  return (
    <div
      className="card-metric"
      style={{
        backgroundColor: color,
        padding: 20,
        borderRadius: 12,
        position: "relative", 
        overflow: "hidden",   
      }}
    >
      {}
      <img
        src={image}
        alt={title}
        width={40}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      />

      {}
      <div>
        <h6>{title}</h6>
        <h4>${amount}</h4>
        <p style={{ color: "green", fontSize: 12 }}>▲ {percent} period of change</p>
      </div>
    </div>
  );
};

export default Card;
