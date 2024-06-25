"use client";
import React from "react";

const ProductDetails = (params: { params: { productId: string } }) => {
  return (
    <>
      <h1>Details about product {params.params.productId} </h1>
    </>
  );
};

export default ProductDetails;
