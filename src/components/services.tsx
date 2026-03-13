import {
  GraduationCap,
  Wallet,
  Scroll,
  ShieldCheck,
  PiggyBank,
  Rocket,
} from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import Title from "./title"; // Ensure this component exists
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Education funds and planning",
      text: "Secure your family’s future with a solid plan for educational expenses.",
      icon: <GraduationCap size={28} />,
    },
    {
      title: "Debt management",
      text: "Take control of your finances with effective debt management solutions.",
      icon: <Wallet size={28} />,
    },
    {
      title: "Estate planning",
      text: "Protect your legacy with comprehensive estate planning.",
      icon: <Scroll size={28} />,
    },
    {
      title: "Protection (insurance)",
      text: "Safeguard your future against life’s uncertainties. As a WFGIA insurance agent",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Retirement accounts",
      text: "Plan for a retirement that supports your desired lifestyle.",
      icon: <PiggyBank size={28} />,
    },
    {
      title: "Join The Business",
      text: "Transform your future with our entrepreneurial platform. Join Wealth Achievers to build your own financial services business.",
      icon: <Rocket size={28} />,
    },
  ];

  // Using the Insurea/Wealth Achievers green color code: #32b291
  const primaryColor = "#32b291";

  return (
    <section className="bg-[#eef3f2] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <Title text="Our Services" />

        {/* Heading */}
        <h2 className="text-3xl md:text-3xl max-w-2xl mx-auto font-bold mt-4 text-slate-900">
          We offer personalized financial solutions to help you&nbsp;
          <span className="relative inline-block">
            <span className="relative z-10">achieve your dreams</span>
            <span
              className="absolute left-0 bottom-1 w-full h-3 opacity-40 -z-0"
              style={{ backgroundColor: primaryColor }}
            ></span>
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative pt-14 pb-8 px-6 rounded-xl shadow-sm transition-all duration-500
                bg-white text-slate-700 hover:scale-105 hover:shadow-2xl"
              style={
                {
                  // Using a hover style via group-hover classes below instead of direct style for primary color swap
                }
              }
            >
              {/* Icon - Fixed reference to service.icon */}
              <div
                className="absolute -top-7 left-1/2 transform -translate-x-1/2
                w-14 h-14 flex items-center justify-center rounded-full
                text-white transition-all duration-300 shadow-lg
                group-hover:bg-white group-hover:shadow-xl"
                style={{ backgroundColor: primaryColor }}
              >
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl text-slate-900 group-hover:text-[#32b291] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Text - Fixed to use the specific service text */}
              <p className="text-md mt-4 text-slate-500 leading-relaxed">
                {service.text}
              </p>

              {/* Button */}
              <Link to="/services" className="inline-block mt-6">
                <button
                  className="text-xs font-bold uppercase tracking-wider border-2 py-2.5 px-6 rounded-full flex items-center justify-center gap-2 mx-auto transition-all duration-300"
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = primaryColor;
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = primaryColor;
                  }}
                >
                  Read More
                  <FiArrowRight size={14} />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
