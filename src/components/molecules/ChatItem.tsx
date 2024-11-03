import { Avatar } from "../ui/avatar";
import { Circle } from "@chakra-ui/react";
import Icon from "../atoms/Icon";
import TokopediaIcon from "../../assets/icon/tokopedia-icon.svg";
import ShopeeIcon from "../../assets/icon/shopee-icon.svg";
import { cn } from "../../utils/tw-merge";
import { BrandProps } from "../../constants/contactChatList";

export interface ChatItemProps {
  sender: string;
  avatar: string;
  brand: BrandProps;
  createAt: string;
  lastMessage: string;
  countUnreadMessagge: number;
  isSelected: boolean;
}

export default function ChatItem({
  sender,
  avatar,
  brand,
  createAt,
  lastMessage,
  countUnreadMessagge,
  isSelected,
}: ChatItemProps) {
  return (
    <div
      className={`${isSelected ? "bg-[#F5F5F5]" : "bg-white"} flex justify-between border px-4 py-6`}
    >
      <Avatar
        name={sender}
        src={avatar}
        shape="full"
        size="lg"
        variant="subtle"
        className="overflow-hidden"
      />

      <div className="flex-1 space-y-3 truncate px-3">
        <h4 className="font-medium leading-none">{sender}</h4>
        <p className="mt-1 truncate text-sm">{lastMessage}</p>

        <span
          className={cn(
            "inline-flex items-center gap-x-1 rounded px-3 py-1",
            brand.name === "Tokopedia" ? "bg-[#D9F2E3]" : "bg-[#FFDFCC]",
          )}
        >
          <Icon
            size={"15px"}
            src={brand.name === "Tokopedia" ? TokopediaIcon : ShopeeIcon}
          />
          <p className="text-xs">{brand.type}</p>
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-3 text-[.75rem]">
        <p>{createAt}</p>
        {countUnreadMessagge ? (
          <Circle size="5" className="bg-[#0C4AC0] text-white">
            {countUnreadMessagge}
          </Circle>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
