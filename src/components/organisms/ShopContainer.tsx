import ShopItemField from "../molecules/ShopItemField";
import Icon from "../atoms/Icon";
import ShopItemBox from "../atoms/ShopItemBox";
import Button from "../atoms/Button";
import { Image } from "@chakra-ui/react";
import Tokopedia from "../../assets/logo/tokopedia.png";
import TokopediaIcon from "../../assets/icon/tokopedia-icon.svg";
import Shopee from "../../assets/logo/shopee.png";
import ShopeeIcon from "../../assets/icon/shopee-icon.svg";
import Plus from "../../assets/icon/plus.svg";

export default function ShopContainer() {
  return (
    <div className="flex gap-6">
      <ShopItemBox>
        <ShopItemField
          logo={<Image width={"134px"} src={Tokopedia} />}
          miniIcon={<Icon size={"15px"} src={TokopediaIcon} />}
          isConnected={true}
          themeColor={"bg-[#D9F2E3]"}
          brandType={"Beauty Lovers"}
        />
      </ShopItemBox>
      <ShopItemBox>
        <ShopItemField
          logo={<Image width={"125px"} src={Shopee} />}
          miniIcon={<Icon size={"15px"} src={ShopeeIcon} />}
          isConnected={true}
          themeColor={"bg-[#FFDFCC]"}
          brandType={"Beauty Lovers"}
        />
      </ShopItemBox>
      <ShopItemBox>
        <Button className="inline-flex items-center justify-center border-[1px] border-[#0C4AC0] bg-transparent px-2 text-[#0C4AC0] transition-colors duration-300 ease-in-out hover:bg-[#B8C7E5]">
          <Icon size={"24px"} src={Plus} />
          <p className="text-sm">Tambah toko</p>
        </Button>
      </ShopItemBox>
    </div>
  );
}
