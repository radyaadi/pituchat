import { cn } from "../../utils/tw-merge";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "rounded-md bg-[#0C4AC0] px-4 py-2 text-white duration-75 ease-in-out",
        className,
      )}
    >
      {children}
    </button>
  );
}
