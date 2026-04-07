import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid, geoMercator } from "d3-geo";

const STATES_URL =
  "https://raw.githubusercontent.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json";

const DISTRICTS_URL =
  "https://raw.githubusercontent.com/geohacker/india/master/district/india_district.geojson";

const statesData = [
  {
    name: "Tamil Nadu",
    dealers: [
      {
        name: "Chennai Cruisers",
        city: "Chennai",
        phone: "9876543217",
        coordinates: [80.2707, 13.0827],
      },
      {
        name: "Madurai Motors",
        city: "Madurai",
        phone: "9876543218",
        coordinates: [78.1198, 9.9252],
      },
    ],
  },
  {
    name: "Andhra Pradesh",
    dealers: [
      {
        name: "AP Motors",
        city: "Visakhapatnam",
        phone: "9876543210",
        coordinates: [83.2185, 17.6868],
      },
      {
        name: "Vijayawada Auto",
        city: "Vijayawada",
        phone: "9876543211",
        coordinates: [80.648, 16.5062],
      },
    ],
  },
  {
    name: "Maharashtra",
    dealers: [
      {
        name: "Mumbai Masters",
        city: "Mumbai",
        phone: "9876543224",
        coordinates: [72.8777, 19.076],
      },
    ],
  },
  {
    name: "Karnataka",
    dealers: [
      {
        name: "Bengaluru Bikes",
        city: "Bengaluru",
        phone: "9876543221",
        coordinates: [77.5946, 12.9716],
      },
    ],
  },
  {
    name: "Delhi",
    dealers: [
      {
        name: "Delhi Drives",
        city: "New Delhi",
        phone: "9876543299",
        coordinates: [77.209, 28.6139],
      },
    ],
  },
  {
    name: "Odisha",
    dealers: [
      {
        name: "Kalinga Motors",
        city: "Bhubaneswar",
        phone: "9876543255",
        coordinates: [85.8245, 20.2961],
      },
    ],
  },
];

const getNormalizedAlias = (name) => {
  if (!name) return "";
  let str = String(name)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "");
  if (str === "orissa") return "odisha";
  if (str === "uttaranchal") return "uttarakhand";
  if (str === "pondicherry") return "puducherry";
  return str;
};

const isMatch = (name1, name2) => {
  return getNormalizedAlias(name1) === getNormalizedAlias(name2);
};

