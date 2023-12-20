import logo from '../images/logo.png';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="flex flex-col sm:flex-row items-center justify-center">
            <div className='font-Merriweather gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8'>
                {/* Content of the About section goes here */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='col-span-2 lg:p-4 text-center text-xl flex flex-col items-center justify-center' style={{ color: '#333333' }}>
                        <h2 className='text-3xl my-2' style={{ color: '#ff8c00' }}>Welcome To</h2>
                        <h1 className='text-5xl my-2' style={{ color: '#333333' }}>Swaad Bihar ka</h1>
                        <p className='text-xl font-bold' style={{ color: '#333333' }}>
                            Swaad Bihar ka is a cloud kitchen and food delivery service in Patna, Bihar. We specialize in delivering the best and most delicious food in Bihar at the most affordable prices. Our dedication to quality and taste sets us apart. Choose from our extensive range of food items to satisfy your cravings. Experience the convenience of ordering from us through Zomato and Swiggy, and let us bring the authentic flavors of the best food to your doorstep.
                        </p>
                    </div>
                    <div className='md:col-span-2 lg:col-span-2 flex items-center justify-center my-8'>
                        <Image
                            src={logo}
                            width={500}
                            height={500}
                            alt="About Image"
                            layout="fixed"
                            objectFit="cover"
                            objectPosition="center center"
                            className='about-image rounded-full mx-auto md:w-500 md:h-500 lg:w-96 lg:h-96 xl:w-120 xl:h-120'  // Add rounded styling if needed
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};
