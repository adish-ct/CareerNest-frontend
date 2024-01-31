import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rate = ({ totalStars, intialRating, onRatingChange }) => {
  const [rating, setRating] = useState(intialRating);
  const handleClick = (selectedRating) => {
    setRating(selectedRating);
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={
              rating >= starValue ? "text-yellow-500" : "text-gray-300"
            }
            onClick={() => handleClick(starValue)}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </div>
  );
};

export default Rate;
