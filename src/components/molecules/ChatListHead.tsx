import Icon from "../atoms/Icon";
import Search from "../../assets/icon/search.svg.svg";
import Slider from "../../assets/icon/slider.svg";

export default function ChatListHead() {
  return (
    <div className="mb-2 flex items-center justify-between p-6">
      <h1 className="text-xl font-semibold">Chat</h1>
      <div className="inline-flex items-center justify-center gap-x-5">
        <Icon size="20px" src={Search} />
        <Icon size="20px" src={Slider} />
      </div>
    </div>
  );
}
