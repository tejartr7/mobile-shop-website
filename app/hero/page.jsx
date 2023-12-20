// Hero.js
'use client';

import { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

import Image from 'next/image';
import hero_1 from '../images/hero_1.png';
import hero_2 from '../images/hero_2.png';
import hero_3 from '../images/hero_3.png';
// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Hero = () => {
    const images = [hero_1, hero_2, hero_3];
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            // Initialize Swiper when the component mounts
            swiper.update();
        }
    }, [swiper]);

    const handlePrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    return (
        <section id="hero">
            <Swiper
                onSwiper={(swiper) => setSwiper(swiper)}
                spaceBetween={30}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }} // Add this line for navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[75vh] sm:w-full,h-full">
                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                layout="fill"
                                objectFit="fill"
                                quality={100}
                            />
                            <div className="absolute font-Merriweather inset-0 flex items-center justify-center text-white z-20 text-center">
                                <div className="bg-gray-700 p-8 rounded-md" style={{ borderRadius: '15px' }}>
                                    <p className="text-4xl font-bold mb-6 text-center">
                                        Want to taste the best food in Bihar
                                        <br></br> at most afforable price?

                                    </p>
                                    <a target='_blank' href="https://link.zomato.com/xqzv/rshare?id=442892287f0b9858" className="text-black bg-yellow-500 px-4 py-2 rounded-md text-lg font-semibold" style={{ backgroundColor: 'white' }}>
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation arrows */}
            <div className="swiper-button-next" onClick={handleNext} style={{ color: 'white', backgroundColor: 'black' }}></div>
            <div className="swiper-button-prev" onClick={handlePrev} style={{ color: 'white', backgroundColor: 'black' }}></div>
        </section>
    );
};

export default Hero;
