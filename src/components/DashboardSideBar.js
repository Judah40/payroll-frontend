'use client'
import React, { useState } from 'react';
import {
  Users,
  Calendar,
  DollarSign,
  FileText,
  Settings,
  ChevronLeft,
  Menu,
  Clock,
  PieChart,
  FileSearch,
  Building
} from 'lucide-react';
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { icon: PieChart, label: 'Dashboard', href: '/Dashboard/Home' },
    { icon: Users, label: 'Employees', href: '/Dashboard/Employee' },
    { icon: DollarSign, label: 'Payroll', href: '/Dashboard/Payroll' },
    { icon: Clock, label: 'Time & Attendance', href: '/attendance' },
    { icon: Calendar, label: 'Leave Management', href: '/leave' },
    { icon: FileText, label: 'Tax Forms', href: '/tax-forms' },
    { icon: FileSearch, label: 'Reports', href: '/reports' },
    { icon: Building, label: 'Departments', href: '/departments' },
    { icon: Settings, label: 'Settings', href: '/settings' }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 p-2 rounded-lg bg-white shadow-md lg:hidden z-50"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-white border-r shadow-lg transition-all duration-300 z-50",
          isExpanded ? "w-64" : "w-20",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <h1 className={cn(
            "font-bold transition-all duration-300 overflow-hidden whitespace-nowrap",
            isExpanded ? "text-xl" : "w-0"
          )}>
            PayrollPro
          </h1>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg hover:bg-gray-100 hidden lg:block"
          >
            <ChevronLeft className={cn(
              "h-5 w-5 transition-transform duration-300",
              !isExpanded && "rotate-180"
            )} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center px-3 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span className={cn(
                "ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap",
                isExpanded ? "opacity-100" : "w-0 opacity-0"
              )}>
                {item.label}
              </span>
              
              {/* Tooltip for collapsed state */}
              {!isExpanded && (
                <div className="absolute left-20 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label}
                </div>
              )}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-4 border-t",
          isExpanded ? "text-sm" : "text-xs text-center"
        )}>
          <p className={cn(
            "text-gray-500 transition-all duration-300 overflow-hidden whitespace-nowrap",
            isExpanded ? "opacity-100" : "opacity-0"
          )}>
            © 2024 PayrollPro
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;