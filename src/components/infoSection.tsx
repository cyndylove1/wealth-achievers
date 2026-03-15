import { Link } from "react-router-dom";
import Button from "./button";

interface InfoSectionProps {
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
}

const InfoSection = ({
  title,
  description,
  image,
  isReversed = false,
}: InfoSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto md:px-6 xl:px-10 px-4 py-20">
      <div
        className={`flex flex-col md:flex-row items-center gap-16 ${isReversed ? "md:flex-row-reverse" : ""}`}
      >
        {/* Image */}
        <div className="relative md:w-1/2 w-full shrink-0">
          {/* Gold corner accents — decorative */}
          <div
            className={`absolute ${isReversed ? "top-0 right-0 border-t-2 border-r-2" : "top-0 left-0 border-t-2 border-l-2"} border-[#F5A623] w-10 h-10 z-10`}
          />
          <div
            className={`absolute ${isReversed ? "bottom-0 left-0 border-b-2 border-l-2" : "bottom-0 right-0 border-b-2 border-r-2"} border-[#F5A623] w-10 h-10 z-10`}
          />
          <div className="overflow-hidden shadow-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-[#0DA9A4]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0DA9A4]">
              Wealth Achievers
            </span>
          </div>

          <h2 className="font-display text-[38px] md:text-[46px] font-bold leading-[1.1] text-[#153B5E]">
            {title}
          </h2>

          <p className="text-[#153B5E]/55 font-light text-base leading-relaxed py-6 max-w-md">
            {description}
          </p>

          <div className="w-12 h-px bg-[#0DA9A4] mb-6" />

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
  );
};

export default InfoSection;
