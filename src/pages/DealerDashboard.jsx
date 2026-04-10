import React, { useState } from "react";
import {
  Users,
  MapPin,
  BarChart3,
  Calendar,
  TrendingUp,
  Layers,
  Building,
  LogOut,
  X,
  Wallet,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

// Mock Data for Levels
const levelsData = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  level: `Level ${i + 1}`,
  totalScore: Math.floor(Math.random() * 10000) + 5000,
  todayScore: Math.floor(Math.random() * 500) + 100,
}));

const getStudentsForLevel = (levelIndex) => {
  return [
    {
      id: `STU-L${levelIndex + 1}-001`,
      lastLogin: "10:30 AM",
      totalScore: 1200 + levelIndex * 100,
      todayScore: 120,
      status: "Active",
    },
    {
      id: `STU-L${levelIndex + 1}-002`,
      lastLogin: "11:10 AM",
      totalScore: 980 + levelIndex * 50,
      todayScore: 90,
      status: "Inactive",
    },
    {
      id: `STU-L${levelIndex + 1}-003`,
      lastLogin: "12:00 PM",
      totalScore: 1500 + levelIndex * 200,
      todayScore: 200,
      status: "Active",
    },
    {
      id: `STU-L${levelIndex + 1}-004`,
      lastLogin: "01:15 PM",
      totalScore: 2100 + levelIndex * 150,
      todayScore: 350,
      status: "Active",
    },
  ];
};

