import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedItem } from "./animatedItem";

export default function Footer() {
  return (
    <footer className="bg-[#eef3f2] pt-20 pb-10 md:px-6 px-4 xl:px-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <AnimatedItem index={0} delay={0.05}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#32b291] flex items-center justify-center rounded shadow-sm">
                  <span className="text-xl text-white font-black">W</span>
                </div>
                <div className="text-slate-900">
                  <h2 className="text-lg font-black leading-none tracking-tight">
                    WEALTH
                  </h2>
                  <p className="text-[8px] tracking-[0.3em] font-bold opacity-60">
                    ACHIEVERS
                  </p>
                </div>
              </div>
            </AnimatedItem>
            <AnimatedItem index={1} delay={0.15}>
              <p className="text-slate-600 leading-relaxed text-sm max-w-xs">
                Empowering individuals to reach financial independence through
                expert mentorship and strategic wealth protection.
              </p>
            </AnimatedItem>

            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <div
                  key={index}
                  className="w-9 h-9 border border-[#32b291]/30 text-[#32b291] rounded-full flex items-center justify-center hover:bg-[#32b291] hover:text-white transition-all cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <AnimatedItem index={2} delay={0.25}>
              <h3 className="text-lg text-slate-900 font-bold mb-6 border-b-2 border-[#32b291] w-fit">
                Our Services
              </h3>
            </AnimatedItem>
            <AnimatedItem index={3} delay={0.35}>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="hover:text-[#32b291] transition-colors cursor-pointer">
                  Insurance Protection
                </li>
                <li className="hover:text-[#32b291] transition-colors cursor-pointer">
                  Retirement Strategies
                </li>
                <li className="hover:text-[#32b291] transition-colors cursor-pointer">
                  Business Strategies
                </li>
                <li className="hover:text-[#32b291] transition-colors cursor-pointer">
                  Building Entrepreneurs
                </li>
              </ul>
            </AnimatedItem>
          </div>

          {/* Quick Links Column */}
          <div>
            <AnimatedItem index={4} delay={0.45}>
              <h3 className="text-lg text-slate-900 font-bold mb-6 border-b-2 border-[#32b291] w-fit">
                Quick Links
              </h3>
            </AnimatedItem>
            <AnimatedItem index={5} delay={0.55}>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#32b291] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#32b291] transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/consultation"
                    className="hover:text-[#32b291] transition-colors"
                  >
                    Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-[#32b291] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#32b291] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </AnimatedItem>
          </div>

          {/* Contact Column */}
          <div>
            <AnimatedItem index={6} delay={0.65}>
              <h3 className="text-lg text-slate-900 font-bold mb-6 border-b-2 border-[#32b291] w-fit">
                Get In Touch
              </h3>
            </AnimatedItem>
            <AnimatedItem index={7} delay={0.75}>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex gap-3 items-start">
                  <MapPin size={18} className="text-[#32b291] shrink-0" />
                  <span>
                    9920 Franklin Square Drive
                    <br />
                    Nottingham MD 21236
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone size={18} className="text-[#32b291] shrink-0" />
                  <span>+1 (443) 591-0360</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail size={18} className="text-[#32b291] shrink-0" />
                  <span className="truncate">wfgwealthachievers@gmail.com</span>
                </li>
              </ul>
            </AnimatedItem>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-slate-400 font-[300]">
            <AnimatedItem index={8} delay={0.85}>
              <p>© 2026 Wealth Achievers. All Rights Reserved.</p>
            </AnimatedItem>
            <AnimatedItem index={9} delay={0.95}>
              <p>Website By: NGE Technologies</p>
            </AnimatedItem>
          </div>
        </div>
      </div>
    </footer>
  );
}
