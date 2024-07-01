import React from "react";

const StreamingReviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <h2>Streaming Reviews</h2>
    </div>
  );
};

export default StreamingReviews;
