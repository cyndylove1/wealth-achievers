import React from "react";

// Assuming you are using a standard Vite/Webpack setup for image imports
import groupPhoto from "../assets/images/group.png";
import { Link } from "react-router-dom";

/**
 * Props definition for the Banner component
 */
interface BannerProps {
  sectionName: string;
  breadcrumbPath: string;
  backgroundImage?: string;
  overlayClass?: string;
}

/**
 * Banner Component
 * Creates a banner with a partial gradient overlay at the bottom.
 */
const Banner: React.FC<BannerProps> = ({
  sectionName,
  breadcrumbPath,
  backgroundImage = groupPhoto,
  // Using bg-gradient-to-t to fade from the bottom up.
  // Adjusted h-[320px] to be relative (h-full or h-2/3) if the container is only 250px-350px.
  overlayClass = "h-full bottom-0 from-(--primary) to-transparent bg-gradient-to-t",
}) => {
  return (
    <section
      className="relative w-full h-[350px] md:h-[250px] overflow-hidden bg-cover bg-center mt-[8rem]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* 1. Partial Gradient Overlay */}
      <div className={`absolute left-0 right-0 ${overlayClass} z-0`} />

      {/* 2. Content Centering */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        {/* Main Title */}
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl drop-shadow-lg">
          {sectionName}
        </h1>

        {/* Breadcrumb Text */}
        <nav className="mt-4 flex items-center gap-2 text-sm font-bold md:text-base drop-shadow-md">
          <Link
            to="/"
            className="hover:text-slate-200 transition-colors duration-200"
          >
            Home
          </Link>

          <span className="opacity-70">/</span>

          <span className="text-white opacity-100">{breadcrumbPath}</span>
        </nav>
        {/* <p className="mt-4 text-sm font-medium opacity-90 md:text-base drop-shadow">
          {breadcrumbPath}
        </p> */}
      </div>
    </section>
  );
};

export default Banner;
