import type { ReactElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, ForgotPasswordPage, useAuth } from "@/modules/auth";
import { HomePage } from "@/modules/photos";
import { DashboardPage } from "@/modules/dashboard";
import { PhotoGalleryPage } from "@/modules/photos";

function PrivateRoute({ children }: { children: ReactElement }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/photos"
        element={
          <PrivateRoute>
            <PhotoGalleryPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}