import { Image } from "@chakra-ui/react";
import mainLogo from "../../assets/logo/main-logo.png";

export default function MainLogo({
  size,
  text,
}: {
  size: string;
  text?: string;
}) {
  return (
    <div className="inline-flex items-center gap-x-2">
      <Image h={size} w={size} fit="contain" src={mainLogo} />
      {text && <p className="text-lg font-medium uppercase">{text}</p>}
    </div>
  );
}
