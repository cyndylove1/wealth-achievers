import { GrShieldSecurity } from "react-icons/gr";
interface TitleProps {
  text?: string;
}
export default function Title({ text }: TitleProps) {
  return (
    <>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#32b291]/10 text-[#32b291] text-xs font-medium mb-4">
        <GrShieldSecurity />
        <h3>{text}</h3>
      </div>
    </>
  );
}
