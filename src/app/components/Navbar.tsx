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
              Sign up and get 20% off to your first order - Sign Up Now!
            </p>
          </div>
          <div className="relative left-[265px] flex gap-2">
            <p className="text-black">English</p>
            <Image src="/closs.svg" alt="Dropdown Arrow" width={16} height={16} />
          </div>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div className="border-b border-slate-300 h-24 flex">
        <div className="w-[1170px] h-[38px] mt-8 mb-3 relative left-[80px] flex items-center justify-between">
          {/* Logo and Links */}
          <div className="flex items-center">
            <p className="w-[118px] h-[24px] font-extrabold text-[32px] leading-[24px] flex">
              <Link href="/">SHOP.CO</Link>
            </p>
            <div className="w-[321px] h-[22px] flex gap-[24px] ml-[90px] text-black">
              <Link href="/" className="text-[16px] hover:text-gray-600">
                Shop
              </Link>
              <Link href="/Contact" className="text-[16px] text-nowrap hover:text-gray-600">
                On Sale
              </Link>
              <Link href="/About" className="text-[16px] text-nowrap hover:text-gray-600">
                New Arrivals
              </Link>
              <Link href="/SignUp" className="text-[16px] text-nowrap hover:text-gray-600">
                Brands
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-[577px] h-[48px] bg-[#F5F5F5] flex items-center px-4 rounded-full shadow-sm mr-16 ml-[40px]">
          <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-[24px] h-[24px] text-black opacity-40 mr-[12px] hover:text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.5a7.5 7.5 0 010 9.2z"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 bg-transparent text-gray-500 text-[14px] outline-none placeholder-gray-400"
            />
          </div>
          <div className="flex space-x-2">
          <Image src="/shoppini.svg" alt="Dropdown Arrow" width={24} height={24} />
          <Image src="/accounti.svg" alt="Dropdown Arrow" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
