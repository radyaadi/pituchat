import LoginPage from "../../pages/LoginPage";
import BgImage from "../atoms/BgImage";

export default function LoginLayout() {
  return (
    <LoginPage>
      <BgImage />
      <section className="flex flex-1 items-center justify-center">
        Login Form (Soon)
      </section>
    </LoginPage>
  );
}
