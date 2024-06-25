import React from "react";

const Reviews = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
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
