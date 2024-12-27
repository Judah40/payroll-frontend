'use client';

import React, { useState } from 'react';
import {
  Search,
  Plus,
  MoreVertical,
  Filter,
  Download,
  Mail,
  Phone,
  Building,
  UserPlus,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import AddEmployeeModal from '@/components/AddEmployeeModal';

const Employee = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  // Sample employee data
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      phone: '+1 (555) 123-4567',
      department: 'Engineering',
      position: 'Senior Developer',
      status: 'Active',
      joinDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      phone: '+1 (555) 234-5678',
      department: 'Marketing',
      position: 'Marketing Manager',
      status: 'Active',
      joinDate: '2023-03-20',
    },
    // Add more sample employees as needed
  ];

  const departments = ['All', 'Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

  return (
    <div className="p-6 lg:ml-64 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Employees</h1>
          <p className="text-gray-600">Manage your company employees</p>
        </div>
        <AddEmployeeModal />

      </div>

      {/* Filters and Search */}
      <Card className="p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search employees..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  {selectedDepartment}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {departments.map((dept) => (
                  <DropdownMenuItem 
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                  >
                    {dept}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Employee Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-600">Employee</th>
                <th className="text-left p-4 font-medium text-gray-600">Contact</th>
                <th className="text-left p-4 font-medium text-gray-600">Department</th>
                <th className="text-left p-4 font-medium text-gray-600">Status</th>
                <th className="text-left p-4 font-medium text-gray-600">Join Date</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <div>
                      <div className="font-medium">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.position}</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-gray-400" />
                        {employee.email}
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        {employee.phone}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-gray-400" />
                      {employee.department}
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant={employee.status === 'Active' ? 'success' : 'secondary'}>
                      {employee.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-gray-600">
                    {new Date(employee.joinDate).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t">
          <div className="text-sm text-gray-500">
            Showing 1 to 10 of 20 entries
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Employee 