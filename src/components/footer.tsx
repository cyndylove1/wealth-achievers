import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f2a44] pt-20 pb-10 md:px-6 px-4 xl:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top gold rule */}
        <div className="w-full h-px bg-[#F5A623]/30 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-px h-8 bg-[#F5A623]" />
              <div className="pl-2">
                <h2 className="font-display text-xl font-bold leading-none tracking-tight uppercase text-white">
                  Wealth
                </h2>
                <p className="text-[9px] tracking-[0.35em] font-medium text-[#F5A623] uppercase">
                  Achievers
                </p>
              </div>
            </div>

            <p className="text-white/40 leading-relaxed text-sm max-w-xs font-light">
              Empowering individuals and families to achieve financial
              independence through expert guidance and proven strategies.
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 border border-white/15 text-white/40 flex items-center justify-center hover:border-[#F5A623] hover:text-[#F5A623] transition-all cursor-pointer"
                >
                  <Icon size={15} />
                </div>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Our Services
            </h3>
            <div className="w-8 h-px bg-[#F5A623] mb-5" />
            <ul className="space-y-3 text-white/40 text-sm font-light">
              {[
                "Insurance Protection",
                "Retirement Strategies",
                "Education Planning",
                "Estate Planning",
                "Debt Management",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#F5A623] transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Quick Links
            </h3>
            <div className="w-8 h-px bg-[#F5A623] mb-5" />
            <ul className="space-y-3 text-sm font-light">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Consultation", to: "/consultation" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/40 hover:text-[#F5A623] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Get In Touch
            </h3>
            <div className="w-8 h-px bg-[#F5A623] mb-5" />
            <ul className="space-y-4 text-white/40 text-sm font-light">
              <li className="flex gap-3 items-start">
                <MapPin size={15} className="text-[#F5A623] shrink-0 mt-0.5" />
                <span>
                  9920 Franklin Square Drive
                  <br />
                  Nottingham MD 21236
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="text-[#F5A623] shrink-0" />
                <span>+1 (443) 591-0360</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={15} className="text-[#F5A623] shrink-0 mt-0.5" />
                <span className="break-all">wfgwealthachievers@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-white/25 font-light">
            <p>© 2026 Wealth Achievers. All Rights Reserved.</p>
            <p>Website By: NGE Technologies</p>
          </div>
          <div className="flex gap-6 text-xs text-white/25 font-light">
            <span className="hover:text-[#F5A623] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-[#F5A623] cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
