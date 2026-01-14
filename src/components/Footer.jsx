import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
      { name: "Dealers", href: "/dealers" },
      { name: "Contact", href: "/contact" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Dealer Login", href: "/login" }, // Assuming you might have a direct route
    ],
  };

  return (
    <footer className="relative bg-[#050505] text-slate-300 border-t border-white/5 font-sans overflow-hidden">
      
      {/* Background Ambience (Matches your Hero vibe) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-10">
        
        {/* --- Top Section: Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <Link to="/">
                {/* Ensure this path matches your Navbar logo path */}
              <img src="/LOGO.png" alt="Logo" className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm font-light leading-relaxed text-slate-400 max-w-xs">
              Empowering dealers and advertisers with the next generation of digital infrastructure. Join the future today.
            </p>
            
            {/* PlayStore Button */}
            <div className="mt-2">
                 <img 
                    src="/PlayStore Png.png" 
                    alt="Get it on Google Play" 
                    className="h-12 cursor-pointer hover:scale-105 transition-transform opacity-90 hover:opacity-100" 
                 />
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Stay Connected</h4>
            
            {/* Newsletter Input */}
            <div className="relative mb-8 group">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                    <ArrowRight size={18} />
                </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                    <Mail size={16} className="text-purple-500" />
                    <span>info@futurebelieve.in</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                    <MapPin size={16} className="text-purple-500" />
                    <span>Chennai, India</span>
                </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Socials & Copy --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-medium">
            © {currentYear} Future Believe. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
            ].map((social, index) => (
                <a 
                    key={index} 
                    href={social.href} 
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 group"
                >
                    <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;