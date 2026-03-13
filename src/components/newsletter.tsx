import React, { useState } from "react";
import { Send, Mail } from "lucide-react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
    // Add your logic here
  };

  return (
    <section className="relative overflow-hidden py-20 px-6 mb-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2fb08f] via-[#2fb08f] to-[#c3eee7] -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl mb-8 shadow-xl border border-white/30">
          <Mail className="text-white" size={32} />
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Sign Up For Our Newsletter
        </h2>

        <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Receive the latest news, updates, and exclusive strategic insights
          delivered straight to your inbox every week.
        </p>

        <form
          onSubmit={handleSubmit}
          className="relative max-w-lg mx-auto group"
        >
          <div className="flex flex-col md:flex-row gap-3 p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-white/50">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent py-4 px-6 text-white placeholder-white outline-none rounded-xl"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-white text-(--primary) font-bold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg"
            >
              SUBSCRIBE
              <Send size={18} />
            </button>
          </div>

          <p className="text-gray-700 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
