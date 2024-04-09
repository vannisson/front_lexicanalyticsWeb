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
  Switch,
  Tabs,
  Divider,
} from '@mantine/core'
import useStyles from './styles'
import { Icon } from '@iconify/react'
import ReactWordcloud from 'react-wordcloud'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { useState } from 'react'
import Chart from 'react-apexcharts';
interface LexicalDashboardProps {
  data: any
}

export default function LexicalDashboard({ data }:LexicalDashboardProps){
  const { classes } = useStyles()
  const [selectedTextIndex, setSelectedTextIndex] = useState<number>(0);

  const selectData = data?.single?.title.map((title: string, index: number) => ({
    value: index.toString(),
    label: title,
  })) || [];

  const metrics = [
    { key: "n_tokens", name: "Número de Palavras" },
    { key: "diversity", name: "Diversidade" },
    { key: "density", name: "Densidade" },
    { key: "richness", name: "Riqueza" }
  ];

  const statTypes = [
    "mean",
    "median",
    // "mode", 
    "standard_deviation",
    "minimum",
    "maximum"
  ];

  const formatNumber = (number: number) => {
    if (typeof number === 'number') {
      return number.toFixed(2);
    }
    return '';
  };
  
  const renderRows = () => {
    if (!data) return null;
    return metrics.map((metric, index) => (
      <tr key={index}>
        <td style={{ fontWeight: 'bold' }}>{metric.name}</td>
        {statTypes.map((statType) => (
          <td key={statType}>{formatNumber(data.general[statType][metric.key])}</td>
        ))}
      </tr>
    ));
  };

  const handleSelectChange = (value: string) => {
    setSelectedTextIndex(parseInt(value));
  };

  const getTextValue = () => {
    if (!data || !data.single || !data.single.text) return '';
    return data.single.text[selectedTextIndex] || '';
  };

  const getMetricValue = (metricKey: string) => {
    if (!data || !data.single || !data.single[metricKey]) return '';
    return formatNumber(data.single[metricKey][selectedTextIndex] || '');
  };
  
  const densityChart = [
    {
      name: 'Densidade',
      data: [
        parseFloat(getMetricValue('density')),
        parseFloat(formatNumber(data?.general?.mean?.density))
      ],
    }
  ];

  const diversityChart = [
    {
      name: 'Diversidade',
      data: [
        parseFloat(getMetricValue('diversity')),
        parseFloat(formatNumber(data?.general?.mean?.diversity))
      ],
    }
  ];

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '45%',
        distributed: true,
        dataLabels: {
          position: 'bottom',
          style: {
            fontSize: '1rem',
            fontWeight: 'bold',
          },
        }
      },
    },
    xaxis: {
      categories: ['Esse Texto', 'Média'],
    },
     yaxis: {
      show: false
  },
    legend: {
    show: false
  }
  };

  return (
    <>
      <Stack className={classes.generalStack}>
        <Stack align="center">
          <Text className={classes.dashboardText}>Resultado Geral</Text>
        </Stack>
        <Grid>
          <Grid.Col span={2}></Grid.Col>
          <Grid.Col span={8}>
            <Stack align="center">
              <Table className={classes.table} striped>
                <thead>
                  <tr>
                    <th>Métrica</th>
                    <th>Média</th>
                    <th>Mediana</th>
                    {/* <th>Moda</th> */}
                    <th>Desvio Padrão</th>
                    <th>Menor</th>
                    <th>Maior</th>
                  </tr>
                </thead>
                <tbody>{renderRows()}</tbody>
              </Table>
            </Stack>
          </Grid.Col>
          <Grid.Col span={2}></Grid.Col>
        </Grid>
        <Stack align="center">
          <Text className={classes.dashboardText}>Resultado Individual</Text>
          <Select
            value={selectedTextIndex.toString()} 
            onChange={(value) => handleSelectChange(value as string)}
            data={selectData}
            label="Escolha um texto"
            maxDropdownHeight={160}
            sx={{ width: '25%', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </Stack>
        <Tabs variant="outline" defaultValue="text">
          <Tabs.List>
            <Tabs.Tab value="text">Texto</Tabs.Tab>
            <Tabs.Tab value="summary">Sumário</Tabs.Tab>
            {/* <Tabs.Tab value="detail">Outras Métricas</Tabs.Tab> */}
          </Tabs.List>

          <Tabs.Panel value="text" pt="xs">
            <Stack align="center">
              <Textarea
                sx={{ width: '80%' }}
                placeholder={getTextValue()}
                label="Corpo do Texto"
                disabled
                autosize
              />
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="summary" pt="xs">
            <Grid sx={{ marginTop: '0.5rem' }}>
              <Grid.Col span={3}>
                <Stack align='center' sx={{marginBottom: '1rem'}}>
                  <Text sx={{fontSize: '1.2rem', fontWeight: 650,}}>Características Lexicais</Text>
                </Stack>
                <Stack align="flex-start" sx={{ gap: '1.5rem' }}>
                  <Text>Número de Palavras: {getMetricValue('n_tokens')}</Text>
                  <Text>Vocabulário: {getMetricValue('n_types')}</Text>
                  <Text>Diversidade Lexical: {getMetricValue('diversity')}</Text>
                  <Text>Densidade Lexical: {getMetricValue('density')}</Text>
                  <Text>Riqueza Lexical: {getMetricValue('richness')}</Text>
                </Stack>
              </Grid.Col>
              <Divider size="sm" orientation="vertical" />
              <Grid.Col span={4}>
                <Stack align="center">
                  <Text sx={{fontSize: '1.2rem', fontWeight: 650,}}>Densidade Lexical</Text>
                  <Box>
                    <Chart options={options} series={densityChart} type="bar" />
                  </Box>
                </Stack>
              </Grid.Col>
              <Divider size="sm" orientation="vertical" />
              <Grid.Col span={4}>
                <Stack align="center">
                  <Text sx={{fontSize: '1.2rem', fontWeight: 650,}}>Diversidade Lexical</Text>
                  <Box>
                    <Chart options={options} series={diversityChart} type="bar" />
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </>
  )
}
