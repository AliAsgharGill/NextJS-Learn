import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-gray-300 text-white font-bold rounded-md p-5 m-2.5 flex justify-center items-center shadow-red-400 shadow-md ">
      {children}
    </div>
  );
};

export default Card;
        