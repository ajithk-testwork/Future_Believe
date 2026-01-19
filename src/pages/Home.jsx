import React from 'react'
import HeroSection from "../components/HeroSection"
import HomeCarousel from '../components/HomeCarousel'
import Testimonial from '../components/Testimonial'
import SocialProof from '../components/SocialProof'

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <HeroSection />
      <Testimonial />
      <SocialProof />
    </>
  )
}

export default Home