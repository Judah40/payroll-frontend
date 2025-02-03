"use client";
import React, { useState } from "react";
import { Search, Download, Filter, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const attendanceData = [
    {
      id: 1,
      name: "John Doe",
      timeIn: "08:00 AM",
      timeOut: "05:00 PM",
      status: "Present",
      department: "IT",
    },
    {
      id: 2,
      name: "Jane Smith",
      timeIn: "08:30 AM",
      timeOut: "05:30 PM",
      status: "Present",
      department: "HR",
    },
    {
      id: 3,
      name: "Mike Johnson",
      timeIn: "09:00 AM",
      timeOut: "04:00 PM",
      status: "Early Leave",
      department: "Marketing",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      timeIn: "--:--",
      timeOut: "--:--",
      status: "Absent",
      department: "Finance",
    },
  ];

  return (
    <div className="p-6 lg:ml-64 transition-all duration-300">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Time & Attendance</h1>
        <p className="text-gray-500 mt-1">
          Monitor and manage employee attendance records
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="text-gray-500 text-sm font-medium">Present Today</div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-2xl font-bold text-green-600">24</div>
            <div className="text-xs text-gray-500">80%</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="text-gray-500 text-sm font-medium">Absent</div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-2xl font-bold text-red-600">4</div>
            <div className="text-xs text-gray-500">13.33%</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="text-gray-500 text-sm font-medium">Late Arrivals</div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <div className="text-xs text-gray-500">6.67%</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="text-gray-500 text-sm font-medium">
            Early Departures
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-2xl font-bold text-orange-600">1</div>
            <div className="text-xs text-gray-500">3.33%</div>
          </div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search employees..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="date"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            value={selectedDate.toISOString().split("T")[0]}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
          />
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Out
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceData.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">
                      {employee.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {employee.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {employee.timeIn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {employee.timeOut}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={cn(
                        "px-2 py-1 text-xs font-medium rounded-full",
                        {
                          "bg-green-100 text-green-800":
                            employee.status === "Present",
                          "bg-red-100 text-red-800":
                            employee.status === "Absent",
                          "bg-orange-100 text-orange-800":
                            employee.status === "Early Leave",
                        }
                      )}
                    >
                      {employee.status}
                    </span>
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

export default Attendance;
