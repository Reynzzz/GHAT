import { useMediaQuery } from "react-responsive";
import SideBar from "../../components/sidebar/SideBar";
import sidebarStore from "../../store/sidebar";
import Header from "../../components/Header";

const Schedelu = () => {
  const { isOpen } = sidebarStore();
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <>
      <div className="relative sm:flex">
        <div
          className={`max-sm:fixed inset-0 max-sm:bg-gray-800 bg-opacity-75 max-sm:z-50 overflow-y-auto transition-transform duration-300 ease-in-out sm:flex ${
            isMobile
              ? isOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          }`}
        >
          <SideBar />
        </div>
        <div className="flex-1 min-h-screen">
          <Header />
          <div>wkwkwkw</div>
        </div>
      </div>
    </>
  );
};

export default Schedelu;
