import React, { useState } from "react";
import { Icon } from "@ailibs/feather-react-ts";
import sidebarStore from "../store/sidebar";
import { useLocation } from "react-router-dom";
const Header: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const handleImgError = () => {
    setImgError(true);
  };
  const category = useLocation();
  let headerText;
  switch (category.pathname) {
    case "/":
      headerText = "Dashboard";
      break;
    case "/schedelu":
      headerText = "Schedule";
      break;
    case "/settings":
      headerText = "Settings";
      break;
    case "/guru":
      headerText = "Guru";
      break;
    default:
      headerText = "Unknown Page";
  }
  const { openSidebar } = sidebarStore();
  return (
    <div className="  max-sm:bg-white max-sm:pb-3 max-sm:z-10 max-sm:px-3 max-sm:py-2 max-sm:sticky max-sm:-top-1 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:mt-2 sm:flex sm:w-full sm:justify-between sm:px-4 sm:py-10">
      <div
        className="hover:bg-gray-200 p-3 transition-all hover:cursor-pointer sm:hidden "
        onClick={openSidebar}
      >
        <Icon className="" name="menu" size={"24"} strokeWidth={2} />
      </div>
      <h1 className="text-blue-500 font-bold text-2xl sm:text-4xl">
        {headerText}
      </h1>
      <div className="flex sm:gap-1 justify-center  ">
        <div className="max-sm:hidden flex justify-center flex-col items-end">
          {" "}
          <div className="text-md font-bold">Chinez</div>
          <div className="text-gray-600 text-sm">Guru</div>
        </div>
        <div className="avatar">
          <div className="max-sm:w-10 rounded-full border-green-400 sm:w-14 border-2 bg-red-200 flex justify-center items-center  ">
            {imgError ? (
              <div className="bg-blue-200 h-full flex justify-center items-center">
                {" "}
                <Icon name="user" size={28} />
              </div>
            ) : (
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                onError={handleImgError}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
