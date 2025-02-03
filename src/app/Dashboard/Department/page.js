"use client";
import React, { useState } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Users,
  Building,
  MoreVertical,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Department = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample department data
  const departments = [
    {
      id: 1,
      name: "Information Technology",
      head: "John Doe",
      employees: 15,
      location: "Main Office",
      budget: "$150,000",
      status: "Active",
    },
    {
      id: 2,
      name: "Human Resources",
      head: "Jane Smith",
      employees: 8,
      location: "Main Office",
      budget: "$80,000",
      status: "Active",
    },
    {
      id: 3,
      name: "Marketing",
      head: "Mike Johnson",
      employees: 12,
      location: "Branch Office",
      budget: "$120,000",
      status: "Active",
    },
    {
      id: 4,
      name: "Finance",
      head: "Sarah Wilson",
      employees: 10,
      location: "Main Office",
      budget: "$100,000",
      status: "Active",
    },
  ];

  // Add Department Modal
  const AddDepartmentModal = () => (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center ${
        showAddModal ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Department</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="Enter department name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department Head
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200">
                <option value="">Select department head</option>
                <option value="1">John Doe</option>
                <option value="2">Jane Smith</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="Enter location"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="Enter budget"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                rows={3}
                placeholder="Enter department description"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={() => setShowAddModal(false)}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              Add Department
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 lg:ml-64 transition-all duration-300">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Departments</h1>
        <p className="text-gray-500 mt-1">
          Manage company departments and their details
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="text-gray-500 text-sm font-medium">
            Total Departments
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-2xl font-bold">4</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="text-gray-500 text-sm font-medium">
            Total Employees
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-2xl font-bold">45</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="text-gray-500 text-sm font-medium">Total Budget</div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-2xl font-bold">$450,000</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="text-gray-500 text-sm font-medium">
            Active Departments
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-2xl font-bold">4</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search departments..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200 transition-colors">
            <Download className="h-4 w-4" />
            Export
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Department
          </button>
        </div>
      </div>

      {/* Departments Table */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Head
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employees
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {departments.map((dept) => (
                <tr key={dept.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{dept.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {dept.head}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {dept.employees}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {dept.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {dept.budget}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {dept.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Department Modal */}
      <AddDepartmentModal />
    </div>
  );
};

export default Department;
