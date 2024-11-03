import ChatListBar from "../organisms/ChatListBar";
import { contactChatList } from "../../constants/contactChatList";
import { useChat } from "../../contexts/chat-context";

export default function ChatLayout() {
  const { selectedChat } = useChat();

  return (
    <section className="sticky top-20 flex h-[calc(100vh-5rem)] overflow-hidden">
      <ChatListBar data={contactChatList} />
      <div className="flex flex-1 overflow-y-auto bg-[#CEDBF2]">
        Chat Window (Comming soon) : {selectedChat}
      </div>
      {/* <div className="basis-64 bg-emerald-300">Profile Info (Comming soon)</div> */}
    </section>
  );
}
