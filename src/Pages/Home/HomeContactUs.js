import React from "react";
import appointment from "../../assets/images/appointment.png";
import Button from "../Shared/Button";

const HomeContactUs = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="text-center py-4"
    >
      <h4 className="text-secondary text-xl font-bold">Contact Us</h4>
      <h2 className="text-3xl text-white">Stay connevted with us</h2>
      <form className="mt-4">
        <input
          className="my-2 py-2 px-20 rounded"
          type="email"
          placeholder="Email Address"
          name=""
          id=""
        />
        <br />
        <input
          className="my-2 py-2 px-20 rounded"
          type="text"
          placeholder="Subject "
        />
        <br />
        <input
          className="my-2 px-20 py-12 rounded"
          type="text"
          placeholder="Your Message"
        />
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default HomeContactUs;
