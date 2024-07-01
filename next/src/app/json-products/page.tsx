import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};
const ProductsPage = async () => {
  // The following request will be cached
  const singleProductDetails = await fetch("http://localhost:3001/products/1");
  const productDetails = await singleProductDetails.json();

  // The following request will not get cached
  const response = await fetch("http://localhost:3001/products", {
    next: { revalidate: 10 }, // 10 seconds
    cache: "no-store",
  });
  const products = await response.json();
  return (
    <>
      <div className="flex justify-around">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className=" flex flex-col justify-center items-center p-4 rounded space-y-2 w-32 bg-slate-300 text-black font-bold "
          >
            <h1>{product.title}</h1>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
