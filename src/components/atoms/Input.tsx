import { cn } from "../../utils/tw-merge";
import { forwardRef } from "react";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  hasIcon?: boolean;
  hasPasswordToggle?: boolean;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function TextInput(
  {
    id,
    type,
    placeholder,
    disabled,
    hasIcon,
    hasPasswordToggle,
    className,
  }: InputProps,
  ref,
) {
  return (
    <input
      ref={ref}
      id={id}
      type={type}
      disabled={disabled}
      className={cn(
        "w-full rounded-lg bg-white px-3 py-2 text-sm font-normal leading-none text-black placeholder-zinc-400 ring-1 ring-[#CCCCCC] placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#0C4AC0] disabled:border-slate-200 disabled:bg-zinc-300 disabled:text-zinc-600 disabled:shadow-none",
        hasIcon && "pl-10",
        hasPasswordToggle && "pr-10",
        className,
      )}
      placeholder={placeholder}
    />
  );
});

export default Input;
