import { ChatProps } from "../../constants/contactChatList";
import ChatWindowBottomBar from "../molecules/ChatWindowBottomBar";
import ChatWindowTopBar from "../molecules/ChatWindowTopBar";
import MessageList from "../molecules/MessageList";

export default function ChatWindow({
  chats,
  chatId,
  onToggleSidebar,
}: {
  chats: ChatProps[];
  chatId: string;
  onToggleSidebar: () => void;
}) {
  const userChat: ChatProps | undefined = chats.find(
    (chat: ChatProps) => chat.id === chatId,
  );

  return (
    <section className="flex h-[calc(100vh-5rem)] w-full flex-col">
      <ChatWindowTopBar
        sender={userChat?.sender || ""}
        onToggleSidebar={onToggleSidebar}
      />
      {userChat ? (
        <MessageList userChat={userChat} />
      ) : (
        <p className="flex flex-1 items-center justify-center text-gray-500">
          Chat not found
        </p>
      )}
      <ChatWindowBottomBar />
    </section>
  );
}
