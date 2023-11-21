import {
  Anchor,
  Box,
  Button,
  Grid,
  Group,
  Paper,
  Select,
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

export default function IndividualDashboard() {
  const { classes } = useStyles();

const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const lineData = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 4],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [1, 2, 3, 4],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const words = [
  {
    text: 'Ele',
    value: 76,
  },
  {
    text: 'aconteceu',
    value: 11,
  },
  {
    text: 'princesa',
    value: 16,
  },
  {
    text: 'dragão',
    value: 17,
  },
  {
    text: 'falou',
    value: 21,
  },
  {
    text: 'triste',
    value: 21,
  },
  {
    text: 'acordou',
    value: 34,
  },
]

  const selectData = [
    { value: "0", label: "T01" },
    { value: "1", label: "T02" },
    { value: "2", label: "T03" },
    { value: "3", label: "T04" },
    { value: "4", label: "T05" },
  ];

  return (
    <>
      <Stack className={classes.generalStack}>
        <Select
        data={selectData}
        label="Escolha um texto"
        maxDropdownHeight={160}
        sx={{width: "25%", marginLeft:"auto", marginRight:"auto"}}
        />
        <Grid>
        <Grid.Col span={3}>
          <Stack align="center" className={classes.outsidePaperStack}>
          <Paper className={classes.paper}>
            <Stack className={classes.paperStack}>
              <Text className={classes.paperTitle}>Q. de Palavras:</Text>
              <Text className={classes.paperInfo}>12</Text>
            </Stack>
          </Paper>
          <Paper className={classes.paper}>
            <Stack className={classes.paperStack}>
              <Text className={classes.paperTitle}>Q. de Types:</Text>
              <Text className={classes.paperInfo}>245</Text>
            </Stack>
          </Paper>
          <Paper className={classes.paper}>
            <Stack className={classes.paperStack}>
              <Text className={classes.paperTitle}>Q. de Tokens:</Text>
              <Text className={classes.paperInfo}>180</Text>
            </Stack>
          </Paper>
        </Stack>
        </Grid.Col>
        <Grid.Col span={9}>
          <Stack align="center" >
            <Textarea 
              sx={{width: "80%", height: "70%"}}
              placeholder="Corpo do Texto"
              label="Corpo do Texto"
              disabled/>
          </Stack>
        </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4}>
            <Stack align="center">
              <Text>Nuvem de Palavras</Text>
              <Box>
                <ReactWordcloud words={words} />
              </Box>
            </Stack>
          </Grid.Col>
          <Grid.Col span={4}>
            <Stack align="center">
              <Text>Morfologia</Text>
              <Box>
                <Pie data={data} />
              </Box>
            </Stack>
          </Grid.Col>
          <Grid.Col span={4}>
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
