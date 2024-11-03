import React from "react";

export default function ShopItemBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-w-[190px] basis-[190px] flex-col items-center justify-center gap-y-6 rounded-lg bg-white px-7 py-6">
      {children}
    </div>
  );
}
