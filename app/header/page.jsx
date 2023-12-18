'use client'
import { usePathname } from "next/navigation";

export default function Header() {
    const router = usePathname();

    const isNavLinkActive = (path) => router.pathname === path;

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <a class="text-white no-underline hover:text-white hover:no-underline" href="#">
                    <span class="text-2xl pl-2"><i class="em em-grinning"></i>Logo</span>
                </a>
            </div>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className={`mr-3 ${isNavLinkActive('/') ? 'active' : ''}`}>
                        <a className="inline-block py-2 px-4 text-white no-underline" href="/">About us</a>
                    </li>
                    <li className={`mr-3 ${isNavLinkActive('/brands') ? 'active' : ''}`}>
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/brands">Brands</a>
                    </li>
                    <li className={`mr-3 ${isNavLinkActive('/testimonials') ? 'active' : ''}`}>
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/testimonials">Testimonials</a>
                    </li>
                    <li className={`mr-3 ${isNavLinkActive('/contactus') ? 'active' : ''}`}>
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/contactus">Contact us!</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
