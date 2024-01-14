import {
  Stack,
  Text,
  Button,
  Paper,
  Box,
  TextInput,
  Group,
  Anchor,
  PasswordInput,
  Select,
} from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import useStyles from './styles'
import * as yup from 'yup'
import { useState } from 'react'
import ErrorMessage from '../ErrorMessage'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { RegisterSchema, RegisterSchemaInitialValues } from './schema'
import { register } from './Register.service'

type Formtype = {
  name: string
  email: string
  password: string
}

export default function RegisterPaper() {
  const { classes } = useStyles()
  const navigate = useNavigate()

  const { isLoading, mutate, error } = useMutation(register, {
    onSuccess: (data: any) => {
      navigate('/login')
    },
  })

  const err = error as any

  const form = useForm({
    validate: yupResolver(RegisterSchema),
    initialValues: RegisterSchemaInitialValues,
    validateInputOnChange: true,
  })

  const onSubmit = () => {
    const { hasErrors } = form.validate()

    if (hasErrors) return

    const dataToSend = {
      name: form.values.name,
      email: form.values.email,
      password: form.values.password,
      confirmPassword: form.values.confirmPassword,
    }
    console.log(dataToSend)
    mutate(dataToSend)
  }

  const onFinish = (values: Formtype) => {
    console.log(values)
  }

  return (
    <Box className={classes.box}>
      <Paper className={classes.paper}>
        <Stack className={classes.stack}>
          <Stack className={classes.textStack}>
            <Text
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              className={classes.title}
            >
              Bem-Vindo!
            </Text>
            <Text
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              className={classes.text}
            >
              Realize o cadastro
            </Text>
          </Stack>
          <Box className={classes.form}>
            <TextInput
              className={classes.input}
              withAsterisk
              label="Nome"
              placeholder="Seu Nome"
              {...form.getInputProps('name')}
            />

            <TextInput
              className={classes.input}
              withAsterisk
              label="Email"
              placeholder="exemplo@email.com"
              {...form.getInputProps('email')}
            />

            <PasswordInput
              className={classes.input}
              withAsterisk
              label="Senha"
              placeholder="********"
              {...form.getInputProps('password')}
            />

            <PasswordInput
              className={classes.input}
              withAsterisk
              label="Confirmar Senha"
              placeholder="********"
              {...form.getInputProps('confirmPassword')}
            />

            {/* {error?.trim()?.length > 0 ? <ErrorMessage text={error} /> : null} */}

            <Button className={classes.button} onClick={onSubmit}>
              Cadastrar
            </Button>
          </Box>
          <Anchor className={classes.text} href="">
            <Text
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              onClick={() => navigate('/login')}
            >
              Voltar
            </Text>
          </Anchor>
        </Stack>
      </Paper>
    </Box>
  )
}
