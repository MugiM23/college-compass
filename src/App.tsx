import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import StudentHome from "./pages/StudentHome";
import StudentCollegesList from "./pages/StudentCollegesList";
import CompareColleges from "./pages/CompareColleges";
import CollegeDashboard from "./pages/CollegeDashboard";
import ViewCollegeDetails from "./pages/ViewCollegeDetails";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />

      {/* Home Route - Redirect based on role or to login */}
      <Route
        path="/"
        element={
          user ? (
            user.role === "college" ? (
              <Navigate to="/college/dashboard" replace />
            ) : (
              <Navigate to="/student/home" replace />
            )
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      
      {/* Landing Page */}
      <Route path="/home" element={<Index />} />

      {/* Student Routes */}
      <Route
        path="/student/home"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/colleges"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentCollegesList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/compare"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <CompareColleges />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/college/:id"
        element={<ViewCollegeDetails />}
      />

      {/* College Routes */}
      <Route
        path="/college/dashboard"
        element={
          <ProtectedRoute allowedRoles={["college"]}>
            <CollegeDashboard />
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
