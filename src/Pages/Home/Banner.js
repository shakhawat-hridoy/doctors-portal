import React from "react";
import chair from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen px-12">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              expedita pariatur repellendus enim quisquam, itaque adipisci.
            </p>
            <button class="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
