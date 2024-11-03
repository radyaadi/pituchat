import { cn } from "../../utils/tw-merge";
import { ChatProps } from "../../constants/contactChatList";
import Icon from "../atoms/Icon";
import TokopediaIcon from "../../assets/icon/tokopedia-icon.svg";
import Close from "../../assets/icon/close.svg";
import ShopeeIcon from "../../assets/icon/shopee-icon.svg";
import { Avatar } from "../ui/avatar";

export default function ProfileBarSection({
  data,
  chatId,
  isSidebarOpen,
  onToggleSidebar,
}: {
  data: ChatProps[];
  chatId: string;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}) {
  const userChat: ChatProps | undefined = data.find(
    (chat: ChatProps) => chat.id === chatId,
  );

  return (
    <div
      className={`${isSidebarOpen ? "block" : "hidden"} flex basis-72 flex-col items-center gap-y-10 border-l bg-white px-5 py-20 shadow-sm transition-transform duration-300`}
    >
      <div
        className="absolute right-4 top-6 rounded p-2"
        onClick={onToggleSidebar}
      >
        <Icon size={"22px"} src={Close} />
      </div>
      <Avatar
        name={userChat?.sender}
        src={userChat?.avatar}
        shape="full"
        size="2xl"
        variant="subtle"
        className="size-32 overflow-hidden"
      />
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="text-xl font-semibold">{userChat?.sender}</h1>
        <p className="mb-5">{userChat?.brand.name}</p>
        <span
          className={cn(
            "inline-flex items-center gap-x-1 rounded px-3 py-2",
            userChat?.brand.name === "Tokopedia"
              ? "bg-[#D9F2E3]"
              : "bg-[#FFDFCC]",
          )}
        >
          <Icon
            size={"15px"}
            src={
              userChat?.brand.name === "Tokopedia" ? TokopediaIcon : ShopeeIcon
            }
          />
          <p className="text-xs">{userChat?.brand.type}</p>
        </span>
      </div>
      <div className="flex flex-col gap-y-3 self-start">
        <h1 className="font-medium">About Conversation</h1>
        <span className="inline-flex gap-x-5 text-sm">
          <p className="font-medium">Created</p>
          <p>20 Oktober 2022</p>
        </span>
        <span className="inline-flex gap-x-5 text-sm">
          <p className="font-medium">Created</p>
          <p>20 Oktober 2022</p>
        </span>
      </div>
    </div>
  );
}
