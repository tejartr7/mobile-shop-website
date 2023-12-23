
'use client';

import { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

import Image from 'next/image';
import ghar from '../images/ghar.jpg';
import taas from '../images/taas.jpg';
import litti from '../images/litti.jpg';
// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);
// Hero.js
// ... (import statements)

const Hero = () => {
    const images = [ghar,litti,taas];
    const names = ['Ghar ka chicken', 'Litti chokha', 'Taas Wala Chicken'];
    const texts = ["Ghar ka chicken is a typical Bihari style chicken curry loaded with lots of spices and purely homemade taste, It is also a famous dish in Bihar served in major restaurants or dhabas, It's taste will surely make you feel in love with it.", "Litti chokha, the name which is quite popular not only in Bihar but all India. It is found in almost every eatery in Bihar. We have also tried to maintain the authentic taste, litti is served with chokha [mixed brinjal, potato etc] and chutney [coriander].", "Chicken boneless pieces mixed with home-made spices, a very popular dish of Champaran district in Bihar, It is eaten as a snack item in Bihar."];
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
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
            <div className='hero font-Poppins lg:mx-10 lg:px-10 sm:m-0 sm:p-0'>
                <Swiper
                    onSwiper={(swiper) => setSwiper(swiper)}
                    spaceBetween={30}
                    navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-slide-content sm:m-0 sm:p-0">
                                {/* Image div */}
                                <div className='font-Merriweather gap-4 mx-4 lg:mx-40 mt-6 text-left p-4 sm:pr-0 sm:mr-0'>
                                    {/* Content of the About section goes here */}

                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                                        <div className='col-span-2 lg:p-4 text-left text-xl flex flex-col items-start justify-center' style={{ color: '#333333' }}>
                                            <h2 className='text-3xl my-2 text-left' style={{ color: '#27ae60' }}>Explore Authentic Bihari Cuisine Right at Your Doorstep</h2>
                                            <h1 className='text-5xl my-2 font-bold text-left font-Poppins' style={{ color: '#192a56' }}>{names[index]}</h1>
                                            <p className='text-2xl' style={{ color: '#333333' }}>
                                                {texts[index]}
                                            </p>
                                            <a href='https://link.zomato.com/xqzv/rshare?id=442892287f0b9858' className='order' style={{ backgroundColor: "#192a56", color: '#ffffff' }}>Order Now</a>
                                        </div>
                                        <div className='md:col-span-2 lg:col-span-2 flex items-center justify-center my-8 mr-0'>
                                        <Image
                                        src={image}
                                        width={500}
                                        height={500}
                                        alt={`Slide ${index + 1}`}
                                        layout="responsive" 
                                        objectFit="cover"
                                        objectPosition="center center"
                                        className='about-image rounded-full mx-auto md:w-500 md:h-500 lg:w-96 lg:h-96 xl:w-120 xl:h-120 sm:p-4 sm:h-140'
                                    />                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-next" onClick={handleNext} style={{ position: 'absolute', zIndex: 10, color: 'white', backgroundColor: 'black' }}></div>
                    <div className="swiper-button-prev" onClick={handlePrev} style={{ position: 'absolute', zIndex: 10, color: 'white', backgroundColor: 'black' }}></div>
                </Swiper>

                {/* Navigation arrows */}


            </div>
        </section>
    );
};

export default Hero;
