import Image from "next/image";
export default function Login() {
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
        <div className="w-[371px] mr-16 mt-36">
          <h1 className="text-[36px] font-bold leading-[42px] text-black">
          Log in to Exclusive
          </h1>
          <p className="mt-2 text-[16px] leading-[24px] text-gray-600">
            Enter your details below
          </p>

          {/* Form */}
          <div className="mt-6 space-y-4">
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
          <div className="flex mt-6 gap-16">
          <button className="w-[143px] h-[56px]  bg-[#DB4443] text-white text-[16px] font-medium rounded-md">
            Log In
          </button>
          <p className="mt-4 text-[16px] leading-[24px] text-[#DB4443] hover:cursor-pointer">
            Forget Password?
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
