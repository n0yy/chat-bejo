import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
// import { neumorphism } from "@/utils/styles";

export default function Login() {
  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to continue to Bejo">
      <form action="" className="space-y-4">
        <Input
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          icon={<HiOutlineMail size={20} />}
        />
        <Input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          icon={<RiLockPasswordLine size={20} />}
        />
        <Button type="submit">Login</Button>
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
