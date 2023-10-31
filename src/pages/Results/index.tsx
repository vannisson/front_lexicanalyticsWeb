import {
  Box,
  Button,
  Grid,
  Group,
  MultiSelect,
  Stack,
  Tabs,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { Icon } from "@iconify/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Line, Pie } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Results() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string | null>("first");

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

  return (
    <Box className={classes.box}>
      <Text
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        className={classes.title}
      >
        Resultado Geral:
      </Text>
      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="pie">Pie Chart</Tabs.Tab>
          <Tabs.Tab value="line">Line Chart</Tabs.Tab>
          <Tabs.Tab value="table">Table</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="pie" pt="xs">
          <Box className={classes.graph}>
            <Pie data={data} />
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="line" pt="xs">
          {/* <Line options={options} data={lineData} />; */}
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          TR
        </Tabs.Panel>
      </Tabs>

      <Text
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        className={classes.title}
      >
        Resultado por texto:
      </Text>
    </Box>
  );
}
