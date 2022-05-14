import React from "react";
import Button from "../Shared/Button";

const AppointedService = ({ service }) => {
  return (
    <div class="card bg-base-100 lg:max-w-lg shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary">{service.name}</h2>
        <p>
          {service.slots.length ? (
            <span>{service.slots[0]}</span>
          ) : (
            <span className="text-red-500">No slots available</span>
          )}
        </p>
        <p>
          {service.slots.length} {service.slots.length > 1 ? "spaces" : "space"}{" "}
          available
        </p>
        <div class="card-actions">
          <button disabled={service.slots.length === 0} class="btn btn-primary">
            Book Appointment
          </button>
        </div>
        {/* <Button disabled={service.slots.length === 0}>Book Appointment</Button> */}
      </div>
    </div>
  );
};

export default AppointedService;
