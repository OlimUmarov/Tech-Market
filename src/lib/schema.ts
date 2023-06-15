import * as yup from "yup"



export const singUp = yup.object().shape({
  phone_number: yup
      .string()
      .required('Iltimos, telefon raqamni kiriting!'),
    password: yup
      .string()
      .min(8, "Parol kamida 8 ta belgidan iborat bo'lishi kerak!")
      .matches(/[a-zA-Z]/, "Parolda kamida bitta harf bo'lishi kerak!")
      .required('Iltimos, parol ni kiriting!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], "Parollar bir xil bo'lishi kerak!")
      .required('Iltimos, parolni tasdiqlang!'),
  });

  export const signIn = yup.object().shape({
    phone_number: yup
        .string()
        .required('Iltimos, telefon raqamni kiriting!'),
      password: yup
        .string()
        .min(8, "Parol kamida 8 ta belgidan iborat bo'lishi kerak!")
        .matches(/[a-zA-Z]/, "Parolda kamida bitta harf bo'lishi kerak!")
        .required('Iltimos, parol ni kiriting!'),
    });