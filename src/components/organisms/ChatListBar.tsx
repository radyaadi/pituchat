import { Circle, Tabs } from "@chakra-ui/react";
import ChatListHead from "../molecules/ChatListHead";
import ChatItem from "../molecules/ChatItem";
import { useChat } from "../../contexts/chat-context";
import { ChatProps, MessagesProps } from "../../constants/contactChatList";

export default function ChatListBar({ data }: { data: ChatProps[] }) {
  const { selectedChat, setSelectedChat } = useChat();

  const chatListData = data.map((chat: ChatProps) => {
    const lastMessage = chat.messages[chat.messages.length - 1]?.text;
    const countUnreadMessages = chat.messages.filter(
      (text: MessagesProps) => !text.isRead,
    ).length;
    return {
      id: chat.id,
      sender: chat.sender,
      avatar: chat.avatar,
      brand: chat.brand,
      createAt: chat.createAt,
      countUnreadMessages: countUnreadMessages,
      lastMessage: lastMessage,
    };
  });

  const totalUnreadContacts = data.filter((chat: ChatProps) =>
    chat.messages.some((message: MessagesProps) => !message.isRead),
  ).length;

  const onChatSelectionChanged = (value: string) => {
    setSelectedChat(value);
  };

  return (
    <div className="max-w-[400px] basis-[400px] border-r bg-white">
      <ChatListHead />
      <Tabs.Root
        defaultValue="unreplied"
        justify="center"
        fitted={true}
        colorPalette="blue"
      >
        <Tabs.List className="border-b-2">
          <Tabs.Trigger value="unreplied">
            Perlu balas{" "}
            <Circle size="5" className="bg-[#0C4AC0] text-white">
              {totalUnreadContacts}
            </Circle>
          </Tabs.Trigger>
          <Tabs.Trigger value="replied" disabled>
            Terbalas
          </Tabs.Trigger>
          <Tabs.Trigger value="all" disabled>
            Semua chat
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="unreplied"
          className="max-h-[calc(100vh-13rem)] overflow-y-auto p-0"
        >
          {chatListData.map((chat: any) => (
            <div
              key={chat.id}
              onClick={() => onChatSelectionChanged(chat.id)}
              className="cursor-pointer"
            >
              <ChatItem
                sender={chat.sender}
                avatar={chat.avatar}
                createAt={chat.createAt}
                brand={chat.brand}
                lastMessage={chat.lastMessage}
                countUnreadMessagge={chat.countUnreadMessages}
                isSelected={selectedChat === chat.id}
              />
            </div>
          ))}
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
