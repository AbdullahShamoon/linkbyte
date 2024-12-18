'use client';
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-100 text-black rounded-3xl md:rounded-full w-[95%] mx-auto mt-2 shadow-md ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <span className="text-2xl font-extrabold cursor-pointer font-limelight">
                                Link<span className="text-indigo-400">Byte</span>
                            </span>
                        </Link>
                    </div>

                    {/* Links for large screens */}
                    <div className="hidden md:flex space-x-8 items-center font-prosto font-bold text-xl">
                        <Link href="/" className="hover:text-indigo-400 transition">
                            Home
                        </Link>
                        <Link href="/shred" className="hover:text-indigo-400 transition">
                            Shred
                        </Link>
                        <Link href="/about" className="hover:text-indigo-400 transition">
                            About
                        </Link>
                        <Link href="/contact" className="hover:text-indigo-400 transition">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 "
                        >
                            <svg
                                className="h-6 w-6 "
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-prosto ">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-bold hover:bg-gray-700 hover:text-indigo-400">
                            Home
                        </Link>
                        <Link href="/shred" className="block px-3 py-2 rounded-md text-base font-bold hover:bg-gray-700 hover:text-indigo-400">
                            Shred
                        </Link>
                        <Link href="/about" className="block px-3 py-2 rounded-md text-base font-bold hover:bg-gray-700 hover:text-indigo-400">
                            About
                        </Link>
                        <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-bold hover:bg-gray-700 hover:text-indigo-400">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
