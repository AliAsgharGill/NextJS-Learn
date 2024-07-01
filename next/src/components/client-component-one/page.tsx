"use client";
import React, { ReactNode, useState } from "react";

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("Batman");
  return (
    <>
      <h1>Client Component One</h1>
      {children}
      {/* <ClientComponentTwo /> */}
    </>
  );
};

export default ClientComponentOne;
