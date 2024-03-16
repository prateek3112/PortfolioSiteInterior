import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="container py-16">
            <div className="flex items-center justify-between pb-4">
                <a className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" href="">Crafting Aesthetic Harmony</a>
            </div>
            <div className="grid lg:grid-cols-2 place-items-center">
                <div>
                    <Image src="/image/aboutfront.png" width={900} height={500} alt="Interior Design" className="max-md:hidden" />
                </div>

                <div className="items-center">
                    <p className="px-12 pb-4">
                        Saumyaksh specializes in interior design, providing exceptional aesthetic solutions for both residential and commercial spaces. Our expertise has earned the trust of numerous clients, and our work has been distinguished with prestigious awards from various countries.
                    </p>
                </div>
            </div>
        </div>
    );
}
