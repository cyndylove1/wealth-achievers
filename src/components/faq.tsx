import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import Title from "./title";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How can Wealth Achievers help me plan for my child's education?",
      answer:
        "We create customized education savings plans, such as 529 plans or other investment options, tailored to your financial goals. Our strategies ensure you can fund your child's education without compromising your financial stability.",
    },
    {
      question: "What steps can I take to manage and reduce my debt?",
      answer:
        "Our debt management services involve analyzing your financial situation and designing a personalized plan to prioritize high-interest debt, manage payments, and reduce overall debt, helping you achieve financial freedom faster.",
    },
    {
      question: "Why is estate planning important, and how does Wealth Achievers assist?",
      answer:
        "Estate planning ensures your assets are distributed according to your wishes while minimizing taxes and legal complications. We guide you in creating wills, trusts, and other tools to protect your legacy and provide peace of mind for your loved ones.",
    },
    {
      question: "How do I know which retirement account is right for me?",
      answer:
        "We assess your lifestyle goals and financial situation to recommend the best retirement accounts, such as IRAs or annuities. Our tailored approach ensures your retirement plan supports the lifestyle you envision without financial worry.",
    },
    {
      question: "What is the business opportunity with Wealth Achievers?",
      answer:
        "Our business opportunity allows you to build your own financial services business through a proven system that emphasizes mentorship and teamwork. Contact us to learn how you can join our community of entrepreneurs and help others achieve financial security.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F1F5FB] py-24 px-4 md:px-6 xl:px-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <Title text="Common Questions" />
          <h2 className="font-display text-[44px] md:text-[52px] font-bold text-[#153B5E] leading-[1.05]">
            Frequently Asked Questions
          </h2>
          <p className="max-w-md mt-4 text-[#153B5E]/55 font-light leading-relaxed text-sm">
            Everything you need to know about our financial strategies,
            mentorship, and how we help you achieve your dreams.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-[#153B5E]/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border-b border-[#153B5E]/10 transition-all duration-300 ${isOpen ? "bg-[#153B5E]" : "bg-transparent"}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left group"
                >
                  <span
                    className={`font-medium transition-colors duration-300 text-base pr-8 ${isOpen ? "text-white" : "text-[#153B5E] group-hover:text-[#0DA9A4]"}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-6 h-6 flex items-center justify-center transition-colors duration-300 ${isOpen ? "text-[#0DA9A4]" : "text-[#153B5E]/40"}`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-8 h-px bg-[#0DA9A4] mb-4" />
                    <p className="text-white/65 leading-relaxed text-sm font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-12 flex items-center gap-4 p-6 border border-[#153B5E]/10 bg-white">
          <div className="w-px h-10 bg-[#0DA9A4] shrink-0" />
          <div>
            <p className="text-[#153B5E]/50 text-xs uppercase tracking-widest font-medium mb-1">
              Still have questions?
            </p>
            <Link
              to="/contact"
              className="text-[#153B5E] font-semibold text-sm hover:text-[#0DA9A4] transition-colors"
            >
              Contact our support team →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
