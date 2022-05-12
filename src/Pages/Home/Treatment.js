import React from "react";

const Treatment = ({ img }) => {
  return (
    <div class="hero min-h-screen px-12 my-12">
      <div class="hero-content flex-col lg:flex-row">
        <img src={img} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Totam blanditiis deleniti laboriosam nihil at explicabo quibusdam
            illum sint dolorum saepe!
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
