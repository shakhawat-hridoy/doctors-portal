import React from "react";

const ServiceCard = ({ img, title }) => {
  return (
    <div>
      <div class="card shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, illo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
