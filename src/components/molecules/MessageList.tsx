import { Avatar } from "../ui/avatar";
import { ChatProps, MessagesProps } from "../../constants/contactChatList";

export default function MessageList({ userChat }: { userChat: ChatProps }) {
  return (
    <div className="flex w-full flex-1 flex-col-reverse gap-y-5 overflow-y-auto bg-[#CEDBF2] p-8">
      {userChat?.messages
        .slice()
        .reverse()
        .map((message: MessagesProps, index: number) => (
          <div
            key={message.id}
            className={`${message.isSenderMessage ? "self-start" : "self-end"} flex max-w-lg flex-col`}
          >
            <div className="flex flex-row gap-x-2">
              {message.isSenderMessage && (
                <div className="flex flex-col justify-end">
                  <Avatar
                    name={userChat?.sender}
                    src={userChat?.avatar}
                    shape="full"
                    size="lg"
                    variant="subtle"
                    className="overflow-hidden"
                  />
                  <div className="h-5"></div>
                </div>
              )}

              <div className="flex flex-col">
                {message.isSenderMessage && (
                  <p className="mb-1 h-5 pl-5 text-sm">{userChat?.sender}</p>
                )}

                <p
                  className={`${message.isSenderMessage ? "rounded-bl-none bg-white text-black" : "rounded-br-none bg-[#0C4AC0] text-white"} flex flex-1 items-end rounded-3xl p-3.5`}
                >
                  {message.text}
                </p>

                <p
                  className={`${message.isSenderMessage ? "text-start" : "text-end"} h-5 pl-5 text-sm leading-6`}
                >
                  {!message.isSenderMessage && "Sent - "}
                  {userChat?.createAt === "Today" ? "Just Now" : "Yesterday"}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
