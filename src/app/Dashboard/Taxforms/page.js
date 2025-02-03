'use client'

import React, { useState } from 'react';
import { Search, Download, Filter, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const TaxForms = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  
  const taxForms = [
    {
      id: 1,
      formNumber: 'W-2',
      name: 'Wage and Tax Statement',
      year: '2024',
      status: 'Available',
      dueDate: 'Jan 31, 2025'
    },
    {
      id: 2,
      formNumber: '1099-NEC',
      name: 'Nonemployee Compensation',
      year: '2024',
      status: 'Available',
      dueDate: 'Jan 31, 2025'
    },
    {
      id: 3,
      formNumber: '1095-C',
      name: 'Employer-Provided Health Insurance',
      year: '2024',
      status: 'Pending',
      dueDate: 'Mar 2, 2025'
    },
    {
      id: 4,
      formNumber: '941',
      name: 'Quarterly Federal Tax Return',
      year: '2024',
      status: 'Available',
      dueDate: 'Apr 30, 2025'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Tax Forms</h1>
        <p className="text-gray-500">Access and manage your tax documents</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search forms..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex gap-3">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
          
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Forms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {taxForms.map((form) => (
          <Card key={form.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{form.formNumber}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">{form.name}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>Due: {form.dueDate}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    form.status === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {form.status}
                  </span>
                  <button 
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                    disabled={form.status !== 'Available'}
                  >
                    <Download className="h-4 w-4" />
                    <span className="text-sm">Download</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TaxForms;