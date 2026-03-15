import { FiArrowRight } from "react-icons/fi";
import Title from "./title";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Education Funds & Planning",
    text: "Secure your family's future with a solid plan for educational expenses — 529 plans and beyond.",
  },
  {
    number: "02",
    title: "Debt Management",
    text: "Take control of your finances with structured strategies to eliminate high-interest debt faster.",
  },
  {
    number: "03",
    title: "Estate Planning",
    text: "Protect your legacy with comprehensive estate tools — wills, trusts, and wealth transfer.",
  },
  {
    number: "04",
    title: "Protection & Insurance",
    text: "Safeguard your family against life's uncertainties with tailored insurance coverage through WFGIA.",
  },
  {
    number: "05",
    title: "Retirement Accounts",
    text: "Plan for a retirement that supports your desired lifestyle — IRAs, annuities, and long-term strategies.",
  },
  {
    number: "06",
    title: "Join the Business",
    text: "Build your own financial services business through our proven entrepreneurial platform and mentorship system.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#FAFBFF] py-24 md:px-6 xl:px-10 px-4 border-t border-[#153B5E]/8">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <Title text="Our Services" />
            <h2 className="font-display text-[44px] md:text-[56px] font-bold text-[#153B5E] leading-[1.05] mt-2 max-w-xl">
              Personalized solutions for every life stage.
            </h2>
          </div>
          <Link to="/services">
            <button className="flex items-center gap-2 text-sm font-medium text-[#153B5E]/60 hover:text-[#0DA9A4] transition-colors border-b border-[#153B5E]/20 hover:border-[#0DA9A4] pb-1">
              View All Services <FiArrowRight size={14} />
            </button>
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-[#153B5E]/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border-r border-b border-[#153B5E]/10 p-8 hover:bg-[#153B5E] transition-colors duration-300"
            >
              <p className="font-display text-[48px] font-light text-[#153B5E]/12 group-hover:text-white/10 leading-none transition-colors duration-300">
                {service.number}
              </p>

              {/* Teal rule — expands on hover */}
              <div className="w-8 h-px bg-[#0DA9A4] mt-3 mb-4 group-hover:w-12 transition-all duration-300" />

              <h3 className="font-semibold text-[#153B5E] text-[15px] leading-snug group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-[#153B5E]/55 text-sm leading-relaxed mt-3 font-light group-hover:text-white/65 transition-colors duration-300">
                {service.text}
              </p>

              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold tracking-wide uppercase text-[#0DA9A4] group-hover:text-[#16c7c1] hover:gap-2.5 transition-all duration-200"
              >
                Learn more <FiArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
