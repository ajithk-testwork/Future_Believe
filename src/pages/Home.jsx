import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import Testimonial from '../components/Testimonial'
//import SocialProof from '../components/SocialProof'
import HowItWorks from '../components/HowItWorks'
import DealerNetwork from '../components/DealerNetwork'
import WhyChooseUs from '../components/WhyChooseUs'
import StudentsFlow from '../components/StudentsFlow'

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <HowItWorks />
      <WhyChooseUs />
      <DealerNetwork />
      <StudentsFlow />
      <Testimonial />
      {/* <SocialProof /> */}
    </>
  )
}

export default Home