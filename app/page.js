'use client'
import Header from './header/page'
import Hero from './hero/page'
import About from './about/page'
import Reviews from './reviews/page'
import Contact from './contact/page'
import Menu from './menu/page'
import './globals.css'
import Loader from './Loader/page'
import { useState,useEffect } from 'react'
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div>
      {loading ? (<Loader />) : (
        <div>
          <Header />
          <Hero />
          <About />
          <Menu />
          <Reviews />
          <Contact />
        </div>)}
    </div>
  )
}
