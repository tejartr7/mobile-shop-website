import { BiSolidPhoneCall } from "react-icons/bi";
import { FaGlobe, FaInstagramSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiZomato } from "react-icons/si";
import { SiSwiggy } from "react-icons/si";
export default function Contact() {
    return (
        <section id="contact">
            <div className="font-Merriweather max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex justify-center mt-8 space-x-6">
                    <div className="link-wrapper">
                        <a target="_blank" href="tel:+919331031828">
                            <span className="sr-only">Call</span>
                            <BiSolidPhoneCall size={40} />
                        </a>
                    </div>
                    <div className="link-wrapper">
                        <a target="_blank" href="https://link.zomato.com/xqzv/rshare?id=442892287f0b9858">
                            <span className="sr-only">Zomato</span>
                            <SiZomato size={50} className="m-0 p-0" />
                        </a>
                    </div>
                    <div className="link-wrapper">
                        <a target="_blank" href="mailto:swwaadbiharka@gmail.com">
                            <span className="sr-only">Mail</span>
                            <IoIosMail size={40} />
                        </a>
                    </div>
                    <div className="link-wrapper">
                        <a target="_blank" href="https://www.instagram.com/biharkaswaad/">
                            <span className="sr-only">Instagram</span>
                            <FaInstagramSquare size={40} />
                        </a>
                    </div>
                    <div className="link-wrapper">
                        <a target="_blank" href="https://www.swiggy.com/restaurants/swaad-bihar-ka-howrah-pannalal-basak-lane-kolkata-562665">
                            <span className="sr-only">Swiggy</span>
                            <SiSwiggy size={40} />
                        </a>
                    </div>
                </div>
                <p className="mt-8 text-center text-xl font-bold">
                    © Design and developed by <a target="_blank" href="https://twitter.com/raghu_rtr" style={{ color: '#ff8c00' }}>RTR</a>
                </p>
            </div>
        </section>
    );
};
