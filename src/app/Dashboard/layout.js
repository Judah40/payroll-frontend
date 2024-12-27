import Sidebar from "@/components/DashboardSideBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
