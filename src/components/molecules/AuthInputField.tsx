import { useState } from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Icon from "../atoms/Icon";
import eyeOff from "../../assets/icon/eye-off.svg";
import eyeOn from "../../assets/icon/eye-on.svg";

interface AuthInputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function AuthInputField({
  id,
  label,
  type = "text",
  placeholder,
  icon,
  disabled,
  className,
}: AuthInputFieldProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const isPassword = type === "password";
  const inputType = isPassword ? (passwordVisible ? "text" : "password") : type;

  return (
    <div>
      <Label text={label} />
      <div className="relative mt-1 rounded-md shadow-sm">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            {icon}
          </div>
        )}
        <Input
          id={id}
          type={inputType}
          disabled={disabled}
          placeholder={placeholder}
          hasIcon={!!icon}
          hasPasswordToggle={isPassword}
          className={className}
        />

        {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-sm text-zinc-500 focus:border-none focus:ring-transparent"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <Icon size={"20px"} src={eyeOn} />
            ) : (
              <Icon size={"20px"} src={eyeOff} />
            )}
          </button>
        )}
      </div>
      {isPassword && (
        <span className="mt-2 flex justify-end text-sm text-[#808080]">
          <p>Lupa password?</p>
        </span>
      )}
    </div>
  );
}
