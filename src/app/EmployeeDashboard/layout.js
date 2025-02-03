import Sidebar from "@/components/DashboardSideBar";
import EmployeeSidebar from "@/components/EmployeeSidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <EmployeeSidebar />
      {children}
    </div>
  );
};

export default layout;
