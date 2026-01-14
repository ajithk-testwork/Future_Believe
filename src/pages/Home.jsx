import React from 'react'
import HeroSection from "../components/HeroSection"
import HomeCarousel from '../components/HomeCarousel'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <HeroSection />
      <Testimonial />
    </>
  )
}

export default Home