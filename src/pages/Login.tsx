import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [error, setError] = useState("");
  const [studentForm, setStudentForm] = useState({ email: "", password: "" });
  const [collegeForm, setCollegeForm] = useState({ email: "", password: "" });
  const [activeTab, setActiveTab] = useState("student");

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!studentForm.email || !studentForm.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      await login(studentForm.email, studentForm.password, "student");
      navigate("/student/home");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  const handleCollegeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!collegeForm.email || !collegeForm.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      await login(collegeForm.email, collegeForm.password, "college");
      navigate("/college/dashboard");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">College Compass</CardTitle>
          <CardDescription>Login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="college">College</TabsTrigger>
            </TabsList>

            <TabsContent value="student" className="space-y-4 mt-4">
              <form onSubmit={handleStudentSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="student@example.com"
                    value={studentForm.email}
                    onChange={(e) =>
                      setStudentForm({ ...studentForm, email: e.target.value })
                    }
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={studentForm.password}
                    onChange={(e) =>
                      setStudentForm({ ...studentForm, password: e.target.value })
                    }
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login as Student"}
                </Button>
              </form>
              <p className="text-sm text-gray-600 text-center">
                Demo: Use any email and password to login
              </p>
            </TabsContent>

            <TabsContent value="college" className="space-y-4 mt-4">
              <form onSubmit={handleCollegeSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="college@example.com"
                    value={collegeForm.email}
                    onChange={(e) =>
                      setCollegeForm({ ...collegeForm, email: e.target.value })
                    }
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={collegeForm.password}
                    onChange={(e) =>
                      setCollegeForm({ ...collegeForm, password: e.target.value })
                    }
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login as College"}
                </Button>
              </form>
              <p className="text-sm text-gray-600 text-center">
                Demo: Use any email and password to login
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
