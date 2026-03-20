import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, Lock, Info, AlertTriangle, 
  Coins, Eye, FileText, ShieldCheck, 
  UserX, Cookie, Mail, ChevronRight,
  Download, Printer, Scale, Database,
  Fingerprint, Globe
} from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'introduction', label: 'Introduction', icon: <Lock className="w-4 h-4" /> },
    { id: 'collection', label: 'Data Collection', icon: <Database className="w-4 h-4" /> },
    { id: 'usage', label: 'Processing Purposes', icon: <Scale className="w-4 h-4" /> },
    { id: 'payment-warning', label: 'Anti-Fraud Policy', icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'currency', label: 'FB Score System', icon: <Coins className="w-4 h-4" /> },
    { id: 'cookies', label: 'Tracking Tech', icon: <Cookie className="w-4 h-4" /> },
    { id: 'rights', label: 'User Rights', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <div className="animate-in fade-in duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-900 text-white rounded-2xl flex items-center justify-center font-black">01</div>
              <h2 className="text-3xl font-bold tracking-tight">Scope of Agreement</h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
              <p className="text-lg">
                By accessing FutureBelieve, you acknowledge that our relationship is strictly that of a <span className="font-bold text-purple-900">Contractee (Company)</span> and an <span className="font-bold text-purple-900">Independent Contractor (User)</span>.
              </p>
              <div className="mt-8 p-6 bg-purple-50/50 rounded-2xl border border-purple-100 flex gap-4">
                <UserX className="w-6 h-6 text-purple-600 shrink-0" />
                <p className="text-sm text-purple-800 leading-relaxed italic">
                  "This status dictates that data collected is used solely for the fulfillment of task-based performance and statutory compliance for freelancers."
                </p>
              </div>
            </div>
          </div>
        );

      case 'collection':
        return (
          <div className="animate-in fade-in duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center font-black">02</div>
              <h2 className="text-3xl font-bold tracking-tight">Data We Collect</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Fingerprint className="w-5 h-5" />, t: "KYC Data", d: "Legal name, tax identification (PAN/GST), and bank details for payouts." },
                { icon: <Globe className="w-5 h-5" />, t: "Network Data", d: "IP Address, device fingerprints, and geolocation for fraud prevention." },
                { icon: <FileText className="w-5 h-5" />, t: "Task Logs", d: "Time-stamped records of task completion and interaction quality." },
                { icon: <Mail className="w-5 h-5" />, t: "Communication", d: "History of support tickets and official email correspondence." }
              ].map((item, i) => (
                <div key={i} className="p-5 border border-purple-50 rounded-2xl bg-purple-50/30 group hover:bg-purple-50 transition-colors">
                  <div className="text-purple-600 mb-2">{item.icon}</div>
                  <h4 className="font-bold text-slate-900">{item.t}</h4>
                  <p className="text-sm text-slate-500 leading-snug">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'usage':
        return (
          <div className="animate-in fade-in duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center font-black">03</div>
              <h2 className="text-3xl font-bold tracking-tight">Processing Purposes</h2>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-white border-2 border-purple-100 rounded-3xl">
                <h4 className="font-bold text-slate-900 mb-2">Legal Basis for Processing</h4>
                <p className="text-slate-600 text-sm">We process your data under the "Contractual Necessity" provision of data protection laws. This allows us to:</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Calculate performance-based rewards accurately.
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Generate mandatory tax withholding reports.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'payment-warning':
        return (
          <div className="animate-in fade-in duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-800 text-white rounded-2xl flex items-center justify-center font-black">!</div>
              <h2 className="text-3xl font-bold tracking-tight">Zero-Fee Policy</h2>
            </div>
            <div className="bg-purple-900 p-8 rounded-[2rem] border border-purple-800">
              <h3 className="text-xl font-bold text-purple-100 mb-4 italic">"FutureBelieve is 100% Free"</h3>
              <p className="text-purple-200/80 leading-relaxed mb-6">
                We strictly prohibit the collection of "onboarding," "registration," or "security" fees. Any entity asking for money in exchange for FutureBelieve access is fraudulent.
              </p>
              <div className="p-4 bg-purple-800/50 rounded-xl border border-purple-700">
                <p className="text-xs text-purple-300 font-bold uppercase mb-1">Liability Disclaimer</p>
                <p className="text-sm text-purple-100">The Company is not liable for losses resulting from unauthorized third-party transactions.</p>
              </div>
            </div>
          </div>
        );

      case 'currency':
        return (
          <div className="animate-in fade-in duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-200 text-purple-900 rounded-2xl flex items-center justify-center font-black text-xl italic">FB</div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">FB Score Metric</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed font-medium">
                  The "FB Score" is a proprietary performance metric and virtual rewards system used to track contractor efficiency.
                </p>
                <ul className="space-y-3">
                  {["No Cash Value", "Non-Transferable", "Internal-Only"].map((tag) => (
                    <li key={tag} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
                <p className="text-xs text-purple-400 font-bold uppercase mb-3">Audit Rights</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  FutureBelieve reserves the right to reset or cancel FB Scores based on audit results or platform abuse without prior notice.
                </p>
              </div>
            </div>
          </div>
        );

      case 'cookies':
        return (
          <div className="animate-in fade-in duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center font-black">
                <Cookie className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Tracking Tech</h2>
            </div>
            <p className="text-slate-600 mb-6">We use minimal tracking to ensure platform security and session persistence.</p>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-purple-100">
                  <th className="py-4 text-xs font-bold text-purple-400 uppercase tracking-wider">Type</th>
                  <th className="py-4 text-xs font-bold text-purple-400 uppercase tracking-wider">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-purple-50">
                  <td className="py-4 font-bold text-slate-700">Session Cookies</td>
                  <td className="py-4 text-slate-500">Maintains login state and security tokens.</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-slate-700">Local Storage</td>
                  <td className="py-4 text-slate-500">Stores UI preferences (e.g., Dark Mode settings).</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case 'rights':
        return (
          <div className="animate-in fade-in duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center font-black">04</div>
              <h2 className="text-3xl font-bold tracking-tight">Governance & Rights</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: "Right to Rectification", d: "Modify incorrect identity data instantly." },
                { t: "Data Portability", d: "Request an export of your activity logs." },
                { t: "Right to Erasure", d: "Request full account and data deletion." },
                { t: "Processing Objection", d: "Withdraw consent for marketing data." }
              ].map((r, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl hover:border-purple-200 hover:shadow-md transition-all group">
                  <ShieldCheck className="w-6 h-6 text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-slate-900 mb-1">{r.t}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-purple-100 scroll-smooth">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">FutureBelieve<span className="text-purple-600">.</span></span>
          </div>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-purple-50 rounded-full transition-colors text-slate-500">
              <Printer className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center gap-2 bg-purple-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-800 transition-all">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <aside className="lg:w-1/4">
            <div className="sticky top-28">
              <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-50 bg-purple-50/30">
                  <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest">Legal Directory</h3>
                </div>
                <nav className="p-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 group mb-1 ${
                        activeSection === section.id 
                        ? 'bg-purple-50 text-purple-700' 
                        : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`${activeSection === section.id ? 'text-purple-600' : 'text-slate-400'}`}>
                          {section.icon}
                        </span>
                        <span className="text-sm font-bold">{section.label}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === section.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-6 bg-purple-700 rounded-3xl p-6 text-white shadow-xl shadow-purple-200 relative overflow-hidden">
                <Mail className="w-12 h-12 text-purple-400/30 absolute -right-2 -bottom-2 rotate-12" />
                <h4 className="font-bold text-lg mb-1">Legal Oversight</h4>
                <p className="text-purple-100 text-xs mb-4 leading-relaxed">Questions regarding data processing?</p>
                <a href="mailto:legal@futurebelieve.in" className="inline-block w-full py-3 bg-white text-purple-700 rounded-xl text-center text-xs font-bold hover:bg-purple-50 transition-colors">
                  Contact Legal Team
                </a>
              </div>
            </div>
          </aside>

          <main className="lg:w-3/4 space-y-8">
            <header className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                LIVE UPDATED FOR 2026
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
                Privacy & Data <br/><span className="text-purple-600">Governance Policy</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                This document governs the relationship between you and FutureBelieve Networks Pvt. Ltd. and outlines our strict commitment to data integrity.
              </p>
            </header>

            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-8 md:p-16 min-h-[500px]">
               {renderActiveSection()}
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-center space-y-6 shadow-2xl shadow-purple-900/20">
              <h2 className="text-white text-2xl md:text-3xl font-bold">Ready to proceed?</h2>
              <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
                By continuing to use FutureBelieve, you acknowledge that you are at least 18 years of age and agree to our data processing terms.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <button className="bg-purple-600 hover:bg-purple-500 text-white px-12 py-4 rounded-2xl font-bold transition-all hover:-translate-y-1 shadow-lg shadow-purple-600/30">
                  I Accept & Agree
                </button>
                <button className="bg-slate-800 hover:bg-slate-700 text-white px-12 py-4 rounded-2xl font-bold transition-all">
                  Decline
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-sm">
          <p>© 2026 FutureBelieve Networks Pvt. Ltd. Corporate ID: U12345IN2026PTC000</p>
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;