import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  LogOut,
  Users,
  BookOpen,
  Heart,
  MessageSquare,
  TrendingUp,
  Eye,
} from "lucide-react";

const visitorsData = [
  { month: "Jan", visitors: 400, courses: 240, interested: 120 },
  { month: "Feb", visitors: 600, courses: 350, interested: 200 },
  { month: "Mar", visitors: 800, courses: 500, interested: 300 },
  { month: "Apr", visitors: 1000, courses: 650, interested: 450 },
  { month: "May", visitors: 1200, courses: 800, interested: 550 },
  { month: "Jun", visitors: 1400, courses: 900, interested: 700 },
];

const courseVisitsData = [
  { name: "Engineering", value: 35 },
  { name: "Science", value: 25 },
  { name: "Commerce", value: 20 },
  { name: "Arts", value: 20 },
];

const recentMessages = [
  {
    id: 1,
    studentName: "Arjun Kumar",
    message: "Interested in your Engineering program",
    date: "2 hours ago",
    status: "unread",
  },
  {
    id: 2,
    studentName: "Priya Sharma",
    message: "Can you provide fee details?",
    date: "5 hours ago",
    status: "read",
  },
  {
    id: 3,
    studentName: "Rohan Patel",
    message: "How many seats are available?",
    date: "1 day ago",
    status: "read",
  },
  {
    id: 4,
    studentName: "Neha Singh",
    message: "Requesting college visit",
    date: "2 days ago",
    status: "read",
  },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

const CollegeDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Mock statistics
  const stats = {
    totalVisitors: 4200,
    totalCourseVisits: 2800,
    studentsInterested: 1400,
    totalMessages: 156,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">College Dashboard</h1>
            <p className="text-gray-600 text-sm mt-1">Welcome back, {user?.name}</p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-between">
                <span>Total Visitors</span>
                <Eye className="h-4 w-4 text-blue-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalVisitors.toLocaleString()}</div>
              <p className="text-xs text-gray-500 mt-1">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-between">
                <span>Course Visits</span>
                <BookOpen className="h-4 w-4 text-green-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCourseVisits.toLocaleString()}</div>
              <p className="text-xs text-gray-500 mt-1">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-between">
                <span>Students Interested</span>
                <Heart className="h-4 w-4 text-red-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.studentsInterested.toLocaleString()}</div>
              <p className="text-xs text-gray-500 mt-1">+15% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-between">
                <span>Messages</span>
                <MessageSquare className="h-4 w-4 text-purple-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalMessages.toLocaleString()}</div>
              <p className="text-xs text-gray-500 mt-1">5 unread messages</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Data */}
        <Tabs defaultValue="analytics" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6 mt-6">
            {/* Visitor Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Visitor Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={visitorsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="visitors"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      name="Total Visitors"
                    />
                    <Line
                      type="monotone"
                      dataKey="courses"
                      stroke="#10b981"
                      strokeWidth={2}
                      name="Course Visits"
                    />
                    <Line
                      type="monotone"
                      dataKey="interested"
                      stroke="#ef4444"
                      strokeWidth={2}
                      name="Students Interested"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Course Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={courseVisitsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {courseVisitsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Monthly Bar Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={visitorsData.slice(-4)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="visitors" fill="#3b82f6" name="Visitors" />
                      <Bar dataKey="interested" fill="#ef4444" name="Interested" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages from Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold">{msg.studentName}</p>
                          <Badge
                            variant={
                              msg.status === "unread" ? "default" : "secondary"
                            }
                            className="text-xs"
                          >
                            {msg.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          {msg.message}
                        </p>
                        <p className="text-xs text-gray-500">{msg.date}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Reply
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>College Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Basic Information</p>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <p className="text-sm">
                        <span className="text-gray-600">College ID:</span>{" "}
                        <span className="font-mono text-gray-900">
                          {user?.collegeId}
                        </span>
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-600">Email:</span>{" "}
                        <span className="font-mono text-gray-900">
                          {user?.email}
                        </span>
                      </p>
                    </div>
                  </div>
                  <Button>Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CollegeDashboard;
