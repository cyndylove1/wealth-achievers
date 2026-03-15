import { Link } from "react-router-dom";
import Button from "./button";
import Title from "./title";

const pillars = [
  {
    title: "Our Mission",
    text: "To empower our community with the tools, knowledge, and opportunities to achieve financial resilience and independence.",
  },
  {
    title: "Our Approach",
    text: "Personalized strategies built around your life stage, risk tolerance, and long-term vision — not generic templates.",
  },
];

export default function About() {
  return (
    <section className="bg-white py-24 md:px-6 xl:px-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
        {/* Image Section */}
        <div className="relative">
          {/* Teal vertical accent */}
          <div className="absolute left-0 top-10 bottom-10 w-px bg-[#0DA9A4]" />

          <div className="overflow-hidden shadow-xl ml-6">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6"
              alt="Family financial planning"
              className="w-full h-[460px] object-cover"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute bottom-8 right-0 bg-[#0DA9A4] px-6 py-5 shadow-xl">
            <p className="font-display text-4xl font-bold text-white">10+</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 font-semibold mt-1">
              Years of expertise
            </p>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <Title text="About Wealth Achievers" />

          <h2 className="font-display text-[42px] md:text-[50px] font-bold leading-[1.1] text-[#153B5E] mt-2">
            A leading platform to build lasting{" "}
            <span className="text-[#0DA9A4]">financial freedom.</span>
          </h2>

          <p className="text-[#153B5E]/60 mt-5 text-base leading-relaxed font-light max-w-lg">
            Wealth Achievers is committed to making financial independence
            accessible to everyone. Founded with a passion for empowering
            individuals and families, we provide personalized financial
            solutions through our affiliation with World Financial Group.
          </p>

          {/* Pillars */}
          <div className="mt-8 space-y-6">
            {pillars.map((p, i) => (
              <div key={i} className="flex gap-4">
                <span className="block w-px bg-[#0DA9A4] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#153B5E] text-sm tracking-wide">
                    {p.title}
                  </h4>
                  <p className="text-[#153B5E]/55 text-sm leading-relaxed mt-1 font-light">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/consultation">
              <Button
                text="Book Consultation"
                bgColor="bg-[#0DA9A4]"
                spanBgColor="bg-[#F5A623]"
                iconColor="text-[#153B5E]"
                className="text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
