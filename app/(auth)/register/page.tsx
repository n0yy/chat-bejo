import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsBuildingsFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

export default function Register() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join and use BEJO as your Assistant"
    >
      <form action="" className="space-y-4">
        <Input
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          icon={<HiOutlineUser size={20} />}
        />
        <Input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          icon={<HiOutlineMail size={20} />}
        />
        <Input
          placeholder="Division"
          type="text"
          id="division"
          name="division"
          icon={<BsBuildingsFill size={20} />}
        />
        <Input
          placeholder="WhatsApp Number"
          type="text"
          id="wa"
          name="wa"
          icon={<FaWhatsapp size={20} />}
        />
        <Input
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          icon={<RiLockPasswordLine size={20} />}
        />
        <label
          htmlFor="check"
          className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer group"
        >
          <input
            type="checkbox"
            name="check"
            id="check"
            className="mr-2 rounded border-gray-300 text-gray-900 focus:ring-gray-200"
          />
          <span className="group-hover:text-gray-900 transition-colors duration-200">
            I'm sure all data is valid
          </span>
        </label>
        <Button type="submit">Register</Button>
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
