import MainLogo from "../atoms/MainLogo";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { Avatar } from "../ui/avatar";
import mainAvatar from "../../assets/image/main-avatar.png";
import arrowDown from "../../assets/icon/arrow-down.svg";

export default function MainHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-20 w-full items-center justify-between border-b border-b-[#EBEBEB] bg-white px-6 py-4 shadow-sm">
      <MainLogo size={"40px"} text={"PituChat"} />
      <Button className="inline-flex items-center gap-x-4 bg-transparent">
        <Avatar
          name="Sage Adebayo"
          src={mainAvatar}
          shape="rounded"
          size="sm"
        />
        <Icon size={"13px"} src={arrowDown} />
      </Button>
    </header>
  );
}
