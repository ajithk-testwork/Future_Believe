import React, { useState } from 'react';
import { 
  Search, MessageCircle, BookOpen, LifeBuoy, 
  ChevronRight, ArrowRight, ShieldCheck, 
  CreditCard, User, Zap, Globe, Mail
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using the platform and setting up your profile.",
      icon: <Zap className="w-6 h-6" />,
      articles: ["Account Setup", "Profile Verification", "First Task Guide"]
    },
    {
      title: "Payouts & Rewards",
      description: "Everything you need to know about FB Scores and bank transfers.",
      icon: <CreditCard className="w-6 h-6" />,
      articles: ["Redeeming FB Score", "Payment Schedule", "Tax Documentation"]
    },
    {
      title: "Security & Trust",
      description: "How we protect your data and tips for staying safe online.",
      icon: <ShieldCheck className="w-6 h-6" />,
      articles: ["Two-Factor Auth", "Reporting Fraud", "Privacy Controls"]
    },
    {
      title: "Task Management",
      description: "Guides on how to maximize your efficiency and score higher.",
      icon: <BookOpen className="w-6 h-6" />,
      articles: ["Quality Guidelines", "Audit Process", "Dispute Resolution"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      {/* --- Header Section --- */}
      <header className="bg-black pt-32 pb-20 px-6 relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            How can we help you today?
          </h1>
          
          <div className="relative group max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-600 transition-colors w-5 h-5" />
            <input 
              type="text"
              placeholder="Search for articles, guides, or keywords..."
              className="w-full pl-14 pr-6 py-5 bg-white rounded-2xl shadow-2xl shadow-purple-900/20 text-slate-700 outline-none focus:ring-2 focus:ring-purple-400 transition-all text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-purple-100 text-sm">
            <span>Popular:</span>
            <button className="underline hover:text-white transition-colors">Payout Status</button>
            <button className="underline hover:text-white transition-colors">KYC Verification</button>
            <button className="underline hover:text-white transition-colors">Forgot Password</button>
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="max-w-7xl mx-auto px-6 -mt-10 pb-20 relative z-20">
        
        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-purple-300 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {cat.description}
              </p>
              <ul className="space-y-3">
                {cat.articles.map((art, i) => (
                  <li key={i} className="flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800 cursor-pointer group/item">
                    {art} <ChevronRight className="w-3 h-3 ml-1 group-hover/item:translate-x-1 transition-transform" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- FAQ / Quick Links Section --- */}
        <section className="mt-24 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How long does it take to verify my KYC?", a: "Standard verification takes 24-48 business hours once all documents are uploaded correctly." },
                { q: "When are FB Scores converted to payouts?", a: "Conversion happens on the 1st and 15th of every month automatically." },
                { q: "Can I use multiple accounts?", a: "No, our policy strictly allows one account per individual to maintain platform integrity." }
              ].map((faq, i) => (
                <details key={i} className="group bg-white border border-slate-200 rounded-2xl">
                  <summary className="list-none p-6 flex justify-between items-center cursor-pointer font-bold text-slate-800">
                    {faq.q}
                    <div className="bg-slate-100 p-1 rounded-full group-open:rotate-180 transition-transform">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Sidebar: Still need help? */}
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Still need help?</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Our support team is available 24/7 for urgent technical issues.
              </p>
              <button className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> Live Chat
              </button>
            </div>

            <div className="bg-purple-100 rounded-[2rem] p-8">
              <h4 className="font-bold text-purple-900 mb-2">Email Support</h4>
              <p className="text-purple-800/60 text-sm mb-4">Expect a response within 4 hours.</p>
              <a href="mailto:support@futurebelieve.in" className="flex items-center gap-2 text-purple-700 font-bold hover:gap-3 transition-all">
                support@futurebelieve.in <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer Status --- */}
      <footer className="border-t border-slate-200 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              All Systems Operational
            </div>
            <span className="text-slate-400 text-xs">Last updated: March 2026</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-purple-600 transition-colors">Community Forum</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Developer API</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Status Page</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HelpCenter;