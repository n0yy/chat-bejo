// app/(auth)/register/page.tsx
"use client";

import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsBuildingsFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    division: "",
    wa: "",
    password: "",
    confirmValid: false,
    status: "",
    levelKnowledge: "",
  });
  const [success, setSuccess] = useState("");
  const { register, error, isLoading } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirmValid) {
      return;
    }

    try {
      await register({
        name: formData.name,
        email: formData.email,
        division: formData.division,
        wa: formData.wa,
        password: formData.password,
        status: formData.status,
        levelKnowledge: formData.levelKnowledge,
      });

      setSuccess("Registration successful! Your account is pending approval.");

      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (err) {
      // Error is already handled in the auth context
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join and use BEJO as your Assistant"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm">
            {success}
          </div>
        )}

        <Input
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          icon={<HiOutlineUser size={20} />}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          icon={<HiOutlineMail size={20} />}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          placeholder="Division"
          type="text"
          id="division"
          name="division"
          icon={<BsBuildingsFill size={20} />}
          value={formData.division}
          onChange={handleChange}
          required
        />
        <Input
          placeholder="WhatsApp Number"
          type="text"
          id="wa"
          name="wa"
          icon={<FaWhatsapp size={20} />}
          value={formData.wa}
          onChange={handleChange}
          required
        />
        <Input
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          icon={<RiLockPasswordLine size={20} />}
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label
          htmlFor="confirmValid"
          className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer group"
        >
          <input
            type="checkbox"
            name="confirmValid"
            id="confirmValid"
            checked={formData.confirmValid}
            onChange={(e) =>
              setFormData({ ...formData, confirmValid: e.target.checked })
            }
            className="mr-2 rounded border-gray-300 text-gray-900 focus:ring-gray-200"
            required
          />
          <span className="group-hover:text-gray-900 transition-colors duration-200">
            I'm sure all data is valid
          </span>
        </label>
        <Button type="submit" disabled={isLoading || !formData.confirmValid}>
          {isLoading ? "Registering..." : "Register"}
        </Button>
      </form>
      <Link
        href="/login"
        className="block text-center text-sm mt-6 text-gray-600 hover:text-gray-900 transition-all duration-200"
      >
        Already have an account?{" "}
        <span className="text-gray-900 font-medium">Login</span>
      </Link>
    </AuthLayout>
  );
}
