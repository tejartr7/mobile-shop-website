'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import reviewData from './reviews';
import profile from '../images/profile.png';
import female from '../images/female.jpg';
import { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);
import StarComponent1 from './Star';
import StarComponent2 from './Star2';
import rating_1 from '../images/rating_1.jpeg';
import swiggy from '../images/swiggy.png';
const ReviewSlider = () => {
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            swiper.update(); // Update Swiper when the component mounts
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
        <section id="reviews" className="swiper-container font-Poppins" style={{ backgroundColor: '#eeeeee' }}>
            <h1 className="text-5xl font-bold mb-4 text-center lg:pt-5 sm:pt-1" style={{ color: '#192a56' }}>Customer Reviews</h1>
            <Swiper
                onSwiper={(swiper) => setSwiper(swiper)} // Set the Swiper instance to state
                slidesPerView={1}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
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
                    <SwiperSlide key={review.id}>
                        <div className="review-card  text-white p-6 rounded-lg text-center flex flex-col items-center m-2" style={{ backgroundColor: '#192a56' }}>
                            <Image
                                src={review.gender === 'm' ? profile : female}
                                alt={review.name}
                                width={50}
                                height={50}
                                className="mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                            <p className="mb-2">Rating: {Number(review.rating) === 5 ? <StarComponent2 rating={review.rating} /> : <StarComponent1 rating={review.rating} />}</p>
                            <p className='text-xl'>{review.comments}</p>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-next" onClick={handleNext} style={{ position: 'absolute', zIndex: 10, color: 'black', backgroundColor: '#cccccc' }}></div>
                <div className="swiper-button-prev" onClick={handlePrev} style={{ position: 'absolute', zIndex: 10, color: 'black', backgroundColor: '#cccccc' }}></div>
            </Swiper>
            <div>
                <div className='font-Merriweather gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8'>


                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <div className='md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center my-8'>
                            <h2 className='text-center mb-4 text-3xl font-bold' style={{ color: '#192a56' }} > <u>Swiggy Rating</u></h2>
                            <Image
                                src={swiggy}
                                width={600}
                                height={600}
                                alt="About Image"
                                layout="fixed"
                                objectFit="cover"
                                objectPosition="center center"
                                className='review-image  mx-auto sm:h-400 md:w-500 md:h-500 lg:w-96 lg:h-96 xl:w-120 xl:h-120'
                            />
                        </div>
                        <div className='md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center my-8'>
                            <h2 className='text-center mb-4 text-3xl font-bold' style={{ color: '#192a56' }} ><u>Zomato Rating</u></h2>
                            <Image
                                src={rating_1}
                                width={400}
                                height={500}
                                alt="About Image"
                                layout="fixed"
                                objectFit="cover"
                                objectPosition="center center"
                                className='review-image rounded-full mx-auto sm:h-400 md:w-500 md:h-500 lg:w-96 lg:h-96 xl:w-120 xl:h-120'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewSlider;