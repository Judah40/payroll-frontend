'use client'

import React, { useState } from "react";
import { 
  Calendar, 
  Clock, 
  Plus,
  Calendar as CalendarIcon,
  BarChart2,
  Briefcase,
  Timer,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Leave = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
  const [selectedView, setSelectedView] = useState('list'); // 'list' or 'calendar'

  // Mock leave data
  const leaveStats = {
    totalLeave: 24,
    used: 12,
    remaining: 12,
    pending: 2,
    approved: 10,
    rejected: 1
  };

  const leaveTypes = [
    { type: "Annual Leave", balance: 15, used: 8 },
    { type: "Sick Leave", balance: 10, used: 4 },
    { type: "Personal Leave", balance: 5, used: 0 }
  ];

  const leaveHistory = [
    {
      id: 1,
      type: "Annual Leave",
      startDate: "2024-12-30",
      endDate: "2025-01-02",
      days: 4,
      status: "Pending",
      reason: "Year-end vacation"
    },
    {
      id: 2,
      type: "Sick Leave",
      startDate: "2024-12-15",
      endDate: "2024-12-15",
      days: 1,
      status: "Approved",
      reason: "Medical appointment"
    }
  ];

  const [newLeave, setNewLeave] = useState({
    type: "Annual Leave",
    startDate: "",
    endDate: "",
    reason: ""
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="lg:ml-64 p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Leave</h1>
        <p className="text-gray-600 mt-1">Manage your leave requests and balances</p>
      </div>

      {/* Quick Actions */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              <Briefcase className="h-12 w-12 text-blue-500" />
              <div>
                <h2 className="text-lg font-semibold">Leave Balance</h2>
                <p className="text-sm text-gray-600">{leaveStats.remaining} days remaining</p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Request Leave
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Request Leave</DialogTitle>
                  <DialogDescription>Submit your leave request for approval.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm">Type</label>
                    <select 
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                      value={newLeave.type}
                      onChange={(e) => setNewLeave({...newLeave, type: e.target.value})}
                    >
                      {leaveTypes.map(lt => (
                        <option key={lt.type} value={lt.type}>{lt.type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm">Start Date</label>
                    <input
                      type="date"
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                      value={newLeave.startDate}
                      onChange={(e) => setNewLeave({...newLeave, startDate: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm">End Date</label>
                    <input
                      type="date"
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                      value={newLeave.endDate}
                      onChange={(e) => setNewLeave({...newLeave, endDate: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label className="text-right text-sm">Reason</label>
                    <textarea
                      className="col-span-3 flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2"
                      value={newLeave.reason}
                      onChange={(e) => setNewLeave({...newLeave, reason: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <DialogTrigger asChild>
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                      Cancel
                    </button>
                  </DialogTrigger>
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={() => {
                      // Handle submit logic here
                      console.log('Submitting leave request:', newLeave);
                    }}
                  >
                    Submit Request
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Leave Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <Briefcase className="h-8 w-8 text-blue-500 mb-2" />
              <p className="text-sm text-gray-600">Total Leave</p>
              <p className="text-xl font-bold">{leaveStats.totalLeave}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <Timer className="h-8 w-8 text-orange-500 mb-2" />
              <p className="text-sm text-gray-600">Used</p>
              <p className="text-xl font-bold">{leaveStats.used}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <Calendar className="h-8 w-8 text-green-500 mb-2" />
              <p className="text-sm text-gray-600">Remaining</p>
              <p className="text-xl font-bold">{leaveStats.remaining}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <AlertCircle className="h-8 w-8 text-yellow-500 mb-2" />
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-xl font-bold">{leaveStats.pending}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
              <p className="text-sm text-gray-600">Approved</p>
              <p className="text-xl font-bold">{leaveStats.approved}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <XCircle className="h-8 w-8 text-red-500 mb-2" />
              <p className="text-sm text-gray-600">Rejected</p>
              <p className="text-xl font-bold">{leaveStats.rejected}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leave Types */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Leave Types & Balances</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {leaveTypes.map((leave, index) => (
              <div key={index} className="p-4 rounded-lg border bg-white">
                <h3 className="font-semibold text-gray-900">{leave.type}</h3>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-gray-600">Balance: {leave.balance}</span>
                  <span className="text-gray-600">Used: {leave.used}</span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-500 rounded-full"
                    style={{ width: `${(leave.used / leave.balance) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leave History */}
      <Card>
        <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
          <CardTitle>Leave History</CardTitle>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Year:</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedView('calendar')}
                className={`p-2 rounded-lg ${selectedView === 'calendar' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                <CalendarIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setSelectedView('list')}
                className={`p-2 rounded-lg ${selectedView === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                <BarChart2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Start Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">End Date</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Days</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Reason</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaveHistory.map((leave) => (
                  <tr key={leave.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-gray-900">{leave.type}</td>
                    <td className="px-4 py-4 text-gray-600">{leave.startDate}</td>
                    <td className="px-4 py-4 text-gray-600">{leave.endDate}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{leave.days}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex justify-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(leave.status)}`}>
                        {leave.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-600">{leave.reason}</td>
                    <td className="px-4 py-4 text-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="text-blue-600 hover:text-blue-800 text-sm">
                            View Details
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Leave Request Details</DialogTitle>
                          </DialogHeader>
                          <div className="py-4">
                            <div className="space-y-4">
                              <div>
                                <label className="text-sm font-medium text-gray-500">Type</label>
                                <p className="mt-1">{leave.type}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Duration</label>
                                <p className="mt-1">{leave.startDate} to {leave.endDate} ({leave.days} days)</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Status</label>
                                <p className="mt-1">
                                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(leave.status)}`}>
                                    {leave.status}
                                  </span>
                                </p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Reason</label>
                                <p className="mt-1">{leave.reason}</p>
                              </div>
                              {leave.status === 'Pending' && (
                                <div className="pt-4 flex justify-end gap-3">
                                  <DialogTrigger asChild>
                                    <button 
                                      className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50"
                                      onClick={() => {
                                        // Handle cancel request logic
                                        console.log('Cancelling leave request:', leave.id);
                                      }}
                                    >
                                      Cancel Request
                                    </button>
                                  </DialogTrigger>
                                </div>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
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

export default Leave;