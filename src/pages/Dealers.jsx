import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---
const statesData = [
  {
    name: "Andhra Pradesh",
    imageName: "/Map/Andhra_Pradesh.png",
    dealers: [
      { name: "AP Motors", city: "Visakhapatnam", phone: "9876543210" },
      { name: "Vijayawada Auto", city: "Vijayawada", phone: "9876543211" },
    ],
  },
  {
    name: "Arunachal Pradesh",
    imageName: "/Map/Arunachal_Pradesh.png",
    dealers: [
      { name: "Itanagar Wheels", city: "Itanagar", phone: "9876543212" },
    ],
  },
  {
    name: "Assam",
    imageName: "/Map/Assam.png",
    dealers: [
      { name: "Guwahati Drives", city: "Guwahati", phone: "9876543213" },
    ],
  },
  {
    name: "Bihar",
    imageName: "/Map/Bihar.png",
    dealers: [{ name: "Patna Automobile", city: "Patna", phone: "9876543214" }],
  },
  {
    name: "Chhattisgarh",
    imageName: "/Map/Chhattisgarh.png",
    dealers: [{ name: "Raipur Riders", city: "Raipur", phone: "9876543215" }],
  },
  {
    name: "Goa",
    imageName: "/Map/Goa.png",
    dealers: [{ name: "Panaji Motors", city: "Panaji", phone: "9876543216" }],
  },
  {
    name: "Gujarat",
    imageName: "/Map/Gujarat.jpg",
    dealers: [
      { name: "Ahmedabad Auto", city: "Ahmedabad", phone: "9876543217" },
    ],
  },
  {
    name: "Haryana",
    imageName: "/Map/Haryana.png",
    dealers: [{ name: "Gurgaon Hub", city: "Gurugram", phone: "9876543218" }],
  },
  {
    name: "Himachal Pradesh",
    imageName: "/Map/Himachal_Pradesh.png",
    dealers: [{ name: "Shimla Scooters", city: "Shimla", phone: "9876543219" }],
  },
  {
    name: "Jharkhand",
    imageName: "/Map/Jharkhand.png",
    dealers: [{ name: "Ranchi Roadies", city: "Ranchi", phone: "9876543220" }],
  },
  {
    name: "Karnataka",
    imageName: "/Map/Karnataka.png",
    dealers: [
      { name: "Bengaluru Bikes", city: "Bengaluru", phone: "9876543221" },
    ],
  },
  {
    name: "Kerala",
    imageName: "/Map/Kerala.png",
    dealers: [{ name: "Cochin Cars", city: "Kochi", phone: "9876543222" }],
  },
  {
    name: "Madhya Pradesh",
    imageName: "/Map/Madhya_Pradesh.png",
    dealers: [{ name: "Bhopal Motors", city: "Bhopal", phone: "9876543223" }],
  },
  {
    name: "Maharashtra",
    imageName: "/Map/Maharashtra.png",
    dealers: [
      { name: "Mumbai Masters", city: "Mumbai", phone: "9876543224" },
      { name: "Pune Prime", city: "Pune", phone: "9876543225" },
    ],
  },
  {
    name: "Manipur",
    imageName: "/Map/Manipur.png",
    dealers: [{ name: "Imphal Imports", city: "Imphal", phone: "9876543226" }],
  },
  {
    name: "Meghalaya",
    imageName: "/Map/Meghalaya.png",
    dealers: [
      { name: "Shillong Services", city: "Shillong", phone: "9876543227" },
    ],
  },
  {
    name: "Mizoram",
    imageName: "/Map/Mizoram.png",
    dealers: [{ name: "Aizawl Auto", city: "Aizawl", phone: "9876543228" }],
  },
  {
    name: "Nagaland",
    imageName: "/Map/Nagaland.png",
    dealers: [{ name: "Kohima Kings", city: "Kohima", phone: "9876543229" }],
  },
  {
    name: "Odisha",
    imageName: "/Map/Odisha.png",
    dealers: [
      { name: "Bhubaneswar Best", city: "Bhubaneswar", phone: "9876543230" },
    ],
  },
  {
    name: "Punjab",
    imageName: "/Map/Punjap.png",
    dealers: [
      { name: "Ludhiana Links", city: "Ludhiana", phone: "9876543231" },
    ],
  },
  {
    name: "Rajasthan",
    imageName: "/Map/Rajasthan.png",
    dealers: [{ name: "Jaipur Junction", city: "Jaipur", phone: "9876543232" }],
  },
  {
    name: "Sikkim",
    imageName: "/Map/Sikkim.png",
    dealers: [{ name: "Gangtok Gears", city: "Gangtok", phone: "9876543233" }],
  },
  {
    name: "Tamil Nadu",
    imageName: "/Map/Tamil_Nadu.png",
    dealers: [
      { name: "Chennai Chariots", city: "Chennai", phone: "9876543234" },
    ],
  },
  {
    name: "Telangana",
    imageName: "/Map/Telangana.png",
    dealers: [
      { name: "Hyderabad Hub", city: "Hyderabad", phone: "9876543235" },
    ],
  },
  {
    name: "Tripura",
    imageName: "/Map/Tripura.png",
    dealers: [{ name: "Agartala Auto", city: "Agartala", phone: "9876543236" }],
  },
  {
    name: "Uttar Pradesh",
    imageName: "/Map/Uttar_Pradesh.png",
    dealers: [
      { name: "Lucknow Legends", city: "Lucknow", phone: "9876543237" },
    ],
  },
  {
    name: "Uttarakhand",
    imageName: "/Map/Uttarakhand.png",
    dealers: [
      { name: "Dehradun Drives", city: "Dehradun", phone: "9876543238" },
    ],
  },
  {
    name: "West Bengal",
    imageName: "/Map/West_Benga.png",
    dealers: [{ name: "Kolkata Kings", city: "Kolkata", phone: "9876543239" }],
  },
];

