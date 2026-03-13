import InfoSection from "../../components/infoSection";
import Banner from "../../components/banner";
import Navbar from "../../components/navbar";

const ServicePage = () => {
  const sectionsData = [
    {
      title: "Education Funds And Planning",
      description:
        "Ensure your loved ones’ educational dreams become reality. We design customized savings plans, like 529 plans, to help you prepare for rising education costs. Our strategies align with your financial priorities, making it easier to fund college or other academic pursuits without stress.",
      image:
        "https://wealtheachievers.com/wp-content/uploads/2025/07/7xm68646c884be8f.jpg",
    },
    {
      title: "Debt Management",
      description:
        "Break free from the burden of debt with our tailored strategies. We assess your financial situation and create a plan to tackle high-interest debts, streamline payments, and build better financial habits, paving the way for long-term stability and freedom.",
      image:
        "https://wealtheachievers.com/wp-content/uploads/2025/07/7xm68646d5d38dae.jpg",
    },
    {
      title: "Estate Planning",
      description:
        "Secure your legacy with confidence. Our estate planning services help you create wills, trusts, and other tools to protect your assets and ensure they’re distributed according to your wishes, offering peace of mind for you and your family.",
      image:
        "https://wealtheachievers.com/wp-content/uploads/2025/07/7xm68646e1a8b1ed.jpg",
    },
    {
      title: "Protection (Insurance)",
      description:
        "Life is unpredictable, but your financial security doesn’t have to be. We offer insurance solutions to safeguard against risks like disability, unexpected loss, or outliving your savings, helping you protect the life you’ve worked hard to build.",
      image:
        "https://wealtheachievers.com/wp-content/uploads/2025/07/7xm68646e9529dfc.jpg",
    },
    {
      title: "Retirement Accounts",
      description:
        "Enjoy your retirement years without financial worry. We help you select and manage retirement accounts, such as IRAs or annuities, tailored to your lifestyle goals, ensuring you can live comfortably and confidently in your golden years.",
      image:
        "https://wealtheachievers.com/wp-content/uploads/2025/07/7xm68646efd2b44e.jpg",
    },
    {
      title: "Savings Strategy",
      description:
        "Grow your wealth with a disciplined savings plan. We craft personalized strategies that leverage smart investments and financial tools, helping you build a strong financial foundation to achieve your short- and long-term goals.",
      image:
        "https://wealtheachievers.com/wp-content/uploads/2025/07/7xm68646f7302ba0.jpg",
    },
    {
      title: "Business Opportunity",
      description:
        "Transform your future with our entrepreneurial platform. Join Wealth Achievers to build your own financial services business, supported by a proven system and mentorship. Help others achieve financial security while creating your own path to success.",
      image:
        "https://wealtheachievers.com/wp-content/uploads/2025/07/7xm68646fdc17821.jpg",
    },
  ];

  return (
    <>
      <Navbar
        bgColor="bg-white"
        className="shadow-xl"
        enableScrollEffect={true}
      />
      <Banner sectionName="Our Services" breadcrumbPath="services" />
      <div className="bg-white">
        {sectionsData.map((section, index) => (
          <InfoSection
            key={index}
            title={section.title}
            description={section.description}
            image={section.image}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
};

export default ServicePage;
