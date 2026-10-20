import Image from "next/image"
import logo from '@/assets/logo.webp';
import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
    return (
        <section className="container mx-auto p-4">
            <div className="flex relative justify-end items-center">
                <Link href='/' className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <Image src={logo} alt="Logo" />
                    <div>
                        <h2 className="text-xl text-red-700 font-bold">Bangla News 24</h2>
                    </div>
                </Link>
                <div className="flex items-center gap-4">
                    <button className="text-gray-500 cursor-pointer transition-colors duration-200 hover:text-red-700">সাইন ইন</button>
                    <button className="btn btn-soft bg-red-700 text-white transition-colors duration-200 hover:bg-red-800">সাইন আপ</button>
                </div>
            </div>
            <NavLinks />
        </section>
    );
};

export default Navbar;