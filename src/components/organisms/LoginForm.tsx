import MainLogo from "../atoms/MainLogo";
import AuthInputField from "../molecules/AuthInputField";
import Icon from "../atoms/Icon";
import mail from "../../assets/icon/mail.svg";
import lock from "../../assets/icon/lock.svg";
import Button from "../atoms/Button";

export default function LoginForm() {
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
        <form className="w-full space-y-7">
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
