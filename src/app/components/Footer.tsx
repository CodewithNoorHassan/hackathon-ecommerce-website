import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Exclusive */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Exclusive</h3>
                    <p className="mb-2">Subscribe</p>
                    <p className="mb-4">Get 10% off your first order</p>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-black border-white border p-3 text-sm rounded-md placeholder-gray-400 focus:outline-none"
                        />
                        <button className="absolute right-2 top-2 bg-white text-black px-3 py-1 text-sm font-bold rounded">
                            &gt;
                        </button>
                    </div>
                </div>
                {/* Support */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Support</h3>
                    <p>111 Bijoy Korangi, Landhi,</p>
                    <p>DH 1515, Karachi.</p>
                    <p className="mt-2">exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>

                {/* Account */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Account</h3>
                    <ul className="space-y-2">
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>

                {/* Quick Link */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Quick Link</h3>
                    <ul className="space-y-2">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Download App */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Download App</h3>
                    <p className="mb-2 text-[12px] opacity-70">Save $3 with App New User Only</p>
                    <div className="flex items-center gap-2 mb-4">
                        <img
                            src="/Qr.png"
                            alt="Google Play"
                            className="w-[76px] h-[76px] cursor-pointer"
                        />
                        <div className=''>
                            <img
                                src="/GoogleP.png"
                                alt="Google Play"
                                className="h-[30px] w-[104px] cursor-pointer"
                            />
                            <img
                                src="/AppStore.png"
                                alt="App Store"
                                className="h-[30px] w-[104px] cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-xl">
                        <FaFacebookF className="cursor-pointer hover:text-gray-400 w-[24px] h-[24px]" />
                        <FaTwitter className="cursor-pointer hover:text-gray-400 w-[24px] h-[24px]" />
                        <FaInstagram className="cursor-pointer hover:text-gray-400 w-[24px] h-[24px]" />
                        <FaLinkedinIn className="cursor-pointer hover:text-gray-400 w-[24px] h-[24px]" />
                    </div>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500">
                © Copyright Noor Hassan 2024. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
