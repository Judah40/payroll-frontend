'use client'

import React, { useState } from "react";
import { 
  Bell,
  Mail,
  Star,
  Calendar,
  Users,
  Search,
  Pin,
  ChevronDown,
  Filter,
  Star as StarIcon
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Announcements = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  // Mock announcement data
  const announcements = [
    {
      id: 1,
      title: "Company-Wide Holiday Schedule 2025",
      sender: "HR Department",
      category: "General",
      priority: "High",
      date: "2024-12-28",
      time: "09:30 AM",
      isPinned: true,
      isStarred: false,
      preview: "Please review the updated holiday schedule for the upcoming year...",
      content: `
        <div class="space-y-4">
          <p>Dear Employees,</p>
          
          <p>We are pleased to share the holiday schedule for the upcoming year 2025. Please note these important dates for your planning purposes:</p>
          
          <ul class="list-disc pl-6 space-y-2">
            <li>New Year's Day - January 1, 2025</li>
            <li>Memorial Day - May 26, 2025</li>
            <li>Independence Day - July 4, 2025</li>
            <li>Labor Day - September 1, 2025</li>
            <li>Thanksgiving - November 27-28, 2025</li>
            <li>Christmas Break - December 24-25, 2025</li>
          </ul>
          
          <p>Additionally, employees are entitled to:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>2 Floating Holidays</li>
            <li>Personal Time Off as per company policy</li>
          </ul>
          
          <p>Please ensure to submit your time-off requests well in advance through the leave management system.</p>
          
          <p>Best regards,<br/>HR Department</p>
        </div>
      `
    },
    {
      id: 2,
      title: "Quarterly All-Hands Meeting",
      sender: "Communications Team",
      category: "Meeting",
      priority: "Medium",
      date: "2024-12-27",
      time: "02:15 PM",
      isPinned: false,
      isStarred: true,
      preview: "Join us for our Q4 2024 All-Hands Meeting scheduled for...",
      content: `
        <div class="space-y-4">
          <p>Dear Team,</p>
          
          <p>This is a reminder for our upcoming Q4 2024 All-Hands Meeting.</p>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Meeting Details:</h3>
            <ul class="space-y-2">
              <li><strong>Date:</strong> January 5, 2025</li>
              <li><strong>Time:</strong> 10:00 AM - 12:00 PM</li>
              <li><strong>Location:</strong> Main Conference Hall & Virtual</li>
            </ul>
          </div>
          
          <p class="font-semibold">Agenda:</p>
          <ul class="list-decimal pl-6 space-y-2">
            <li>Q4 Performance Review</li>
            <li>2024 Achievements</li>
            <li>2025 Strategic Goals</li>
            <li>Team Recognition</li>
            <li>Q&A Session</li>
          </ul>
          
          <p>Please submit your questions for the Q&A session by January 3rd.</p>
          
          <p>Best regards,<br/>Communications Team</p>
        </div>
      `
    },
    {
      id: 3,
      title: "Office Infrastructure Updates",
      sender: "Facilities Management",
      category: "Facilities",
      priority: "Low",
      date: "2024-12-26",
      time: "11:45 AM",
      isPinned: false,
      isStarred: false,
      preview: "We will be conducting maintenance work on the office infrastructure...",
      content: `
        <div class="space-y-4">
          <p>Dear Colleagues,</p>
          
          <p>We want to inform you about upcoming maintenance work in our office facilities.</p>
          
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold text-blue-800">Maintenance Schedule:</p>
            <p>January 6-7, 2025 (Weekend)</p>
          </div>
          
          <p class="font-semibold">Areas affected:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Air conditioning system</li>
            <li>Lighting systems</li>
            <li>Network infrastructure</li>
          </ul>
          
          <p>No disruption to regular work is expected as this will be done over the weekend.</p>
          
          <p>Thank you for your cooperation.</p>
          
          <p>Best regards,<br/>Facilities Management Team</p>
        </div>
      `
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         announcement.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         announcement.preview.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'pinned') return announcement.isPinned && matchesSearch;
    if (selectedFilter === 'starred') return announcement.isStarred && matchesSearch;
    return announcement.category.toLowerCase() === selectedFilter && matchesSearch;
  });

  return (
    <div className="lg:ml-64 p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
        <p className="text-gray-600 mt-1">Stay updated with company announcements and news</p>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader className="border-b">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search announcements..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option value="all">All Announcements</option>
                <option value="pinned">Pinned</option>
                <option value="starred">Starred</option>
                <option value="general">General</option>
                <option value="meeting">Meetings</option>
                <option value="facilities">Facilities</option>
              </select>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="divide-y">
            {filteredAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className={`p-4 hover:bg-gray-50 cursor-pointer flex items-start gap-4 ${
                  announcement.isPinned ? 'bg-blue-50' : ''
                }`}
                onClick={() => setSelectedAnnouncement(announcement)}
              >
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-gray-900 truncate">{announcement.title}</h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {announcement.isPinned && (
                        <Pin className="h-4 w-4 text-blue-500" />
                      )}
                      {announcement.isStarred && (
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(announcement.priority)}`}>
                        {announcement.priority}
                      </span>
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    <span className="font-medium">{announcement.sender}</span>
                    <span className="mx-2">•</span>
                    <span>{announcement.date}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 truncate">
                    {announcement.preview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Announcement Detail Modal */}
      <Dialog open={!!selectedAnnouncement} onOpenChange={() => setSelectedAnnouncement(null)}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <div className="flex justify-between items-start gap-4">
              <DialogTitle>{selectedAnnouncement?.title}</DialogTitle>
              <div className="flex items-center gap-2">
                <button 
                  className="p-1 hover:bg-gray-100 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle pin toggle
                  }}
                >
                  <Pin className={`h-4 w-4 ${selectedAnnouncement?.isPinned ? 'text-blue-500' : 'text-gray-400'}`} />
                </button>
                <button 
                  className="p-1 hover:bg-gray-100 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle star toggle
                  }}
                >
                  <StarIcon className={`h-4 w-4 ${selectedAnnouncement?.isStarred ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                </button>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{selectedAnnouncement?.sender}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{selectedAnnouncement?.date} {selectedAnnouncement?.time}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${selectedAnnouncement ? getPriorityColor(selectedAnnouncement.priority) : ''}`}>
                {selectedAnnouncement?.priority}
              </span>
            </div>
          </DialogHeader>
          <div className="mt-4">
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedAnnouncement?.content }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Announcements;