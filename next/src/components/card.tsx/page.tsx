import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ children, className = "" }: Props) => {
  return (
    <div className={`border border-gray-300 text-white font-bold rounded-md p-5 m-2.5 flex justify-center items-center shadow-white shadow-md ${className} `}>
      {children}
    </div>
  );
};

export default Card;
