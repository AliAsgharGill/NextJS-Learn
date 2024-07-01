import { metadata } from "./metadata";
import RootLayout from "./Rootlayout";

export { metadata };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}