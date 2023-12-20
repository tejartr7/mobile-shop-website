import { BiSolidPhoneCall } from "react-icons/bi";
import { FaGlobe, FaInstagramSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export default function Contact() {
    return (
        <section id="contact">
            <div class="font-Merriweather max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">

                <div class="flex justify-center mt-8 space-x-6">
                    <div className="link-wrapper">
                        <a target="_blank" href="tel:+917044206013">
                            <span className="sr-only">Call</span>
                            <BiSolidPhoneCall size={25} />
                        </a>
                    </div>
                    <div className="link-wrapper">
                        <a target="_blank" href="https://link.zomato.com/xqzv/rshare?id=442892287f0b9858">
                            <span className="sr-only">Zomato</span>
                            <FaGlobe size={25} />
                        </a>
                    </div>
                    <div className="link-wrapper">
                        <a target="_blank" href="mailto:swwaadbiharka@gmail.com">
                            <span className="sr-only">Mail</span>
                            <IoIosMail size={30} />
                        </a>
                    </div>
                    <div className="link-wrapper">
                        <a target="_blank" href="https://www.instagram.com/biharkaswaad/">
                            <span className="sr-only">Instagram</span>
                            < FaInstagramSquare size={25} />
                        </a>
                    </div>
                </div>
                <p class="mt-8 text-base leading-6 text-center text-2xl">
                    © Design and developed by <a target="_blank" href="https://twitter.com/raghu_rtr" style={{ color: '#ff8c00' }}>RTR</a>
                </p>
            </div>
        </section>
    );
};