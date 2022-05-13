import React from "react";
import Button from "../Shared/Button";

const Treatment = ({ img }) => {
  return (
    <div className="hero min-h-screen px-12 my-12">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Totam blanditiis deleniti laboriosam nihil at explicabo quibusdam
            illum sint dolorum saepe!
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
