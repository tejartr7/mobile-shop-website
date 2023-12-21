'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import reviewData from './reviews';
import profile from '../images/profile.png';
import { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);
import StarComponent1 from './Star';
import StarComponent2 from './Star2';
import logo from '../images/logo.png';
import rating_1 from '../images/rating_1.jpeg';
const ReviewSlider = () => {
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
        <section id="reviews" className="swiper-container">
            <h2 className="text-5xl font-semibold mb-4 text-center" style={{ color: '#333333' }}>Customer Reviews</h2>
            <Swiper
                slidesPerView={1}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }} // Add this line for navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {reviewData.map((review) => (
                    <SwiperSlide key={review.id} style={{ height: '100%' }}>
                        <div className="review-card bg-gray-600 text-white p-6 rounded-lg text-center flex flex-col items-center m-2" style={{ height: '100%' }}>
                            <Image src={profile} alt={review.name} width={50} height={50} className="mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                            <p className="mb-2">Rating: {Number(review.rating) === 5 ? <StarComponent2 rating={review.rating} /> : <StarComponent1 rating={review.rating} />}</p>
                            <p>{review.comments}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <div className='font-Merriweather gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8'>
                    {/* Content of the About section goes here */}

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <div className='md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center my-8'>
                            <h2 className='text-center mb-4 text-3xl font-bold' style={{ color: '#333333' }} > <u>Siggy Rating</u></h2>
                            <Image
                                src={rating_1}
                                width={400}
                                height={500}
                                alt="About Image"
                                layout="fixed"
                                objectFit="cover"
                                objectPosition="center center"
                                className='about-image rounded-full mx-auto sm:h-400 md:w-500 md:h-500 lg:w-96 lg:h-96 xl:w-120 xl:h-120'
                            />
                        </div>
                        <div className='md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center my-8'>
                            <h2 className='text-center mb-4 text-3xl font-bold' style={{ color: '#333333' }} ><u>Zomato Rating</u></h2>
                            <Image
                                src={rating_1}
                                width={400}
                                height={500}
                                alt="About Image"
                                layout="fixed"
                                objectFit="cover"
                                objectPosition="center center"
                                className='about-image rounded-full mx-auto sm:h-400 md:w-500 md:h-500 lg:w-96 lg:h-96 xl:w-120 xl:h-120'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewSlider;