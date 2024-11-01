import bgImage from "../../assets/image/login-bg-img.png";

export default function BgImage() {
  return (
    <section
      className="hidden flex-1 bg-cover bg-center lg:block"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></section>
  );
}
