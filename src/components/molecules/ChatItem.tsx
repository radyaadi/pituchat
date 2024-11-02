import { Avatar } from "../ui/avatar";
import { Circle } from "@chakra-ui/react";
import Profile from "../../assets/image/avatar-1.png";
import Icon from "../atoms/Icon";
import TokopediaIcon from "../../assets/icon/tokopedia-icon.svg";
import { cn } from "../../utils/tw-merge";

export default function ChatItem({
  name,
  lastMessage,
  countUnreadMessagge,
  isSelected,
}: any) {
  return (
    <div
      className={`${isSelected ? "bg-[#F5F5F5]" : "bg-white"} flex border px-4 py-6`}
    >
      <Avatar
        name="Random User"
        src={Profile}
        shape="full"
        size="lg"
        variant="subtle"
      />
      <div className="space-y-3 truncate px-3">
        <h4 className="font-medium leading-none">{name}</h4>
        <p className="mt-1 truncate text-sm">{lastMessage}</p>
        <span
          className={cn(
            "inline-flex items-center gap-x-1 rounded px-3 py-1",
            "bg-[#D9F2E3]",
          )}
        >
          <Icon size={"15px"} src={TokopediaIcon} />
          <p className="text-xs">Beauty Lovers</p>
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-3 text-[.75rem]">
        <p>Today</p>
        <Circle size="5" className="bg-[#0C4AC0] text-white">
          {countUnreadMessagge}
        </Circle>
      </div>
    </div>
  );
}
