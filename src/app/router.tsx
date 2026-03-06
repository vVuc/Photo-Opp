import type { ReactElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, ForgotPasswordPage, LoadingPage, useAuth } from "@/modules/auth";
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
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/auth/loading" element={<LoadingPage />} />

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