import React from "react";

export const ResultComponent = ({ rating }: { rating: number }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src="/illustration-thank-you.svg"
          alt="thank you image"
          className="mb-8"
        />
        <p className="mb-4 rounded-full bg-[#282f37] px-4 pt-2 pb-1 text-sm text-[#fb7715]">
          You selected {rating} ouf of 5
        </p>
        <h1 className="my-3 text-2xl font-bold tracking-wide text-white">
          Thank you!
        </h1>
        <p className="mb-1 text-center text-sm text-[#959eac]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&apos;t hesitate to get in touch!
        </p>
      </div>
    </>
  );
};
