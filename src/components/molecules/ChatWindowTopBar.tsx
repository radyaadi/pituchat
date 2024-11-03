import Info from "../../assets/icon/info.svg";
import Search from "../../assets/icon/search.svg";
import Icon from "../atoms/Icon";

export default function ChatWindowTopBar({
  sender,
  onToggleSidebar,
}: {
  sender: string;
  onToggleSidebar: () => void;
}) {
  return (
    <div className="flex h-20 items-center justify-between px-6 py-5">
      <h3 className="text-xl font-medium">{sender}</h3>
      <div className="inline-flex items-center justify-center gap-x-6">
        <Icon size="22px" src={Search} />
        <div className="cursor-pointer" onClick={onToggleSidebar}>
          <Icon size="22px" src={Info} />
        </div>
      </div>
    </div>
  );
}
