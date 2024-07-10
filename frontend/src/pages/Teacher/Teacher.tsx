import React, { useState, useEffect, useMemo } from "react";
import sidebarStore from "../../store/sidebar";
import { useMediaQuery } from "react-responsive";
import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/Header";
import Tabel from "../../components/Tabel";
import { Formik, Form } from "formik";
import useTeacherStore from "../../store/teacherStore";
import InputField from "../../components/Inputs/InputField";
import { Icon } from "@ailibs/feather-react-ts";
import InputSelect from "../../components/Inputs/InputSelect";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTeachers, addTeacher } from "./services/TeacherServices";

function Teacher() {
  const { isOpen } = sidebarStore();
  const isMobile = useMediaQuery({ maxWidth: 640 });

  // const {
  //   addTeacher,
  //   allTeachers,
  //   fetchTeachers,
  //   pageCount,
  //   currentPage,
  //   setCurrentPage,
  //   getTeacherById,
  //   deleteTeacher,
  // } = useTeacherStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(false);
  const [notifSubmit, setNotifSubmit] = useState(false);
  const [deleteNotification, setDeleteNotification] = useState(false);
  const queryClient = useQueryClient();
  const {
    data: allTeachers,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["teachers"], queryFn: fetchTeachers });

  const initialValues = {
    username: "",
    password: "",
    Golongan: "",
    umur: "",
    jenisKelamin: "",
    role: "",
  };
  const columns = [
    {
      accessorKey: "username",
      header: "Username",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "Golongan",
      header: "Golongan",
      cell: (info) => info.getValue(),
    },
    { accessorKey: "umur", header: "Umur", cell: (info) => info.getValue() },
    {
      accessorKey: "jenisKelamin",
      header: "Jenis Kelamin",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "password",
      header: "Password",
      cell: (info) => info.getValue(),
    },
  ];
  console.log(isLoading, "loading");
  console.log(allTeachers?.length, "ini all teachers");
  // const getTeachers = async () => {
  //   try {
  //     await fetchTeachers();
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useMemo(() => {
  //   getTeachers();
  // }, [fetchTeachers]);

  // const onEdit = async (id) => {
  //   const data = await getTeacherById(id);
  //   console.log(data, "ini data");
  // };

  // const onDelete = async (id) => {
  //   try {
  //     await deleteTeacher(id);
  //     setDeleteNotification(true);
  //     getTeachers(); // Fetch updated data
  //     setTimeout(() => setDeleteNotification(false), 2000);
  //   } catch (err) {
  //     setError(err);
  //   }
  // };

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
        <div className="flex-1 min-h-screen px-1">
          <Header />
          <div className="w-full flex justify-end px-3">
            <div className="">
              <button
                className="btn bg-green-400"
                onClick={() =>
                  (
                    document.getElementById("my_modal_1") as HTMLFormElement
                  ).showModal()
                }
              >
                Add Teacher
              </button>

              <dialog id="my_modal_1" className="modal w-full">
                <Formik
                  initialValues={initialValues}
                  onSubmit={(values, action) => {
                    setTimeout(() => {
                      addTeacher(values);
                      setNotification(true);
                      setNotifSubmit(true);
                      action.setSubmitting(false);
                      setTimeout(() => {
                        setNotification(false);
                        setNotifSubmit(false);
                        setTimeout(
                          () =>
                            (
                              document.getElementById(
                                "my_modal_1"
                              ) as HTMLFormElement
                            ).close(),
                          600
                        );
                      }, 800);
                    }, 400);
                    action.resetForm();
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="modal-box w-full">
                        {notification && (
                          <div className="toast toast-top toast-center">
                            <div className="alert alert-info">
                              <span>Tambah Data Berhasil.</span>
                            </div>
                          </div>
                        )}
                        <form
                          method="dialog"
                          className="modal-backdrop flex justify-end"
                        >
                          <button className="w-min">
                            <Icon name="x" size={32} color="black" />
                          </button>
                        </form>
                        <div className="modal-action flex-col">
                          <div>
                            <InputField
                              label="Username"
                              name="username"
                              type="text"
                              placeholder="masukkan username"
                              required
                            />
                            <InputField
                              label="Password"
                              name="password"
                              type="password"
                              placeholder="masukkan password"
                              Required
                            />
                            <InputField
                              label="Umur"
                              name="umur"
                              type="number"
                              placeholder="masukkan umur"
                              required
                            />
                            <InputField
                              label="Golongan"
                              name="Golongan"
                              type="text"
                              placeholder="masukkan Golongan"
                              Required
                            />
                            <InputSelect
                              label="Jenis Kelamin"
                              name="jenisKelamin"
                              placeholder="Pilih Jenis Kelamin"
                            >
                              <option value="" disabled>
                                Pilih Jenis Kelamin
                              </option>
                              <option value="laki-laki">Laki-Laki</option>
                              <option value="Perempuan">Perempuan</option>
                            </InputSelect>
                            <InputSelect
                              label="Role"
                              name="role"
                              placeholder="Pilih Role"
                            >
                              <option value="" disabled>
                                Pilih Role
                              </option>
                              <option value="user">user</option>
                              <option value="admin">admin</option>
                            </InputSelect>
                            <button
                              disabled={isSubmitting}
                              type="submit"
                              className="btn btn-primary w-full"
                            >
                              {notifSubmit ? (
                                <span className="loading loading-spinner loading-md"></span>
                              ) : (
                                "Submit"
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </dialog>
            </div>
          </div>
          {deleteNotification && (
            <div className="toast toast-top toast-center">
              <div className="alert alert-info">
                <span>Data berhasil dihapus.</span>
              </div>
            </div>
          )}
          <Tabel
            data={allTeachers}
            columns={columns}
            // onEdit={onEdit}
            // onDelete={onDelete}
          />
        </div>
      </div>
    </>
  );
}

export default Teacher;
