"use client";
import React from "react";
import Navbar from "@/app/components/navbar/page";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname?.includes("/auth");

  return (
    <body className="antialiased">
      {!isAuthPage && <Navbar />}
      {children}
    </body>
  );
}
