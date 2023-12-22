import Image from 'next/image';
import gif from './loader.gif';

export default function Services() {
    return (
        <section id="services" className="min-h-screen flex items-center justify-center bg-white">
            <div>
                <Image src={gif} alt="Loader" width={200} height={200} />
            </div>
        </section>
    );
};
