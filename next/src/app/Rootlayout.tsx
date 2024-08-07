"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/themeProvider/page";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Login", href: "/login" },
  { name: "register", href: "/register" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Complex Dashboard", href: "/complex-dashboard" },
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
      <ThemeProvider>
        <body className={inter.className}>
          <div className="flex justify-center items-center gap-5 p-5">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={isActive ? "font-bold text-blue-400 " : ""}
                >
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
      </ThemeProvider>
    </html>
  );
}
