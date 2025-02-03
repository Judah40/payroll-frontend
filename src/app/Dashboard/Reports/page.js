"use client";
import React, { useState } from "react";
import {
  Download,
  Filter,
  Calendar,
  FileText,
  Users,
  DollarSign,
  Clock,
  Mail,
  Printer,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState("payroll");
  const [dateRange, setDateRange] = useState("month");

  const reportTypes = [
    { id: "payroll", label: "Payroll Reports", icon: DollarSign },
    { id: "attendance", label: "Attendance Reports", icon: Clock },
    { id: "employee", label: "Employee Reports", icon: Users },
    { id: "tax", label: "Tax Reports", icon: FileText },
  ];

  const reports = {
    payroll: [
      {
        id: 1,
        name: "Monthly Payroll Summary",
        date: "2024-03",
        status: "Generated",
        size: "2.4 MB",
      },
      {
        id: 2,
        name: "Quarterly Tax Withholdings",
        date: "Q1 2024",
        status: "Generated",
        size: "4.1 MB",
      },
      {
        id: 3,
        name: "Annual Compensation Report",
        date: "2024",
        status: "Pending",
        size: "--",
      },
    ],
    attendance: [
      {
        id: 4,
        name: "Monthly Attendance Summary",
        date: "2024-03",
        status: "Generated",
        size: "1.8 MB",
      },
      {
        id: 5,
        name: "Leave Balance Report",
        date: "2024-03",
        status: "Generated",
        size: "1.2 MB",
      },
      {
        id: 6,
        name: "Overtime Analysis",
        date: "2024-03",
        status: "Generated",
        size: "956 KB",
      },
    ],
    employee: [
      {
        id: 7,
        name: "Employee Directory",
        date: "2024-03",
        status: "Generated",
        size: "3.2 MB",
      },
      {
        id: 8,
        name: "Department Headcount",
        date: "2024-03",
        status: "Generated",
        size: "1.5 MB",
      },
      {
        id: 9,
        name: "New Hires Report",
        date: "2024-03",
        status: "Generated",
        size: "845 KB",
      },
    ],
    tax: [
      {
        id: 10,
        name: "W-2 Forms",
        date: "2024",
        status: "Generated",
        size: "5.6 MB",
      },
      {
        id: 11,
        name: "1099 Forms",
        date: "2024",
        status: "Generated",
        size: "2.8 MB",
      },
      {
        id: 12,
        name: "Tax Liability Summary",
        date: "Q1 2024",
        status: "Generated",
        size: "1.7 MB",
      },
    ],
  };

  return (
    <div className="p-6 lg:ml-64 transition-all duration-300">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
        <p className="text-gray-500 mt-1">Generate and manage system reports</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow border hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <button className="text-blue-600 hover:text-blue-800">
              <Download className="h-4 w-4" />
            </button>
          </div>
          <h3 className="font-medium">Payroll Summary</h3>
          <p className="text-sm text-gray-500 mt-1">Monthly Report</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <button className="text-blue-600 hover:text-blue-800">
              <Download className="h-4 w-4" />
            </button>
          </div>
          <h3 className="font-medium">Employee Directory</h3>
          <p className="text-sm text-gray-500 mt-1">Complete List</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <button className="text-blue-600 hover:text-blue-800">
              <Download className="h-4 w-4" />
            </button>
          </div>
          <h3 className="font-medium">Attendance Log</h3>
          <p className="text-sm text-gray-500 mt-1">Monthly Report</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-orange-600" />
            </div>
            <button className="text-blue-600 hover:text-blue-800">
              <Download className="h-4 w-4" />
            </button>
          </div>
          <h3 className="font-medium">Tax Summary</h3>
          <p className="text-sm text-gray-500 mt-1">Quarterly Report</p>
        </div>
      </div>

      {/* Report Controls */}
      <div className="bg-white rounded-lg shadow border p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Generate Reports</h2>
            <p className="text-sm text-gray-500">
              Select report type and date range
            </p>
          </div>
          <div className="flex gap-3">
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
              <option value="custom">Custom Range</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <FileText className="h-4 w-4" />
              Generate Report
            </button>
          </div>
        </div>

        {/* Report Type Selection */}
        <div className="flex flex-wrap gap-2">
          {reportTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedReport(type.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                selectedReport === type.id
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              <type.icon className="h-4 w-4" />
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports[selectedReport].map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">
                      {report.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {report.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={cn(
                        "px-2 py-1 text-xs font-medium rounded-full",
                        report.status === "Generated"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      )}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {report.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Printer className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
