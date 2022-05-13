import React from "react";

const Button = ({ children }) => {
  return (
    <div className="my-5">
      <button className="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">
        {children}
      </button>
    </div>
  );
};

export default Button;
