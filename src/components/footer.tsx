import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-(--secondary) text-white pt-16 pb-8 px-10">
      <div className="max-w-7xl mx-auto flex gap-32 mb-16">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-[#008b82] flex items-center justify-center rounded">
              <span className="text-2xl font-black">W</span>
            </div>
            <div>
              <h2 className="text-xl font-black leading-none">WEALTH</h2>
              <p className="text-xs tracking-[0.3em] font-bold opacity-80">
                ACHIEVERS
              </p>
            </div>
          </div>
          <p className="text-md leading-relaxed max-w-md">
            Wealth Achievers Is Committed To Making Financial Independence
            Accessible To Everyone.
          </p>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-xl text-(--primary) font-bold mb-6">
            Our Services
          </h3>
          <ul className="space-y-2 text-md whitespace-nowrap">
            <li>Insurance Protection</li>
            <li>Retirement Strategies</li>
            <li>Business Strategies</li>
            <li>Building Entrepreneurs</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-xl text-(--primary) font-bold mb-6">
            Contact Us
          </h3>
          <ul className="space-y-2 text-md whitespace-nowrap">
            <li>9920 Franklin Square Drive Nottingham MD 21236</li>
            <li>+1 (443) 591-0360</li>
            <li>wfgwealthachievers@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 pt-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex  md:flex-row gap-8 text-xs opacity-70 mb-6 md:mb-0">
          <p>Copyright © 2025 Wealth Achievers</p>
          <p>Website By: NGE Technologies</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-(--primary) rounded-full flex items-center justify-center hover:bg-[#eef3f2] hover:text-gray-900 cursor-pointer">
            <Facebook size={18} />
          </div>
          <div className="w-10 h-10 bg-(--primary) rounded-full flex items-center justify-center hover:bg-[#eef3f2] hover:text-gray-900 cursor-pointer">
            <Instagram size={18} />
          </div>
          <div className="w-10 h-10 bg-(--primary) rounded-full flex items-center justify-center hover:bg-[#eef3f2] hover:text-gray-900 cursor-pointer">
            <Linkedin size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}
