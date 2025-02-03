'use client'

import React, { useState } from "react";
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Edit,
  Upload,
  Building,
  Clock,
  Languages
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  
  // Mock user data
  const userData = {
    personal: {
      name: "John Doe",
      email: "john.doe@company.com",
      phone: "+1 (555) 123-4567",
      address: "123 Business Ave, Tech City, TC 12345",
      dateOfBirth: "1990-05-15",
      gender: "Male",
      nationality: "United States",
      maritalStatus: "Married"
    },
    professional: {
      department: "Engineering",
      designation: "Senior Software Engineer",
      employeeId: "EMP001",
      joinDate: "2020-03-15",
      workLocation: "Tech City Office",
      reportingTo: "Jane Smith",
      shift: "9:00 AM - 6:00 PM",
      teamSize: "8 members"
    },
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Tech University",
        year: "2015-2017",
        location: "Tech City"
      },
      {
        degree: "Bachelor of Engineering in Software",
        institution: "Engineering College",
        year: "2011-2015",
        location: "Innovation City"
      }
    ],
    skills: [
      "React", "Node.js", "Python", "AWS", "Docker",
      "System Design", "Team Leadership", "Agile Methodologies"
    ],
    languages: [
      { language: "English", proficiency: "Native" },
      { language: "Spanish", proficiency: "Intermediate" },
      { language: "French", proficiency: "Basic" }
    ]
  };

  return (
    <div className="lg:ml-64 p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600 mt-1">Manage your personal and professional information</p>
      </div>

      {/* Profile Overview */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Image */}
            <div className="relative">
              <img
                src="/api/placeholder/150/150"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                    <Upload className="h-4 w-4" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Update Profile Picture</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        Drag and drop your image here, or click to select
                      </p>
                      <input type="file" className="hidden" accept="image/*" />
                    </div>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Upload Image
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Basic Info */}
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900">{userData.personal.name}</h2>
              <p className="text-gray-600">{userData.professional.designation}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  {userData.personal.email}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  {userData.personal.phone}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {userData.professional.workLocation}
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Tabs */}
      <div className="flex border-b mb-6">
        {['personal', 'professional', 'education', 'skills'].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === tab
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'personal' && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Personal Information</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Edit className="h-4 w-4" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Personal Information</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(userData.personal).map(([key, value]) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-700">
                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                      </label>
                      <input
                        type="text"
                        defaultValue={value}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end gap-3">
                  <DialogTrigger asChild>
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                      Cancel
                    </button>
                  </DialogTrigger>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(userData.personal).map(([key, value]) => (
                <div key={key} className="flex items-start gap-3">
                  <User className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'professional' && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Professional Information</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Edit className="h-4 w-4" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Professional Information</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(userData.professional).map(([key, value]) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-700">
                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                      </label>
                      <input
                        type="text"
                        defaultValue={value}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end gap-3">
                  <DialogTrigger asChild>
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                      Cancel
                    </button>
                  </DialogTrigger>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(userData.professional).map(([key, value]) => (
                <div key={key} className="flex items-start gap-3">
                  {key === 'department' && <Building className="h-5 w-5 text-gray-400 mt-0.5" />}
                  {key === 'designation' && <Briefcase className="h-5 w-5 text-gray-400 mt-0.5" />}
                  {key === 'shift' && <Clock className="h-5 w-5 text-gray-400 mt-0.5" />}
                  {!['department', 'designation', 'shift'].includes(key) && (
                    <Briefcase className="h-5 w-5 text-gray-400 mt-0.5" />
                  )}
                  <div>
                    <p className="text-sm text-gray-600">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'education' && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Education & Qualifications</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Edit className="h-4 w-4" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Education Information</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {userData.education.map((edu, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Degree</label>
                          <input
                            type="text"
                            defaultValue={edu.degree}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Institution</label>
                          <input
                            type="text"
                            defaultValue={edu.institution}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Year</label>
                          <input
                            type="text"
                            defaultValue={edu.year}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Location</label>
                          <input
                            type="text"
                            defaultValue={edu.location}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end gap-3">
                  <DialogTrigger asChild>
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                      Cancel
                    </button>
                  </DialogTrigger>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </DialogContent>
            </Dialog>
            </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {userData.education.map((edu, index) => (
                <div key={index} className="flex items-start gap-4">
                  <GraduationCap className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'skills' && (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Skills & Expertise</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Edit className="h-4 w-4" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Skills</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Skills</label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {userData.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                          >
                            <span>{skill}</span>
                            <button className="hover:text-blue-900">×</button>
                          </div>
                        ))}
                      </div>
                      <input
                        type="text"
                        placeholder="Add a new skill..."
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-3">
                    <DialogTrigger asChild>
                      <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                        Cancel
                      </button>
                    </DialogTrigger>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Save Changes
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Languages</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Edit className="h-4 w-4" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Languages</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    {userData.languages.map((lang, index) => (
                      <div key={index} className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Language</label>
                          <input
                            type="text"
                            defaultValue={lang.language}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Proficiency</label>
                          <select
                            defaultValue={lang.proficiency}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          >
                            <option>Native</option>
                            <option>Fluent</option>
                            <option>Advanced</option>
                            <option>Intermediate</option>
                            <option>Basic</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-end gap-3">
                    <DialogTrigger asChild>
                      <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                        Cancel
                      </button>
                    </DialogTrigger>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Save Changes
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userData.languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Languages className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">{lang.language}</p>
                      <p className="text-sm text-gray-600">{lang.proficiency}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Profile;          