const Dealers = () => {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* --- HEADER --- */}
      <div className="bg-slate-950 pt-32 pb-32 md:pb-40 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10">
          <h2 className="text-purple-400 font-bold tracking-[0.2em] text-xs uppercase mb-3 animate-fade-in-up">
            Official Network
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-medium mb-4 leading-tight">
            Find an Authorized Dealer
          </h1>
          <p className="text-slate-400 mt-2 max-w-xl mx-auto text-base md:text-lg px-4">
            Serving customers with excellence across 28 states.
          </p>
        </div>
      </div>

      {/* --- MAIN GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 -mt-20 md:-mt-24 relative z-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          }}
        >
          {statesData.map((state, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedState(state)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-t-4 border-purple-600 flex flex-col active:scale-95 transform"
            >
              {/* Image Section */}
              <div className="h-48 md:h-56 bg-purple-50/50 border-b border-gray-100 relative p-6 flex items-center justify-center group overflow-hidden">
                <motion.img
                  src={state.imageName}
                  alt={state.name}
                  // CHANGED: Removed 'grayscale' filters.
                  // Added 'drop-shadow-sm' for depth and 'group-hover:scale-110' for a smooth zoom.
                  className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => (e.target.style.display = "none")}
                />

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-slate-600 shadow-sm border border-gray-200 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors duration-300">
                  {state.dealers.length}{" "}
                  {state.dealers.length === 1 ? "Site" : "Sites"}
                </div>
              </div>

              {/* Text Section */}
              <div className="p-5 flex justify-between items-center bg-white">
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {state.name}
                  </h3>
                  <p className="text-xs text-purple-600 font-bold mt-1 uppercase tracking-wide opacity-80 group-hover:opacity-100">
                    View Details &rarr;
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- RESPONSIVE MODAL --- */}
      <AnimatePresence>
        {selectedState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-4 lg:p-8 overflow-hidden"
            onClick={() => setSelectedState(null)}
          >
            <motion.div
              // Mobile: Slide up from bottom. Desktop: Fade in/Scale up.
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white w-full h-full md:h-[650px] md:max-h-[90vh] md:w-full md:max-w-7xl md:rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden absolute md:relative bottom-0 md:bottom-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 1. LEFT SIDE (Mobile: Top) - MAP VISUAL */}
              <div className="w-full md:w-1/2 bg-purple-50 border-b md:border-b-0 md:border-r border-gray-100 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shrink-0 h-[40vh] md:h-full">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                {/* Title Overlay for Mobile Visual */}
                <div className="relative z-10 md:mb-4 text-center md:text-left">
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                    {selectedState.name}
                  </h2>
                  <div className="w-12 h-1.5 bg-purple-600 mt-2 rounded-full mx-auto md:mx-0"></div>
                </div>

                {/* Map Image */}
                <div className="flex-1 flex items-center justify-center relative z-10 w-full p-2">
                  <img
                    src={selectedState.imageName}
                    alt={selectedState.name}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Close Button Mobile Overlay (Top Right) */}
                <button
                  onClick={() => setSelectedState(null)}
                  className="md:hidden absolute top-4 right-4 bg-white/80 p-2 rounded-full text-gray-600 shadow-sm z-50 backdrop-blur-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* 2. RIGHT SIDE (Mobile: Bottom) - LIST */}
              <div className="w-full md:w-1/2 bg-white flex flex-col h-[60vh] md:h-full relative">
                {/* Sticky List Header */}
                <div className="px-6 py-4 md:px-8 md:py-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-20 shadow-sm md:shadow-none">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                      Dealer Directory
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                      {selectedState.dealers.length} Authorized Locations
                    </p>
                  </div>

                  {/* Desktop Close Button */}
                  <button
                    onClick={() => setSelectedState(null)}
                    className="hidden md:flex p-2 hover:bg-purple-50 hover:text-purple-600 rounded-full text-gray-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Scrollable List Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-3 md:space-y-4 bg-gray-50/50 pb-24 md:pb-8">
                  {selectedState.dealers.length > 0 ? (
                    selectedState.dealers.map((dealer, idx) => (
                      <div
                        key={idx}
                        className="group bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-purple-500 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                      >
                        <div className="w-full sm:w-auto">
                          <h4 className="text-base md:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors flex items-center flex-wrap gap-2">
                            {dealer.name}
                            {idx === 0 && (
                              <span className="bg-purple-100 text-purple-700 text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wide">
                                Primary
                              </span>
                            )}
                          </h4>
                          <div className="flex items-center gap-2 mt-1.5 text-gray-500 text-sm font-medium">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-purple-500 shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {dealer.city}
                          </div>
                        </div>

                        <a
                          href={`tel:${dealer.phone}`}
                          className="w-full sm:w-auto mt-1 sm:mt-0 flex justify-center items-center gap-2 px-6 py-3 bg-black text-white rounded-lg text-sm font-semibold hover:bg-purple-600 active:bg-purple-800 transition-colors shadow-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
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
                          Call
                        </a>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 py-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 mb-4 opacity-20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                      <p className="text-lg">No listings in this area.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dealers;
