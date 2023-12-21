import list from './list';
import Image from 'next/image';
import logo from '../images/logo.png';
export default function Menu() {
  return (
    <section id="menu">
      <div>
        <h1 className="text-5xl font-bold text-center lg:pt-5 sm:pt-1" style={{ color: '#192a56' }}>
          Menu
        </h1>
        <div className="container my-12 mx-auto px-4 md:px-12 flex justify-center">
          <div className="flex flex-wrap justify-center -mx-1 lg:-mx-4">
            {list.map((item, index) => (
              <div key={index} className="my-1 px-1 w-4/5 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 m-2">
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <a href="#">
                    
                    <Image className="block h-auto w-full" src={logo} width='100%' alt='image'/>
                  </a>
                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                      <a className="no-underline hover:underline text-black" href="#">
                        {item.title}
                      </a>
                    </h1>
                    <p className="text-grey-darker text-sm">{item.date}</p>
                  </header>
                  <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                      <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                      <p className="ml-2 text-sm">{item.author}</p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                      <span className="hidden">Like</span>
                      <i className="fa fa-heart"></i>
                    </a>
                  </footer>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
