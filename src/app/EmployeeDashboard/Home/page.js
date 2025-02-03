'use client'

import React, { useState } from "react";
import {
  Calendar,
  DollarSign,
  Clock,
  Bell,
  User,
  FileText,
  Settings,
  PieChart,
  Building,
  Users
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const HomeDashboard = () => {
  const [modalContent, setModalContent] = useState(null);

  // Mock data for quick stats
  const quickStats = [
    { label: "Available Leave", value: "12 days", trend: "+2" },
    { label: "Hours This Week", value: "32.5 hrs", trend: "-0.5" },
    { label: "Next Payday", value: "Jan 25", remaining: "15 days" },
    { label: "Pending Tasks", value: "3", type: "warning" }
  ];

  const quickLinks = [
    {
      icon: Calendar,
      label: "Leave Management",
      description: "Request or view your leave balance.",
      action: () => setModalContent("leave"),
      color: "text-green-500"
    },
    {
      icon: DollarSign,
      label: "Payroll & Benefits",
      description: "Access payslips and benefits information.",
      action: () => setModalContent("payroll"),
      color: "text-blue-500"
    },
    {
      icon: Clock,
      label: "Time & Attendance",
      description: "Track your work hours and shifts.",
      action: () => setModalContent("attendance"),
      color: "text-purple-500"
    },
    {
      icon: FileText,
      label: "Documents",
      description: "Access and request important documents.",
      action: () => setModalContent("documents"),
      color: "text-orange-500"
    },
    {
      icon: Users,
      label: "Team Directory",
      description: "Connect with your colleagues.",
      action: () => setModalContent("team"),
      color: "text-pink-500"
    },
    {
      icon: Building,
      label: "Company Resources",
      description: "Access company policies and resources.",
      action: () => setModalContent("resources"),
      color: "text-teal-500"
    }
  ];

  const getModalContent = () => {
    switch (modalContent) {
      case "leave":
        return {
          title: "Leave Management",
          description: "Submit and manage your leave requests",
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-4">
                    <h4 className="font-semibold">Annual Leave</h4>
                    <p className="text-2xl font-bold text-green-600">12 days</p>
                    <p className="text-sm text-gray-500">Available</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <h4 className="font-semibold">Sick Leave</h4>
                    <p className="text-2xl font-bold text-blue-600">5 days</p>
                    <p className="text-sm text-gray-500">Available</p>
                  </CardContent>
                </Card>
              </div>
              <Alert>
                <AlertDescription>
                  Your next planned leave: Summer Vacation (Aug 1-15)
                </AlertDescription>
              </Alert>
              <Button className="w-full">Request New Leave</Button>
            </div>
          )
        };
      case "payroll":
        return {
          title: "Payroll & Benefits",
          description: "View your compensation details",
          content: (
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-4">
                  <h4 className="font-semibold">Next Payday</h4>
                  <p className="text-2xl font-bold text-green-600">January 25</p>
                  <p className="text-sm text-gray-500">15 days remaining</p>
                </CardContent>
              </Card>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">Latest Payslip</Button>
                <Button variant="outline" className="w-full">Tax Documents</Button>
              </div>
            </div>
          )
        };
      // Add other modal contents as needed
      default:
        return null;
    }
  };

  const currentModal = getModalContent();

  return (
    <div className="lg:ml-64 p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, John!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your employment today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-4">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <div className="flex items-baseline mt-1">
                <p className="text-2xl font-semibold">{stat.value}</p>
                {stat.trend && (
                  <span className={`ml-2 text-sm ${
                    stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Links Section */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((link) => (
          <Card 
            key={link.label}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={link.action}
          >
            <CardContent className="pt-6">
              <div className="flex items-start">
                <div className={`p-2 rounded-lg bg-gray-50 ${link.color}`}>
                  <link.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{link.label}</h2>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Modal */}
      <Dialog open={!!modalContent} onOpenChange={() => setModalContent(null)}>
        {currentModal && (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{currentModal.title}</DialogTitle>
              <DialogDescription>{currentModal.description}</DialogDescription>
            </DialogHeader>
            <div className="py-4">{currentModal.content}</div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setModalContent(null)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default HomeDashboard;