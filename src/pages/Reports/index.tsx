import {
  Box,
  Button,
  Grid,
  Group,
  MultiSelect,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { Icon } from "@iconify/react";

export default function Reports() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const data = [
    { value: "0", label: "EE_2021" },
    { value: "1", label: "EE_2020" },
    { value: "2", label: "EE_2019" },
    { value: "3", label: "EE_2018" },
    { value: "4", label: "EE_2017" },
  ];

  return (
    <Box className={classes.box}>
      <Text
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        className={classes.title}
      >
        Gerar um relatório:
      </Text>
      <MultiSelect
        data={data}
        searchable
        nothingFound="Nenhuma coleção com esse nome"
        label="Escolha as coleções"
        placeholder="Digite as coleções"
        maxDropdownHeight={160}
      />
      <Button className={classes.button}>
        <Group className={classes.buttonText}>
          <Icon icon="mingcute:pdf-line" />
          <Text>Download</Text>
        </Group>
      </Button>
    </Box>
  );
}
