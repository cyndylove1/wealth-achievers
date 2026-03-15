import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import woman1 from "../assets/images/black-woman2.png";
import woman2 from "../assets/images/black-woman3.png";
import man1 from "../assets/images/black-man1.png";
import man2 from "../assets/images/black-man2.png";
import couple from "../assets/images/smiling-couple.png";
import { AnimatedItem } from "./animatedItem";
import Title from "./title";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Wealth Achievers helped us set up a 529 plan for our daughter's college fund. Their team took the time to understand our goals and created a plan that fits our budget.",
    name: "Sarah M.",
    role: "Baltimore, MD",
    image: woman1,
  },
  {
    quote:
      "I was overwhelmed with credit card debt until I worked with Wealth Achievers. They created a clear debt management plan that helped me pay off my high-interest balances faster.",
    name: "James T.",
    role: "White Marsh, MD",
    image: woman2,
  },
  {
    quote:
      "Planning our estate felt daunting, but Wealth Achievers made it straightforward. They guided us through setting up a trust and ensured our assets will be protected for our kids.",
    name: "Linda and Robert P.",
    role: "Towson, MD",
    image: couple,
  },
  {
    quote:
      "Thanks to Wealth Achievers, I now have a retirement account that aligns with my lifestyle goals. I feel confident I'll enjoy my retirement without financial stress.",
    name: "Michael R.",
    role: "Columbia, MD",
    image: man1,
  },
  {
    quote:
      "Joining Wealth Achievers' business opportunity was a game-changer. Their mentorship empowered me to build my own financial services business while helping others.",
    name: "Aisha K.",
    role: "Philadelphia, PA",
    image: man2,
  },
];

export default function Testimonial() {
  return (
    <section className="py-24 bg-white border-t border-[#153B5E]/8">
      <div className="max-w-7xl mx-auto md:px-6 px-4">
        {/* Header */}
        <div className="mb-14">
          <AnimatedItem index={0} delay={0.05}>
            <Title text="Testimonials" />
          </AnimatedItem>
          <AnimatedItem index={1} delay={0.1}>
            <h2 className="font-display text-[44px] md:text-[52px] font-bold text-[#153B5E] leading-[1.05] max-w-xl">
              Trusted by families across North America.
            </h2>
          </AnimatedItem>
        </div>

        {/* Swiper */}
        <AnimatedItem index={2} delay={0.15}>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            centeredSlides
            grabCursor
            slidesPerView="auto"
            spaceBetween={24}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} style={{ width: "340px" }}>
                <div className="bg-[#153B5E] p-8 h-full flex flex-col min-h-[320px]">
                  {/* Large quote mark */}
                  <span className="font-display text-[80px] leading-none text-[#F5A623]/30 font-bold select-none -mt-4">
                    "
                  </span>

                  {/* Quote */}
                  <p className="text-white/80 font-light leading-relaxed text-sm flex-1 -mt-6">
                    {testimonial.quote}
                  </p>

                  {/* Divider */}
                  <div className="w-8 h-px bg-[#F5A623] my-5" />

                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#F5A623] text-sm leading-none">
                        {testimonial.name}
                      </p>
                      <p className="text-white/40 text-xs mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedItem>
      </div>
    </section>
  );
}
