'use client'

import React, { useState } from "react";
import {
  Download,
  Calendar,
  FileText,
  Filter,
  Search,
  DollarSign,
  Clock,
  BarChart,
  Printer,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Payroll = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for the employee
  const employeeData = {
    name: "John Doe",
    employeeId: "EMP001",
    department: "Engineering",
    designation: "Senior Developer",
    joinDate: "2022-03-15",
  };

  const payrollHistory = [
    {
      id: 1,
      month: "December 2024",
      basicSalary: 2000,
      overtime: 200,
      bonus: 300,
      deductions: 150,
      netAmount: 2350,
      paymentDate: "2024-12-30",
      paymentStatus: "Processing",
    },
    {
      id: 2,
      month: "November 2024",
      basicSalary: 2000,
      overtime: 150,
      bonus: 0,
      deductions: 150,
      netAmount: 2000,
      paymentDate: "2024-11-30",
      paymentStatus: "Paid",
    },
    {
      id: 3,
      month: "October 2024",
      basicSalary: 2000,
      overtime: 180,
      bonus: 200,
      deductions: 150,
      netAmount: 2230,
      paymentDate: "2024-10-30",
      paymentStatus: "Paid",
    },
  ];

  const yearlyStats = {
    totalEarnings: "$26,580",
    averageMonthly: "$2,215",
    totalOvertime: "52 hours",
    totalDeductions: "$1,800",
  };

  return (
    <div className="lg:ml-64 p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Payroll</h1>
        <p className="text-gray-600 mt-1">
          View and download your payroll information
        </p>
      </div>

      {/* Employee Info Card */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600">Employee Name</p>
              <p className="font-medium">{employeeData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Employee ID</p>
              <p className="font-medium">{employeeData.employeeId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Department</p>
              <p className="font-medium">{employeeData.department}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Designation</p>
              <p className="font-medium">{employeeData.designation}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Year Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Earnings
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {yearlyStats.totalEarnings}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Monthly Average
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {yearlyStats.averageMonthly}
                </p>
              </div>
              <BarChart className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Overtime
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {yearlyStats.totalOvertime}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Deductions
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {yearlyStats.totalDeductions}
                </p>
              </div>
              <FileText className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by month..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>

      {/* Payroll History */}
      <Card>
        <CardHeader>
          <CardTitle>Payroll History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Month
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">
                    Basic
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">
                    Overtime
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">
                    Bonus
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">
                    Net Amount
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {payrollHistory.map((payroll) => (
                  <tr key={payroll.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-gray-900">{payroll.month}</td>
                    <td className="px-4 py-4 text-right text-gray-600">
                      ${payroll.basicSalary}
                    </td>
                    <td className="px-4 py-4 text-right text-gray-600">
                      ${payroll.overtime}
                    </td>
                    <td className="px-4 py-4 text-right text-gray-600">
                      ${payroll.bonus}
                    </td>
                    <td className="px-4 py-4 text-right font-medium text-gray-900">
                      ${payroll.netAmount}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex justify-center px-3 py-1 rounded-full text-xs font-medium ${
                          payroll.paymentStatus === "Paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {payroll.paymentStatus}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex justify-center gap-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <Printer className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payroll;