const formatCurrency = (amount) => {
  return amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

// --- CORE WITHDRAWAL LOGIC ---
const totalGeneratedScore = levelsData.reduce(
  (sum, lvl) => sum + lvl.totalScore,
  0,
);

// Step 1: Total Score / 2
const withdrawableAmount = totalGeneratedScore / 2;

// Step 2: GST 18% of the withdrawable amount
const gstAmount = withdrawableAmount * 0.18;

// Step 3: Final amount after GST
const finalAmount = withdrawableAmount - gstAmount;

const DealerDashboard = () => {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  const currentTableData = getStudentsForLevel(selectedLevel);

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-800 font-sans overflow-hidden">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-10 shadow-sm">
        {/* Profile Header (Brand Color Area) */}
        <div className="bg-[#612c7d] py-10 flex flex-col items-center justify-center relative overflow-hidden">
          <Users className="absolute -right-6 -top-6 w-36 h-36 text-white/5 pointer-events-none" />

          <div className="h-20 w-20 rounded-full border border-white/30 flex items-center justify-center text-3xl font-bold bg-white/10 text-white mb-3 shadow-md relative z-10">
            AK
          </div>
          <h2 className="text-xl font-bold text-white relative z-10 tracking-wide">
            Ajith K
          </h2>
          <p className="text-xs text-[#c7a6e0] font-medium mt-1 relative z-10">
            Dealer Account
          </p>
        </div>

        {/* Level Navigation */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {levelsData.map((lvl, index) => (
            <button
              key={lvl.id}
              onClick={() => setSelectedLevel(index)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-sm ${
                selectedLevel === index
                  ? "bg-[#612c7d]/10 text-[#612c7d] font-bold"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700 font-medium"
              }`}
            >
              <Layers
                size={18}
                className={
                  selectedLevel === index ? "text-[#612c7d]" : "text-slate-400"
                }
              />
              {lvl.level}
            </button>
          ))}
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-slate-100">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-slate-500 hover:text-slate-800 rounded-lg transition-colors text-sm font-semibold">
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* RIGHT SIDE (MAIN CONTENT) */}
      <main className="flex-1 overflow-y-auto p-5 md:p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header & Withdraw Button */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-extrabold text-slate-800">
                Overview
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Manage your network and track performance.
              </p>
            </div>
            <button
              onClick={() => setIsWithdrawModalOpen(true)}
              className="flex items-center gap-2 bg-[#612c7d] hover:bg-[#4a2160] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-[#612c7d]/30 transition-all active:scale-95"
            >
              <Wallet size={18} />
              Withdraw Funds
            </button>
          </div>

          {/* Top Overall Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <CompactStatCard
              icon={<MapPin size={18} />}
              title="Region"
              value="Tamil Nadu"
            />
            <CompactStatCard
              icon={<Building size={18} />}
              title="District"
              value="Chennai"
            />
            <CompactStatCard
              icon={<Users size={18} />}
              title="Total Students"
              value="1,200"
            />
            <CompactStatCard
              icon={<BarChart3 size={18} />}
              title="Today's Logins"
              value="850"
            />
          </div>

          {/* Central Balance Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <CompactStatCard
              icon={<TrendingUp size={20} />}
              title="Total Generated Score"
              value={`₹ ${formatCurrency(totalGeneratedScore)}`}
              accent={true}
            />
            <CompactStatCard
              icon={<Calendar size={20} />}
              title="Today's Score"
              value="₹ 3,200.00"
              accent={true}
            />
          </div>

          {/* Selected Level specific content */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="p-4 md:p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50 rounded-t-xl">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span className="text-[#612c7d]">
                  {levelsData[selectedLevel].level}
                </span>{" "}
                Data
              </h2>
              <div className="flex gap-6">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">
                    Total Score
                  </p>
                  <p className="text-lg font-bold text-slate-800">
                    ₹ {levelsData[selectedLevel].totalScore.toLocaleString()}
                  </p>
                </div>
                <div className="w-px bg-slate-200"></div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">
                    Today's Score
                  </p>
                  <p className="text-lg font-bold text-[#612c7d]">
                    + ₹ {levelsData[selectedLevel].todayScore.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Students Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-5">Login ID</th>
                    <th className="py-3 px-5">Last Login</th>
                    <th className="py-3 px-5">Total Score</th>
                    <th className="py-3 px-5">Today Score</th>
                    <th className="py-3 px-5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {currentTableData.map((student, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-5 font-bold text-slate-700">
                        {student.id}
                      </td>
                      <td className="py-3 px-5 text-slate-500 font-medium">
                        {student.lastLogin}
                      </td>
                      <td className="py-3 px-5 font-bold text-slate-700">
                        ₹ {student.totalScore.toLocaleString()}
                      </td>
                      <td className="py-3 px-5 text-[#612c7d] font-bold">
                        + ₹ {student.todayScore}
                      </td>
                      <td className="py-3 px-5">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                            student.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              student.status === "Active"
                                ? "bg-green-500"
                                : "bg-slate-400"
                            }`}
                          ></span>
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* --- UPGRADED WITHDRAW POPUP MODAL --- */}
      {isWithdrawModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-100">
            
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h3 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
                <Wallet className="text-[#612c7d]" size={24} />
                Withdraw Funds
              </h3>
              <button
                onClick={() => setIsWithdrawModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 hover:bg-slate-200 p-1.5 rounded-xl transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {/* Context: Total Score */}
              <div className="flex justify-between items-center mb-5 px-1">
                <span className="text-sm font-semibold text-slate-500">Total Generated Score</span>
                <span className="text-sm font-bold text-slate-800">
                  ₹ {formatCurrency(totalGeneratedScore)}
                </span>
              </div>

              {/* Step 1: Base Withdrawable (50%) */}
              <div className="bg-gradient-to-br from-[#612c7d]/5 to-white rounded-2xl p-5 mb-5 border border-[#612c7d]/20 shadow-sm relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 text-[#612c7d]/10 transition-transform group-hover:scale-110 duration-500">
                  <Wallet size={100} />
                </div>
                <div className="relative z-10">
                  <p className="text-xs text-[#612c7d] font-bold uppercase tracking-wider mb-1">
                    Eligible Amount (50%)
                  </p>
                  <p className="text-3xl font-black text-[#612c7d]">
                    ₹ {formatCurrency(withdrawableAmount)}
                  </p>
                </div>
              </div>

              {/* Step 2: Deductions Breakdown */}
              <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">Platform Split</span>
                  <span className="text-slate-700 font-bold">- 50%</span>
                </div>
                <div className="w-full h-px bg-slate-200/60"></div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    GST Deduction (18%)
                  </span>
                  <span className="text-red-500 font-bold">
                    - ₹ {formatCurrency(gstAmount)}
                  </span>
                </div>
              </div>

              {/* Step 3: Final Payout amount */}
              <div className="border-t-2 border-dashed border-slate-200 pt-5 mb-6 px-1">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      You Will Receive
                    </p>
                    <p className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <ShieldCheck size={14} className="text-green-500" /> Secure Bank Transfer
                    </p>
                  </div>
                  <span className="text-3xl font-black text-[#16a34a] tracking-tight">
                    ₹ {formatCurrency(finalAmount)}
                  </span>
                </div>
              </div>

              {/* Call to Action */}
              <button 
                className="w-full bg-[#612c7d] hover:bg-[#4a2160] text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-[#612c7d]/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                onClick={() => {
                  alert(`Withdrawal of ₹${formatCurrency(finalAmount)} initiated successfully!`);
                  setIsWithdrawModalOpen(false);
                }}
              >
                Confirm Transfer 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

/* COMPACT REUSABLE STAT CARD */
const CompactStatCard = ({ icon, title, value, accent = false }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl p-4 md:p-5 border transition-all ${
        accent
          ? "bg-[#612c7d] border-[#4a2160] shadow-md shadow-[#612c7d]/20"
          : "bg-white border-slate-200 shadow-sm"
      } flex items-center gap-4`}
    >
      <div
        className={`p-2.5 rounded-lg flex-shrink-0 ${
          accent ? "bg-white/15 text-white" : "bg-[#612c7d]/10 text-[#612c7d]"
        }`}
      >
        {icon}
      </div>
      <div>
        <p
          className={`text-[11px] uppercase tracking-wider font-bold mb-0.5 ${
            accent ? "text-[#c7a6e0]" : "text-slate-500"
          }`}
        >
          {title}
        </p>
        <h3
          className={`text-xl md:text-2xl font-extrabold tracking-tight ${
            accent ? "text-white" : "text-slate-800"
          }`}
        >
          {value}
        </h3>
      </div>
    </div>
  );
};

export default DealerDashboard;