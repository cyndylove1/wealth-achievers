import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./button";

interface NavbarProps {
  bgColor?: string;
  textColor?: string;
  activeTextColor?: string;
  className?: string;
  enableScrollEffect?: boolean;
  btnBgColor?: string;
  btnTextColor?: string;
  btnSpanBg?: string;
  btnIcon?: string;
}

export default function Navbar({
  bgColor = "bg-transparent",
  textColor = "text-gray-700",
  activeTextColor = "text-[#32b291]",
  className = "",
  enableScrollEffect = false,
  btnBgColor = "bg-[#32b291]",
  btnTextColor = "text-white",
  btnSpanBg = "bg-white",
  btnIcon,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!enableScrollEffect) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableScrollEffect]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const activeBg = isScrolled ? "bg-[#32b291] shadow-lg" : bgColor;
  const logoTextColor = isScrolled ? "text-white" : "text-slate-900";
  const burgerIconColor = isScrolled ? "text-white" : "text-slate-900";

  const navLinkStyles = ({ isActive }: { isActive: boolean }) => `
    relative py-1 transition-all duration-300 font-bold text-sm
    ${
      isActive
        ? isScrolled
          ? "text-white"
          : activeTextColor
        : isScrolled
          ? "text-white"
          : textColor
    }
    ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current" : "hover:opacity-80"}
  `;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] md:px-6 xl:px-10 px-4 py-2 flex justify-between items-center transition-all duration-500 ease-in-out ${activeBg} ${className}`}
      >
        {/* Main Logo */}
        <div className="flex items-center gap-2 relative z-[110]">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded shadow-sm">
            <span className="text-xl text-[#32b291] font-black">W</span>
          </div>
          <div className={`${logoTextColor} transition-colors duration-500`}>
            <h2 className="text-lg font-black leading-none uppercase">
              Wealth
            </h2>
            <p className="text-[8px] tracking-[0.3em] font-bold opacity-80 uppercase">
              Achievers
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10">
          {["Home", "Services", "Consultation", "Blog", "Contact"].map(
            (item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={navLinkStyles}
              >
                {item}
              </NavLink>
            ),
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Button
              text="Book Me"
              bgColor={isScrolled ? "bg-white" : btnBgColor}
              spanBgColor={isScrolled ? "bg-[#32b291]" : btnSpanBg}
              iconColor={isScrolled ? "text-white" : btnIcon}
              className={`${isScrolled ? "text-[#32b291]" : btnTextColor} shadow-md !py-2.5`}
            />
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden p-2 transition-colors duration-500 ${burgerIconColor}`}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[105] transition-opacity duration-500 lg:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[380px] bg-white z-[120] shadow-2xl transform transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header inside menu */}
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center border-b border-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#32b291] flex items-center justify-center rounded shadow-sm">
              <span className="text-lg text-white font-black">W</span>
            </div>
            <div className="text-slate-900">
              <h2 className="text-sm font-black leading-none uppercase">
                Wealth
              </h2>
              <p className="text-[7px] tracking-[0.2em] font-bold opacity-60 uppercase">
                Achievers
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-900 p-2 hover:bg-slate-50 rounded-full"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col h-full p-6 pt-32">
          <div className="flex flex-col gap-2">
            {["Home", "Services", "Consultation", "Blog", "Contact"].map(
              (item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                  flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 text-xl font-bold
                  ${
                    isActive
                      ? "bg-[#32b291]/10 text-[#32b291] translate-x-2"
                      : "text-slate-700 hover:bg-slate-50"
                  }
                `}
                >
                  {({ isActive }) => (
                    <>
                      {/* The Dot indicator from your reference image */}
                      <span
                        className={`h-2 w-2 rounded-full transition-all ${isActive ? "bg-[#32b291] scale-125" : "bg-transparent"}`}
                      ></span>
                      {item}
                    </>
                  )}
                </NavLink>
              ),
            )}
          </div>

          <div className="mt-auto pb-6">
            <Button
              text="Book Me"
              bgColor="bg-[#32b291]"
              className="w-full py-5 text-white text-xl rounded-2xl shadow-xl shadow-[#32b291]/20"
            />
          </div>
        </div>
      </div>
    </>
  );
}
