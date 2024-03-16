import Image from 'next/image';
import { TbArrowUpRight } from "react-icons/tb";

export default function About() {
    return (
        <div>
            <div className="bg-[url('/image/about.jpg')] bg-center bg-cover ">
                <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left ">WHO ARE WE?</h1>
            </div>
            <div className="container">
                <div className="py-4 lg:py-14">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">Great Ideas and Interior Design</h2>
                    <p className="text-2xl font-medium lg:w-1/2">
                        Saumyaksh is an interior design company offering services for homes, offices, apartments, and more. We strive to provide exceptional interior design services, boasting a team of experienced professionals in the field.
                    </p>
                </div>
                <div className="flex items-center gap-x-8 lg:flex-row-reverse">
                    <div className="w-full">
                        <Image src="/image/gallery1123.jpg" width={700} height={700} alt="Interior Design" className="" />
                    </div>
                    <div className="">
                        <p className="pb-8 tracking-wide">
                        At Saumyaksh, we're visionary interior designers committed to revolutionizing architectural education. We believe in the imperative to reimagine conventional approaches, infusing them with contemporary methodologies and cutting-edge tools. Our ethos is rooted in the seamless integration of diverse societal perspectives, alongside innovative techniques in creativity, production, and communication.

Crafted with precision and passion, our Unfolding Box stands as a testament to our dedication. Designed to house and exhibit the exquisite portfolio of our second-year architecture endeavors, it symbolizes our unwavering commitment to excellence and creativity.                            <br />
                            <br />
                        </p>
                        <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="">Read More <TbArrowUpRight className="text-xl" /> </a>
                    </div>
                </div>
 
            </div>
        </div>
    );
}
