"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/");
    } catch (error) {
      // Error is already handled in the auth context
      return null;
    }
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to continue to Bejo">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
        <Input
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          icon={<HiOutlineMail size={20} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          icon={<RiLockPasswordLine size={20} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
      <Link
        href="/register"
        className="block text-center text-sm mt-6 text-gray-600 hover:text-gray-900 transition-all duration-200"
      >
        Don't have an account?{" "}
        <span className="text-gray-900 font-medium">Register</span>
      </Link>
    </AuthLayout>
  );
}
