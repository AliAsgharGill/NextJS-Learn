import { notFound } from "next/navigation";
import React from "react";

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

const Reviews = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const random = getRandomInt(2);
  if (random === 1) {
    // notFound();
    throw new Error("Error loading review");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Details about Product {params.productId} and reviews of it{" "}
        {params.reviewId}
      </h1>
    </div>
  );
};

export default Reviews;
