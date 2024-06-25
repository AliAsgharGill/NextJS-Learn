import React from "react";

const Reviews = (params: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      <h1>
        Details about Product {params.params.productId} and reviews of it{" "}
        {params.params.reviewId}{" "}
      </h1>
    </div>
  );
};

export default Reviews;
