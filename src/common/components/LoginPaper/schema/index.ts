import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('É necessário preencher este campo.'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .required('É necessário preencher este campo.'),
})

const LoginSchemaInitialValues = {
  email: '',
  password: '',
}

export { LoginSchema, LoginSchemaInitialValues }
