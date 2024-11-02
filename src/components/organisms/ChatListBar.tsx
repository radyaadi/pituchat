import { Tabs } from "@chakra-ui/react";
import ChatListHead from "../molecules/ChatListHead";
import ChatItem from "../molecules/ChatItem";

export default function ChatListBar() {
  return (
    <div className="sticky top-20 h-[calc(100vh-5rem)] max-w-[400px] basis-[400px] bg-white">
      <ChatListHead />

      <Tabs.Root
        defaultValue="unreplied"
        justify="center"
        fitted={true}
        colorPalette="blue"
      >
        <Tabs.List className="border-b-2">
          <Tabs.Trigger value="unreplied">Perlu balas</Tabs.Trigger>
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
          <ChatItem
            name={"Penggemar Pitu Chat"}
            lastMessage={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellendus."
            }
            countUnreadMessagge={3}
            isSelected={true}
          />
          <ChatItem
            name={"Penggemar Pitu Chat"}
            lastMessage={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellendus."
            }
            countUnreadMessagge={3}
            isSelected={false}
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
