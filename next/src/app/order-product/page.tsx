"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order Placed");
    alert("Order Placed");
    router.push("/");
  };

  return (
    <>
      <h1>This is OrderProduct Page</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
