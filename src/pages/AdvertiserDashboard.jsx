import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Video,
  CreditCard,
  User,
  Lock,
  Eye,
  EyeOff,
  UploadCloud,
  ChevronLeft,
  ChevronRight,
  Edit2,
  Trash2,
  X,
  CheckCircle,
  BarChart3,
  ArrowLeft,
} from "lucide-react";

const AdvertiserDashboard = () => {
  const navigate = useNavigate();

  // Navigation State
  const [activeTab, setActiveTab] = useState("Manage Videos");

  // Manage Videos States
  const [videoView, setVideoView] = useState("list"); // 'list' | 'add'
  const [addStep, setAddStep] = useState(1); // 1, 2, 3
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  // Form Interaction States
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All");
  const [selectedViews, setSelectedViews] = useState("");

  const menuItems = [
    { id: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { id: "Manage Videos", icon: <Video size={20} /> },
    { id: "Manage Transactions", icon: <CreditCard size={20} /> },
    { id: "Manage Profile", icon: <User size={20} /> },
    { id: "Change Password", icon: <Lock size={20} /> },
  ];

  const dummyVideos = [
    {
      id: 1,
      title: "Cadbury Dairy Milk Martians TVC",
      views: 1240,
      status: "Pending",
      thumb:
        "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=100&h=60&fit=crop",
    },
    {
      id: 2,
      title: "I Got This - Goldfish Swim School",
      views: 850,
      status: "Active",
      thumb:
        "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=100&h=60&fit=crop",
    },
    {
      id: 3,
      title: "Summer Campaign 2026",
      views: 3200,
      status: "Completed",
      thumb:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=100&h=60&fit=crop",
    },
  ];

  // ==========================================
  // RENDER: DASHBOARD
  // ==========================================
  const renderDashboard = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Dashboard Overview
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Track your video performance and statistics.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Uploaded Videos Card */}
        <div className="bg-gradient-to-br from-[#fcd015] to-[#f5b700] p-6 rounded-2xl shadow-lg flex items-center justify-between text-white relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
            <Video size={120} />
          </div>
          <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center shadow-inner z-10 text-white">
            <UploadCloud size={32} />
          </div>
          <div className="text-right z-10">
            <div className="text-5xl font-extrabold tracking-tight">0</div>
            <div className="text-sm font-semibold opacity-90 mt-1 uppercase tracking-wide">
              Uploaded Videos
            </div>
          </div>
        </div>

        {/* Views Card */}
        <div className="bg-gradient-to-br from-[#a6ce39] to-[#8db52b] p-6 rounded-2xl shadow-lg flex items-center justify-between text-white relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
            <Eye size={120} />
          </div>
          <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center shadow-inner z-10 text-white">
            <BarChart3 size={32} />
          </div>
          <div className="text-right z-10">
            <div className="text-5xl font-extrabold tracking-tight">0</div>
            <div className="text-sm font-semibold opacity-90 mt-1 uppercase tracking-wide">
              Total Views
            </div>
          </div>
        </div>
      </div>

      {/* Modern Chart Section */}
      <div className="bg-white shadow-sm rounded-xl border border-gray-100 p-8 mt-8">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h3 className="text-[20px] font-bold text-[#4a148c] bg-purple-100 inline-block px-1">
              Recent Views Report
            </h3>
            <p className="text-[13px] text-gray-400 mt-2 font-medium">
              Daily engagement metrics
            </p>
          </div>
          <button className="text-gray-400 bg-gray-50 hover:bg-gray-100 w-10 h-10 rounded-xl transition-colors cursor-pointer border border-gray-100 flex items-center justify-center shadow-sm">
            <BarChart3 size={18} />
          </button>
        </div>

        <div className="relative h-[250px] w-full flex items-end justify-around border border-gray-100 rounded-sm pb-8 px-4 pt-4">
          <div className="absolute top-1/4 w-full border-t border-dashed border-gray-200 left-0"></div>
          <div className="absolute top-1/2 w-full border-t border-dashed border-gray-200 left-0"></div>
          <div className="absolute top-3/4 w-full border-t border-dashed border-gray-200 left-0"></div>

          {[
            { h: "5%", d: "12-03" },
            { h: "5%", d: "09-03" },
            { h: "5%", d: "17-02" },
            { h: "5%", d: "16-02" },
            { h: "5%", d: "28-01" },
            { h: "5%", d: "11-01" },
            { h: "5%", d: "28-12" },
          ].map((bar, i) => (
            <div
              key={i}
              className="flex flex-col items-center group w-full px-2 h-full justify-end relative z-10"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs py-1 px-2 rounded absolute -top-8 pointer-events-none z-20">
                {bar.h}
              </div>
              <div
                className="w-full max-w-[40px] bg-gradient-to-t from-[#fa7815] to-[#fca566] hover:from-[#6a1b9a] hover:to-[#ab47bc] rounded-t-md cursor-pointer transition-all duration-300 relative shadow-sm"
                style={{ height: bar.h }}
              ></div>
              <span className="text-[12px] text-gray-500 absolute -bottom-6 font-medium">
                {bar.d}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ==========================================
  // RENDER: MANAGE VIDEOS LIST
  // ==========================================
  const renderVideoList = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Manage Videos</h2>
          <p className="text-sm text-gray-500 mt-1">
            View, edit, or add new video campaigns.
          </p>
        </div>
        <button
          onClick={() => {
            setVideoView("add");
            setAddStep(1);
          }}
          className="bg-[#6a1b9a] text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:bg-[#4a148c] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center gap-2"
        >
          <UploadCloud size={18} /> ADD NEW VIDEO
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="p-4 font-semibold w-16 text-center">ID</th>
                <th className="p-4 font-semibold">Campaign Title</th>
                <th className="p-4 font-semibold text-center w-32">Preview</th>
                <th className="p-4 font-semibold text-center w-32">Views</th>
                <th className="p-4 font-semibold text-center w-32">Status</th>
                <th className="p-4 font-semibold text-center w-32">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {dummyVideos.map((video) => (
                <tr
                  key={video.id}
                  className="hover:bg-purple-50/50 transition-colors duration-150"
                >
                  <td className="p-4 text-center font-bold text-gray-400">
                    #{video.id}
                  </td>
                  <td className="p-4 text-gray-800 font-medium">
                    {video.title}
                  </td>
                  <td className="p-4 flex justify-center">
                    <img
                      src={video.thumb}
                      alt="thumbnail"
                      className="w-16 h-10 object-cover rounded shadow-sm border border-gray-200"
                    />
                  </td>
                  <td className="p-4 text-center text-gray-600 font-medium">
                    {video.views.toLocaleString()}
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        video.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : video.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {video.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="bg-gray-100 text-gray-600 w-8 h-8 rounded-lg inline-flex items-center justify-center hover:bg-[#2b3c4d] hover:text-white transition-colors cursor-pointer shadow-sm">
                        <Eye size={16} />
                      </button>
                      <button className="bg-gray-100 text-gray-600 w-8 h-8 rounded-lg inline-flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors cursor-pointer shadow-sm">
                        <Edit2 size={16} />
                      </button>
                      <button className="bg-gray-100 text-[#6a1b9a] w-8 h-8 rounded-lg inline-flex items-center justify-center hover:bg-[#6a1b9a] hover:text-white transition-colors cursor-pointer shadow-sm">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center p-6 bg-white border-t border-gray-50">
          <span className="text-sm text-gray-500">
            Showing 1 to 3 of 52 entries
          </span>
          <div className="flex space-x-1">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 cursor-pointer rounded-lg">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-[#6a1b9a] bg-[#6a1b9a] text-white cursor-pointer rounded-lg font-medium">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 cursor-pointer rounded-lg font-medium">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 cursor-pointer rounded-lg font-medium">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 cursor-pointer rounded-lg">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // ==========================================
  // RENDER: ADD VIDEO FLOW
  // ==========================================
  const renderAddVideoStep = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Create Campaign</h2>
          <p className="text-sm text-gray-500 mt-1">
            Configure your video, targeting, and budget.
          </p>
        </div>
        <button
          onClick={() => setVideoView("list")}
          className="text-[#6a1b9a] hover:text-[#4a148c] font-medium text-sm flex items-center gap-1 cursor-pointer bg-white px-4 py-2 rounded-lg shadow-sm border border-purple-100"
        >
          <ChevronLeft size={16} /> Back to List
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-100 p-8 flex justify-center items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-0 transform -translate-y-1/2 max-w-2xl mx-auto right-0"></div>
          <div
            className={`absolute top-1/2 left-0 h-1 bg-[#6a1b9a] transition-all duration-500 -z-0 transform -translate-y-1/2 right-0`}
            style={{
              width: addStep === 1 ? "33%" : addStep === 2 ? "66%" : "100%",
              maxWidth: "42rem",
              margin: "0 auto",
            }}
          ></div>

          <div className="flex justify-between w-full max-w-2xl relative z-10">
            {[
              { num: 1, label: "Video Details" },
              { num: 2, label: "Target Audience" },
              { num: 3, label: "Budget & Payment" },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 shadow-md ${
                    addStep >= step.num
                      ? "bg-[#6a1b9a] text-white ring-4 ring-purple-100"
                      : "bg-white text-gray-400 border-2 border-gray-200"
                  }`}
                >
                  {addStep > step.num ? <CheckCircle size={20} /> : step.num}
                </div>
                <span
                  className={`text-xs mt-3 font-semibold uppercase tracking-wide ${addStep >= step.num ? "text-[#6a1b9a]" : "text-gray-400"}`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 min-h-[400px]">
          {/* STEP 1: Video Details */}
          {addStep === 1 && (
            <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Campaign Title
                </label>
                <input
                  type="text"
                  placeholder="Enter a catchy title..."
                  className="w-full rounded-xl border-gray-200 border px-4 py-3 text-sm focus:border-[#6a1b9a] focus:ring-1 focus:ring-[#6a1b9a] outline-none transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Describe your video content..."
                  className="w-full rounded-xl border-gray-200 border px-4 py-3 text-sm focus:border-[#6a1b9a] focus:ring-1 focus:ring-[#6a1b9a] outline-none transition-all resize-none shadow-sm"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select className="w-full rounded-xl border-gray-200 border px-4 py-3 text-sm focus:border-[#6a1b9a] focus:ring-1 focus:ring-[#6a1b9a] outline-none transition-all shadow-sm text-gray-600 bg-white cursor-pointer">
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  <option>Ads</option>
                  <option>Learn & earn</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-2">
                {/* Video Upload Area */}
                <label
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer group block
    ${
      videoFile
        ? "border-green-500 bg-green-50"
        : "border-gray-300 hover:border-[#6a1b9a] hover:bg-purple-50"
    }`}
                >
                  <input
                    type="file"
                    className="hidden"
                    accept="video/mp4,video/quicktime"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setVideoFile(e.target.files[0].name);
                      }
                    }}
                  />

                  <Video
                    className={`mx-auto mb-3 ${
                      videoFile
                        ? "text-green-500"
                        : "text-gray-400 group-hover:text-[#6a1b9a]"
                    }`}
                    size={32}
                  />

                  <p className="text-sm font-semibold text-gray-600 truncate px-2">
                    {videoFile ? videoFile : "Upload Video File"}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    MP4, MOV up to 50MB
                  </p>
                </label>

                {/* Thumbnail Upload Area */}
                <label
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer group block
    ${
      thumbnailFile
        ? "border-green-500 bg-green-50"
        : "border-gray-300 hover:border-[#6a1b9a] hover:bg-purple-50"
    }`}
                >
                  <input
                    type="file"
                    className="hidden"
                    accept="image/jpeg,image/png"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setThumbnailFile(e.target.files[0].name);
                      }
                    }}
                  />

                  <UploadCloud
                    className={`mx-auto mb-3 ${
                      thumbnailFile
                        ? "text-green-500"
                        : "text-gray-400 group-hover:text-[#6a1b9a]"
                    }`}
                    size={32}
                  />

                  <p className="text-sm font-semibold text-gray-600 truncate px-2">
                    {thumbnailFile ? thumbnailFile : "Upload Thumbnail"}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">JPG, PNG (16:9)</p>
                </label>
              </div>
            </div>
          )}

          {/* STEP 2: Target Audience */}
          {addStep === 2 && (
            <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <User size={16} className="text-[#6a1b9a]" /> Target Gender
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {["All Genders", "Male Only", "Female Only"].map((gender) => (
                    <div
                      key={gender}
                      onClick={() => setSelectedGender(gender)}
                      className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-all duration-200 ${
                        selectedGender === gender
                          ? "border-[#6a1b9a] bg-purple-50 text-[#6a1b9a] font-bold shadow-md"
                          : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {gender}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <BarChart3 size={16} className="text-[#6a1b9a]" /> Target Age
                  Group
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "All Ages",
                    "11 - 13 Yrs",
                    "13 - 15 Yrs",
                    "15 - 17 Yrs",
                    "17 - 19 Yrs",
                    "19 - 21 Yrs",
                  ].map((age) => (
                    <div
                      key={age}
                      onClick={() => setSelectedAge(age)}
                      className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-all duration-200 ${
                        selectedAge === age
                          ? "border-[#6a1b9a] bg-purple-50 text-[#6a1b9a] font-bold shadow-md"
                          : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {age}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Budget */}
          {addStep === 3 && (
            <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Select Desired Views & Pricing
                </label>
                <div className="flex border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white focus-within:border-[#6a1b9a] transition-colors">
                  <select
                    value={selectedViews}
                    onChange={(e) => setSelectedViews(e.target.value)}
                    className="flex-1 p-4 focus:outline-none text-gray-700 font-medium cursor-pointer"
                  >
                    <option value="" disabled>
                      Choose view package...
                    </option>
                    <option value="100">100 Views</option>
                    <option value="500">500 Views</option>
                    <option value="1000">1,000+ Views</option>
                  </select>
                  <div className="bg-[#eef1f5] px-8 py-4 text-[#2b3c4d] border-l-2 border-gray-200 min-w-[160px] text-center font-bold text-lg flex items-center justify-center">
                    {selectedViews ? `₹ ${selectedViews * 10}` : "₹ 0"}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Payment Method
                </label>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-[#6a1b9a] has-[:checked]:bg-purple-50 flex-1">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                      className="w-5 h-5 text-[#6a1b9a] focus:ring-[#6a1b9a]"
                    />
                    <span className="ml-3 font-semibold text-gray-700">
                      Online Gateway
                    </span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-[#6a1b9a] has-[:checked]:bg-purple-50 flex-1">
                    <input
                      type="radio"
                      name="payment"
                      className="w-5 h-5 text-[#6a1b9a] focus:ring-[#6a1b9a]"
                    />
                    <span className="ml-3 font-semibold text-gray-700">
                      Cash / Offline
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Bar */}
        <div className="border-t border-gray-100 p-6 bg-gray-50 flex justify-between items-center rounded-b-2xl">
          <button
            onClick={() => addStep > 1 && setAddStep((prev) => prev - 1)}
            className={`px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all ${addStep > 1 ? "text-gray-600 hover:bg-gray-200 cursor-pointer" : "text-gray-300 cursor-not-allowed"}`}
          >
            PREVIOUS
          </button>

          {addStep < 3 ? (
            <button
              onClick={() => setAddStep((prev) => prev + 1)}
              className="bg-[#2b3c4d] text-white px-8 py-2.5 rounded-lg font-bold text-sm tracking-wide cursor-pointer hover:bg-[#1a2530] transition shadow-md flex items-center gap-2"
            >
              CONTINUE <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={() => setShowPaymentModal(true)}
              className="bg-[#6a1b9a] text-white px-10 py-2.5 rounded-lg font-bold text-sm tracking-wide cursor-pointer hover:bg-[#4a148c] hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md flex items-center gap-2"
            >
              <CheckCircle size={16} /> PROCEED TO PAYMENT
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // ==========================================
  // RENDER: PROFILE
  // ==========================================
  const renderProfile = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your personal and company information.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <User size={20} className="text-[#6a1b9a]" /> Personal Details
          </h3>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-[#6a1b9a]">*</span>
              </label>
              <input
                type="text"
                defaultValue="Ajith K"
                className="w-full rounded-xl border-gray-200 border px-4 py-3 text-sm focus:border-[#6a1b9a] focus:ring-1 focus:ring-[#6a1b9a] outline-none transition-all shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-[#6a1b9a]">*</span>
              </label>
              <input
                type="email"
                defaultValue="ajithk102002@gmail.com"
                readOnly
                className="w-full rounded-xl border-gray-200 bg-gray-50 text-gray-500 border px-4 py-3 text-sm cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-[#6a1b9a]">*</span>
              </label>
              <input
                type="text"
                defaultValue="+91 9566019538"
                readOnly
                className="w-full rounded-xl border-gray-200 bg-gray-50 text-gray-500 border px-4 py-3 text-sm cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Company Name <span className="text-[#6a1b9a]">*</span>
              </label>
              <input
                type="text"
                placeholder="CreativeBikerz"
                className="w-full rounded-xl border-gray-200 border px-4 py-3 text-sm focus:border-[#6a1b9a] focus:ring-1 focus:ring-[#6a1b9a] outline-none transition-all shadow-sm"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Company Address <span className="text-[#6a1b9a]">*</span>
              </label>
              <textarea
                rows="3"
                placeholder="Enter full address"
                className="w-full rounded-xl border-gray-200 border px-4 py-3 text-sm focus:border-[#6a1b9a] focus:ring-1 focus:ring-[#6a1b9a] outline-none transition-all resize-none shadow-sm"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-10 pt-6 border-t border-gray-100">
            <button className="px-8 py-2.5 rounded-lg font-bold text-sm tracking-wide cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors">
              CANCEL
            </button>
            <button className="bg-[#6a1b9a] text-white px-8 py-2.5 rounded-lg font-bold text-sm tracking-wide cursor-pointer hover:bg-[#4a148c] shadow-md transition-all">
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // ==========================================
  // RENDER: CHANGE PASSWORD
  // ==========================================
  const ChangePasswordComponent = () => {
    // Add state to toggle visibility for both fields independently
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const renderChangePassword = () => (
      <div className="space-y-6 animate-fadeIn">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Security</h2>
            <p className="text-sm text-gray-500 mt-1">
              Update your password to keep your account secure.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl border border-gray-100 max-w-3xl overflow-hidden">
          <div className="bg-gray-50 p-6 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Lock size={20} className="text-[#6a1b9a]" /> Change Password
            </h3>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              {/* New Password Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full rounded-xl border-gray-200 border pl-4 pr-11 py-3 text-sm focus:border-[#6a1b9a] focus:ring-1 focus:ring-[#6a1b9a] outline-none transition-all shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm New Password Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full rounded-xl border-gray-200 border pl-4 pr-11 py-3 text-sm focus:border-[#6a1b9a] focus:ring-1 focus:ring-[#6a1b9a] outline-none transition-all shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-sm text-blue-600 bg-blue-50 p-4 rounded-xl border border-blue-100">
              <div className="mt-0.5">
                <Lock size={16} />
              </div>
              <p>
                Password must be at least 6 characters long and include a mix of
                letters and numbers.
              </p>
            </div>

            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-100">
              <button className="px-8 py-2.5 rounded-lg font-bold text-sm tracking-wide cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors">
                CANCEL
              </button>
              <button className="bg-[#6a1b9a] text-white px-8 py-2.5 rounded-lg font-bold text-sm tracking-wide cursor-pointer hover:bg-[#4a148c] shadow-md transition-all">
                UPDATE PASSWORD
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    return renderChangePassword();
  };

  // ==========================================
  // MAIN RENDER
  // ==========================================
  return (
    <div className="flex min-h-screen bg-[#f8f9fc] font-sans relative selection:bg-purple-200 selection:text-purple-900">
      {/* SIDEBAR */}
      <aside className="w-[280px] bg-white border-r border-gray-200 flex flex-col z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)] fixed h-full">
        <div className="bg-gradient-to-br from-[#6a1b9a] to-[#4a148c] text-white pt-12 pb-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute opacity-10 -right-4 -top-4">
            <User size={100} />
          </div>
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/50 flex items-center justify-center mb-4 shadow-lg text-2xl font-bold">
            AK
          </div>
          <h2 className="text-xl font-bold tracking-wide">Ajith K</h2>
          <p className="text-sm font-medium text-purple-100 mt-1">
            Advertiser Account
          </p>
        </div>

        <nav className="flex-1 flex flex-col py-6 px-4 gap-2">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-3.5 flex items-center rounded-xl transition-all duration-200 cursor-pointer group ${
                  isActive
                    ? "bg-purple-50 text-[#6a1b9a] font-bold shadow-sm"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-800 font-medium"
                }`}
              >
                <div
                  className={`mr-3 transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                >
                  {item.icon}
                </div>
                <span className="text-sm">{item.id}</span>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* CENTER CONTENT */}
      <main className="flex-1 p-10 ml-[280px] overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Global Header Row with Back to Home Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => navigate("/")}
              className="group flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide hover:bg-purple-50 hover:border-purple-200 hover:text-[#6a1b9a] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <ArrowLeft
                size={18}
                className="text-gray-400 group-hover:text-[#6a1b9a] transition-colors duration-300"
              />
              BACK TO HOME
            </button>
          </div>

          {activeTab === "Dashboard" && renderDashboard()}
          {activeTab === "Manage Videos" &&
            (videoView === "list" ? renderVideoList() : renderAddVideoStep())}
          {activeTab === "Manage Profile" && renderProfile()}
          {activeTab === "Change Password" && <ChangePasswordComponent />}

          {/* Fallback */}
          {activeTab === "Manage Transactions" && (
            <div className="bg-white p-12 rounded-2xl text-center text-gray-400 shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
              <CreditCard size={48} className="mb-4 text-gray-200" />
              <h2 className="text-2xl font-bold mb-2 text-gray-700">
                {activeTab}
              </h2>
              <p>Transaction history and billing info will appear here.</p>
            </div>
          )}
        </div>
      </main>

      {/* UPGRADED PROFESSIONAL PAYMENT MODAL */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f172a]/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all translate-y-0 relative">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#6a1b9a] to-[#4a148c] p-6 text-white text-center relative">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/20 p-1 rounded-lg transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg text-[#6a1b9a]">
                <CreditCard size={28} />
              </div>
              <h3 className="font-bold text-lg tracking-wide">
                Checkout Summary
              </h3>
              <p className="text-purple-100 text-sm mt-1">
                Review your video campaign order
              </p>
            </div>

            {/* Receipt Body */}
            <div className="p-8 bg-gray-50">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">
                    Campaign Title
                  </span>
                  <span className="text-gray-800 font-bold truncate max-w-[150px]">
                    Summer Promo
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">
                    Selected Package
                  </span>
                  <span className="text-gray-800 font-bold">100 Views</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Base Amount</span>
                  <span className="text-gray-800 font-bold">₹ 1,000.00</span>
                </div>
                <div className="border-t border-dashed border-gray-200 my-2 pt-4 flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">GST (18%)</span>
                  <span className="text-[#6a1b9a] font-bold">+ ₹ 180.00</span>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center p-4 bg-[#2b3c4d] rounded-xl text-white shadow-md">
                <span className="font-medium">Total Payable</span>
                <span className="text-2xl font-bold flex items-center">
                  <span className="text-lg mr-1">₹</span>1,180.00
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-white border-t border-gray-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setShowPaymentModal(false);
                  setVideoView("list");
                }}
                className="w-full bg-[#6a1b9a] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide cursor-pointer hover:bg-[#4a148c] hover:shadow-lg transition-all flex justify-center items-center gap-2"
              >
                <Lock size={16} /> PAY SECURELY NOW
              </button>
              <p className="text-center text-xs text-gray-400 font-medium">
                Secured by 256-bit encryption
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertiserDashboard;
