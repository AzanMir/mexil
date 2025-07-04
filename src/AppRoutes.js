import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Project from "./pages/projects/Project";
import Service from "./pages/servics/Service";
import Footer from "./pages/footer/Footer";
// **NEW: Import auth components**
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* **NEW: Default redirect to signup** */}
        <Route path="/" element={<Navigate to="/signup" replace />} />

        {/* **NEW: Public auth routes** */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* **NEW: Protected routes - wrapped in ProtectedRoute** */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <Navbar />
              <About />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <Navbar />
              <Blog />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Navbar />
              <Contact />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Navbar />
              <Project />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/servics"
          element={
            <ProtectedRoute>
              <Navbar />
              <Service />
              <Footer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
