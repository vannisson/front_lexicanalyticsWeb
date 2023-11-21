import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("É necessário preencher este campo."),
  email: Yup.string()
    .email("Insira um email válido")
    .required("É necessário preencher este campo."),
  password: Yup.string()
    .min(6, "A senha precisa ter no mínimo 6 caracteres")
    .required("É necessário preencher este campo."),
  confirmPassword: Yup.string()
    .required("É necessário preencher este campo.")
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais '),
  city: Yup.string()
    .required("É necessário preencher este campo."),
  state: Yup.string()
    .required("É necessário preencher este campo."),
  country: Yup.string()
    .required("É necessário preencher este campo.")
});

const RegisterSchemaInitialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  city: "",
  state: "",
  country: "",
};

export { RegisterSchema, RegisterSchemaInitialValues };
