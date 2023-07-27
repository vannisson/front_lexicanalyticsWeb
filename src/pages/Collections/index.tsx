import {
  Anchor,
  Group,
  Stack,
  Title,
  Text,
  Box,
  TextInput,
  Modal,
  Button,
} from "@mantine/core";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import useStyles from "./style";
import * as yup from "yup";
import CollectionModal from "../../common/components/CollectionModal";
import CustomTable from "../../common/components/CustomTable";

type Formtype = {
  searchWord: string;
};

export default function Collections() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

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

  const elements = [
    {
      name: "EE_2021",
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
      date: 12.011,
    },
    {
      name: "EE_2020",
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
      date: 12.011,
    },
    {
      name: "EE_2019",
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
      date: 12.011,
    },
    {
      name: "EE_2018",
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
      date: 12.011,
    },
    {
      name: "EE_2017",
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
      date: 12.011,
    },
  ];

  const headers = [
    "Nome",
    "Q. de textos",
    "Densidade (Média)",
    "Diversidade (Média)",
    "Data",
    "Ações",
  ];

  return (
    <>
      <Modal opened={opened} onClose={close} centered>
        <CollectionModal />
      </Modal>
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
            <form onSubmit={form.onSubmit((values) => onFinish(values))}>
              <TextInput
                withAsterisk
                placeholder="Buscar"
                {...form.getInputProps("searchWord")}
              />
            </form>
            <Group className={classes.newCollection}>
              <Button onClick={open} className={classes.button}>
                <Group className={classes.buttonGroup}>
                  <Icon icon="ic:baseline-plus" />
                  <Text>Nova Coleção</Text>
                </Group>
              </Button>
            </Group>
          </Group>
        </Box>
        <Box className={classes.tableBox}>
          <CustomTable header={headers} data={elements} />
        </Box>
      </Stack>
    </>
  );
}
