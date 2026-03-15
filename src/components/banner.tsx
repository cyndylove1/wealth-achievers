import React from "react";
import groupPhoto from "../assets/images/group.png";
import { Link } from "react-router-dom";

interface BannerProps {
  sectionName: string;
  breadcrumbPath: string;
  backgroundImage?: string;
  overlayClass?: string;
}

const Banner: React.FC<BannerProps> = ({
  sectionName,
  breadcrumbPath,
  backgroundImage = groupPhoto,
}) => {
  return (
    <section
      className="relative w-full md:h-[300px] h-[200px] overflow-hidden bg-cover bg-center mt-[4.5rem]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#153B5E]/65 z-0" />
      {/* Teal bottom rule */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#0DA9A4]/60 z-10" />

      <div className="relative z-10 flex flex-col items-start justify-end h-full px-6 md:px-10 xl:px-20 pb-10">
        <h1 className="font-display text-white text-3xl md:text-5xl font-bold tracking-tight">
          {sectionName}
        </h1>

        <nav className="mt-2 flex items-center gap-2 text-xs font-medium text-white/50 tracking-widest uppercase">
          <Link to="/" className="hover:text-[#0DA9A4] transition-colors">
            Home
          </Link>
          <span className="text-[#0DA9A4]">/</span>
          <span className="text-white/70">{breadcrumbPath}</span>
        </nav>
      </div>
    </section>
  );
};

export default Banner;
