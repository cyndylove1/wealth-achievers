import { AnimatedItem } from "./animatedItem";
import Button from "./button";
import Title from "./title";

export default function About() {
  return (
    <section className="bg-white py-20 md:px-6 xl:px-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
        {/* Image Section */}

        <div className="relative flex justify-center">
          {/* Pattern background */}
          <AnimatedItem index={0} delay={0.05}>
            <div className="absolute xl:left-16 lg:left-6 left-2 top-10 w-30 h-30 bg-[repeating-linear-gradient(135deg,#2fb08f_0,#2fb08f_4px,transparent_4px,transparent_12px)] rounded-lg"></div>

            {/* Image container */}
            <div className="overflow-hidden rounded-t-full rounded-b-lg lg:w-[400px] w-full h-[400px] relative z-10 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6"
                alt="family"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedItem>
        </div>

        {/* Text Section */}
        <div>
          {/* title */}
          <Title text="About" />
          <AnimatedItem index={2} delay={0.10}>
            <h2 className="md:text-3xl text-2xl font-medium leading-snug text-gray-800">
              A leading financial services platform to&nbsp;
              <span className="relative inline-block">
                <span className="relative z-10">help you</span>
                <span className="absolute left-0 bottom-1 w-full h-3 bg-(--primary) opacity-40 -z-0"></span>
              </span>
            </h2>
          </AnimatedItem>
          <AnimatedItem index={3} delay={0.15}>
            <p className="text-gray-500 mt-4 text-md font-[300]">
              Wealth Achievers is committed to making financial independence
              accessible to everyone. Founded with a passion for empowering
              individuals and families, we provide personalized financial
              solutions through our affiliation with World Financial Group. Our
              team, led by Financial Professional Mary Alabaowo, helps clients
              across North America achieve their goals with confidence.
            </p>
          </AnimatedItem>

          {/* Bullet Points */}
          <div className="mt-6 space-y-4">
            <div className="flex gap-3">
              <div>
                <AnimatedItem index={4} delay={0.25}>
                  <h4 className="font-bold text-[18px] text-gray-900">
                    Our Mission
                  </h4>
                </AnimatedItem>
                <AnimatedItem index={5} delay={0.35}>
                  <p className="text-gray-500 text-md font-[300]">
                    To empower our community with the tools, knowledge, and
                    opportunities to achieve financial resilience and
                    independence.
                  </p>
                </AnimatedItem>
              </div>
            </div>
          </div>

          {/* Button */}
          <AnimatedItem index={6} delay={0.45}>
            <div className="mt-8">
              <Button
                text=" Book Consultation"
                spanBgColor="bg-white"
                iconColor="text-(--primary)"
                bgColor="bg-(--primary)"
                className="text-white"
              />
            </div>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}
