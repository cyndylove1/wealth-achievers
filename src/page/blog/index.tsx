import React from "react";
import { Briefcase, Rocket, ShieldCheck, ChevronRight } from "lucide-react";
import Newsletter from "../../components/newsletter";
import Banner from "../../components/banner";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";

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
    <div className="p-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
        {title}
      </h2>
      <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
        {excerpt}
      </p>
      <Link to="why-us">
        <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-400 to-rose-400 text-white font-semibold rounded-full hover:from-orange-500 hover:to-rose-500 transition-all shadow-md hover:shadow-lg mb-8">
          Read More <ChevronRight size={18} />
        </button>
      </Link>

      <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
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
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      name: "Digital Growth",
      icon: <Rocket size={18} />,
      color: "bg-amber-50 text-amber-700",
    },
    {
      name: "Strategy & Tech",
      icon: <ShieldCheck size={18} />,
      color: "bg-purple-50 text-purple-700",
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
      <div className="min-h-screen bg-[#fcfaf7] p-6 md:p-12 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8 space-y-10">
            <BlogPost
              title="Building Your Own Business With Wealth Achievers’ Opportunity"
              excerpt="Dreaming of financial independence and the freedom to be your own boss? Discover the path to strategic wealth building."
              author="wealthmary"
              date="June 30, 2025"
              image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000"
            />
           
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <section>
              <h3 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-2">
                Categories{" "}
                <span className="h-1 w-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full inline-block"></span>
              </h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className={`flex items-center gap-3 p-4 rounded-2xl ${cat.color} font-bold cursor-pointer hover:scale-[1.02] transition-transform shadow-sm`}
                  >
                    {cat.icon} {cat.name}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-2">
                Tags{" "}
                <span className="h-1 w-12 bg-gradient-to-r from-orange-400 to-rose-500 rounded-full inline-block"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 bg-white text-slate-600 rounded-full text-sm font-semibold shadow-sm border border-slate-100 cursor-pointer hover:bg-slate-800 hover:text-white transition-all"
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
