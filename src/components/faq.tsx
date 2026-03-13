import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
      question:
        "How can Wealth Achievers help me plan for my child’s education?",
      answer:
        "We create customized education savings plans, such as 529 plans or other investment options, tailored to your financial goals. Our strategies ensure you can fund your child’s education without compromising your financial stability.",
    },
    {
      question: "What steps can I take to manage and reduce my debt?",
      answer:
        "Our debt management services involve analyzing your financial situation and designing a personalized plan to prioritize high-interest debt, manage payments, and reduce overall debt, helping you achieve financial freedom faster.",
    },
    {
      question:
        "Why is estate planning important, and how does Wealth Achievers assist?",
      answer:
        "Estate planning ensures your assets are distributed according to your wishes while minimizing taxes and legal complications. We guide you in creating wills, trusts, and other tools to protect your legacy and provide peace of mind for your loved ones.",
    },
    {
      question: "How do I know which retirement account is right for me?",
      answer:
        "We assess your lifestyle goals and financial situation to recommend the best retirement accounts, such as IRAs or annuities. Our tailored approach ensures your retirement plan supports the lifestyle you envision without financial worry.",
    },
    {
      question:
        "What is the business opportunity with Wealth Achievers, and how can I get involved?",
      answer:
        "Our business opportunity allows you to build your own financial services business through a proven system that emphasizes mentorship and teamwork. Contact us to learn how you can join our community of entrepreneurs and help others achieve financial security.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#eef3f2]/30 py-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
           <Title text="Common Questions" />
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto text-slate-600 font-light leading-relaxed">
            Everything you need to know about our financial strategies,
            mentorship, and how we help you achieve your dreams.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group transition-all duration-300 rounded-2xl border ${
                  isOpen
                    ? "bg-white border-[#32b291] shadow-xl shadow-[#32b291]/5"
                    : "bg-white/50 border-slate-200 hover:border-[#32b291]/50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left"
                >
                  <span
                    className={`font-bold transition-colors duration-300 md:text-lg ${
                      isOpen ? "text-[#32b291]" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 ml-4 transition-all duration-300 p-1 rounded-full ${
                      isOpen
                        ? "bg-[#32b291] text-white rotate-180"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 md:p-6 pt-0 text-slate-600 leading-relaxed font-light border-t border-slate-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Call to Action */}

        <div className="mt-12 text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
          <Link to="/contact">
            <button className="text-[#32b291] font-bold hover:underline transition-all">
              Contact our support team &rarr;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
