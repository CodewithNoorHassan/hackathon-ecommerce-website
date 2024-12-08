import Link from "next/link";
import Image from "next/image";
export default function Contact() {
    return (
        <div className="mb-40">
            {/* Breadcrumb Section */}
            <div className="flex gap-2 mt-16 ml-32">
                <Link href="/Home" className="text-[#000000] text-[14px] opacity-50">
                    Home
                </Link>
                <p>/</p>
                <Link href="/Contact" className="text-[#000000] text-[14px]">
                    Contact
                </Link>
            </div>

            {/* Contact Section */}
            <div className="mt-16 mx-32 flex gap-8">
                {/* Contact Details Section */}
                <div className="p-8 border shadow w-[340px] h-[457px]">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-[40px] h-[40px]">
                                <Image
                                    className="rounded-md"
                                    src="/icons-phone.svg"
                                    alt="icon"
                                    width={705}
                                    height={609}
                                />
                            </div>
                            <h3 className="text-lg">Call To Us</h3>
                        </div>
                        <p className="text-black text-[14px] mb-2">
                            We are available 24/7, 7 days a week.
                        </p>
                        <p className="text-black text-[14px]">Phone: +8801611112222</p>
                    </div>

                    <hr className="my-6" />

                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                <Image
                                    className="rounded-md"
                                    src="/icons-mail.svg"
                                    alt="icon"
                                    width={705}
                                    height={609}
                                />

                            </div>
                            <h3 className="text-lg ">Write To Us</h3>
                        </div>
                        <p className="text-black mb-2 text-[14px]">
                            Fill out our form and we will contact you within 24 hours.
                        </p>
                        <p className="text-black text-[14px] mb-2">Email: customer@exclusive.com</p>
                        <p className="text-black text-[14px]">Email: support@exclusive.com</p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="p-8 border rounded-sm shadow w-[800px] h-[457px]">
                    <div className="flex gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            className="p-3 border bg-[#F5F5F5] rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email *"
                            className="p-3 border bg-[#F5F5F5] rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone *"
                            className="p-3 border bg-[#F5F5F5] rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full h-[207px] p-3 border bg-[#F5F5F5] rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
                    ></textarea>

                    <div className="flex justify-end">
                        <button className="w-[215px] h-[56px] bg-red-500 text-white py-3 rounded-[4px] hover:bg-red-600 transition">
                            Send Message
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
}
