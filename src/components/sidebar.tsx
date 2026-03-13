import Tag from "../components/tag";

export default function Sidebar() {
  return (
    <aside className="space-y-10">
      {/* Categories */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4">
          Categories
        </h3>

        <ul className="space-y-3 text-slate-600">
          <li className="flex justify-between hover:text-teal-600 cursor-pointer">
            Business <span>(8)</span>
          </li>
          <li className="flex justify-between hover:text-teal-600 cursor-pointer">
            Marketing <span>(5)</span>
          </li>
          <li className="flex justify-between hover:text-teal-600 cursor-pointer">
            Technology <span>(4)</span>
          </li>
          <li className="flex justify-between hover:text-teal-600 cursor-pointer">
            Strategy <span>(6)</span>
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4">Tags</h3>

        <div className="flex flex-wrap gap-3">
          <Tag name="Business" />
          <Tag name="Marketing" />
          <Tag name="Strategy" />
          <Tag name="Technology" />
          <Tag name="Analysis" />
        </div>
      </div>
    </aside>
  );
}