const StateModal = ({ stateName, onClose }) => {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDealer, setActiveDealer] = useState(null);

  const stateInfo = statesData.find((s) => isMatch(s.name, stateName)) || {
    name: stateName,
    dealers: [],
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(DISTRICTS_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch district data.");
        return res.json();
      })
      .then((data) => {
        const features = data.features || [];
        if (features.length === 0) throw new Error("Invalid Map Data.");

        const stateFeatures = features.filter((f) => {
          const props = f.properties || {};
          const sName =
            props.st_nm ||
            props.NAME_1 ||
            props.state ||
            props.state_name ||
            "";
          return isMatch(sName, stateName);
        });

        if (stateFeatures.length === 0) {
          throw new Error(
            `No districts found in the data matching "${stateName}".`,
          );
        }

        setDistricts(stateFeatures);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load district map:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [stateName]);

  const projection = useMemo(() => {
    if (!districts.length) return geoMercator();
    return geoMercator().fitExtent(
      [
        [15, 15],
        [785, 785],
      ],
      { type: "FeatureCollection", features: districts },
    );
  }, [districts]);

  return (
    <div className="fixed inset-0 z-[100]  flex items-center justify-center pb-4 px-4 sm:px-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-7xl h-full max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row z-10 border border-slate-200"
      >
        {/* Left Side: Full State Map Area */}
        <div className="flex-1 relative bg-slate-50 overflow-hidden flex items-center justify-center p-2 h-full">
          {loading ? (
            <div className="flex flex-col items-center justify-center text-slate-500">
              <svg
                className="animate-spin h-12 w-12 text-[#612c7e] mb-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="font-semibold text-lg text-slate-700 animate-pulse">
                Mapping districts...
              </span>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-600 p-8 rounded-3xl max-w-md text-center border border-red-200 shadow-sm">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Map Data Unavailable</h3>
              <p className="text-sm font-medium opacity-80">{error}</p>
            </div>
          ) : (
            <ComposableMap
              projection={projection}
              width={800}
              height={800}
              className="w-full h-full max-h-full scale-[1.05] outline-none drop-shadow-sm"
            >
              <Geographies
                geography={{ type: "FeatureCollection", features: districts }}
              >
                {({ geographies }) => (
                  <>
                    {geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        className="cursor-default outline-none transition-all duration-300"
                        style={{
                          default: {
                            fill: "#f1f5f9",
                            stroke: "#cbd5e1",
                            strokeWidth: 1,
                            outline: "none",
                          },
                          hover: {
                            fill: "#e2e8f0",
                            stroke: "#94a3b8",
                            strokeWidth: 1.5,
                            outline: "none",
                          },
                          pressed: { fill: "#cbd5e1", outline: "none" },
                        }}
                      />
                    ))}

                    {geographies.map((geo) => {
                      const props = geo.properties || {};
                      const districtName =
                        props.district ||
                        props.dt_nm ||
                        props.NAME_2 ||
                        props.name ||
                        "Unknown";
                      const centroid = geoCentroid(geo);
                      if (!centroid || isNaN(centroid[0])) return null;

                      return (
                        <Marker
                          key={`label-${geo.rsmKey}`}
                          coordinates={centroid}
                        >
                          <text
                            textAnchor="middle"
                            y={4}
                            style={{
                              fontFamily: "system-ui",
                              fontSize: "14px",
                              fontWeight: "800",
                              fill: "none",
                              stroke: "white",
                              strokeWidth: "4.5px",
                              strokeLinejoin: "round",
                              pointerEvents: "none",
                            }}
                          >
                            {districtName}
                          </text>
                          <text
                            textAnchor="middle"
                            y={4}
                            style={{
                              fontFamily: "system-ui",
                              fill: "#475569",
                              fontSize: "14px",
                              fontWeight: "800",
                              pointerEvents: "none",
                            }}
                          >
                            {districtName}
                          </text>
                        </Marker>
                      );
                    })}
                  </>
                )}
              </Geographies>

              {/* Dealer Pins */}
              {stateInfo.dealers.map((dealer, idx) => (
                <Marker key={`dealer-${idx}`} coordinates={dealer.coordinates}>
                  <g
                    className="cursor-pointer group"
                    onClick={() => setActiveDealer(dealer)}
                  >
                    {activeDealer?.name === dealer.name && (
                      <circle
                        r={18}
                        fill="#c7a6e0"
                        opacity="0.5"
                        className="animate-pulse"
                      />
                    )}

                    <circle
                      r={7}
                      fill="#ef4444"
                      opacity="0.4"
                      className="animate-ping"
                    />

                    <g transform="translate(-12, -28)">
                      <path
                        d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12zm0 16.2a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z"
                        fill={
                          activeDealer?.name === dealer.name
                            ? "#612c7e"
                            : "#ef4444"
                        }
                        stroke={
                          activeDealer?.name === dealer.name
                            ? "#4a2160"
                            : "#991b1b"
                        }
                        strokeWidth="1"
                        className="transition-transform duration-300 group-hover:scale-125 drop-shadow-2xl"
                        style={{ transformOrigin: "12px 28px" }}
                      />
                    </g>

                    <rect
                      x="-24"
                      y="6"
                      width="48"
                      height="16"
                      fill="#0f172a"
                      rx="4"
                      className="opacity-90 shadow-xl transition-all group-hover:-translate-y-1"
                    />
                    <text
                      textAnchor="middle"
                      y={16.5}
                      className="fill-white transition-all group-hover:-translate-y-1"
                      style={{
                        fontFamily: "system-ui",
                        fontSize: "9px",
                        fontWeight: "800",
                        pointerEvents: "none",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {dealer.city}
                    </text>
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          )}
        </div>

        {/* Right Side: Header & Dealer Details Sidebar */}
        <div className="w-full lg:w-[420px] bg-white border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col flex-shrink-0 z-20 shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.05)]">
          {/* Header Section */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10 flex-shrink-0">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                {stateInfo.name}
              </h2>
              <p className="text-slate-500 text-sm font-medium mt-1">
                Select a representative for details
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 p-2.5 rounded-full transition-all hover:scale-105"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content Section */}
          <div className="p-6 overflow-y-auto flex-1">
            {stateInfo.dealers.length > 0 ? (
              <div className="flex flex-col gap-4">
                {stateInfo.dealers.map((dealer, idx) => {
                  const isActive = activeDealer?.name === dealer.name;
                  // Generate a random referral ID if one doesn't exist
                  const referralId =
                    dealer.refId ||
                    `REF-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveDealer(isActive ? null : dealer)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                        isActive
                          ? "bg-white border-[#612c7e] shadow-[0_15px_35px_rgba(97,44,126,0.15)]"
                          : "bg-slate-50 border-slate-100 hover:border-[#612c7e]/30 hover:bg-white"
                      }`}
                    >
                      {/* Profile Row */}
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shadow-inner shrink-0 ${
                            isActive
                              ? "bg-[#612c7e] text-white"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {dealer.name.charAt(0)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-bold text-slate-900 text-lg truncate">
                              {dealer.name}
                            </h4>
                            
                          </div>

                          <p className="text-sm font-medium text-slate-500 flex items-center gap-1.5 mt-0.5">
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            {dealer.email ||
                              `${dealer.name.toLowerCase().replace(/\s/g, "")}@example.com`}
                          </p>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col gap-4">
                              <div className="flex justify-between items-end">
                                <div>
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
                                    referral ID
                                  </p>
                                  <p className="text-2xl font-black text-slate-900 tracking-tight">
                                   {referralId}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
                                    Location
                                  </p>
                                  <p className="text-sm font-bold text-slate-700">
                                    {dealer.city}
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <a
                                  href={`tel:${dealer.phone}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="flex-1 py-3.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-[#612c7e] transition-all flex justify-center items-center gap-2 shadow-lg active:scale-95"
                                >
                                  
                                  Connect
                                </a>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigator.clipboard.writeText(referralId);
                                  }}
                                  className="px-4 py-3.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all flex items-center justify-center"
                                  title="Copy Referral ID"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-slate-50 p-10 rounded-3xl border-2 border-dashed border-slate-200 text-center mt-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-slate-300"
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
                  </svg>
                </div>
                <p className="text-slate-500 font-semibold text-lg">
                  No Dealers Available
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  We're currently expanding in {stateInfo.name}.
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const DealersMap = () => {
  const [selectedStateName, setSelectedStateName] = useState(null);

  const handleStateClick = (geo) => {
    const rawName =
      geo.properties.st_nm || geo.properties.name || geo.properties.NAME_1;
    setSelectedStateName(rawName);
  };

  return (
    <div className="min-h-screen bg-slate-100 mt-16 font-sans text-slate-900 flex flex-col relative">
      <div className="bg-slate-900 pt-8 pb-6 px-6 text-center relative z-20 shadow-xl flex-shrink-0 border-b-4 border-[#612c7e]">
        <h1 className="text-3xl md:text-4xl font-serif text-white font-bold mb-2 tracking-tight">
          Locate a Dealer
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base px-4 font-medium">
          Select any state on the map to open the district view and find
          authorized dealers.
        </p>
      </div>

      <div className="flex-1 relative w-full bg-sky-50 flex justify-center items-center py-12 px-4">
        <div className="w-full max-w-4xl mx-auto relative">
          <ComposableMap
            projection="geoMercator"
            // INCREASED scale from 1400 to 1500 to make the map a bit larger
            projectionConfig={{ scale: 1500, center: [82.5, 20.5] }}
            width={800}
            height={900}
            className="w-full h-auto outline-none drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
          >
            <Geographies geography={STATES_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const rawName =
                    geo.properties.st_nm ||
                    geo.properties.name ||
                    geo.properties.NAME_1;
                  const hasDealers = statesData.some(
                    (s) => isMatch(s.name, rawName) && s.dealers.length > 0,
                  );
                  const centroid = geoCentroid(geo);

                  return (
                    <g key={geo.rsmKey}>
                      <Geography
                        geography={geo}
                        onClick={() => handleStateClick(geo)}
                        className="cursor-pointer outline-none transition-all duration-300"
                        style={{
                          default: {
                            fill: hasDealers ? "#c7a6e0" : "#cbd5e1",
                            stroke: "#64748b",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                          hover: {
                            fill: hasDealers ? "#9860b3" : "#94a3b8",
                            stroke: "#4a2160",
                            strokeWidth: 1,
                            outline: "none",
                          },
                          pressed: { fill: "#612c7e", outline: "none" },
                        }}
                      />
                      <Marker coordinates={centroid}>
                        <text
                          textAnchor="middle"
                          y={2}
                          style={{
                            fontFamily: "system-ui",
                            fill: hasDealers ? "#1e1b4b" : "#475569",
                            fontSize: "8px",
                            pointerEvents: "none",
                            fontWeight: hasDealers ? "800" : "600",
                            textShadow: "1px 1px 0px rgba(255,255,255,0.7)",
                          }}
                        >
                          {rawName}
                        </text>
                      </Marker>
                    </g>
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>

      <AnimatePresence>
        {selectedStateName && (
          <StateModal
            stateName={selectedStateName}
            onClose={() => setSelectedStateName(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DealersMap;