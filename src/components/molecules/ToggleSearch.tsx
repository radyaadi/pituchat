import { useState } from "react";
import Search from "../../assets/icon/search.svg";
import { Button } from "../ui/button";
import Icon from "../atoms/Icon";

export default function ToggleSearch() {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };
  return (
    <div className="relative flex justify-end">
      {showInput ? (
        <div className="flex w-4/5 items-center rounded bg-[#F9F9FA] px-2">
          <Button onClick={toggleInput} className="p-2 text-[#808080]">
            <Icon size="22px" src={Search} />
          </Button>
          <input
            type="text"
            placeholder="Cari"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      ) : (
        <Button onClick={toggleInput} className="p-2 text-gray-500">
          <Icon size="22px" src={Search} />
        </Button>
      )}
    </div>
  );
}
