// import axios from "axios";

import axios from "axios";

const API = import.meta.env.VITE_API_URL_TEACHER;
// const API = 'http://localhost:3000'
console.log(API, "ini API URL");

export const fetchTeachers = async () => {
  const response = await axios.get(API + '/guru' );
  return response.data;
};

export const addTeacher = async (teacher) => {
  const response = await axios.post(API, teacher);
  return response.data;
};

export const updateTeacher = async (id: number, teacher) => {
  const response = await axios.put(`${API}/${id}`, teacher);
  return response.data;
};

export const deleteTeacher = async (id: number) => {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
};
