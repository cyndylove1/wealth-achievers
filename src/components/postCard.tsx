

export default function PostCard() {
  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-slate-100">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src="/blog.jpg"
          alt="blog"
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-slate-800 leading-snug hover:text-teal-600 transition">
          Building Your Own Business With Wealth Achievers’ Opportunity
        </h2>

        <p className="text-slate-500 text-sm leading-relaxed">
          Dreaming of financial independence and the freedom to be your own
          boss? Learn how business opportunities can help you start your
          journey.
        </p>

        <button className="text-teal-600 font-medium hover:underline">
          Read More →
        </button>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t">
          <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-sm">
            W
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">wealthmary</p>
            <p className="text-xs text-slate-400">June 30, 2025</p>
          </div>
        </div>
      </div>
    </article>
  );
}
