import React from "react";
// import Button from "../Shared/Button";

const AppointedService = ({ service, setTreatment }) => {
  return (
    <div class="card bg-base-100 lg:max-w-lg shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary">{service.name}</h2>
        <p>
          {service.slots.length ? (
            <span>{service.slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date</span>
          )}
        </p>
        <p>
          {service.slots.length} {service.slots.length > 1 ? "spaces" : "space"}{" "}
          available
        </p>
        <div class="card-actions">
          {/* special label button for openning modal. Otherwise we would use normal button as always. */}
          <label
            for="booking-modal"
            onClick={() => {
              setTreatment(service);
            }}
            disabled={service.slots.length === 0}
            className="btn btn-sm border-0 text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointedService;
