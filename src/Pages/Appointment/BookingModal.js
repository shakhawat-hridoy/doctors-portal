import React from "react";
import { format } from "date-fns";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleSubmit = (event) => {
    event.preventDefault();

    const slot = event.target.slot.value;
    console.log(_id, name, slot);

    //to close the modal automatically
    setTreatment(null);
    //to close the modal automatically

    //additional design for exploring new thing
    alert(`Your appointment for ${name} has been booked`);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-secondary">
            Booking for : {name}
          </h3>

          {/* User info form */}
          <form
            onSubmit={handleSubmit}
            className="py-4 grid grid-cols-1 gap-3 justify-items-center"
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered \ w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered border-secondary w-full max-w-xs btn btn-secondary"
            />
          </form>
          <div className="modal-action">
            <label
              for="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-secondary border-0"
            >
              ???
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
