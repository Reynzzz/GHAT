import { useMediaQuery } from "react-responsive";
import Card from "../../components/Card";
import Header from "../../components/Header";
import SideBar from "../../components/sidebar/SideBar";
import Tabel from "../../components/Tabel";
import useSidebarStore from "../../store/sidebar";
import useTeacherStore from "../../store/teacherStore";
import { useCallback, useEffect, useState } from "react";

const Dashboard = () => {
  const { teachers, fetchTeachers, pageCount } = useTeacherStore();
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  const memoizedFetchTeachers = useCallback(
    (page: number, size: number) => {
      fetchTeachers(page, size);
    },
    [fetchTeachers]
  );

  useEffect(() => {
    memoizedFetchTeachers(0, pageSize);
  }, [memoizedFetchTeachers]);
  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
    memoizedFetchTeachers(selectedItem.selected, pageSize);
  };

  const dashboardColumns = [
    { key: "username", label: "Username" },
    { key: "password", label: "Password" },
    { key: "Golongan", label: "Golongan" },
    { key: "umur", label: "Umur" },
    { key: "jenisKelamin", label: "Jenis Kelamin" },
  ];
  const { isOpen } = useSidebarStore();
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className="relative sm:flex">
      {/* Sidebar */}
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
        {/* Header */}
        <Header />

        {/* Welcome message */}
        <h2 className="pt-10 text-2xl font-bold p-3 sm:px-4">
          Selamat Datang, Chinez
        </h2>

        {/* Card section */}
        <div className="flex overflow-x-scroll no-scrollbar pt-2 px-3">
          <div className="flex flex-nowrap gap-1 text-white">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* Table */}
        <Tabel
          data={teachers}
          columns={dashboardColumns}
          pageCount={pageCount}
          currentPage={currentPage}
          onPageChange={handlePageClick}
        />
      </div>
    </div>
  );
};

export default Dashboard;
