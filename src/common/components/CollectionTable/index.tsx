import { Anchor, Group, Table } from "@mantine/core";
import useStyles from "./styles";
import { Icon } from "@iconify/react";

export default function CollectionTable() {
  const { classes } = useStyles();

  const elements = [
    {
      name: "EE_2021",
      date: 12.011,
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
    },
    {
      name: "EE_2020",
      date: 12.011,
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
    },
    {
      name: "EE_2019",
      date: 12.011,
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
    },
    {
      name: "EE_2018",
      date: 12.011,
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
    },
    {
      name: "EE_2017",
      date: 12.011,
      textQuantity: 21,
      density: 11.5,
      diversity: 32.1,
    },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>
        <Anchor className={classes.anchor}>{element.name}</Anchor>
      </td>
      <td>{element.date}</td>
      <td>{element.textQuantity}</td>
      <td>{element.density}</td>
      <td>{element.diversity}</td>
      <td>
        <Group>
          <Anchor className={classes.icons}>
            <Icon icon="material-symbols:edit-square-rounded" />
          </Anchor>
          <Anchor className={classes.icons}>
            <Icon icon="material-symbols:delete-forever" />
          </Anchor>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Table striped className={classes.table}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data</th>
          <th>Q. de textos</th>
          <th>Densidade (Média)</th>
          <th>Diversidade (Média)</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
