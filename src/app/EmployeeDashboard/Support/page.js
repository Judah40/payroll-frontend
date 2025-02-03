'use client'

import React, { useState } from "react";
import {
  LifeBuoy,
  Search,
  FileQuestion,
  MessageSquare,
  BookOpen,
  PhoneCall,
  Mail,
  Clock,
  ChevronRight,
  PlusCircle,
  History,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalContent, setModalContent] = useState(null);

  // Mock data for recent tickets
  const recentTickets = [
    {
      id: "T-1234",
      subject: "Payroll Discrepancy",
      status: "open",
      priority: "high",
      updated: "2 hours ago",
    },
    {
      id: "T-1233",
      subject: "Leave Application Issue",
      status: "closed",
      priority: "medium",
      updated: "1 day ago",
    },
    {
      id: "T-1232",
      subject: "Benefits Question",
      status: "in-progress",
      priority: "low",
      updated: "3 days ago",
    },
  ];

  // Common support categories
  const supportCategories = [
    {
      icon: FileQuestion,
      title: "FAQs",
      description: "Find quick answers to common questions",
      action: () => setModalContent("faqs"),
    },
    {
      icon: MessageSquare,
      title: "New Support Ticket",
      description: "Create a new support request",
      action: () => setModalContent("new-ticket"),
    },
    {
      icon: History,
      title: "My Tickets",
      description: "View and track your support requests",
      action: () => setModalContent("my-tickets"),
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Browse through helpful articles",
      action: () => setModalContent("knowledge-base"),
    },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      open: "bg-green-100 text-green-800",
      closed: "bg-gray-100 text-gray-800",
      "in-progress": "bg-blue-100 text-blue-800",
    };
    return <Badge className={styles[status]}>{status}</Badge>;
  };

  const getPriorityBadge = (priority) => {
    const styles = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-blue-100 text-blue-800",
    };
    return <Badge className={styles[priority]}>{priority}</Badge>;
  };

  const getModalContent = () => {
    switch (modalContent) {
      case "new-ticket":
        return {
          title: "Create New Support Ticket",
          description: "Submit a new support request",
          content: (
            <div className="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="payroll">Payroll</SelectItem>
                  <SelectItem value="leave">Leave & Time Off</SelectItem>
                  <SelectItem value="benefits">Benefits</SelectItem>
                  <SelectItem value="it">IT Support</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              <Input placeholder="Subject" />

              <Textarea
                placeholder="Describe your issue in detail..."
                className="min-h-[100px]"
              />

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>

              <Button className="w-full">Submit Ticket</Button>
            </div>
          ),
        };

      case "my-tickets":
        return {
          title: "My Support Tickets",
          description: "Track and manage your support requests",
          content: (
            <div className="space-y-4">
              {recentTickets.map((ticket) => (
                <Card
                  key={ticket.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">{ticket.subject}</p>
                        <p className="text-sm text-gray-500">ID: {ticket.id}</p>
                      </div>
                      <div className="space-x-2">
                        {getStatusBadge(ticket.status)}
                        {getPriorityBadge(ticket.priority)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Last updated: {ticket.updated}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ),
        };

      default:
        return null;
    }
  };

  const currentModal = getModalContent();

  return (
    <div className="lg:ml-64 p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <LifeBuoy className="h-8 w-8 text-blue-500" />
          Employee Support Center
        </h1>
        <p className="text-gray-600 mt-2">
          Get help with your questions and concerns
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input
          className="pl-10 py-6"
          placeholder="Search for help articles, FAQs, or type your question..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Quick Contact */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <PhoneCall className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="font-semibold">Call Support</h3>
                <p className="text-sm text-gray-600">1-800-SUPPORT</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-sm text-gray-600">support@company.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="font-semibold">Support Hours</h3>
                <p className="text-sm text-gray-600">24/7 Support Available</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Support Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {supportCategories.map((category) => (
          <Card
            key={category.title}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={category.action}
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-50">
                  <category.icon className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">{category.title}</h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Tickets */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Support Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-semibold">{ticket.subject}</p>
                  <p className="text-sm text-gray-500">ID: {ticket.id}</p>
                </div>
                <div className="flex items-center gap-4">
                  {getStatusBadge(ticket.status)}
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setModalContent("my-tickets")}
          >
            View All Tickets
          </Button>
        </CardFooter>
      </Card>

      {/* Modal */}
      <Dialog open={!!modalContent} onOpenChange={() => setModalContent(null)}>
        {currentModal && (
          <DialogContent className="sm:max-w-[600px]">
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

export default Support;
