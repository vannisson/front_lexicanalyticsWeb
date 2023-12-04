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
} from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import useStyles from './styles'
import * as yup from 'yup'
import { useMutation } from 'react-query'
import { useState } from 'react'
import ErrorMessage from '../ErrorMessage'
import { useNavigate } from 'react-router-dom'
import { LoginSchema, LoginSchemaInitialValues } from './schema'
import { login, loginSuccess } from './Login.service'

export default function LoginPaper() {
  const { classes } = useStyles()
  const navigate = useNavigate()

  const { isLoading, mutate, error } = useMutation(login, {
    onSuccess: (data: any) => {
      loginSuccess(data?.data)
      navigate('/collections')
    },
  })

  const err = error as any

  const form = useForm({
    validate: yupResolver(LoginSchema),
    initialValues: LoginSchemaInitialValues,
    validateInputOnChange: true,
  })

  const onSubmit = () => {
    const { hasErrors } = form.validate()

    if (hasErrors) return

    const dataToSend = {
      email: form.values.email,
      password: form.values.password,
    }
    mutate(dataToSend)
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
              Acesse a Ferramenta
            </Text>
          </Stack>
          <Box className={classes.form}>
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

            {/* {err?.trim()?.length > 0 ? <ErrorMessage text={err} /> : null} */}

            <Button
              className={classes.button}
              type="submit"
              loading={isLoading}
              onClick={onSubmit}
            >
              Entrar
            </Button>
          </Box>
          <Group className={classes.group}>
            <Button
              variant="subtle"
              className={classes.text}
              onClick={() => navigate('/register')}
            >
              <Text
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              >
                Realizar cadastro
              </Text>
            </Button>
            <Button variant="subtle" className={classes.text}>
              <Text
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              >
                Esqueci a senha
              </Text>
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Box>
  )
}
