"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "register", href: "/register" },
  { name: "ForgotPassword", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <div className="flex justify-center items-center gap-5 p-5">
        <div>
          <input
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-2 text-black "
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
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
    </>
  );
}
