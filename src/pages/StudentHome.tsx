import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, BookOpen, Compass, MessageSquare } from "lucide-react";

const StudentHome = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-10">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name}! 👋</h1>
            <p className="text-gray-600">
              Explore colleges, compare programs, and find your perfect match
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/student/colleges")}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Compass className="h-5 w-5 text-blue-600" />
                  Browse Colleges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Explore thousands of colleges and universities
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/student/compare")}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Compare Colleges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Side-by-side comparison of colleges
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                  My Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Messages from colleges about your inquiries
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Section */}
          <Card>
            <CardHeader>
              <CardTitle>Featured Colleges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Check out our featured colleges and programs
              </p>
              <Button onClick={() => navigate("/student/colleges")}>
                View All Colleges
              </Button>
            </CardContent>
          </Card>

          {/* Logout Button */}
          <div className="mt-8 flex justify-end">
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
      </main>
      <Footer />
    </div>
  );
};

export default StudentHome;
