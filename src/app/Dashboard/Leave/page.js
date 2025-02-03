'use client'

import React from "react";
import { Users, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data - replace with real data in production
const leaveTrendData = [
  { month: "Jan", approved: 10, rejected: 2 },
  { month: "Feb", approved: 15, rejected: 1 },
  { month: "Mar", approved: 12, rejected: 3 },
  { month: "Apr", approved: 18, rejected: 0 },
  { month: "May", approved: 20, rejected: 4 },
  { month: "Jun", approved: 16, rejected: 2 },
];

const recentLeaveRequests = [
  {
    name: "John Doe",
    type: "Annual Leave",
    status: "Approved",
    date: "2024-12-01",
  },
  {
    name: "Jane Smith",
    type: "Sick Leave",
    status: "Pending",
    date: "2024-12-03",
  },
  {
    name: "Chris Johnson",
    type: "Casual Leave",
    status: "Rejected",
    date: "2024-11-30",
  },
];

const Leave = () => {
  return (
    <div className="p-6 lg:ml-64 min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Leave Management</h1>
        <p className="text-gray-600">
          Monitor and manage employee leave requests
        </p>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Leave Requests
            </CardTitle>
            <Calendar className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-gray-600">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Approved Leaves
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-green-600">+5 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Pending Approvals
            </CardTitle>
            <Clock className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-600">Requires attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Rejected Leaves
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-red-600">-1 from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Leave Trend</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={leaveTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="approved"
                stroke="#10b981"
                strokeWidth={2}
                name="Approved"
              />
              <Line
                type="monotone"
                dataKey="rejected"
                stroke="#ef4444"
                strokeWidth={2}
                name="Rejected"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Leave Requests */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Leave Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentLeaveRequests.map((request, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {request.name}
                  </p>
                  <p className="text-xs text-gray-600">{request.type}</p>
                </div>
                <div className="text-sm font-medium">
                  <span
                    className={`${
                      request.status === "Approved"
                        ? "text-green-600"
                        : request.status === "Pending"
                        ? "text-amber-600"
                        : "text-red-600"
                    }`}
                  >
                    {request.status}
                  </span>
                  <p className="text-xs text-gray-500">{request.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leave;
