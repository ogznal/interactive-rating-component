import React from "react";

export const RatingRadioButton = ({
  score,
  isChecked,
  handleFunction,
}: {
  score: number;
  isChecked: boolean;
  handleFunction: (score: number) => void;
}) => {
  return (
    <>
      <input
        type="radio"
        name="rating"
        id={`rating-${score}`}
        checked={isChecked}
        onClick={() => handleFunction(score)}
        className="peer hidden"
        readOnly
      />
      <label
        htmlFor={`rating-${score}`}
        className="block h-10 w-10 cursor-pointer rounded-full bg-[#262f38] pt-2 text-center text-[#959eac] hover:bg-[#f7781b] hover:text-white peer-checked:bg-[#7c8898] peer-checked:text-white"
      >
        {score}
      </label>
    </>
  );
};
