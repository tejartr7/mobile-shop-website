import Image from 'next/image'
import Header from './header/page'
import Hero from './hero/page'
import About from './about/page'
import Services from './services/page'
import Reviews from './reviews/page'
import Contact from './contact/page'
import Brands from './brands/page'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Brands />
      <Services />
      <Reviews />
      <Contact />
    </div>
  )
}
