import React, { useEffect, useRef } from "react";
import Bg_img from "../../public/bg_home.jpg";
import student from "../../public/student.png";
import timer from "../../public/timer.png";
import money from "../../public/money.png";
import product from "../../public/product.png";
 
const HeroSection = () => {
  const firstSectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const whyUsRef = useRef(null);

  useEffect(() => {
    // Add scroll animations
    const handleScroll = () => {
      // Check if first section is in view for top-bottom flip
      if (firstSectionRef.current) {
        const rect = firstSectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          firstSectionRef.current.classList.add('flip-visible');
        }
      }

      // Check for left content slide-in
      if (leftContentRef.current) {
        const rect = leftContentRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          leftContentRef.current.classList.add('slide-in-left');
        }
      }

      // Check for right content slide-in
      if (rightContentRef.current) {
        const rect = rightContentRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          rightContentRef.current.classList.add('slide-in-right');
        }
      }

      // Check for Why Us section animation
      if (whyUsRef.current) {
        const rect = whyUsRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          whyUsRef.current.classList.add('animated');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Header Section with Top-Bottom Flip Animation */}
      <div 
        ref={firstSectionRef}
        className="flex h-full md:py-32 justify-center items-center overflow-x-hidden bg-gradient-to-b from-white via-purple-50 to-white flip-container"
      >
        <div className="flex h-full justify-center items-center overflow-x-hidden">
          <div className="text-center max-w-6xl mx-2 md:mx-10">
            <p className="my-3 text-sm uppercase flip-element delay-100">We Future Believe</p>
            <h2 className="text-5xl md:text-7xl font-bold mb-5 text-purple-800 flip-element delay-200">
              A Few Words About Us
            </h2>
            <div>
              <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl flip-element delay-300">
                We've been creating strong brands for both socially and
                environmentally conscious companies, thus creating a strong
                footprint for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Cropped Bottom */}
      <section style={{ backgroundImage: `url(${Bg_img})` }} className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden py-16 md:py-20 overflow-visible">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
        
        {/* Animated Background Elements - Reduced */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
            {/* Left Content - Slides from left */}
            <div 
              ref={leftContentRef}
              className="w-full lg:w-1/2 slide-from-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <div className="slide-in-left-item delay-100">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
                    Innovate.
                  </span>
                </div>
                <div className="slide-in-left-item delay-200">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                    Transform.
                  </span>
                </div>
                <div className="slide-in-left-item delay-300">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
                    Succeed.
                  </span>
                </div>
              </h2>
              <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed slide-in-left-item delay-400">
                Empowering businesses with cutting-edge solutions for a digital future.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 slide-in-left-item delay-500">
                <a
                  href="#"
                  className="group relative px-6 md:px-7 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  <span className="text-sm md:text-base">Download Now</span>
                </a>
                <a
                  href="/about-us"
                  className="group px-6 md:px-7 py-3 border border-white/50 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-sm md:text-base">Learn More</span>
                </a>
              </div>
            </div>

            {/* Right Content - Slides from right */}
            <div 
              ref={rightContentRef}
              className="w-full lg:w-1/2 lg:pl-10 mt-8 lg:mt-0 slide-from-right"
            >
              <div className="bg-white/5 backdrop-filter backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
                <h2 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent slide-in-right-item delay-100">
                  Why FutureBelieve?
                </h2>
                <ul className="space-y-4">
                  {[
                    {
                      icon: "🚀",
                      title: "100,000+ Students",
                      description: "We have over 1,00,000+ students in our app",
                      color: "from-yellow-400 to-orange-400",
                      delay: 200
                    },
                    {
                      icon: "🛡️",
                      title: "Secure Platform",
                      description: "Most effective secured video branding solution",
                      color: "from-green-400 to-emerald-400",
                      delay: 300
                    },
                    {
                      icon: "💎",
                      title: "Strong Brands",
                      description: "Creating strong brands online that last",
                      color: "from-purple-400 to-pink-400",
                      delay: 400
                    }
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className={`slide-in-right-item delay-${item.delay} flex items-start group hover:translate-x-1 transition-transform duration-300`}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mr-3 text-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Cropped Bottom Effect - No Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 "></div>
      </section>

      {/* Why Us Section with Four Direction Animation */}
      <section ref={whyUsRef} className="py-16 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-7xl font-bold mb-4 text-purple-800 direction-animation delay-100">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600">
                Why Us?
              </span>
            </h3>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto direction-animation delay-200">
              Discover why thousands choose FutureBelieve for their growth journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "100,000+ Students",
                description: "Join our ever-growing community of learners and creators",
                image: student,
                direction: "from-north",
                delay: 300
              },
              {
                title: "Short Time Income",
                description: "Start earning quickly with our streamlined processes",
                image: timer,
                direction: "from-east",
                delay: 400
              },
              {
                title: "Earn Money",
                description: "Monetize your skills and content effectively",
                image: money,
                direction: "from-south",
                delay: 500
              },
              {
                title: "Affordable Products",
                description: "High-quality solutions at accessible prices",
                image: product,
                direction: "from-west",
                delay: 600
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`direction-card ${feature.direction} delay-${feature.delay} group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 overflow-hidden`}
              >
                {/* Image Container */}
                <div className="h-40 md:h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-purple-700">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        /* Top-Bottom Flip Animation for First Section */
        @keyframes flipTopBottom {
          0% {
            transform: rotateX(-90deg);
            opacity: 0;
            filter: blur(10px);
          }
          50% {
            transform: rotateX(-45deg);
            opacity: 0.5;
            filter: blur(5px);
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
            filter: blur(0);
          }
        }

        /* Slide from Left Animation */
        @keyframes slideFromLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Slide from Right Animation */
        @keyframes slideFromRight {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Individual item slide from left */
        @keyframes slideInLeftItem {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Individual item slide from right */
        @keyframes slideInRightItem {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Direction Animations for Why Us Section */
        @keyframes fromNorth {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fromEast {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fromSouth {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fromWest {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* First Section Flip Styles */
        .flip-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .flip-element {
          transform-origin: top;
          opacity: 0;
          transform: rotateX(-90deg);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .flip-container.flip-visible .flip-element {
          animation: flipTopBottom 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .flip-container.flip-visible .flip-element.delay-100 {
          animation-delay: 0.1s;
        }
        .flip-container.flip-visible .flip-element.delay-200 {
          animation-delay: 0.2s;
        }
        .flip-container.flip-visible .flip-element.delay-300 {
          animation-delay: 0.3s;
        }

        /* Slide from Left Styles */
        .slide-from-left {
          opacity: 0;
          transform: translateX(-100px);
        }

        .slide-from-left.slide-in-left {
          animation: slideFromLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .slide-in-left-item {
          opacity: 0;
          transform: translateX(-50px);
        }

        .slide-from-left.slide-in-left .slide-in-left-item {
          animation: slideInLeftItem 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .slide-from-left.slide-in-left .slide-in-left-item.delay-100 {
          animation-delay: 0.1s;
        }
        .slide-from-left.slide-in-left .slide-in-left-item.delay-200 {
          animation-delay: 0.2s;
        }
        .slide-from-left.slide-in-left .slide-in-left-item.delay-300 {
          animation-delay: 0.3s;
        }
        .slide-from-left.slide-in-left .slide-in-left-item.delay-400 {
          animation-delay: 0.4s;
        }
        .slide-from-left.slide-in-left .slide-in-left-item.delay-500 {
          animation-delay: 0.5s;
        }

        /* Slide from Right Styles */
        .slide-from-right {
          opacity: 0;
          transform: translateX(100px);
        }

        .slide-from-right.slide-in-right {
          animation: slideFromRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .slide-in-right-item {
          opacity: 0;
          transform: translateX(50px);
        }

        .slide-from-right.slide-in-right .slide-in-right-item {
          animation: slideInRightItem 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .slide-from-right.slide-in-right .slide-in-right-item.delay-100 {
          animation-delay: 0.1s;
        }
        .slide-from-right.slide-in-right .slide-in-right-item.delay-200 {
          animation-delay: 0.2s;
        }
        .slide-from-right.slide-in-right .slide-in-right-item.delay-300 {
          animation-delay: 0.3s;
        }
        .slide-from-right.slide-in-right .slide-in-right-item.delay-400 {
          animation-delay: 0.4s;
        }

        /* Why Us Section Direction Animations */
        .direction-animation {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.8s ease;
        }

        section.animated .direction-animation {
          opacity: 1;
          transform: scale(1);
        }

        .direction-animation.delay-100 { transition-delay: 0.1s; }
        .direction-animation.delay-200 { transition-delay: 0.2s; }

        .direction-card {
          opacity: 0;
        }

        section.animated .direction-card.from-north {
          animation: fromNorth 0.8s ease forwards;
        }

        section.animated .direction-card.from-east {
          animation: fromEast 0.8s ease forwards;
        }

        section.animated .direction-card.from-south {
          animation: fromSouth 0.8s ease forwards;
        }

        section.animated .direction-card.from-west {
          animation: fromWest 0.8s ease forwards;
        }

        section.animated .direction-card.delay-300 { animation-delay: 0.3s; }
        section.animated .direction-card.delay-400 { animation-delay: 0.4s; }
        section.animated .direction-card.delay-500 { animation-delay: 0.5s; }
        section.animated .direction-card.delay-600 { animation-delay: 0.6s; }

        /* Existing Animations */
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;