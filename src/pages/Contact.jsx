import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* --- HEADER --- */}
      <div className="relative bg-purple-50 pt-24 pb-16 px-4 md:pt-32 md:pb-24 md:px-6 text-center overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute top-[-10%] left-[-20%] w-64 h-64 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-64 h-64 md:w-96 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
            24/7 Support
          </span>
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            Let’s Create <span className="text-purple-600">Magic</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed px-2">
            At <strong>FutureBelieve</strong>, we are here to assist with your
            planning needs. Reach out for prompt, personalized service to ensure
            your event's success.
          </p>
        </motion.div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
          {/* --- LEFT COLUMN: INFO & MAP (DARK THEME) --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-950 text-white p-8 md:p-12 lg:p-16 flex flex-col relative order-2 lg:order-1"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="relative z-10 space-y-8 md:space-y-10">
              {/* Address */}
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-900/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Our Address</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    242A, Arcot Rd, Vadapalani,
                    <br />
                    Chennai, Tamil Nadu 600026.
                  </p>
                  <p className="text-purple-400 text-xs mt-1 font-medium">
                    (Near Vadapalani Post Office)
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-900/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Contact Info</h3>
                  <div className="text-sm text-slate-300 space-y-1">
                    <p>
                      <span className="text-slate-500 w-16 inline-block">
                        Mobile:
                      </span>{" "}
                      (+91) 9xxxx xxxx0
                    </p>
                    <p>
                      <span className="text-slate-500 w-16 inline-block">
                        Mail:
                      </span>{" "}
                      Info@futurebelieve.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-900/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Working Hours</h3>
                  <div className="text-slate-300 text-sm w-full max-w-xs space-y-1">
                    <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span>Mon - Sat</span>
                      <span className="text-purple-300 font-mono">
                        10:00 AM - 8:30 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-purple-300 font-mono">
                        10:00 AM - 2:30 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- EMBEDDED MAP --- */}
              <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative z-10 mt-6">
               <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7602734542515!2d80.21260767381165!3d13.050925513136693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f622160271%3A0x3149fc03560d447!2sJGN%20Technologies!5e0!3m2!1sen!2sin!4v1768807853291!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: FORM (LIGHT THEME) --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2"
          >
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
                Ready to Get Started?
              </h2>
              <p className="text-slate-500 mt-2 text-sm md:text-base">
                Send us a message and we'll reply within 24 hours.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-purple-600 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-purple-50 border border-purple-100 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 transition-all outline-none text-sm"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-purple-600 transition-colors">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full px-4 py-3 rounded-lg bg-purple-50 border border-purple-100 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 transition-all outline-none text-sm"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-purple-600 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-purple-50 border border-purple-100 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 transition-all outline-none text-sm"
                />
              </div>

              <div className="group">
                <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-purple-600 transition-colors">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg bg-purple-50 border border-purple-100 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 transition-all outline-none resize-none text-sm"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-3.5 md:py-4 bg-purple-600 text-white font-bold text-base md:text-lg rounded-lg shadow-lg shadow-purple-200 hover:bg-purple-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
