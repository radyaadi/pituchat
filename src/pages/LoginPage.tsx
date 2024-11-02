import LoginLayout from "../components/templates/LoginLayout";
import LoginForm from "../components/organisms/LoginForm";
import BgImage from "../components/atoms/BgImage";

export default function LoginPage() {
  return (
    <LoginLayout>
      <BgImage />
      <LoginForm />
    </LoginLayout>
  );
}
