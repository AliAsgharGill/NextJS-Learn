import FeatureProducts from "@/components/Feature/feature";

// function getRandomInt(count: number): number {
//   return Math.floor(Math.random() * count);
// }
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // for generating error
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading product");
  // }

  return (
    <>
      {children}
      <FeatureProducts />
    </>
  );
}
