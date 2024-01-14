import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('É necessário preencher este campo.'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('É necessário preencher este campo.'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .required('É necessário preencher este campo.'),
  confirmPassword: Yup.string()
    .required('É necessário preencher este campo.')
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais '),
})

const RegisterSchemaInitialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export { RegisterSchema, RegisterSchemaInitialValues }
