import { Anchor, Box, Group, Table } from "@mantine/core";
import useStyles from "./styles";
import { Icon } from "@iconify/react";

export default function CollectionTable() {
  const { classes } = useStyles();

  const elements = [
    {
      name: "EE_2021",
      date: "01/01/2021",
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
    },
    {
      name: "EE_2020",
      date: "01/01/2020",
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
    },
    {
      name: "EE_2019",
      date: "01/01/2019",
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
    },
    {
      name: "EE_2018",
      date: "01/01/2018",
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
    },
    {
      name: "EE_2017",
      date: "01/01/2017",
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
    },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td> {element.name}</td>
      <td>{element.date}</td>
      <td>{element.textQuantity}</td>
      <td>
        <Group>
          <Anchor className={classes.iconView}>
            <Icon icon="mdi:eye" />
          </Anchor>
          <Anchor className={classes.iconReport}>
            <Icon icon="mdi:file-report" />
          </Anchor>
          <Anchor className={classes.iconDelete}>
            <Icon icon="material-symbols:delete-forever" />
          </Anchor>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Box className={classes.boxTable}>
      <Table striped className={classes.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Quantidade de textos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
}