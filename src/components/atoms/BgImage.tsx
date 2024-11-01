import bgImage from "../../assets/image/login-bg-img.png";

export default function BgImage() {
  return (
    <section
      className="flex-1 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></section>
  );
}
