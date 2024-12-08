import Link from "next/link"
import Image from "next/image"
export default function About() {
    return (
        <div>
            <div className="flex gap-2 mt-16 ml-32">
                <Link href="/Home" className="text-[#000000] text-[14px] opacity-50">
                    Home
                </Link>
                <p>/</p>
                <Link href="/About" className="text-[#000000] text-[14px]">
                    About
                </Link>
            </div>
            <div className="flex gap-10 mt-8">
                <div className="ml-32 mt-40">
                    <p className="text-[54px] font-semibold">Our Story</p>
                    <p className="text-[16px] w-[525px] h-[130px]">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millions customers across the region. </p>
                    <p className="text-[16px] w-[525px] h-[130px]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer. </p>
                </div>
                <div className="w-[705px] h-[609px]">
                    <Image
                        className="rounded-md"
                        src="/two-african.png"
                        alt="Shopping Image"
                        width={705}
                        height={609}
                    />
                </div>
            </div>

            {/* Earning////////////////////// */}
            <div className="w-[1170px] h-[230px] mt-24 ml-20 mb-32 gap-[30px] flex">
                <div className="w-[270px] h-[230px] bg-white hover:bg-[#DB4444] border border-opacity-35 border-black rounded-lg flex items-center justify-center">
                    <div className="text-center w-[169px] h-[170px] flex items-center justify-center flex-col hover:text-white">
                        <Image src="/Services.svg" alt="Dropdown Arrow" width={80} height={80} />
                        <p className="text-2xl font-bold mt-5">10.5k</p>
                        <p>Sallers active our site</p>
                    </div>
                </div>
                <div className="w-[270px] h-[230px] bg-white hover:bg-[#DB4444] border border-opacity-35 border-black rounded-lg flex items-center justify-center">
                    <div className="text-center w-[169px] h-[170px] flex items-center justify-center flex-col hover:text-white">
                        <Image src="/Services.svg" alt="Dropdown Arrow" width={80} height={80} />
                        <p className="text-2xl font-bold mt-5">33k</p>
                        <p className="text-nowrap">Mopnthly Produduct Sale</p>
                    </div>
                </div>
                <div className="w-[270px] h-[230px] bg-white hover:bg-[#DB4444] border border-opacity-35 border-black rounded-lg flex items-center justify-center">
                    <div className="text-center w-[169px] h-[170px] flex items-center justify-center flex-col hover:text-white">
                        <Image src="/Services.svg" alt="Dropdown Arrow" width={80} height={80} />
                        <p className="text-2xl font-bold mt-5">45.5k</p>
                        <p>Customer active in our site</p>
                    </div>
                </div>
                <div className="w-[270px] h-[230px] bg-white hover:bg-[#DB4444] border border-opacity-35 border-black rounded-lg flex items-center justify-center">
                    <div className="text-center w-[169px] h-[170px] flex items-center justify-center flex-col hover:text-white">
                        <Image src="/Services.svg" alt="Dropdown Arrow" width={80} height={80} />
                        <p className="text-2xl font-bold mt-5">25k</p>
                        <p>Anual gross sale in our site</p>
                    </div>
                </div>


            </div>

            {/* Team////////////////////// */}
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-[1170px] h-[564px] flex space-x-6">
                    <div className="w-[370px] h-[564px] gap-x-30">
                        <div>
                            <Image
                                className="rounded-md"
                                src="/aboutboy.png"
                                alt="boy Image"
                                width={370}
                                height={430}
                            />
                            <div className="mt-4">
                                <p className="text-xl font-bold">Tom Cruise</p>
                                <p className="text-[16px]">Founder & Chairman</p>
                                <Image
                                    className="rounded-md mt-4"
                                    src="/abouticons.svg"
                                    alt="social links"
                                    width={104}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[370px] h-[564px] gap-x-30">
                        <div>
                            <Image
                                className="rounded-md"
                                src="/aboutgirl.png"
                                alt="girl Image"
                                width={370}
                                height={430}
                            />
                            <div className="mt-4">
                                <p className="text-xl font-bold">Emma Watson</p>
                                <p className="text-[16px]">Managing Director</p>
                                <Image
                                    className="rounded-md mt-4"
                                    src="/abouticons.svg"
                                    alt="social links"
                                    width={104}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[370px] h-[564px] gap-x-30">
                        <div>
                            <Image
                                className="rounded-md"
                                src="/aboutold.png"
                                alt="old Image"
                                width={370}
                                height={430}
                            />
                            <div className="mt-4">
                                <p className="text-xl font-bold">Will Smith</p>
                                <p className="text-[16px]">Product Designer</p>
                                <Image
                                    className="rounded-md mt-4"
                                    src="/abouticons.svg"
                                    alt="social links"
                                    width={104}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider////////////////////// */}
            <div className="w-full flex justify-center items-center">
                <Image
                    className="rounded-md"
                    src="/dots.svg"
                    alt="slider"
                    width={112}
                    height={16}
                />
            </div>
            {/* Guaranty////////////////////// */}
            <div className="w-[943px] h-[161px] mt-24 mx-auto flex justify-between items-center mb-32">
                <div className="w-[262px] h-[161px] flex flex-col justify-center items-center text-center">
                    <Image src="/abouticar.svg" alt="car icon" width={80} height={80} />
                    <p className="text-[20px] mt-4 font-semibold text-nowrap">FREE AND FAST DELIVERY</p>
                    <p className="text-[16px] mt-2 text-nowrap">Free delivery for all orders over $140</p>
                </div>
                <div className="w-[262px] h-[161px] flex flex-col justify-center items-center text-center">
                    <Image src="/aboutihdphn.svg" alt="car icon" width={80} height={80} />
                    <p className="text-[20px] mt-4 font-semibold text-nowrap">24/7 CUSTOMER SERVICE</p>
                    <p className="text-[16px] mt-2 text-nowrap">Friendly 24/7 customer support</p>
                </div>
                <div className="w-[262px] h-[161px] flex flex-col justify-center items-center text-center">
                    <Image src="/aboutisheild.svg" alt="car icon" width={80} height={80} />
                    <p className="text-[20px] mt-4 font-semibold text-nowrap">MONEY BACK GUARANTEE</p>
                    <p className="text-[16px] mt-2 text-nowrap">We return money within 30 days</p>
                </div>
            </div>

        </div>
    )
}