import Header from "@/components/Header/Header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="pl-10  md:pl-40">{children}</div>
    </div>
  );
};

export default MainLayout;
