"use client";

import { Header } from "@/components/Header";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import MainLayoutPage from "./layout";

const MainLayout = ({Component, pageProps}: any) => {
  const pathname = usePathname();
  return (
    <>
      
    </>
  );
};
export default MainLayout;
