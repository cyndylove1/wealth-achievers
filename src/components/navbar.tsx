import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./button";

interface NavbarProps {
  bgColor?: string;
  textColor?: string;
  className?: string;
  enableScrollEffect?: boolean;
  btnBgColor?: string;
  btnTextColor?: string;
  btnSpanBg?: string;
  btnIcon?: string;
}

export default function Navbar({
  bgColor = "bg-transparent",
  textColor = "text-[#153B5E]",
  className = "",
  enableScrollEffect = false,
  btnBgColor = "bg-[#0DA9A4]",
  btnTextColor = "text-white",
  btnSpanBg = "bg-[#F5A623]",
  btnIcon = "text-[#153B5E]",
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

  const activeBg = isScrolled ? "bg-[#FAFBFF] shadow-md" : bgColor;

  const navLinkStyles = ({ isActive }: { isActive: boolean }) => `
    relative py-1 transition-all duration-300 font-medium text-sm tracking-wide
    ${
      isActive
        ? "text-[#0DA9A4] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-px after:bg-[#0DA9A4]"
        : `${textColor} hover:text-[#0DA9A4]`
    }
  `;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] md:px-6 xl:px-10 px-4 py-4 flex justify-between items-center transition-all duration-500 ease-in-out ${activeBg} ${className}`}
      >
        {/* Wordmark Logo */}
        <div className="flex items-center gap-2 relative z-[110]">
          <span className="w-px h-8 bg-[#0DA9A4]" />
          <div className="pl-2">
            <h2 className="font-display text-xl font-bold leading-none tracking-tight uppercase text-[#153B5E]">
              Wealth
            </h2>
            <p className="text-[9px] tracking-[0.35em] font-medium text-[#0DA9A4] uppercase">
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
              bgColor={btnBgColor}
              spanBgColor={btnSpanBg}
              iconColor={btnIcon}
              className={`${btnTextColor} !py-2.5`}
            />
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden p-2 transition-colors duration-500 ${textColor}`}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-[#153B5E]/70 z-[105] transition-opacity duration-500 lg:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-[#FAFBFF] z-[120] shadow-2xl transform transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Menu Header */}
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center border-b border-[#153B5E]/10">
          <div className="flex items-center gap-2">
            <span className="w-px h-7 bg-[#0DA9A4]" />
            <div className="pl-2">
              <h2 className="font-display text-lg font-bold leading-none tracking-tight uppercase text-[#153B5E]">
                Wealth
              </h2>
              <p className="text-[8px] tracking-[0.3em] font-medium text-[#0DA9A4] uppercase">
                Achievers
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#153B5E] p-2 hover:text-[#0DA9A4] transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col h-full p-6 pt-28">
          <div className="flex flex-col gap-1">
            {["Home", "Services", "Consultation", "Blog", "Contact"].map(
              (item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center gap-4 px-4 py-4 transition-all duration-300 text-lg font-medium border-b border-[#153B5E]/5
                    ${isActive ? "text-[#0DA9A4]" : "text-[#153B5E] hover:text-[#0DA9A4]"}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`h-px w-5 transition-all duration-300 ${isActive ? "bg-[#0DA9A4]" : "bg-transparent"}`}
                      />
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
              bgColor="bg-[#0DA9A4]"
              spanBgColor="bg-[#F5A623]"
              iconColor="text-[#153B5E]"
              className="w-full text-white text-base justify-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}
