import React from "react";
import ServiceCard from "./ServiceCard";

import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import Treatment from "./Treatment";

const Services = () => {
  return (
    <div className="my-12">
      <h2 className="my-12">
        <span className="text-xl text-secondary font-bold">OUR SERVICES</span>
        <br />
        <span className="text-3xl">Services We Provide</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
        <ServiceCard img={fluoride} title="Fluoride Treatment"></ServiceCard>
        <ServiceCard img={cavity} title="Cavity Filling"></ServiceCard>
        <ServiceCard img={whitening} title="Teeth Whitening"></ServiceCard>
      </div>
      <Treatment img={treatment}></Treatment>
    </div>
  );
};

export default Services;
