import {
  Anchor,
  Button,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import useStyles from "./styles";
import { Icon } from "@iconify/react";
import * as yup from "yup";
import { useForm, yupResolver } from "@mantine/form";

type Formtype = {
  name: string;
};

export default function CollectionModal() {
  const { classes } = useStyles();

  const formSchema = yup.object().shape({
    name: yup.string().required("É preciso digitar um nome"),
  });

  const form = useForm({
    initialValues: {
      name: "",
    },

    validateInputOnChange: true,

    validate: yupResolver(formSchema),
  });

  const onFinish = (values: Formtype) => {
    console.log(values);
  };
  return (
    <>
      <Stack className={classes.stack}>
        <Text
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          className={classes.title}
        >
          Criar uma nova coleção
        </Text>
        <form
          className={classes.form}
          onSubmit={form.onSubmit((values) => onFinish(values))}
        >
          <TextInput
            className={classes.input}
            withAsterisk
            label="Nome"
            placeholder="Nome da coleção"
            {...form.getInputProps("name")}
          />
          <Textarea
            className={classes.descriptionInput}
            label="Descrição"
            placeholder="Descreva algo sobre a coleção"
            {...form.getInputProps("description")}
          />
          <Group position="center">
            <Button className={classes.button} type="submit">
              Criar
            </Button>
          </Group>
        </form>
      </Stack>
    </>
  );
}
