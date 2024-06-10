import React from "react";
import sidebarStore from "../../store/sidebar";
import { useMediaQuery } from "react-responsive";
import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/Header";
import Tabel from "../../components/Tabel";
import { useFormik, FormikHelpers } from "formik";
import useTeacherStore from "../../store/teacherStore";
function Teacher() {
  const { isOpen } = sidebarStore();
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const { addTeacher } = useTeacherStore();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      golongan: "",
      umur: "",
      jenisKelamin: "",
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        // if (isEdit) {
        //   // Assuming `teacher.id` is available
        //   // await updateTeacher(teacher.id, values);
        // } else {
        await addTeacher(values);
        // }
        // onSuccess();
      } catch (error) {
        // setErrors({ submit: error.message });
      } finally {
        setSubmitting(false);
      }
    },
  });

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
          <div className="w-full flex justify-end  px-3">
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

              <form action="" onSubmit={formik.handleSubmit}>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <div className="font-bold text-lg">Isi Biodata Berikut</div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name :</span>
                      </label>
                      <input
                        type="text"
                        name="username"
                        className="input input-bordered input-primary"
                        onChange={formik.handleChange}
                        value={formik.values.nama}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password :</span>
                      </label>
                      <input
                        type="password"
                        name="name"
                        className="input input-bordered input-primary"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Golongan :</span>
                      </label>
                      <input
                        type="text"
                        name="golongan"
                        className="input input-bordered input-primary"
                        onChange={formik.handleChange}
                        value={formik.values.golongan}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Umur :</span>
                      </label>
                      <input
                        type="text"
                        name="umur"
                        className="input input-bordered input-primary"
                        onChange={formik.handleChange}
                        value={formik.values.umur}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Jenis Kelamin :</span>
                      </label>
                      <input
                        type="text"
                        name="jenisKelamin"
                        className="input input-bordered input-primary"
                        onChange={formik.handleChange}
                        value={formik.values.jenisKelamin}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Role :</span>
                      </label>
                      <select className="select select-primary w-full">
                        <option disabled selected>
                          Pilih Role ?
                        </option>
                        <option>User</option>
                        <option>Admin</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary mt-4"
                      disabled={formik.isSubmitting}
                    >
                      {"Submit"}
                    </button>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </form>
            </div>
          </div>
          <Tabel />
        </div>
      </div>
    </>
  );
}

export default Teacher;
