import { create } from "zustand";
import {
  fetchTeachers,
  addTeacher,
  deleteTeacher,
  updateTeacher,
} from "../pages/Teacher/services/TeacherServices";

const useTeacherStore = create((set, get) => ({
  teachers: [],
  pageCount: 0,
  currentPage: 0,
  pageSize: 10, // Sesuaikan dengan kebutuhan Anda
  fetchTeachers: async () => {
    const { currentPage, pageSize } = get();
    const response = await fetchTeachers(currentPage, pageSize);
    set({
      teachers: response.data,
      pageCount: response.total ? Math.ceil(response.total / pageSize) : 0,
    });
  },
  addTeacher: async (teacher) => {
    await addTeacher(teacher);
    await get().fetchTeachers(); // Re-fetch teachers after adding
  },
  updateTeacher: async (id: number, teacher) => {
    await updateTeacher(id, teacher);
    await get().fetchTeachers(); // Re-fetch teachers after updating
  },
  deleteTeacher: async (id: number) => {
    await deleteTeacher(id);
    await get().fetchTeachers(); // Re-fetch teachers after deleting
  },
  setCurrentPage: (page: number) => set({ currentPage: page }),
}));

export default useTeacherStore;
