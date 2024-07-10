import { create } from "zustand";
import {
  fetchTeachers,
  addTeacher,
  deleteTeacher,
  updateTeacher,
  getTeacherById,
} from "../pages/Teacher/services/TeacherServices";

const useTeacherStore = create((set, get) => ({
  allTeachers: [],
  pageCount: 0,
  currentPage: 0,
  pageSize: 4,
  dataFetched: false, // Tambahkan state untuk menandakan data sudah di-fetch
  fetchTeachers: async () => {
    if (get().dataFetched) return; // Cek apakah data sudah di-fetch
    const data = await fetchTeachers();
    set((state) => {
      const totalTeachers = data.length;
      const pageCount = Math.ceil(totalTeachers / state.pageSize);
      return {
        allTeachers: data,
        pageCount: pageCount,
        dataFetched: true, // Set dataFetched menjadi true setelah data di-fetch
      };
    });
  },
  setCurrentPage: (page) => set({ currentPage: page }),
  setPageSize: (size) =>
    set((state) => {
      const pageCount = Math.ceil(state.allTeachers.length / size);
      return {
        pageSize: size,
        pageCount: pageCount,
        currentPage: state.currentPage < pageCount ? state.currentPage : 0,
      };
    }),
  addTeacher: async (teacher) => {
    await addTeacher(teacher);
    await get().fetchTeachers();
  },
  getTeacherById: async (id) => {
    const teacher = await getTeacherById(id);
    return teacher;
  },
  updateTeacher: async (id, teacher) => {
    await updateTeacher(id, teacher);
    await get().fetchTeachers();
  },
  deleteTeacher: async (id) => {
    await deleteTeacher(id);
    await get().fetchTeachers();
  },
}));

export default useTeacherStore;
