import TestimonialCarousel from '@/app/components/TestimonialCarousel';
import Image from "next/image"
export default function About() {
    return (
        <div>
            {/* HERO IMAGE/////////////////////// */}
            <div>
                <div className="flex absolute mt-8 w-[577px]">
                    <div className="ml-32 mt-20">
                        <p className="text-[64px] text-black tracking-tighter leading-none font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                        <p className="text-[16px] w-[525px] mt-4">LaBrowse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. </p>
                        <button className="w-[210px] h-[52px] bg-black text-white absolute rounded-full mt-10">Shop Now</button>
                    </div>
                </div>
                <div className="w-full">
                    <Image
                        src="/hero.png"
                        alt="Shopping Image"
                        width={1440}
                        height={663}
                    />
                </div>
            </div>
            <div className="w-full h-[122px] bg-black flex justify-center items-center py-4">
                <div className="flex flex-wrap w-full max-w-[1238.27px] gap-8 md:gap-[106px] items-center justify-center">
                    <Image
                        src="/brands.svg"
                        alt="Brands Support"
                        className="w-[300px] md:w-[625.48px] h-auto"
                        width={625.48}
                        height={38}
                    />
                    <Image
                        src="/brands2.svg"
                        alt="Brands Support"
                        className="w-[250px] md:w-[506.79px] h-auto"
                        width={506.79}
                        height={33.35}
                    />
                </div>
            </div>

            <p className="text-[48px] text-black tracking-tighter leading-none font-extrabold justify-center items-center flex mt-[72px]">NEW ARRIVALS</p>
            {/* CARDS NEWEST ARRIVAL////////////////////// */}
            <div className="w-full h-auto flex justify-center items-center gap-4 mt-[55px] mb-[36px]">
                {/* CARD-1////////////// */}
                <div className="w-[295px] h-[408px] flex">
                    <div className="w-[370px] h-[564px] gap-x-30">
                        <div>
                            <Image
                                className="rounded-md"
                                src="/tshirt.png"
                                alt="T-Shirt Image"
                                width={295}
                                height={298}
                            />
                            <div className="mt-4">
                                <p className="text-[20px] font-bold">T-shirt with Tape Details</p>
                                <Image
                                    className="rounded-md mt-2"
                                    src="/stars.svg"
                                    alt="social links"
                                    width={150}
                                    height={19}
                                />
                                <p className="text-2xl font-bold mt-2">$120</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD-2////////////// */}
                <div className="w-[295px] h-[408px] flex">
                    <div className="w-[370px] h-[564px] gap-x-30">
                        <div>
                            <Image
                                className="rounded-md"
                                src="/pant.svg"
                                alt="T-Shirt Image"
                                width={295}
                                height={298}
                            />
                            <div className="mt-4">
                                <p className="text-[20px] font-bold">Skinny Fit Jeans</p>
                                <Image
                                    className="rounded-md mt-2"
                                    src="/3.5stars.svg"
                                    alt="social links"
                                    width={126.2}
                                    height={19}
                                />
                                <div className="flex gap-[10px]">
                                    <p className="text-2xl font-bold mt-2">$240</p>
                                    <Image
                                        className="rounded-md mt-2 w-[129px] h-[32px]"
                                        src="/20m.svg"
                                        alt="social links"
                                        width={124}
                                        height={31}
                                    /></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD-3////////////// */}
                <div className="w-[295px] h-[408px] flex">
                    <div className="w-[370px] h-[564px] gap-x-30">
                        <div>
                            <Image
                                className="rounded-md"
                                src="/cshirt.svg"
                                alt="Check-Shirt Image"
                                width={295}
                                height={298}
                            />
                            <div className="mt-4">
                                <p className="text-[20px] font-bold">Checkered Shirt</p>
                                <Image
                                    className="rounded-md mt-2"
                                    src="/stars.svg"
                                    alt="social links"
                                    width={150}
                                    height={19}
                                />
                                <p className="text-2xl font-bold mt-2">$180</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD-4////////////// */}
                <div className="w-[295px] h-[408px] flex">
                    <div className="w-[370px] h-[564px] gap-x-30">
                        <div>
                            <Image
                                className="rounded-md"
                                src="/otshirt.svg"
                                alt="T-Shirt Image"
                                width={295}
                                height={298}
                            />
                            <div className="mt-4">
                                <p className="text-[20px] font-bold">Sleeve Striped T-shirt</p>
                                <Image
                                    className="rounded-md mt-2"
                                    src="/stars.svg"
                                    alt="social links"
                                    width={150}
                                    height={19}
                                />
                                <div className="flex gap-[10px]">
                                    <p className="text-2xl font-bold mt-2">$130</p>
                                    <Image
                                        className="rounded-md mt-2 w-[129px] h-[32px]"
                                        src="/30m.svg"
                                        alt="social links"
                                        width={124}
                                        height={31}
                                    /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* VIEW ALL BUTTON/////////////////////////////// */}
            <div className="flex justify-center">
                <button className="w-[218px] h-[52px] border border-black text-black border-opacity-10 rounded-full">View All</button>
            </div>
            <hr className="mt-16" />
            {/* TOP SELLING HEADING//////////////////// */}
            <p className="text-[48px] text-black tracking-tighter leading-none font-extrabold justify-center items-center flex mt-[72px]">TOP SELLING</p>
            {/* CARDS TOP SELLING////////////////////// */}
            <div className="w-full h-auto flex justify-center items-center gap-4 mt-[55px] mb-[36px]">
                {/* CARD-1////////////// */}
                <div className="w-[295px] h-[408px] flex">
                    <div className="w-[370px] h-[564px] gap-x-30">
                        <div>
                            <Image
                                className="rounded-md"
                                src="/vshirt.svg"
                                alt="T-Shirt Image"
                                width={295}
                                height={298}
                            />
                            <div className="mt-4">
                                <p className="text-[20px] font-bold">Vertical Striped Shirt</p>
                                <Image
                                    className="rounded-md mt-2"
                                    src="/stars.svg"
                                    alt="social links"
                                    width={150}
                                    height={19}
                                />
                                <div className="flex gap-[10px]">
                                    <p className="text-2xl font-bold mt-2">$212</p>
                                    <Image
                                        className="rounded-md mt-2 w-[129px] h-[32px]"
                                        src="/20m2.svg"
                                        alt="social links"
                                        width={124}
                                        height={31}
                                    /></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD-2////////////// */}
                <div className="w-[295px] h-[408px] flex">
                    <div className="w-[370px] h-[564px] gap-x-30">
                        <div>
                            <Image
                                className="rounded-md"
                                src="/c2shirt.svg"
                                alt="T-Shirt Image"
                                width={295}
                                height={298}
                            />
                            <div className="mt-4">
                                <p className="text-[20px] font-bold">Courage Graphic T-shirt</p>
                                <Image
                                    className="rounded-md mt-2"
                                    src="/3.5stars.svg"
                                    alt="social links"
                                    width={126.2}
                                    height={19}
                                />
                                <p className="text-2xl font-bold mt-2">$145</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD-3////////////// */}
                <div className="w-[295px] h-[408px] flex">
                    <div className="w-[370px] h-[564px] gap-x-30">
                        <div>
                            <Image
                                className="rounded-md"
                                src="/berjeans.svg"
                                alt="Check-Shirt Image"
                                width={295}
                                height={298}
                            />
                            <div className="mt-4">
                                <p className="text-[20px] font-bold">Loose Fit Bermuda Shorts</p>
                                <Image
                                    className="rounded-md mt-2"
                                    src="/stars.svg"
                                    alt="social links"
                                    width={150}
                                    height={19}
                                />
                                <p className="text-2xl font-bold mt-2">$80</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CARD-4////////////// */}
                <div className="w-[295px] h-[408px] flex">
                    <div className="w-[370px] h-[564px] gap-x-30">
                        <div>
                            <Image
                                className="rounded-md"
                                src="/gpant.svg"
                                alt="T-Shirt Image"
                                width={295}
                                height={298}
                            />
                            <div className="mt-4">
                                <p className="text-[20px] font-bold">Faded Skinny Jeans</p>
                                <Image
                                    className="rounded-md mt-2"
                                    src="/stars.svg"
                                    alt="social links"
                                    width={150}
                                    height={19}
                                />
                                <p className="text-2xl font-bold mt-2">$210</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* VIEW ALL BUTTON/////////////////////////////// */}
            <div className="flex justify-center">
                <button className="w-[218px] h-[52px] border border-black text-black border-opacity-10 rounded-full">View All</button>
            </div>
            {/* BROWSE BY DRESS STYLE SECTION///////////// */}
            <div className="w-full h-[866px] bg-[#F0F0F0] rounded-[40px] mx-auto mt-20 max-w-[1239px]">
                {/* Title */}
                <p className="text-[28px] md:text-[48px] text-black tracking-tighter leading-none font-extrabold flex justify-center items-center pt-8 md:pt-16">
                    BROWSE BY DRESS STYLE
                </p>

                {/* Cards */}
                <div className="w-full px-4 md:px-0 max-w-[1111px] mx-auto mt-8">
                    {/* First Row */}
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        {/* Card 1 */}
                        <div className="w-full md:w-[407px] h-[250px] md:h-[289px] overflow-clip bg-white rounded-2xl font-bold text-[24px] md:text-[36px] relative">
                            <h1 className="m-4 absolute z-10 text-black">Casual</h1>
                            <Image
                                src="/casual.png"
                                alt="Casual Shirts"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                width={973}
                                height={649}
                            />
                        </div>

                        {/* Card 2 */}
                        <div className="w-full md:w-[684px] h-[250px] md:h-[289px] overflow-clip bg-white rounded-2xl font-bold text-[24px] md:text-[36px] relative">
                            <h1 className="m-4 absolute z-10 text-black">Formal</h1>
                            <Image
                                src="/formal.png"
                                alt="Formal Shirts"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                width={973}
                                height={649}
                            />
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-col md:flex-row justify-between gap-4 mt-5">
                        {/* Card 3 */}
                        <div className="w-full md:w-[684px] h-[250px] md:h-[289px] overflow-clip bg-white rounded-2xl font-bold text-[24px] md:text-[36px] relative">
                            <h1 className="m-4 absolute z-10 text-black">Party</h1>
                            <Image
                                src="/party.png"
                                alt="Party Wear"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                width={973}
                                height={649}
                            />
                        </div>

                        {/* Card 4 */}
                        <div className="w-full md:w-[407px] h-[250px] md:h-[289px] overflow-clip bg-white rounded-2xl font-bold text-[24px] md:text-[36px] relative">
                            <h1 className="m-4 absolute z-10 text-black">Gym</h1>
                            <Image
                                src="/gym.png"
                                alt="Gym Wear"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                width={973}
                                height={649}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* TESTIMONIAL//////////////////// */}
            <div>
                <TestimonialCarousel />
            </div>


        </div>
    )
}