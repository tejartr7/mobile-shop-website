
import Header from './header/page'
import Hero from './hero/page'
import About from './about/page'
import Reviews from './reviews/page'
import Contact from './contact/page'
import Menu from './menu/page'
import './globals.css'
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Contact />
    </div>
  )
}
