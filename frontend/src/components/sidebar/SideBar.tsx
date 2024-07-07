import { Icon } from "@ailibs/feather-react-ts";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import useSidebarStore from "../../store/sidebar";

const SideBar: React.FC = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  const handleClick = () => {
    if (window.innerWidth <= 640) {
      // Kondisi mobile
      toggleSidebar();
    }
  };

  return (
    <>
      <div className="max-sm:top-0 max-sm:z-20 max-sm:h-[100%] max-sm:fixed sm:h-[100%] sm:w-72 bg-blue-500 max-sm:w-8/12 grid grid-rows-12 grid-flow-col px-2 sm:pt-10">
        <div className="flex w-full justify-end pr-1 pt-1 max-sm:row-span-1 sm:hidden">
          <div className="hover:cursor-pointer">
            <Icon
              name="x"
              size={32}
              strokeWidth={3}
              color="white"
              onClick={toggleSidebar}
            />
          </div>
        </div>
        <div className="flex flex-col items-center max-sm:row-span-3 sm:row-span-4">
          <Logo
            imageProps="max-sm:h-32 pb-2"
            h1Props="text-2xl font-bold text-center text-white"
            h4Props="text-sm italic font-semibold text-center text-yellow-200"
          />
        </div>
        <div className="max-sm:row-span-5 sm:row-span-5 flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? "btn btn-ghost flex justify-start text-white font-bold bg-green-400 hover:bg-green-400"
                  : "btn btn-ghost flex justify-start text-white font-bold"
              }`
            }
            onClick={handleClick}
          >
            <Icon name="command" />
            <div className="text-lg">Dashboard</div>
          </NavLink>
          <NavLink
            to="/schedelu"
            className={({ isActive }) =>
              `${
                isActive
                  ? "btn btn-ghost flex justify-start text-white font-bold bg-green-400 hover:bg-green-400"
                  : "btn btn-ghost flex justify-start text-white font-bold"
              }`
            }
            onClick={handleClick}
          >
            <Icon name="calendar" />
            <div className="text-lg">Schedelu</div>
          </NavLink>
          <NavLink
            to="/guru"
            className={({ isActive }) =>
              `${
                isActive
                  ? "btn btn-ghost flex justify-start text-white font-bold bg-green-400 hover:bg-green-400"
                  : "btn btn-ghost flex justify-start text-white font-bold"
              }`
            }
            onClick={handleClick}
          >
            <Icon name="user" />
            <div className="text-lg">Guru</div>
          </NavLink>
        </div>

        <div className="max-sm:row-span-3 sm:row-span-2 max-sm:flex max-sm:flex-col gap-2">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${
                isActive
                  ? "btn btn-ghost flex justify-start text-white font-bold bg-green-400 hover:bg-green-400"
                  : "btn btn-ghost flex justify-start text-white font-bold"
              }`
            }
            onClick={handleClick}
          >
            <Icon name="settings" />
            <div className="text-lg">Settings</div>
          </NavLink>

          <NavLink to="/login">
            <button
              className="btn w-full btn-ghost flex hover:w-full justify-start text-white font-bold hover:bg-green-400 mt-2"
              onClick={handleClick}
            >
              <Icon name="log-out" />
              <div className="text-lg">Logout</div>
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
