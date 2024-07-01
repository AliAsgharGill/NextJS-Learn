import React from "react";

const StreamingProduct = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return (
    <div>
      <h1>Streaming Product</h1>
    </div>
  );
};

export default StreamingProduct;
