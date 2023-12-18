'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="navbar-brand text-4xl">
                    Home
                </Link>
                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={toggleNav}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <div
                    className={`${isNavOpen ? 'block' : 'hidden'
                        } lg:flex items-center`}
                >
                    <Link href="/" className="link navlink">
                        Home
                    </Link>
                    <Link href="/#about" className="link navlink">
                        About
                    </Link>
                    <Link href="/#brands" className="link navlink">
                        Menu
                    </Link>
                    <Link href="/#reviews" className="link navlink">
                        Reviews
                    </Link>
                    <Link href="/#contact" className="link navlink">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
