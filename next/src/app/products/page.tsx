import Link from "next/link";
import React from "react";

const Products = () => {
  const productId = 100;
  return (
    <div>
      <h1>This is products list page</h1>

      <h1>
        <Link href="/products/1"> Product 1 </Link>
      </h1>

      <h1>
        <Link href="/products/2"> Product 2 </Link>
      </h1>

      <h1>
        <Link href="/products/3" replace>
          {" "}
          Product 3{" "}
        </Link>
      </h1>

      <h1>
        <Link href={`/products/${productId}`}> Product {productId} </Link>
      </h1>
    </div>
  );
};

export default Products;
