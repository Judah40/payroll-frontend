'use client'

import React, { useState } from "react";
import { 
  Calendar, Clock, CheckCircle, XCircle, 
  AlertCircle, Timer, BarChart2, Calendar as CalendarIcon 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Attendance = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));
  const [selectedView, setSelectedView] = useState('calendar'); // 'calendar' or 'list'

  // Mock employee attendance data
  const attendanceStats = {
    present: 18,
    absent: 2,
    late: 3,
    earlyLeave: 1,
    workingHours: "144h 30m",
    overtime: "12h 45m"
  };

  const attendanceRecords = [
    {
      date: "2024-12-28",
      checkIn: "08:55 AM",
      checkOut: "05:30 PM",
      status: "Present",
      workingHours: "8h 35m",
      overtime: "0h 30m",
      notes: ""
    },
    {
      date: "2024-12-27",
      checkIn: "09:10 AM",
      checkOut: "05:15 PM",
      status: "Late",
      workingHours: "8h 05m",
      overtime: "0h 15m",
      notes: "Traffic delay"
    },
    {
      date: "2024-12-26",
      checkIn: "08:45 AM",
      checkOut: "04:30 PM",
      status: "Early Leave",
      workingHours: "7h 45m",
      overtime: "0h",
      notes: "Doctor's appointment"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present':
        return 'bg-green-100 text-green-800';
      case 'Absent':
        return 'bg-red-100 text-red-800';
      case 'Late':
        return 'bg-yellow-100 text-yellow-800';
      case 'Early Leave':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="lg:ml-64 p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Attendance</h1>
        <p className="text-gray-600 mt-1">Track your attendance and time records</p>
      </div>

      {/* Today's Status */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              <Clock className="h-12 w-12 text-blue-500" />
              <div>
                <h2 className="text-lg font-semibold">Today's Status</h2>
                <p className="text-sm text-gray-600">December 28, 2024</p>
              </div>
            </div>
            <div className="flex gap-8 mt-4 md:mt-0">
              <div>
                <p className="text-sm text-gray-600">Check In</p>
                <p className="font-semibold">08:55 AM</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Check Out</p>
                <p className="font-semibold">--:-- PM</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Working Hours</p>
                <p className="font-semibold">4h 25m</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
              <p className="text-sm text-gray-600">Present</p>
              <p className="text-xl font-bold">{attendanceStats.present}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <XCircle className="h-8 w-8 text-red-500 mb-2" />
              <p className="text-sm text-gray-600">Absent</p>
              <p className="text-xl font-bold">{attendanceStats.absent}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <AlertCircle className="h-8 w-8 text-yellow-500 mb-2" />
              <p className="text-sm text-gray-600">Late</p>
              <p className="text-xl font-bold">{attendanceStats.late}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <Timer className="h-8 w-8 text-orange-500 mb-2" />
              <p className="text-sm text-gray-600">Early Leave</p>
              <p className="text-xl font-bold">{attendanceStats.earlyLeave}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-blue-500 mb-2" />
              <p className="text-sm text-gray-600">Working Hours</p>
              <p className="text-xl font-bold">{attendanceStats.workingHours}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <BarChart2 className="h-8 w-8 text-purple-500 mb-2" />
              <p className="text-sm text-gray-600">Overtime</p>
              <p className="text-xl font-bold">{attendanceStats.overtime}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Records */}
      <Card>
        <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
          <CardTitle>Attendance Records</CardTitle>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Month:</label>
              <input
                type="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="border rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500"
              />
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
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Check In</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Check Out</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Status</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">Working Hours</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">Overtime</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {attendanceRecords.map((record, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-gray-900">{record.date}</td>
                    <td className="px-4 py-4 text-gray-600">{record.checkIn}</td>
                    <td className="px-4 py-4 text-gray-600">{record.checkOut}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex justify-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right text-gray-600">{record.workingHours}</td>
                    <td className="px-4 py-4 text-right text-gray-600">{record.overtime}</td>
                    <td className="px-4 py-4 text-gray-600">{record.notes}</td>
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

export default Attendance;