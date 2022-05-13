import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <div className="card lg:max-w-lg text-primary-content shadow-lg">
        <div className="card-body">
          <p>{review.comment}</p>
          <div className="flex justify-self-auto items-center mt-5">
            <div className="avatar">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.img} alt="" />
              </div>
            </div>
            <div>
              <p className="font-bold">{review.name}</p>
              <p>{review.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
