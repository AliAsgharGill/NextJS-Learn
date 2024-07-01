import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-5 p-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/signup"}>Signup</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/dashboard/line-chart"}>Line Chart</Link>
        <Link href={"/dashboard/bar-chart"}>Bar Chart</Link>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Header;
