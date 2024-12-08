import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex justify-center mt-10 mr-16 mb-32">
      <div className="flex w-[1305px] gap-[129px]">
        {/* Left Section with Image */}
        <div>
          <Image
            className="rounded-md"
            src="/newimage.png"
            alt="Phone and Shopping Cart"
            width={805}
            height={781}
          />
        </div>

        {/* Right Section with Sign-Up Form */}
        <div className="w-[371px] mr-16">
          <h1 className="text-[36px] font-bold leading-[42px] text-black">
            Create an account
          </h1>
          <p className="mt-2 text-[16px] leading-[24px] text-gray-600">
            Enter your details below
          </p>

          {/* Form */}
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-[48px] px-4 border border-gray-300 rounded-md text-[16px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full h-[48px] px-4 border border-gray-300 rounded-md text-[16px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-[48px] px-4 border border-gray-300 rounded-md text-[16px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* Create Account Button */}
          <button className="w-full h-[56px] mt-6 bg-[#DB4443] text-white text-[16px] font-medium rounded-md">
            Create Account
          </button>

          {/* Sign Up with Google */}
          <button className="w-full h-[56px] mt-4 border border-gray-300 text-[16px] flex items-center justify-center gap-2 rounded-md">
            <Image
              src="/Igoogle.png"
              alt="Google Logo"
              width={20}
              height={20}
            />
            Sign up with Google
          </button>

          {/* Already have an account */}
          <div className="mt-6 text-center text-[16px]">
            <span className="text-gray-600">Already have an account?</span>{" "}
            <Link href="/Login" className="text-[#DB4443] font-medium">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
