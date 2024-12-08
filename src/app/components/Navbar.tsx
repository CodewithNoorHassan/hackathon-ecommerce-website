import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      {/* Top Black Bar */}
      <div className="w-full h-[48px] bg-[#000000] flex">
        <div className="w-[859px] h-[24px] text-[#ffffff] text-[14px] flex mt-[12px] relative pl-[445px]">
          <div className="w-[550px] h-[24px] flex">
            <p className="w-[474px] leading-[24px] text-[14px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p className="font-semibold">ShopNow</p>
          </div>
          <div className="relative left-[190px] flex gap-2">
            <p>English</p>
            <Image src="/downarrow.svg" alt="Dropdown Arrow" width={16} height={16} />
          </div>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div className="border-b border-slate-300">
        <div className="w-[1170px] h-[38px] mt-8 mb-3 relative left-[135px] flex items-center justify-between">
          {/* Logo and Links */}
          <div className="flex items-center">
            <p className="w-[118px] h-[24px] font-bold text-[24px] leading-[24px] flex">
              Exclusive
            </p>
            <div className="w-[367px] h-[24px] flex gap-[48px] ml-[250px] text-black">
              <Link href="/" className="text-[16px] hover:text-gray-600">
                Home
              </Link>
              <Link href="/Contact" className="text-[16px] hover:text-gray-600">
                Contact
              </Link>
              <Link href="/About" className="text-[16px] hover:text-gray-600">
                About
              </Link>
              <Link href="/SignUp" className="text-[16px] hover:text-gray-600">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-[243px] h-[38px] bg-[#F5F5F5] flex items-center px-4 rounded-md shadow-sm mr-16">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 bg-transparent text-gray-500 text-[14px] outline-none placeholder-gray-400"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 text-black hover:text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.5a7.5 7.5 0 010 9.2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
