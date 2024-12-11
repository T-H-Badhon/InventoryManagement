import Header from "@/components/Header/Header";
import React from "react";
import { Toaster } from "sonner";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="pl-10  md:pl-40">{children}</div>
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default MainLayout;
