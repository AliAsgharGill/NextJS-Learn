import StreamingProduct from "@/components/streamingProduct/page";
import StreamingReviews from "@/components/streamingReviews/page";
import { Suspense } from "react";

export default function ProductDetailsStreaming() {
  return (
    <>
      <h1>Product Details Streaming Page</h1>
      <Suspense fallback={<h1>Product Loading...</h1>}>
        <StreamingProduct />
      </Suspense>
      <Suspense fallback={<h1>Reviews Loading...</h1>}>
        <StreamingReviews />
      </Suspense>
    </>
  );
}
