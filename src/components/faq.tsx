import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section className="bg-(--primary) py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center md:text-4xl text-2xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center max-w-2xl lg:text-xl md:text-lg text-sm text-white font-[300] mx-auto mb-12">
          most common questions about coverage, claims, and how we protect what
          matters most to you.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-lg overflow-hidden border-[2px] border-white"
              >
                {/* Question (Always White) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center lg:p-5 p-2 bg-white lg:text-[20px] md:text-[18px] text-[12px] text-gray-900 font-semibold"
                >
                  {faq.question}

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer (Green when opened) */}
                <div
                  className={`bg-(--primary) text-white lg:text-[18px] md:text-[15px] text-[12px] transition-all duration-500 ease-in-out overflow-hidden
                  ${
                    isOpen
                      ? "max-h-40 opacity-100 px-5 pb-5 pt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
