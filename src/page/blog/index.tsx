import React from "react";
import { Briefcase, Rocket, ShieldCheck } from "lucide-react";
import Newsletter from "../../components/newsletter";
import Banner from "../../components/banner";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import Button from "../../components/button";

interface PostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
}

const BlogPost: React.FC<PostProps> = ({ title, excerpt, author, date, image }) => (
  <div className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#153B5E]/8 group">
    {image && (
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    )}
    <div className="md:p-8 p-5">
      <h2 className="font-display md:text-2xl text-xl font-bold text-[#153B5E] mb-3 leading-snug">
        {title}
      </h2>
      <p className="text-[#153B5E]/55 mb-6 line-clamp-2 leading-relaxed text-sm font-light">
        {excerpt}
      </p>
      <Link to="/why-us">
        <Button
          text="Read More"
          bgColor="bg-[#153B5E]"
          spanBgColor="bg-[#F5A623]"
          iconColor="text-[#153B5E]"
          className="text-white"
        />
      </Link>

      <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[#153B5E]/8">
        <div className="w-10 h-10 bg-[#153B5E] flex items-center justify-center text-white font-bold text-sm">
          {author[0].toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-[#153B5E] text-sm leading-none">{author}</p>
          <p className="text-xs text-[#153B5E]/40 mt-1">{date}</p>
        </div>
      </div>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
  const categories = [
    { name: "Business Insights", icon: <Briefcase size={16} /> },
    { name: "Digital Growth", icon: <Rocket size={16} /> },
    { name: "Strategy & Tech", icon: <ShieldCheck size={16} /> },
  ];

  const tags = ["Business", "Marketing", "Strategy", "Technology", "Analysis"];

  return (
    <>
      <Navbar
        bgColor="bg-[#FAFBFF]"
        textColor="text-[#153B5E]"
        className="shadow-sm"
        enableScrollEffect={true}
      />
      <Banner sectionName="Our Blog" breadcrumbPath="blog" />

      <div className="min-h-screen bg-[#F1F5FB] md:p-6 xl:px-12 px-4 py-10 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8 space-y-10">
            <BlogPost
              title="Building Your Own Business With Wealth Achiever's Opportunity"
              excerpt="Dreaming of financial independence and the freedom to be your own boss? Discover the path to strategic wealth building."
              author="wealthmary"
              date="June 30, 2025"
              image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000"
            />
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-6 h-px bg-[#0DA9A4]" />
                <h3 className="font-display text-2xl font-bold text-[#153B5E]">
                  Categories
                </h3>
              </div>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="group flex items-center gap-4 p-4 bg-white cursor-pointer hover:bg-[#153B5E] transition-all duration-300 border border-[#153B5E]/8"
                  >
                    <div className="bg-[#0DA9A4] group-hover:bg-[#F5A623] h-7 w-7 flex items-center justify-center text-white group-hover:text-[#153B5E] transition-colors duration-300 shrink-0">
                      {cat.icon}
                    </div>
                    <h3 className="text-[#153B5E] group-hover:text-white transition-colors duration-300 font-medium text-sm">
                      {cat.name}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-6 h-px bg-[#0DA9A4]" />
                <h3 className="font-display text-2xl font-bold text-[#153B5E]">
                  Tags
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white text-[#153B5E]/60 text-xs font-semibold border border-[#153B5E]/10 cursor-pointer hover:bg-[#153B5E] hover:text-white hover:border-[#153B5E] transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default BlogPage;
