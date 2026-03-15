import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
  };

  return (
    <section className="bg-[#153B5E] py-24 px-4 md:px-6 xl:px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Copy */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-[#0DA9A4]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0DA9A4]">
              Newsletter
            </span>
          </div>

          <h2 className="font-display text-[44px] md:text-[52px] font-bold text-white leading-[1.05]">
            Stay informed on your financial future.
          </h2>

          <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-sm font-light">
            Receive the latest news, wealth-building strategies, and exclusive
            insights from Mary Alabaowo — delivered to your inbox.
          </p>
        </div>

        {/* Right — Form */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex border border-white/15 focus-within:border-[#0DA9A4] transition-colors duration-300">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent py-4 px-5 text-white placeholder-white/30 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-[#0DA9A4] text-white font-semibold px-6 py-4 text-sm flex items-center gap-2 hover:bg-[#0b9490] transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe <FiArrowRight size={16} />
              </button>
            </div>

            <p className="text-white/30 text-xs font-light">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>

          <div className="mt-10 pt-10 border-t border-white/8 flex items-center gap-6">
            <div>
              <p className="font-display text-2xl font-bold text-white">500+</p>
              <p className="text-[10px] tracking-widest uppercase text-white/30 font-medium mt-0.5">
                Subscribers
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <p className="text-white/40 text-xs leading-relaxed font-light max-w-[200px]">
              Join families across North America already achieving their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
