import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./button";

interface NavbarProps {
  bgColor?: string;
  textColor?: string;
  activeTextColor?: string;
  className?: string;
  enableScrollEffect?: boolean;
  // New props to control the button style from the Navbar level
  btnBgColor?: string;
  btnTextColor?: string;
  btnSpanBg?: string;
  btnIcon?: string;
}

export default function Navbar({
  bgColor = "bg-transparent",
  btnIcon,
  textColor = "text-gray-700",
  activeTextColor = "text-[#32b291]",
  className = "",
  enableScrollEffect = false,
  btnBgColor = "bg-[#32b291]", // Default primary green
  btnTextColor = "text-white",
  btnSpanBg = "bg-white",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!enableScrollEffect) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableScrollEffect]);

  const activeBg = isScrolled ? "bg-[#32b291] shadow-lg" : bgColor;
  const currentActiveColor = isScrolled ? "text-white" : activeTextColor;
  const currentInactiveColor = isScrolled ? "text-white" : textColor;

  const navLinkStyles = ({ isActive }: { isActive: boolean }) => `
    relative py-1 transition-all duration-300 font-bold text-sm
    ${isActive ? currentActiveColor : currentInactiveColor}
    ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current" : "hover:opacity-80"}
  `;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] px-6 py-2 flex justify-between items-center transition-all duration-500 ease-in-out ${activeBg} ${className}`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" className="w-10" alt="Logo" />
        <div>
          <p
            className={`font-semibold text-lg leading-tight transition-colors ${isScrolled || textColor === "text-white" ? "text-white" : "text-slate-900"}`}
          >
            Insurea
          </p>
          <p
            className={`text-[10px] uppercase tracking-wider font-bold transition-colors ${isScrolled || textColor === "text-white" ? "text-white" : "text-gray-500"}`}
          >
            Insurance Company
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-10">
        <NavLink to="/" className={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/services" className={navLinkStyles}>
          Services
        </NavLink>
        <NavLink to="/consultation" className={navLinkStyles}>
          Consultation
        </NavLink>
        <NavLink to="/blog" className={navLinkStyles}>
          Blog
        </NavLink>
        <NavLink to="/contact" className={navLinkStyles}>
          Contact
        </NavLink>
      </div>

      {/* CTA Button - Now uses dynamic props */}
      <div>
        <Button
          text="Book Me"
          // If scrolled, we force a white-on-green look.
          // If not scrolled, it uses the props passed to the Navbar.
          bgColor={isScrolled ? "bg-white" : btnBgColor}
          spanBgColor={isScrolled ? "bg-[#32b291]" : btnSpanBg}
          iconColor={isScrolled ? "text-white" : btnIcon}
          className={`${isScrolled ? "text-[#32b291]" : btnTextColor} shadow-md !py-2.5`}
        />
      </div>
    </nav>
  );
}
