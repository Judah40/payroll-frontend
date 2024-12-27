'use client';

import React, { useState } from 'react';
import {
  Calendar,
  DollarSign,
  Download,
  FileText,
  Filter,
  Search,
  User,
  Clock,
  PieChart,
  AlertCircle
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample data
const payrollData = [
  {
    id: 1,
    employeeName: "John Doe",
    employeeId: "EMP001",
    salary: 5000,
    bonus: 500,
    deductions: 750,
    netPay: 4750,
    status: "Paid",
    date: "2024-01-15"
  },
  {
    id: 2,
    employeeName: "Jane Smith",
    employeeId: "EMP002",
    salary: 4500,
    bonus: 300,
    deductions: 600,
    netPay: 4200,
    status: "Pending",
    date: "2024-01-15"
  },
  // Add more sample data as needed
];

const Payroll = () => {
  const [selectedMonth, setSelectedMonth] = useState("january");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6 lg:ml-64 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Payroll Management</h1>
        <p className="text-gray-600">Process and manage employee payroll</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Payroll
            </CardTitle>
            <DollarSign className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,250</div>
            <p className="text-xs text-green-600">+2.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Employees
            </CardTitle>
            <User className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-gray-600">Active employees</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Pending Payrolls
            </CardTitle>
            <Clock className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-amber-600">Need processing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Tax Deductions
            </CardTitle>
            <FileText className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,750</div>
            <p className="text-xs text-gray-600">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search employee..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="january">January 2024</SelectItem>
                  <SelectItem value="february">February 2024</SelectItem>
                  <SelectItem value="march">March 2024</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payroll Table */}
      <Card>
        <CardHeader>
          <CardTitle>Payroll Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Salary</TableHead>
                <TableHead>Bonus</TableHead>
                <TableHead>Deductions</TableHead>
                <TableHead>Net Pay</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payrollData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{item.employeeName}</div>
                      <div className="text-sm text-gray-500">{item.employeeId}</div>
                    </div>
                  </TableCell>
                  <TableCell>${item.salary.toLocaleString()}</TableCell>
                  <TableCell>${item.bonus.toLocaleString()}</TableCell>
                  <TableCell>${item.deductions.toLocaleString()}</TableCell>
                  <TableCell className="font-medium">${item.netPay.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === 'Paid' ? 'success' : 'warning'}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-2 justify-end">
        <Button variant="outline">
          Save Draft
        </Button>
        <Button>
          Process Payroll
        </Button>
      </div>
    </div>
  );
};

export default Payroll;