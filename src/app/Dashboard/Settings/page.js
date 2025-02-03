'use client'
import React, { useState } from 'react';
import { 
  Building, 
  Mail, 
  Phone, 
  Globe, 
  Shield, 
  Clock, 
  DollarSign,
  Bell,
  Lock,
  Percent,
  Save,
  User
} from 'lucide-react';
import { cn } from "@/lib/utils";

const Settings = () => {
  const [activeTab, setActiveTab] = useState('company');
  
  const tabs = [
    { id: 'company', label: 'Company', icon: Building },
    { id: 'payroll', label: 'Payroll', icon: DollarSign },
    { id: 'attendance', label: 'Attendance', icon: Clock },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  return (
    <div className="p-6 lg:ml-64 transition-all duration-300">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your system preferences and configurations</p>
      </div>

      {/* Settings Navigation */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Tabs */}
        <div className="md:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
                activeTab === tab.id 
                  ? "bg-gray-800 text-white" 
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <tab.icon className="h-5 w-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          {/* Company Settings */}
          {activeTab === 'company' && (
            <div className="bg-white rounded-lg shadow border p-6 space-y-6">
              <h2 className="text-xl font-semibold">Company Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter tax ID"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter company email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    rows={3}
                    placeholder="Enter company address"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Payroll Settings */}
          {activeTab === 'payroll' && (
            <div className="bg-white rounded-lg shadow border p-6 space-y-6">
              <h2 className="text-xl font-semibold">Payroll Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pay Period</label>
                  <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Default Tax Rate (%)</label>
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter default tax rate"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Enable Automatic Payroll Processing</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Send Payment Notifications</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Attendance Settings */}
          {activeTab === 'attendance' && (
            <div className="bg-white rounded-lg shadow border p-6 space-y-6">
              <h2 className="text-xl font-semibold">Attendance Settings</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Work Hours Start</label>
                    <input 
                      type="time" 
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Work Hours End</label>
                    <input 
                      type="time" 
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grace Period (minutes)</label>
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter grace period"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Enable Overtime Tracking</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Track Break Time</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="bg-white rounded-lg shadow border p-6 space-y-6">
              <h2 className="text-xl font-semibold">Security Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password Expiry (days)</label>
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter password expiry days"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Enable Two-Factor Authentication</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Require Strong Passwords</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Lock Account After Failed Attempts</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Settings */}
          {activeTab === 'notifications' && (
            <div className="bg-white rounded-lg shadow border p-6 space-y-6">
              <h2 className="text-xl font-semibold">Notification Preferences</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Email Notifications</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">SMS Notifications</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Payroll Processing Alerts</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Employee Leave Requests</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Attendance Reports</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button className="flex items-center gap-2 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;