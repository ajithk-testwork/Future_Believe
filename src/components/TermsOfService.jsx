import React from 'react';
import { 
  Gavel, RefreshCw, AlertTriangle, Coins, 
  ShieldAlert, Globe, FileText, CheckCircle2,
  Lock, Info, Scale, ShieldCheck
} from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "March 19, 2026";

  return (
    <div className="min-h-screen mt-15 bg-white text-slate-800 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Branding & Meta */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-100 pb-8">
          <div>
            <span className="text-purple-600 font-bold tracking-widest text-xs uppercase">Legal Documentation</span>
            <h1 className="text-4xl font-light text-slate-900 mt-2">
              Terms of <span className="font-bold text-purple-900">Service</span>
            </h1>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-sm text-slate-500">Document ID: FB-TOS-2026-01</p>
            <p className="text-sm font-semibold text-purple-900">Effective: {lastUpdated}</p>
          </div>
        </div>

        {/* 01. Core Service Intro */}
        <section className="mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <Globe size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">1. Service Description & Scope</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">
                FutureBelieve provides a digital infrastructure that facilitates interactions between independent users and third-party advertising campaigns. Our platform serves as a technical intermediary; we do not own the campaigns, nor are we the direct employers of the users. By using the platform, you acknowledge that rewards are performance-based and contingent upon verified data from our partners.
              </p>
            </div>
          </div>
        </section>

        {/* 2-Column Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Usage & Conduct */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
            <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
              <FileText size={18} className="text-purple-600" /> 2. Usage & Conduct
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2"><span>•</span> <strong>Authorized Access:</strong> You may only access the service through our official mobile application or website.</li>
              <li className="flex gap-2"><span>•</span> <strong>Anti-Automation:</strong> Use of scripts, bots, or automated scrapers is a violation of federal anti-hacking laws.</li>
              <li className="flex gap-2"><span>•</span> <strong>Integrity:</strong> Users must not manipulate device IDs or use temporary/disposable email addresses.</li>
            </ul>
          </div>

          {/* Verification & Payouts */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
            <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
              <Coins size={18} className="text-amber-600" /> 3. Reward Verification
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2"><span>•</span> <strong>Advertiser Approval:</strong> Rewards are only credited once the third-party advertiser confirms a "Successful Event."</li>
              <li className="flex gap-2"><span>•</span> <strong>Currency:</strong> Rewards are "Points" or "Virtual Credits" and hold no real-world value until processed via official payout channels.</li>
              <li className="flex gap-2"><span>•</span> <strong>Pending Period:</strong> Transactions may stay "Pending" for 24–72 hours for fraud screening.</li>
            </ul>
          </div>
        </div>

        {/* High Alert / Security Section */}
        <div className="mb-12 bg-purple-900 rounded-3xl p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck size={28} /> 5. Fraud Prevention & Account Security
              </h3>
              <p className="text-purple-100 text-sm leading-relaxed mb-4">
                We employ sophisticated AI-driven detection systems. If our system flags your account for "Inconsistent Traffic" or "Multiple Device Usage," your balance will be frozen. FutureBelieve reserves the right to withhold payments if fraudulent activity is suspected.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-800 px-3 py-1 rounded-full text-xs font-mono tracking-tighter">IP_STRICT_CHECK</span>
                <span className="bg-purple-800 px-3 py-1 rounded-full text-xs font-mono tracking-tighter">DEVICE_FINGERPRINTING</span>
                <span className="bg-purple-800 px-3 py-1 rounded-full text-xs font-mono tracking-tighter">ZERO_TOLERANCE_POLICY</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <ShieldAlert size={100} className="text-purple-400 opacity-50" />
            </div>
          </div>
        </div>

        {/* Legal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-5 border border-slate-100 rounded-xl">
            <Scale size={20} className="text-slate-400 mb-3" />
            <h4 className="font-bold mb-2">Governing Law</h4>
            <p className="text-xs text-slate-500">Operated under Indian Jurisdiction. All disputes are subject to the courts of New Delhi.</p>
          </div>
          <div className="p-5 border border-slate-100 rounded-xl">
            <Lock size={20} className="text-slate-400 mb-3" />
            <h4 className="font-bold mb-2">Data Privacy</h4>
            <p className="text-xs text-slate-500">We comply with standard data protection regulations. We share data only when legally mandated.</p>
          </div>
          <div className="p-5 border border-slate-100 rounded-xl">
            <Info size={20} className="text-slate-400 mb-3" />
            <h4 className="font-bold mb-2">Service Continuity</h4>
            <p className="text-xs text-slate-500">Services are "AS-IS". We do not guarantee 100% uptime or campaign availability.</p>
          </div>
        </div>

        {/* Sticky-style Consent Bar */}
        <div className="bg-slate-900 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-white font-bold">Acknowledge Agreement</p>
              <p className="text-slate-400 text-sm">By continuing, you confirm you are 18+ and agree to the terms above.</p>
            </div>
          </div>
          <button className="w-full md:w-auto px-10 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow-lg shadow-black/20">
            Accept & Proceed
          </button>
        </div>

        <p className="mt-8 text-center text-slate-400 text-xs">
          Copyright © 2026 FutureBelieve Inc. • Privacy Policy • Cookie Policy
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;