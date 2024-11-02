import React from "react";
import { cn } from "../../utils/tw-merge";
import Check from "../../assets/icon/check.svg";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";

interface ShopItemFieldProps {
  logo: React.ReactNode;
  miniIcon: React.ReactNode;
  isConnected: boolean;
  themeColor: string;
  brandType: string;
}

export default function ShopItemField({
  logo,
  miniIcon,
  isConnected,
  themeColor,
  brandType,
}: ShopItemFieldProps) {
  return (
    <>
      {logo}
      <span
        className={cn(
          "inline-flex items-center gap-x-1 rounded px-3 py-1",
          themeColor,
        )}
      >
        {miniIcon}
        <p className="text-xs">{brandType}</p>
      </span>
      {isConnected && (
        <Button className="inline-flex items-center justify-center gap-x-1 bg-[#0C4AC0] opacity-40">
          <Icon size={"24px"} src={Check} />
          <p className="text-sm">Tersambung</p>
        </Button>
      )}
    </>
  );
}
