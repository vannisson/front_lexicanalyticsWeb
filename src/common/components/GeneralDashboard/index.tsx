import {
  Anchor,
  Box,
  Button,
  Grid,
  Group,
  Paper,
  Stack,
  Table,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import useStyles from "./styles";
import { Icon } from "@iconify/react";
import ReactWordcloud from 'react-wordcloud';
import { Line, Pie } from "react-chartjs-2";

export default function GeneralDashboard() {
  const { classes } = useStyles();

const data = {
    labels: ["Subs", "Art", "Adv", "Pro", "Ver", "Outros"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "TTR",
    "HD-D",
    "VocD",
    "MTLD",
    "Dugast",
    "Herdan",
    "Maas",
  ];

  const lineData = {
    labels,
    datasets: [
      {
        label: "Média",
        data: [1, 2, 3, 4, 16,18,36],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Mediana",
        data: [2, 1, 4, 3, 11,16,2],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Moda",
        data: [4, 2, 8, 1, 12,23,45],
        borderColor: "rgb(71, 235, 53)",
        backgroundColor: "rgba(22, 153, 22, 0.5)",
      },
    ],
  };

  const elements = [
  {
    metric: "Número de Palavras",
    mean: 8.0,
    median: 8.0,
    mode: 6,
    standardDeviation: 2.0,
    min: "6(T1)",
    max: "10(T2)"
  },
  {
    metric: "Vocabulário",
    mean: 8.0,
    median: 8.0,
    mode: 6,
    standardDeviation: 2.0,
    min: "6(T1)",
    max: "10(T2)"
  },
  {
    metric: "Substantivos",
    mean: 8.0,
    median: 8.0,
    mode: 6,
    standardDeviation: 2.0,
    min: "6(T1)",
    max: "10(T2)"
  },
  {
    metric: "Verbos",
    mean: 8.0,
    median: 8.0,
    mode: 6,
    standardDeviation: 2.0,
    min: "6(T1)",
    max: "10(T2)"
  },
  {
    metric: "Adjetivos",
    mean: 8.0,
    median: 8.0,
    mode: 6,
    standardDeviation: 2.0,
    min: "6(T1)",
    max: "10(T2)"
  },
  {
    metric: "Advérbios",
    mean: 8.0,
    median: 8.0,
    mode: 6,
    standardDeviation: 2.0,
    min: "6(T1)",
    max: "10(T2)"
  },
  {
    metric: "Pronomes",
    mean: 8.0,
    median: 8.0,
    mode: 6,
    standardDeviation: 2.0,
    min: "6(T1)",
    max: "10(T2)"
  },
  {
    metric: "Artigos",
    mean: 8.0,
    median: 8.0,
    mode: 6,
    standardDeviation: 2.0,
    min: "6(T1)",
    max: "10(T2)"
  },
];


  const rows = elements.map((element) => (
    <tr key={element.metric}>
      <td> {element.metric}</td>
      <td>{element.mean}</td>
      <td>{element.median}</td>
      <td>{element.mode}</td>
      <td>{element.standardDeviation}</td>
      <td>{element.min}</td>
      <td>{element.max}</td>
    </tr>
  ));
  return (
    <>
      <Stack className={classes.generalStack}>
        <Grid>
        <Grid.Col span={3}>
          <Stack align="center" className={classes.outsidePaperStack}>
          <Paper className={classes.paper}>
            <Stack className={classes.paperStack}>
              <Text className={classes.paperTitle}>Q. de Textos:</Text>
              <Text className={classes.paperInfo}>12</Text>
            </Stack>
          </Paper>
          <Paper className={classes.paper}>
            <Stack className={classes.paperStack}>
              <Text className={classes.paperTitle}>Q. de Palavras:</Text>
              <Text className={classes.paperInfo}>245</Text>
            </Stack>
          </Paper>
          <Paper className={classes.paper}>
            <Stack className={classes.paperStack}>
              <Text className={classes.paperTitle}>Vocabulário:</Text>
              <Text className={classes.paperInfo}>180</Text>
            </Stack>
          </Paper>
        </Stack>
        </Grid.Col>
        <Grid.Col span={9}>
          <Stack align="center" >
            <Table className={classes.table} striped>
              <thead>
                <tr>
                  <th>Métrica</th>
                  <th>Média</th>
                  <th>Mediana</th>
                  <th>Moda</th>
                  <th>Desvio Padrão</th>
                  <th>Menor</th>
                  <th>Maior</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Stack>
        </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4}>
            <Stack align="center">
              <Text>Morfologia</Text>
              <Box>
                <Pie data={data} />
              </Box>
            </Stack>
          </Grid.Col>
          <Grid.Col span={8}>
            <Stack align="center">
              <Text>Comparativo</Text>
              <Box>
                <Line options={options} data={lineData} />
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
          
        
      </Stack>
    </>
  );
}
