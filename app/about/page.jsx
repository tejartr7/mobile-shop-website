import logo from '../images/logo.png';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="flex flex-col sm:flex-row items-center justify-center">
            <div className='font-Merriweather gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8'>
                {/* Content of the About section goes here */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='col-span-2 lg:p-4 text-center text-xl' style={{color:'#333333'}}>
                        <h2 className='text-3xl my-2' style={{ color: '#ff8c00' }}>Welcome To</h2>
                        <h1 className='text-5xl my-2' style={{ color: '#333333' }}>Bihar Ka Swaad</h1>
                        <p>
                           lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
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
