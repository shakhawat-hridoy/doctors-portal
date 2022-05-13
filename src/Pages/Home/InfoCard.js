import React from "react";

const InfoCard = ({ img, cardTitle, description, bgClass }) => {
  return (
    <div
      className={`card lg:card-side bg-base-100 shadow-xl text-white ${bgClass} p-5`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
