import Icon from "../atoms/Icon";
import Slider from "../../assets/icon/slider.svg";
import { MenuContent, MenuRoot, MenuSeparator, MenuTrigger } from "../ui/menu";
import { Button } from "../ui/button";
import CheckBox from "../atoms/CheckBox";
import ToggleSearch from "./ToggleSearch";

export default function ChatListHead() {
  return (
    <div className="mb-2 flex items-center justify-between p-6">
      <h1 className="text-2xl font-semibold">Chat</h1>

      <div className="inline-flex items-center justify-center gap-x-3">
        <ToggleSearch />
        <MenuRoot positioning={{ placement: "bottom-end" }}>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Icon size="22px" src={Slider} />
            </Button>
          </MenuTrigger>
          <MenuContent className="flex w-56 flex-col justify-start rounded-lg bg-white p-2 shadow-md">
            <CheckBox name={"Shopee"} type={"Beauty Lovers"} />
            <MenuSeparator />
            <CheckBox name={"Shopee"} type={"Makeupucino"} />
            <MenuSeparator />
            <CheckBox name={"Tokopeida"} type={"Beauty Lovers"} />
            <MenuSeparator />
            <CheckBox name={"Tokopeida"} type={"Makeupucino"} />
          </MenuContent>
        </MenuRoot>
      </div>
    </div>
  );
}
