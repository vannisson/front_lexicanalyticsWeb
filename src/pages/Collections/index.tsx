import {
  Anchor,
  Group,
  Stack,
  Title,
  Text,
  Box,
  TextInput,
} from "@mantine/core";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import useStyles from "./style";
import * as yup from "yup";
import CollectionTable from "../../common/components/CollectionTable";

type Formtype = {
  searchWord: string;
};

export default function Collections() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    searchWord: yup.string(),
  });

  const form = useForm({
    initialValues: {
      searchWord: "",
    },

    validateInputOnChange: true,

    validate: yupResolver(formSchema),
  });

  const onFinish = (values: Formtype) => {
    console.log(values);
  };

  return (
    <Stack className={classes.stack}>
      <Text
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        className={classes.title}
      >
        Minhas Coleções
      </Text>
      <Box className={classes.searchBox}>
        <Group className={classes.searchGroup}>
          <form
            //className={classes.form}
            onSubmit={form.onSubmit((values) => onFinish(values))}
          >
            <TextInput
              //className={classes.input}
              withAsterisk
              placeholder="Buscar"
              {...form.getInputProps("searchWord")}
            />
          </form>
          <Group className={classes.newCollection}>
            <Icon icon="ic:baseline-plus" />
            <Anchor className={classes.anchor}>
              <Text>Nova Coleção</Text>
            </Anchor>
          </Group>
        </Group>
      </Box>
      <Box className={classes.tableBox}>
        <CollectionTable />
      </Box>
    </Stack>
  );
}
