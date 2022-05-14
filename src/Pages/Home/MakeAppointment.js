import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import Button from "../Shared/Button";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="-mt-32" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl font-bold text-primary ">Appointment</h3>
        <h2 className="text-3xl text-white">Make An Appointment Today</h2>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          adipisci, aliquam velit id nihil, dolores, reprehenderit provident est
          facere temporibus quis eius ea enim error eum dolorum autem ex
          obcaecati corporis. Nulla nesciunt nostrum numquam, quia mollitia
          error blanditiis nobis.
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default MakeAppointment;
