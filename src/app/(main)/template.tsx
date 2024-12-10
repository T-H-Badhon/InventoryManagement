
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="sticky top-0 z-40">
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
