import React from "react";

const InfoCard = ({ img, cardTitle, description, bgClass }) => {
  return (
    <div
      class={`card lg:card-side bg-base-100 shadow-xl text-white ${bgClass} p-5`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default InfoCard;
