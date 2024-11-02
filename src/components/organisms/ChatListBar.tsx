import { Tabs } from "@chakra-ui/react";
import ChatListHead from "../molecules/ChatListHead";

export default function ChatListBar() {
  return (
    <div className="sticky top-20 h-[calc(100vh-5rem)] basis-96 bg-white">
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
          Chat List (Comming soon)
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
