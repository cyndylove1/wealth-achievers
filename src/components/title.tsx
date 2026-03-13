import { GrShieldSecurity } from "react-icons/gr";
interface TitleProps{
    text?: string;
}
export default function Title({text}:TitleProps) {
    return (
      <>
        <div className="inline-flex items-center gap-2 bg-(--secondary) text-white px-4 py-2 rounded-md md:text-[15px] text-[12px] mb-4">
          <span>
            <GrShieldSecurity />
          </span>
            <h3>{text}</h3>
        </div>
      </>
    );
}