export default function Blog() {
  return (
    <section className="bg-[#eef3f2] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-slate-800 mb-10">
          Latest Blog Post
        </h2>

        {/* Blog Card */}
        <div className="w-[420px] bg-white shadow-md">
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="blog"
              className="w-full h-[260px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-slate-800 leading-snug">
              Building Your Own Business With Wealth Achievers’ Opportunity
            </h3>

            <p className="mt-4 text-gray-600 text-lg">
              Dreaming of financial independence and the freedom to be your own
              boss?
            </p>

            <button className="mt-6 text-slate-800 font-medium hover:underline">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
