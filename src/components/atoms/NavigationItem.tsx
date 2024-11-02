import { NavLink, useMatch } from "react-router-dom";

interface NavigationItemProps {
  name: string;
  path: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

export default function NavigationItem({
  name,
  path,
  icon,
  activeIcon,
}: NavigationItemProps) {
  const match = useMatch(path);

  return (
    <NavLink
      to={path}
      className={`relative flex h-24 items-center justify-center text-[#0C4AC0] ${
        Boolean(match) && "bg-[#E6F5FC]"
      }`}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[3.5px] rounded-full ${
          Boolean(match) ? "bg-[#0C4AC0]" : "bg-transparent"
        }`}
      />
      <div className="flex flex-col items-center justify-center bg-transparent">
        {Boolean(match) ? activeIcon : icon}
        <p className="bg-transparent font-semibold text-[#0C4AC0]">{name}</p>
      </div>
    </NavLink>
  );
}
