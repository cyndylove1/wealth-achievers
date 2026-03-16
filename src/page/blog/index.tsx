import React from "react";
import { Briefcase, Rocket, ShieldCheck } from "lucide-react";
import Newsletter from "../../components/newsletter";
import Banner from "../../components/banner";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import { AnimatedItem } from "../../components/animatedItem";

interface PostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
}

const BlogPost: React.FC<PostProps> = ({
  title,
  excerpt,
  author,
  date,
  image,
}) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
    {image && (
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    )}
    <div className="md:p-8 p-4">
      <h2 className="md:text-2xl text-xl font-bold text-(--primary) mb-3 transition-colors">
        {title}
      </h2>
      <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
        {excerpt}
      </p>
      <Link to="/why-us">
        <div className="mt-8">
          <Button
            text="Read More"
            spanBgColor="bg-white"
            iconColor="text-(--primary)"
            bgColor="bg-(--primary)"
            className="text-white"
          />
        </div>
      </Link>

      <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
        <div className="w-12 h-12 rounded-full bg-[#eef3f2] flex items-center justify-center text-gray-900 font-bold text-lg">
          {author[0].toUpperCase()}
        </div>
        <div>
          <p className="font-bold text-slate-800 leading-none">{author}</p>
          <p className="text-sm text-slate-500 mt-1">{date}</p>
        </div>
      </div>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
  const categories = [
    {
      name: "Business Insights",
      icon: <Briefcase size={18} />,
    },
    {
      name: "Digital Growth",
      icon: <Rocket size={18} />,
    },
    {
      name: "Strategy & Tech",
      icon: <ShieldCheck size={18} />,
    },
  ];

  const tags = ["Business", "Marketing", "Strategy", "Technology", "Analysis"];

  return (
    <>
      <Navbar
        bgColor="bg-white"
        className="shadow-xl"
        enableScrollEffect={true}
      />
      <Banner sectionName="Our Blog" breadcrumbPath="blog" />

      <div className="min-h-screen bg-[#eef3f2] md:p-6 xl:px-12 px-4 py-10 font-sans md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8 space-y-10">
            <BlogPost
              title="Building Your Own Business With Wealth Achiever’s Opportunity"
              excerpt="Dreaming of financial independence and the freedom to be your own boss? Discover the path to strategic wealth building."
              author="wealthmary"
              date="June 30, 2025"
              image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000"
            />
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <section>
              <h3 className="md:text-3xl text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
                Categories{" "}
                <span className="h-1 w-12 bg-(--secondary) rounded-full inline-block"></span>
              </h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <AnimatedItem index={0} delay={0.05}>
                    {" "}
                    <div
                      key={cat.name}
                      className="group flex items-center gap-3 p-4 rounded-2xl bg-white font-[500] cursor-pointer hover:scale-[1.02] hover:bg-(--primary) transition-all duration-300 shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        {/* Icon Container: Turns white on group-hover */}
                        <div className="bg-(--primary) group-hover:bg-white h-7 w-7 rounded-[2px] flex items-center justify-center text-white group-hover:text-(--primary) transition-colors duration-300">
                          {cat.icon}
                        </div>

                        {/* Text: Turns white on group-hover */}
                        <h3 className="text-slate-700 group-hover:text-white transition-colors duration-300">
                          {cat.name}
                        </h3>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </section>

            <section>
              <h3 className="md:text-3xl text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
                Tags{" "}
                <span className="h-1 w-12 bg-(--secondary) inline-block"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <AnimatedItem index={1} delay={0.15}>
                    <span
                      key={tag}
                      className="px-5 py-2 bg-white text-slate-600 rounded-full text-sm font-semibold shadow-sm border border-slate-100 cursor-pointer hover:bg-(--primary) hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  </AnimatedItem>
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
