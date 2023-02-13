import React from "react";
import { useState } from "react";

import { RatingRadioButton } from "../components/ratingRadioButton";

export const RatingComponent = ({
  rate,
}: {
  rate: (score: number) => void;
}) => {
  const [rating, setRating] = useState(0);

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    rate(rating);
  };

  return (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#273039] p-2">
        <img src="/icon-star.svg" alt="star icon" />
      </div>
      <h1 className="my-5 text-2xl font-bold tracking-wide text-white">
        How did we do?
      </h1>
      <p className="mb-8 text-sm text-[#959eac]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form action="#">
        <ul className="my-6 flex flex-row place-content-between">
          <li>
            <RatingRadioButton
              score={1}
              isChecked={rating == 1}
              handleFunction={() => setRating(1)}
            />
          </li>
          <li>
            <RatingRadioButton
              score={2}
              isChecked={rating == 2}
              handleFunction={() => setRating(2)}
            />
          </li>
          <li>
            <RatingRadioButton
              score={3}
              isChecked={rating == 3}
              handleFunction={() => setRating(3)}
            />
          </li>
          <li>
            <RatingRadioButton
              score={4}
              isChecked={rating == 4}
              handleFunction={() => setRating(4)}
            />
          </li>
          <li>
            <RatingRadioButton
              score={5}
              isChecked={rating == 5}
              handleFunction={() => setRating(5)}
            />
          </li>
        </ul>
        <button
          type="submit"
          onClick={(e) => handleForm(e)}
          className="submit-button"
        >
          submit
        </button>
      </form>
    </>
  );
};
