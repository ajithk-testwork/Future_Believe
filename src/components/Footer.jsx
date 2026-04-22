import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const footerLinks = {
    company: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Dealers", href: "/dealers" },
    ],
    support: [
      { name: "Terms of Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  return (
    <footer className="relative bg-[#612c7d] text-white border-t border-white/10 font-sans overflow-hidden">
      {/* Radiant Accent Glow - Adds depth to the solid brand color */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-9xl mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <Link to="/">
              <img
                src="/LOGO.png"
                alt="Logo"
                className="h-16 object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm font-light leading-relaxed text-purple-50/80 max-w-xs">
              "Empowering the next generation of audience with a digital
              ecosystem built for growth. Believe in your journey, join the
              future today."
            </p>

            <div className="mt-2">
              <img
                src="/PlayStore Png.png"
                alt="Get it on Google Play"
                className="h-16 cursor-pointer hover:scale-105 transition-transform opacity-95 hover:opacity-100"
              />
            </div>
          </div>

          {/* Links: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold tracking-[0.18em] text-sm mb-6 uppercase">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-sm text-purple-100/70 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Support */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold tracking-wider text-sm mb-6 uppercase">
              Support
            </h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-sm text-purple-100/70 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold tracking-widest text-sm mb-6 uppercase">
              Stay Connected
            </h4>

            <div className="relative mb-8 group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black/10 border border-white/20 rounded-full py-4 pl-6 pr-14 text-sm text-white placeholder:text-purple-200/50 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#612c7d] hover:bg-purple-50 transition-colors shadow-lg">
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-purple-50/80">
                <Mail size={16} className="text-white" />
                <span>futurebelievein@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-purple-50/80">
                <MapPin size={16} className="text-white" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-purple-200/60 font-medium">
            © {currentYear} Future Believe. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: "https://www.facebook.com/Future-Believe-312330619322989/?modal=admin_todo_tour" },
              { icon: Twitter, href: "https://twitter.com/FutureBelieve1" },
              { icon: Youtube, href: "https://www.youtube.com/@futurebelieve7131" },
              { icon: Instagram, href: "https://www.instagram.com/futurebelieve.in?igsh=MW03NGdsYWp5d2s1Mw==" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#612c7d] transition-all duration-300 group"
              >
                <social.icon
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;