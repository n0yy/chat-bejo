// components/ProtectedRoute.tsx
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
  requiredRole = "user",
}: {
  children: React.ReactNode;
  requiredRole?: string;
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    } else if (
      !isLoading &&
      user &&
      requiredRole === "superadmin" &&
      user.role !== "superadmin"
    ) {
      router.push("/");
    }
  }, [user, isLoading, router, requiredRole]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (requiredRole === "superadmin" && user.role !== "superadmin") {
    return null;
  }

  return <>{children}</>;
}
