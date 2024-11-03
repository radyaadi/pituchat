import { useState } from "react";
import ChatListBar from "../organisms/ChatListBar";
import { contactChatList } from "../../constants/contactChatList";
import { useChat } from "../../contexts/chat-context";
import EmptyChat from "../molecules/EmptyChat";
import ChatWindow from "../organisms/ChatWindow";
import ProfileBarSection from "../organisms/ProfileBarSection";

export default function ChatLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { selectedChat } = useChat();

  const onToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="sticky top-20 flex h-[calc(100vh-5rem)] overflow-hidden">
      <ChatListBar data={contactChatList} />
      <div className="flex flex-1 bg-[#F9F9FA]">
        {selectedChat ? (
          <ChatWindow
            chats={contactChatList}
            chatId={selectedChat}
            onToggleSidebar={onToggleSidebar}
          />
        ) : (
          <EmptyChat />
        )}
      </div>
      <ProfileBarSection
        data={contactChatList}
        chatId={selectedChat}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={onToggleSidebar}
      />
    </section>
  );
}
