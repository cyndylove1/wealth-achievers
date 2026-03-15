interface TitleProps {
  text?: string;
  className?: string;
  light?: boolean;
}

export default function Title({ text, className = "", light = false }: TitleProps) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      <span className={`block w-6 h-px ${light ? "bg-[#16c7c1]" : "bg-[#0DA9A4]"}`} />
      <span
        className={`text-[11px] font-semibold tracking-[0.2em] uppercase ${light ? "text-[#16c7c1]" : "text-[#0DA9A4]"}`}
      >
        {text}
      </span>
    </div>
  );
}
