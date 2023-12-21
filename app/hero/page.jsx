// Hero.js
'use client';

import { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

import Image from 'next/image';
import hero_1 from '../images/img_5.jpg';
import hero_2 from '../images/img_11.jpg';
import hero_3 from '../images/img_2.jpg';
// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);
// Hero.js
// ... (import statements)

const Hero = () => {
    const images = [hero_1, hero_2, hero_3];
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
            <Swiper
                onSwiper={(swiper) => setSwiper(swiper)}
                spaceBetween={30}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-slide-content">
                            {/* Image div */}
                            <div className='font-Merriweather gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8 text-left p-4'>
                                {/* Content of the About section goes here */}

                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                                    <div className='col-span-2 lg:p-4 text-left text-xl flex flex-col items-start justify-center' style={{ color: '#333333' }}>
                                        <h2 className='text-3xl my-2 text-left' style={{ color: '#27ae60' }}>Our Special Items</h2>
                                        <h1 className='text-5xl my-2 font-bold text-left' style={{ color: '#192a56' }}>{names[index]}</h1>
                                        <p className='text-xl font-bold' style={{ color: '#333333' }}>
                                            {texts[index]}
                                        </p>
                                        <a href='https://link.zomato.com/xqzv/rshare?id=442892287f0b9858' className='order' style={{backgroundColor:"#192a56",color:'#ffffff'}}>Order Now</a>
                                    </div>
                                    <div className='md:col-span-2 lg:col-span-2 flex items-center justify-center my-8'>
                                        <Image
                                            src={image}
                                            width={500}
                                            height={500}
                                            alt={`Slide ${index + 1}`}
                                            layout="fixed"
                                            objectFit="cover"
                                            objectPosition="center center"
                                            className='about-image rounded-full mx-auto md:w-500 md:h-500 lg:w-96 lg:h-96 xl:w-120 xl:h-120'
                                        />
                                    </div>
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
