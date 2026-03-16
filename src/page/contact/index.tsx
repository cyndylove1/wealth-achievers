import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import CustomInput from "../../components/input";
import Button from "../../components/button";
import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { AnimatedItem } from "../../components/animatedItem";

const Contact: React.FC = () => {
    return (
      <>
        <Navbar
          bgColor="bg-white"
          className="shadow-xl"
          enableScrollEffect={true}
        />
        <Banner sectionName="Contact Us" breadcrumbPath="contact" />
        <section className="bg-[#eef3f2]/30 md:px-6 px-4 xl:px-10">
          <div className="text-center pt-20">
            <AnimatedItem index={0} delay={0.05}>
              <h2 className="md:text-4xl text-lg font-bold text-(--primary)">
                Get In Touch With Us
              </h2>
            </AnimatedItem>
            <AnimatedItem index={1} delay={0.15}>
              <p className="max-w-2xl mx-auto text-sm md:text-md font-[300] mt-4 text-gray-900">
                Take control of your financial future with Wealth Achievers.
                Contact Mary Alabaowo for a free consultation and discover how
                we can help you achieve your dreams.
              </p>
            </AnimatedItem>
          </div>
          <div className="flex items-center justify-center md:p-6">
            <div className="max-w-7xl w-full bg-white rounded-[30px] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] mt-10 mb-20">
              {/* Left Sidebar: Contact Info */}
              <div className="lg:w-[60%] bg-gradient-to-br from-[#2fb08f] via-[#c3eee7] to-[#248d72] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-between">
                {/* Decorative Circle Bottom Right */}
                <div className="absolute -bottom-20 -right-20 w-74 h-74 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl text-white font-bold mb-6">
                    Contact Information
                  </h2>
                  <p className="text-gray-900 text-sm leading-relaxed mb-12 max-w-[280px] font-[400]">
                    We'll create high-quality linkable content and build at
                    least 40 high-authority.
                  </p>

                  <div className="space-y-10">
                    <div className="flex items-start gap-2">
                      <div className="bg-(--primary) text-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <Phone size={20} className="text-white" />
                      </div>

                      <div className="text-sm text-gray-500 font-medium">
                        <p>+1 (443) 591-0360</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="bg-(--primary) text-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <Mail size={20} className="text-white" />
                      </div>

                      <p className="text-sm text-gray-500  font-medium">
                        wfgwealthachievers@gmail.com
                      </p>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="bg-(--primary) text-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-white" />
                      </div>

                      <p className="text-sm text-gray-500  font-medium">
                        9920 Franklin Square Drive Nottingham MD 21236
                      </p>
                    </div>
                  </div>
                  {/* Social Icons */}
                  <div className="flex gap-4 mt-10">
                    <div className="w-10 h-10 text-(--primary) bg-white rounded-full flex items-center justify-center hover:bg-[#eef3f2] hover:text-gray-900 cursor-pointer">
                      <Facebook size={18} />
                    </div>
                    <div className="w-10 h-10 bg-white text-(--primary) rounded-full flex items-center justify-center hover:bg-[#eef3f2] hover:text-gray-900 cursor-pointer">
                      <Instagram size={18} />
                    </div>
                    <div className="w-10 h-10 bg-white text-(--primary) rounded-full flex items-center justify-center hover:bg-[#eef3f2] hover:text-gray-900 cursor-pointer">
                      <Linkedin size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: The Form */}
              <div className="lg:w-[60%] p-6 md:p-20 bg-white">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    {/* First Name */}
                    <div className="flex flex-col">
                      <CustomInput
                        label="First name"
                        placeholder="Enter your First Name"
                        required={true}
                      />
                    </div>
                    {/* last Name */}
                    <div>
                      <CustomInput
                        label="Last Name"
                        placeholder="Enter your Last Name"
                        required={true}
                      />
                    </div>
                  </div>

                  {/* email */}
                  <div className="flex flex-col">
                    <CustomInput
                      label="Email"
                      placeholder="Enter your Email Address"
                      required={true}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <CustomInput
                      label="Subject"
                      placeholder="Enter your Subject"
                      required={true}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-[12px] font-semibold text-gray-900 mb-1">
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      rows={4}
                      placeholder="How can we help you?"
                      className="focus:border-[2px] border-[1px] border-[#d8dadc] p-2 focus:border-(--primary) outline-none resize-none rounded-[8px] hover:border-(--primary)"
                    />
                  </div>

                  {/* Submit */}
                  <div className="mt-8">
                    <Button
                      text="Submit Request"
                      spanBgColor="bg-white"
                      iconColor="text-(--primary)"
                      bgColor="bg-(--primary)"
                      className="text-white w-full"
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
