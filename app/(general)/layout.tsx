import { Navbar } from "@/components";
import React from "react";

interface Props {
  children: React.ReactNode
}

export default function GeneralLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hello Root and MetaData</span>
        {children}
      </main>
    </>
  );
}