import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { neumorphism } from "@/utils/styles";

export default function Login() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div
        className={`flex flex-col w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-8 ${neumorphism.container}`}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-700 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500">Sign in to continue to Bejo</p>
        </div>
        <form action="" className="space-y-4">
          <Input placeholder="Email" id="email" name="email" type="email" />
          <Input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
          />
          <Button type="submit">Login</Button>
        </form>
        <Link
          href="/register"
          className="text-center text-sm mt-4 text-gray-500 hover:text-gray-700 transition-all duration-200"
        >
          Don't have an account?{" "}
          <span className="text-gray-700 font-medium">Register</span>
        </Link>
      </div>
    </main>
  );
}
