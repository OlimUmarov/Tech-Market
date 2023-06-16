import * as yup from "yup";

export const singUp = yup.object().shape({
  phone_number: yup.string().required("Iltimos, telefon raqamni kiriting!"),
  password: yup
    .string()
    .min(8, "Parol kamida 8 ta belgidan iborat bo'lishi kerak!")
    .matches(/[a-zA-Z]/, "Parolda kamida bitta harf bo'lishi kerak!")
    .required("Iltimos, parol ni kiriting!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Parollar bir xil bo'lishi kerak!")
    .required("Iltimos, parolni tasdiqlang!"),
});

export const signIn = yup.object().shape({
  phone_number: yup.string().required("Iltimos, telefon raqamni kiriting!"),
  password: yup
    .string()
    .min(8, "Parol kamida 8 ta belgidan iborat bo'lishi kerak!")
    .matches(/[a-zA-Z]/, "Parolda kamida bitta harf bo'lishi kerak!")
    .required("Iltimos, parol ni kiriting!"),
});

export const editProfile = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  middle_name: yup.string(),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("Gender is required"),
  birthday: yup.date().required("Birthday is required"),
});
