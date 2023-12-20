'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import reviewData from './reviews';
import logo from '../images/logo.png';
import { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);
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
            <h2 className="text-5xl font-semibold mb-4 text-center" style={{color:'#333333'}}>Customer Reviews</h2>
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
                    <SwiperSlide key={review.id}>
                        <div className="review-card bg-gray-600 text-white p-6 rounded-lg text-center flex flex-col items-center m-2">
                            <Image src={logo} alt={review.name} width={50} height={50} className="mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                            <p className="mb-2">Rating: {review.rating}</p>
                            <p>{review.comments}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </section>
    );
};

export default ReviewSlider;