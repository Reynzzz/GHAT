import { create } from "zustand";
import {
  fetchTeachers,
  addTeacher,
  deleteTeacher,
  updateTeacher,
} from "../pages/Teacher/services/TeacherServices";

const useTeacherStore = create((set) => ({
  teachers: [],
  fetchTeachers: async () => {
    const teachers = await fetchTeachers();
    set({ teachers });
  },
  addTeacher: async (teacher) => {
    await addTeacher(teacher);
    const teachers = await fetchTeachers();
    set({ teachers });
  },
  updateTeacher: async (id: number, teacher) => {
    await updateTeacher(id, teacher);
    const teachers = await fetchTeachers();
    set({ teachers });
  },
  deleteTeacher: async (id: number) => {
    await deleteTeacher(id);
    const teachers = await fetchTeachers();
    set({ teachers });
  },
}));

export default useTeacherStore;
