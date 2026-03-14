import { Link } from "react-router-dom";
import hero from "../assets/images/firm5.png";
import Button from "./button";
import Navbar from "./navbar";
import Title from "./title";
import { AnimatedItem } from "./animatedItem";
import { PhoneOutgoing } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-full dotted-bg overflow-hidden pt-16 overflow-hidden">
      {/* RIGHT GREEN BACKGROUND */}
      <div className="absolute right-0 top-0 h-full w-[27%] bg-[#2fb08f] rounded-bl-[500px] overflow-hidden">
        {/* Centered icon container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Shield */}
          <svg
            className="absolute top-[20%] left-[50%] w-20 h-20 text-white opacity-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
          </svg>

          {/* Heart */}
          <svg
            className="absolute top-[45%] left-[50%] w-16 h-16 text-white opacity-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21s-6-4.35-9-8.5C1 9.42 2.42 6 6 6c2 0 3.54 1.46 4 2.09C10.46 7.46 12 6 14 6c3.58 0 5 3.42 3 6.5C18 16.65 12 21 12 21z" />
          </svg>

          {/* Home */}
          <svg
            className="absolute top-[55%] right-[10%] w-20 h-20 text-white opacity-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3l9 7h-3v9h-5v-6H11v6H6v-9H3l9-7z" />
          </svg>

          {/* Family */}
          <svg
            className="absolute bottom-[18%] left-[60%] w-20 h-20 text-white opacity-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 11c1.66 0 3-1.79 3-4s-1.34-4-3-4-3 1.79-3 4 1.34 4 3 4zm-8 0c1.66 0 3-1.79 3-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4z" />
          </svg>
        </div>
      </div>

      {/* <div className="absolute right-0 top-0 h-full w-[27%] bg-[#2fb08f] rounded-bl-[300px]" /> */}

      {/* BOTTOM CURVE BORDER */}
      {/* <div className="absolute right-0 bottom-0 w-[36%] h-[120px] bg-white rounded-tl-[160px]" /> */}

      {/* NAVBAR */}
      <Navbar
        bgColor="bg-transparent"
        textColor="text-gray-900"
        btnBgColor="bg-white"
        btnTextColor="text-(--primary)"
        btnSpanBg="bg-(--primary)"
        btnIcon="text-white"
        enableScrollEffect={true}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto xl:px-10 md:px-6 px-4 grid lg:grid-cols-2 grid-cols-1 items-center pt-12">
        {/* LEFT TEXT */}
        <div>
          <AnimatedItem index={0} delay={0.05}>
            <Title text="Wealth Achievers Your Path to Financial Freedom" />
          </AnimatedItem>
          <AnimatedItem index={1} delay={0.1}>
            <h1 className="xl:text-[52px] md:text-[50px] text-[30px] tracking-tight md:leading-[60px] leading-[40px] max-w-2xl font-medium text-gray-900">
              Welcome to Wealth Achievers Your Path to&nbsp;
              <span className="relative inline-block">
                <span className="relative z-10">Financial Freedom</span>
                <span className="absolute left-0 bottom-1 w-full h-3 bg-(--primary) opacity-40 -z-0"></span>
              </span>
            </h1>
          </AnimatedItem>
          <AnimatedItem index={2} delay={0.15}>
            <p className="text-gray-600 mt-6 max-w-lg">
              At Wealth Achievers, we’re dedicated to helping you achieve
              financial independence through personalized solutions.
            </p>
          </AnimatedItem>
          <AnimatedItem index={3} delay={0.25}>
            <Link to="/consultation">
              <div className="mt-8">
                <Button
                  text=" Book Consultation"
                  spanBgColor="bg-white"
                  iconColor="text-(--primary)"
                  bgColor="bg-(--primary)"
                  className="text-white"
                />
              </div>
            </Link>
          </AnimatedItem>
        </div>

        {/* RIGHT IMAGE AREA */}
        <AnimatedItem index={4} delay={0.35}>
          <div className="relative flex justify-center mt-20 lg:mt-0">
            {/* STRIPES */}

            <div className="absolute xl:left-16 lg:left-6 left-2 top-10 w-30 h-30 bg-[repeating-linear-gradient(135deg,#2fb08f_0,#2fb08f_4px,transparent_4px,transparent_12px)] rounded-lg"></div>

            {/* IMAGE SHAPE (NOT CIRCLE) */}
            <div className="relative lg:w-[400px] w-full lg:h-[450px] h-[400px] overflow-hidden lg:rounded-t-[250px] rounded-t-[250px] md:rounded-t-[350px] border-[10px] border-white shadow-xl">
              <img src={hero} className="object-cover w-full h-full" />
            </div>
            {/* CONSULTATION CARD */}
            <Link
              to="/consultation"
              className="group absolute bottom-0 lg:w-[400px] w-full mt-10 bg-white shadow-xl rounded-md flex items-center justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="p-4 text-sm font-light text-gray-600 leading-tight">
                Consult Wealth Achievers to help you achieve financial success
              </div>

              <div className="bg-[#2fb08f] w-16 h-16 flex items-center justify-center shrink-0">
                <div className="bg-white text-[#2fb08f] w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:scale-125">
                  <PhoneOutgoing size={18} className="text-[#2fb08f]" />
                </div>
              </div>
            </Link>
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
}
