// RootLayout.tsx
"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/Footer/footer";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Login", href: "/login" },
  { name: "register", href: "/register" },  
  { name: "Dashboard", href: "/dashboard" },
  { name: "Profile", href: "/profile" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center gap-5 p-5">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link href={link.href} key={link.name} className={isActive ? "font-bold text-blue-400 " : ""} > 
                {link.name}
              </Link>
            );
          })}
        </div>
          {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
