import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointedService from "./AppointedService";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date, setDate }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div>
        <p className="text-center">
          <b>
            <span className="text-xl"> Available appointments on </span>:{" "}
            <span className="text-secondary">{format(date, "PP")}</span>
          </b>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 my-12">
        {services.map((service) => (
          <AppointedService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointedService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
