import * as yup from "yup";
export interface FormValue {
  nama: string;
  golongan: string;
  umur: number;
  jeniskelamin: "laki-laki" | "perempuan";
}

export const validationSchema = yup.object().shape({
  nama: yup.string().min(4).required("isi minimal 4 huruf"),
  golongan: yup.string().max(8).required(),
  umur: yup.number().max(2).required(),
  jeniskelamin: yup.mixed<"laki-laki">(),
});
