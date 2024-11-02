import ChatListBar from "../organisms/ChatListBar";

export default function ChatLayout() {
  return (
    <section className="flex">
      <ChatListBar />
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-1 overflow-y-auto bg-[#CEDBF2]">
        Chat Window (Comming soon)
      </div>
      <div className="basis-64 bg-emerald-300">Profile Info (Comming soon)</div>
    </section>
  );
}
