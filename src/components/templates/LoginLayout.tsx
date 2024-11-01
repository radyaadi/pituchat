import LoginPage from "../../pages/LoginPage";
import BgImage from "../atoms/BgImage";
import LoginForm from "../organisms/LoginForm";

export default function LoginLayout() {
  return (
    <LoginPage>
      <BgImage />
      <LoginForm />
    </LoginPage>
  );
}
