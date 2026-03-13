import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
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
      "Wealth Achievers helped us set up a 529 plan for our daughter’s college fund. Their team took the time to understand our goals and created a plan that fits our budget. Now we feel confident that her education is secure, and we’re so grateful for their guidance!",
    name: "Sarah M.",
    role: " Baltimore, MD",
    image: woman1,
  },
  {
    quote:
      "I was overwhelmed with credit card debt until I worked with Wealth Achievers. They created a clear debt management plan that helped me pay off my high-interest balances faster than I thought possible. Their support gave me a fresh start financially.",
    name: "James T.",
    role: "White Marsh, MD",
    image: woman2,
  },
  {
    quote:
      "Planning our estate felt daunting, but Wealth Achievers made it straightforward. They guided us through setting up a trust and ensured our assets will be protected for our kids. Their expertise gave us peace of mind for the future.",
    name: "Linda and Robert P.",
    role: "Towson, MD",
    image: couple,
  },
  {
    quote:
      "Thanks to Wealth Achievers, I now have a retirement account that aligns with my lifestyle goals. Their personalized approach helped me choose the right plan, and I feel confident I’ll enjoy my retirement without financial stress.",
    name: "Michael R.",
    role: "Columbia, MD",
    image: man1,
  },
  {
    quote:
      "Joining Wealth Achievers’ business opportunity was a game-changer. Their mentorship and system empowered me to build my own financial services business while helping others. I’m proud to be part of a community that values teamwork and success!",
    name: "Aisha K.",
    role: "Philadelphia, PA",
    image: man2,
  },
];

export default function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto md:px-6 px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <AnimatedItem index={0} delay={0.05}>
            <Title text="Tesimonial" />
          </AnimatedItem>
          <AnimatedItem index={0} delay={0.1}>
            <h2 className="font-[500] md:text-4xl text-3xl text-gray-900">
              Clients{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Feedback</span>
                <span className="absolute left-0 bottom-1 w-full h-3 bg-(--primary) opacity-40 -z-0"></span>
              </span>
            </h2>
          </AnimatedItem>
          <AnimatedItem index={0} delay={0.15}>
            <p className="mt-4 font-[300] text-xl text-gray-900 max-w-2xl mx-auto mb-12">
              Trusted by families. Rated A+ by experts. Providing the peace of
              mind you deserve for every occasion.
            </p>
          </AnimatedItem>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          effect="coverflow"
          centeredSlides
          grabCursor
          slidesPerView="auto"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="max-w-3xl mx-auto md:h-[350px] h-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="w-[320px] md:w-[320px]">
              <div className="bg-[#eef3f2] rounded-2xl p-4 md:p-8 shadow-xl border border-gray-200 h-full flex flex-col">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full h-[80px] w-[80px] object-cover"
                  />
                </div>
                {/* Quote */}
                <p className="text-gray-900 font-[300] leading-relaxed text-lg">
                  “{testimonial.quote}”
                </p>
                <div className="pt-6 pb-10">
                  <p className="font-semibold text-(--primary)">
                    {testimonial.name}
                  </p>
                  <p className="text-md text-(--primary)">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
