import React from "react";
import Navbar from "../../components/navbar";
import Banner from "../../components/banner";

// Interfaces for our data maps
interface Section {
  title: string;
  content: string;
}

interface Step {
  boldText: string;
  normalText: string;
}

const WhyUs: React.FC = () => {
  // Mapping the main text blocks
  const contentSections: Section[] = [
    {
      title: "Why Choose Our Business Opportunity?",
      content:
        "Our proven system, rooted in mentorship and teamwork, sets you up for success. You don’t need prior experience in financial services—just a passion for helping others and a drive to succeed. By joining our community, you’ll gain access to training, resources, and a supportive network of entrepreneurs.",
    },
    {
      title: "What Sets Us Apart",
      content:
        "Unlike traditional businesses, our model encourages collaboration over competition. You’ll work alongside experienced professionals who mentor you every step of the way, helping you grow your business while making a positive impact in your community. From offering insurance protection to retirement planning, you’ll provide valuable services that change lives.",
    },
  ];

  // Mapping the list items
  const steps: Step[] = [
    {
      boldText: "Connect with Us",
      normalText: "Schedule a consultation to learn about our system.",
    },
    {
      boldText: "Get Trained",
      normalText: "Access comprehensive training to build your skills.",
    },
    {
      boldText: "Make an Impact",
      normalText: "Start helping clients while growing your own business.",
    },
  ];

  return (
    <>
      <Navbar
        bgColor="bg-white"
        className="shadow-xl"
        enableScrollEffect={true}
      />
      <Banner sectionName="Why Wealth Achievers" breadcrumbPath="why-us" />
      <div className="bg-[#eef3f2;] min-h-screen p-8 md:p-16">
        <div className="max-w-5xl mx-auto text-[#1a364d] font-sans leading-relaxed">
          {/* Intro Paragraph */}
          <p className="mb-10 text-[1.1rem] font-[400] text-gray-900">
            Dreaming of financial independence and the freedom to be your own
            boss? Wealth Achievers offers a unique business opportunity that
            empowers you to build a financial services business while helping
            others achieve their financial goals.
          </p>

          {/* Mapped Sections (Why Choose / What Sets Us Apart) */}
          {contentSections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                {section.title}
              </h2>
              <p className="text-[1.1rem] font-[300] text-gray-900">
                {section.content}
              </p>
            </div>
          ))}

          {/* How to Get Started Section */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-900">
              How To Get Started
            </h2>
            <ul className="space-y-2 ml-8 text-gray-900">
              {steps.map((step, index) => (
                <li key={index} className="list-disc pl-2 text-[1.1rem]">
                  <span className="font-semibold">{step.boldText}:</span>{" "}
                  <span className="font-[300]"> {step.normalText}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
