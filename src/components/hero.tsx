import { Link } from "react-router-dom";
import hero from "../assets/images/firm5.png";
import Button from "./button";
import Navbar from "./navbar";
import Title from "./title";
import { AnimatedItem } from "./animatedItem";

const stats = [
  { value: "500+", label: "Families Served" },
  { value: "10+", label: "Years Experience" },
  { value: "A+", label: "Client Rating" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#FAFBFF] overflow-hidden">
      {/* Teal top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#0DA9A4]" />

      <Navbar
        bgColor="bg-transparent"
        textColor="text-[#153B5E]"
        btnBgColor="bg-[#0DA9A4]"
        btnTextColor="text-white"
        btnSpanBg="bg-[#F5A623]"
        btnIcon="text-[#153B5E]"
        enableScrollEffect={true}
      />

      <div className="max-w-7xl mx-auto xl:px-10 md:px-6 px-4 pt-32 pb-20 grid lg:grid-cols-[3fr_2fr] grid-cols-1 gap-16 items-center">
        {/* LEFT — Text */}
        <div>
          <AnimatedItem index={0} delay={0.05}>
            <Title text="Financial Planning & Wealth Management" />
          </AnimatedItem>

          <AnimatedItem index={1} delay={0.1}>
            <h1 className="font-display xl:text-[72px] lg:text-[60px] md:text-[52px] text-[40px] font-bold text-[#153B5E] leading-[1.05] tracking-tight mt-2">
              Achieve the financial future{" "}
              <em className="not-italic text-[#0DA9A4]">your family</em>{" "}
              deserves.
            </h1>
          </AnimatedItem>

          <AnimatedItem index={2} delay={0.15}>
            <p className="text-[#153B5E]/60 mt-6 max-w-md text-base leading-relaxed font-light">
              Mary Alabaowo and the Wealth Achievers team provide personalized
              financial solutions — from protection and retirement to education
              and legacy planning.
            </p>
          </AnimatedItem>

          <AnimatedItem index={3} delay={0.22}>
            <div className="mt-8 flex items-center gap-4">
              <Link to="/consultation">
                <Button
                  text="Book Consultation"
                  bgColor="bg-[#0DA9A4]"
                  spanBgColor="bg-[#F5A623]"
                  iconColor="text-[#153B5E]"
                  className="text-white"
                />
              </Link>
              <Link
                to="/services"
                className="text-sm font-medium text-[#153B5E]/60 hover:text-[#0DA9A4] transition-colors underline underline-offset-4"
              >
                View Services
              </Link>
            </div>
          </AnimatedItem>

          <AnimatedItem index={4} delay={0.3}>
            <div className="mt-16 flex items-center gap-10 border-t border-[#153B5E]/10 pt-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="font-display text-3xl font-bold text-[#153B5E]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#153B5E]/50 font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedItem>
        </div>

        {/* RIGHT — Image */}
        <AnimatedItem index={5} delay={0.35}>
          <div className="relative flex justify-end">
            {/* Teal vertical accent bar */}
            <div className="absolute left-0 top-8 bottom-8 w-px bg-[#0DA9A4]" />

            <div className="relative w-full lg:max-w-[420px] overflow-hidden shadow-2xl">
              {/* Gold corner accents — decorative */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#F5A623] z-10" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#F5A623] z-10" />

              <img
                src={hero}
                alt="Mary Alabaowo — Financial Professional"
                className="w-full h-[520px] object-cover"
              />

              {/* Credential badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#153B5E]/90 backdrop-blur-sm px-5 py-4">
                <p className="text-[#0DA9A4] text-[10px] tracking-[0.2em] uppercase font-semibold">
                  World Financial Group
                </p>
                <p className="text-white font-display text-lg font-semibold mt-1">
                  Mary Alabaowo
                </p>
                <p className="text-white/50 text-xs mt-0.5">
                  Licensed Financial Professional
                </p>
              </div>
            </div>
          </div>
        </AnimatedItem>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0DA9A4]/40 to-transparent" />
    </section>
  );
}
