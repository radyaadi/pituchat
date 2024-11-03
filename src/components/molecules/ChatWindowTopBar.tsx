import Info from "../../assets/icon/info.svg";
import Search from "../../assets/icon/search.svg";
import Icon from "../atoms/Icon";

export default function ChatWindowTopBar({ sender }: { sender: string }) {
  return (
    <div className="flex h-20 items-center justify-between px-6 py-5">
      <h3 className="text-xl font-medium">{sender}</h3>
      <div className="inline-flex items-center justify-center gap-x-6">
        <Icon size="22px" src={Search} />
        <Icon size="22px" src={Info} />
      </div>
    </div>
  );
}
