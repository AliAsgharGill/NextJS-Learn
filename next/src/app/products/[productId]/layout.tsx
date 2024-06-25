import FeatureProducts from "@/components/Feature/feature";

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <FeatureProducts />
    </>
  );
}
