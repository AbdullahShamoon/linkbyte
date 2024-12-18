'use client';
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" text-black  mx-auto mt-2  ">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2">

                <div className="empty bg-gradient-to-r from-transparent to-gray-100 shadow-sm rounded-3xl md:rounded-full w-[30%] py-6"></div>

                <div className="flex items-center w-fit px-10 py-2 bg-gray-100 rounded-3xl md:rounded-full shadow-md">
                    <Link href="/">
                        <span className="text-3xl font-extrabold cursor-pointer font-limelight">
                            Link<span className="text-indigo-400">Byte</span>
                        </span>
                    </Link>
                </div>

                <div className="empty bg-gradient-to-l from-transparent to-gray-100 shadow-sm rounded-3xl md:rounded-full w-[30%] py-6"></div>
            </div>
        </nav>
    );
}
