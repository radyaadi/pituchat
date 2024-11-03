import { createContext, useContext, useState, ReactNode } from "react";

interface ChatContextType {
  selectedChat: string;
  setSelectedChat: (value: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [selectedChat, setSelectedChat] = useState<string>("");

  return (
    <ChatContext.Provider value={{ selectedChat, setSelectedChat }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat harus digunakan di dalam ChatProvider");
  }
  return context;
}
