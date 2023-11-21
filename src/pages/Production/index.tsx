import {
  Box,
  Button,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { Icon } from "@iconify/react";

export default function Production() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.majorBox}>
      <Grid className={classes.majorGrid}>
        <Grid.Col span={8}>
          <Stack className={classes.inputStack}>
            <TextInput
              className={classes.textInput}
              label="Título:"
              placeholder="Insira um título (Opcional)"
            ></TextInput>
            <Textarea
              className={classes.textArea}
              label="Texto:"
              placeholder="Insira o texto"
            ></Textarea>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack className={classes.buttonStack}>
            <Text className={classes.textProduction}>
              5 textos já foram adicionados
            </Text>
            <Button disabled className={classes.button}>
              <Icon icon="ic:round-file-present" />
              <Text>Inserir PDF</Text>
            </Button>
            <Button className={classes.button}>
              <Icon icon="clarity:plus-circle-solid" />
              <Text>Adicionar Texto</Text>
            </Button>
            <Button className={classes.button}>
              <Icon icon="teenyicons:pie-chart-solid" />
              <Text>Obter Resultados</Text>
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>

      <Stack>
        <Text
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          className={classes.titleProduction}
        >
          Textos Adicionados:
        </Text>
      </Stack>
    </Box>
  );
}
