import * as yup from "yup";

const createUserSerializer = yup.object().shape({
  password: yup
    .string()
    .required("Senha Obrigatória")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
});

export default createUserSerializer;
