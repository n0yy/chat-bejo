import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import { neumorphism } from "@/utils/styles";

export default function Register() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100">
      <div
        className={`flex flex-col w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-8 ${neumorphism.container}`}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-700 mb-2">
            Create Account
          </h1>
          <p className="text-gray-500">Join Bejo and start your journey</p>
        </div>
        <form action="" className="space-y-4">
          <Input placeholder="Name" type="text" id="name" name="name" />
          <Input placeholder="Email" type="email" id="email" name="email" />
          <Input
            placeholder="Division"
            type="text"
            id="division"
            name="division"
          />
          <Input placeholder="WhatsApp Number" type="text" id="wa" name="wa" />
          <Input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
          />
          <label
            htmlFor="check"
            className="flex items-center text-sm text-gray-500"
          >
            <input type="checkbox" name="check" id="check" className="mr-2" />
            <span>I'm sure all data is valid</span>
          </label>
          <Button type="submit">Register</Button>
        </form>
        <Link
          href="/login"
          className="text-center text-sm mt-4 text-gray-500 hover:text-gray-700 transition-all duration-200"
        >
          Already have an account?{" "}
          <span className="text-gray-700 font-medium">Login</span>
        </Link>
      </div>
    </main>
  );
}
