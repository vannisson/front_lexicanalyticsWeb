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
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import useStyles from "./styles";
import * as yup from "yup";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage";

type Formtype = {
  email: string;
  password: string;
};

export default function RegisterPaper() {
  const { classes } = useStyles();

  const [error, setError] = useState("");
  //Email ou senha inválidos.
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("É preciso ser um email válido")
      .required("É preciso digitar um email"),
    password: yup
      .string()
      .min(8, "A senha precisar ter no mínimo 8 caracteres")
      .max(32)
      .required("É preciso digitar uma senha"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não estão iguais"),
  });

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validateInputOnChange: true,

    validate: yupResolver(formSchema),
  });

  const onFinish = (values: Formtype) => {
    console.log(values);
  };

  return (
    <Box className={classes.box}>
      <Paper className={classes.paper}>
        <Stack className={classes.stack}>
          <Stack className={classes.textStack}>
            <Text
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              className={classes.title}
            >
              Bem-Vindo!
            </Text>
            <Text className={classes.text}>Realize o cadastro</Text>
          </Stack>
          <form
            className={classes.form}
            onSubmit={form.onSubmit((values) => onFinish(values))}
          >
            <TextInput
              className={classes.input}
              withAsterisk
              label="Email"
              placeholder="exemplo@email.com"
              {...form.getInputProps("email")}
            />

            <PasswordInput
              className={classes.input}
              withAsterisk
              label="Senha"
              placeholder="********"
              {...form.getInputProps("password")}
            />

            <PasswordInput
              className={classes.input}
              withAsterisk
              label="Confirmar Senha"
              placeholder="********"
              {...form.getInputProps("confirmPassword")}
            />

            {error?.trim()?.length > 0 ? <ErrorMessage text={error} /> : null}

            <Button className={classes.button} type="submit">
              Cadastrar
            </Button>
          </form>
          <Anchor className={classes.text} href="">
            <Text>Voltar</Text>
          </Anchor>
        </Stack>
      </Paper>
    </Box>
  );
}
