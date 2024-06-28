"use client";
export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <>
      <h1>Getting Following Error In ReviewId</h1>
      <h1>{error.message}</h1>
      {/* erorr.message come from  page.tsx that we throw */}
    </>
  );
}
