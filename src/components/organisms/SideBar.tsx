import Icon from "../atoms/Icon";
import NavigationItem from "../atoms/NavigationItem";
import Msg from "../../assets/icon/msg.svg";
import MsgAlt from "../../assets/icon/msg-alt.svg";
import Store from "../../assets/icon/store.svg";
import StoreAlt from "../../assets/icon/store-alt.svg";
import Logout from "../../assets/icon/logout.svg";

export default function SideBar() {
  return (
    <aside className="sticky top-20 flex h-[calc(100vh-5rem)] basis-28 flex-col justify-between border-r border-r-[#EBEBEB] bg-white shadow-sm">
      <div className="grid w-full grid-cols-1">
        <NavigationItem
          name={"Chat"}
          path={"/chat"}
          icon={<Icon size={"20px"} src={MsgAlt} />}
          activeIcon={<Icon size={"20px"} src={Msg} />}
        />
        <NavigationItem
          name={"Toko"}
          path={"/toko"}
          icon={<Icon size={"20px"} src={StoreAlt} />}
          activeIcon={<Icon size={"20px"} src={Store} />}
        />
      </div>
      <NavigationItem
        name={"Keluar"}
        path={"/login"}
        icon={<Icon size={"20px"} src={Logout} />}
      />
    </aside>
  );
}
