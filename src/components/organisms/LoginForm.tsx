import { useNavigate } from "react-router-dom";
import AuthInputField from "../molecules/AuthInputField";
import MainLogo from "../atoms/MainLogo";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";
import mail from "../../assets/icon/mail.svg";
import lock from "../../assets/icon/lock.svg";
import { useChat } from "../../contexts/chat-context";

export default function LoginForm() {
  const { setSelectedChat } = useChat();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSelectedChat("");
    navigate("/chat");
  };

  return (
    <section className="flex flex-1 items-center justify-center">
      <div className="flex w-11/12 flex-col gap-y-9 p-5 md:w-2/3 xl:w-7/12">
        <div className="space-y-2">
          <MainLogo size={"72px"} />
          <p className="text-2xl font-bold text-[#1A1A1A]">Login Ke akunmu</p>
          <p className="text-sm text-[#4D4D4D]">
            Masuk akun untuk Menggunakan PituChat
          </p>
        </div>
        <form className="w-full space-y-7" onSubmit={handleLogin}>
          <AuthInputField
            label="email"
            id="email"
            type="email"
            placeholder="Email"
            icon={<Icon size={"20px"} src={mail} />}
          />
          <AuthInputField
            label="password"
            id="password"
            type="password"
            placeholder="Password"
            icon={<Icon size={"20px"} src={lock} />}
          />
          <Button type="submit" className="w-full">
            Masuk
          </Button>
        </form>
      </div>
    </section>
  );
}
