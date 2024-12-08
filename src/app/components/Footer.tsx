import Image from "next/image";
export default function Footer() {
    return (
        <footer className="bg-[#F0F0F0]">
            {/* Subscribe Section */}
            <div className="bg-black rounded-xl w-[92.5%] mx-auto h-auto flex flex-col md:flex-row items-center justify-between py-8 px-8 mt-16">
                {/* Left Section */}
                <div className="text-center md:text-left md:w-1/2">
                    <p className="text-[24px] md:text-[40px] text-white tracking-tighter leading-tight font-extrabold">
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-4 items-center w-full md:w-[40%] mt-6 md:mt-0">
                    {/* Email Input */}
                    <div className="w-full flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
                        <Image src="/mail.svg" alt="search" width={24} height={24} />
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="flex-1 bg-transparent text-gray-500 text-[14px] outline-none placeholder-gray-400"
                        />
                    </div>
                    {/* Subscribe Button */}
                    <button className="bg-white rounded-full w-full py-2 text-black font-semibold">
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>

            {/* Footer Content */}
            <div className="bg-[#F0F0F0] py-12 px-8">
                <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <p className="text-[33.45px] md:text-[40px] text-black tracking-tighter leading-tight font-extrabold">
                            SHOP.CO
                        </p>
                        <p className="text-gray-500 text-[14px]">
                            We have clothes that suit your style and which you&apos;re proud to wear. From women to men.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
                            <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
                            <Image src="/insta.svg" alt="Instagram" width={24} height={24} />
                            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div>
                        <h3 className="font-semibold text-[16px] mb-4">COMPANY</h3>
                        <ul className="text-black opacity-60 space-y-4">
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[16px] mb-4">HELP</h3>
                        <ul className="text-black opacity-60 space-y-4">
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[16px] mb-4">FAQ</h3>
                        <ul className="text-black opacity-60 space-y-4">
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[16px] mb-4">RESOURCES</h3>
                        <ul className="text-black opacity-60 space-y-4">
                            <li>Free eBooks</li>
                            <li>Development Tutorial</li>
                            <li>How to - Blog</li>
                            <li>YouTube Playlist</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t max-w-[1240px] border-gray-300 mt-8 pt-8 text-gray-500 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 ml-4">
                        <p>Shop.co © 2000-2024, All Rights Reserved</p>
                        {/* Payment Icons */}
                        <div className="flex items-center gap-[12px]">
                            <Image src="/visa.svg" alt="Visa" width={46.61} height={30.03} />
                            <Image src="/master.svg" alt="MasterCard" width={46.61} height={30.03} />
                            <Image src="/paypal.svg" alt="PayPal" width={46.61} height={30.03} />
                            <Image src="/apay.svg" alt="Apple Pay" width={46.61} height={30.03} />
                            <Image src="/gpay.svg" alt="Google Pay" width={46.61} height={30.03} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
