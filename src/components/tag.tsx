type TagProps = {
  name: string;
};

export default function Tag({ name }: TagProps) {
  return (
    <span
      className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm 
    hover:bg-teal-600 hover:text-white transition cursor-pointer"
    >
      {name}
    </span>
  );
}
