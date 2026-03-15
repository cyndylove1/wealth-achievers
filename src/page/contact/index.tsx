import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import CustomInput from "../../components/input";
import Button from "../../components/button";
import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <>
      <Navbar
        bgColor="bg-[#FAFBFF]"
        textColor="text-[#153B5E]"
        className="shadow-sm"
        enableScrollEffect={true}
      />
      <Banner sectionName="Contact Us" breadcrumbPath="contact" />
      <section className="bg-[#F1F5FB] md:px-6 px-4 xl:px-10">
        <div className="text-center pt-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="block w-6 h-px bg-[#0DA9A4]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0DA9A4]">
              Reach Out
            </span>
            <span className="block w-6 h-px bg-[#0DA9A4]" />
          </div>
          <h2 className="font-display md:text-5xl text-3xl font-bold text-[#153B5E]">
            Get In Touch With Us
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base font-light mt-4 text-[#153B5E]/60 leading-relaxed">
            Take control of your financial future with Wealth Achievers. Contact
            Mary Alabaowo for a free consultation and discover how we can help
            you achieve your dreams.
          </p>
        </div>

        <div className="flex items-center justify-center md:p-6">
          <div className="max-w-7xl w-full bg-white shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] mt-10 mb-20">
            {/* Left Sidebar */}
            <div className="lg:w-[45%] bg-[#153B5E] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-between">
              {/* Subtle teal accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0DA9A4]" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-6 h-px bg-[#0DA9A4]" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0DA9A4]">
                    Contact Information
                  </span>
                </div>

                <h2 className="font-display text-3xl text-white font-bold mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-[280px] font-light">
                  We're here to answer your questions and guide you toward
                  financial freedom.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0DA9A4] text-white h-9 w-9 flex items-center justify-center shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] tracking-widest uppercase font-medium mb-1">
                        Phone
                      </p>
                      <p className="text-white text-sm font-medium">
                        +1 (443) 591-0360
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#0DA9A4] text-white h-9 w-9 flex items-center justify-center shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] tracking-widest uppercase font-medium mb-1">
                        Email
                      </p>
                      <p className="text-white text-sm font-medium break-all">
                        wfgwealthachievers@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#0DA9A4] text-white h-9 w-9 flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] tracking-widest uppercase font-medium mb-1">
                        Address
                      </p>
                      <p className="text-white text-sm font-medium">
                        9920 Franklin Square Drive
                        <br />
                        Nottingham MD 21236
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 mt-12">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 border border-white/20 text-white/50 flex items-center justify-center hover:border-[#F5A623] hover:text-[#0DA9A4] transition-all cursor-pointer"
                    >
                      <Icon size={16} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side — Form */}
            <div className="lg:w-[55%] p-8 md:p-16 bg-white">
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-6 h-px bg-[#0DA9A4]" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0DA9A4]">
                  Send a Message
                </span>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <CustomInput
                      label="First name"
                      placeholder="Enter your First Name"
                      required={true}
                    />
                  </div>
                  <div>
                    <CustomInput
                      label="Last Name"
                      placeholder="Enter your Last Name"
                      required={true}
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <CustomInput
                    label="Email"
                    placeholder="Enter your Email Address"
                    required={true}
                  />
                </div>

                <div>
                  <CustomInput
                    label="Subject"
                    placeholder="Enter your Subject"
                    required={true}
                  />
                </div>

                <div className="flex flex-col md:col-span-2">
                  <label className="text-[11px] font-semibold text-[#153B5E] tracking-wide uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="border border-[#153B5E]/15 p-3 focus:border-[#0DA9A4] outline-none resize-none text-sm text-[#153B5E] placeholder-[#153B5E]/30"
                  />
                </div>

                <div className="mt-6">
                  <Button
                    text="Submit Request"
                    bgColor="bg-[#0DA9A4]"
                    spanBgColor="bg-[#F5A623]"
                    iconColor="text-[#153B5E]"
                    className="text-white w-full justify-center"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
