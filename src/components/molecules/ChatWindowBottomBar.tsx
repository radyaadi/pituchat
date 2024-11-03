import Touch from "../../assets/icon/touch.svg";
import Icon from "../atoms/Icon";
import Input from "../atoms/Input";

export default function ChatWindowBottomBar() {
  return (
    <div className="flex h-20 items-center justify-between gap-x-1 p-5">
      <Icon size="44px" src={Touch} />
      <Input
        id="chat"
        type="text"
        placeholder="Type a message"
        className="rounded-full"
      />
    </div>
  );
}
