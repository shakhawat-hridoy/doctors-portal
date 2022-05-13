import React from "react";

const ServiceCard = ({ img, title }) => {
  return (
    <div className="card shadow-xl my-8">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, illo.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
