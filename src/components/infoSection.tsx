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
    <div className="max-w-7xl mx-auto md:px-6 xl:px-10 px-4 py-12 md:py-20">
      <div
        className={`flex flex-col md:flex-row items-center justify-evenly md:gap-16 ${
          isReversed ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image Container */}
        <div className="relative flex justify-center">
          <div className="overflow-hidden rounded-t-full rounded-b-lg w-full md:h-[420px] h-full relative z-10 shadow-lg">
            <img
              src={image}
              alt={title}
              className="md:w-[380px] w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-3xl mt-10 lg:mt-0 font-semibold text-(--primary)">
            {title}
          </h2>
          <p className="text-gray-600 font-light md:text-[18px] text-[14px] leading-relaxed py-6">
            {description}
          </p>
          <Link to="/consultation">
            <Button
              text="Consultation"
              spanBgColor="bg-white"
              iconColor="text-(--primary)"
              bgColor="bg-(--primary)"
              className="text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
