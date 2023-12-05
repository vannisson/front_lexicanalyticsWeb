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

export default function MorphologicalDashboard() {
  const { classes } = useStyles()

  const barData = {
    labels: ['T01', 'T02', 'T03', 'T04', 'T05', 'T06'],
    datasets: [
      {
        label: 'Esse Texto',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
      {
        label: 'Geral',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  }
  const elements = [
    {
      gramaticalClass: 'Diversidade Lexical',
      mean: 8.0,
      median: 8.0,
      mode: 6,
      standardDeviation: 2.0,
      min: '6(T1)',
      max: '10(T2)',
    },
    {
      gramaticalClass: 'Densidade Lexical',
      mean: 8.0,
      median: 8.0,
      mode: 6,
      standardDeviation: 2.0,
      min: '6(T1)',
      max: '10(T2)',
    },
  ]

  const individualElements = [
    {
      word: 'Rebeca',
      classification: 'Substantivo',
      frequency: 3,
    },
    {
      word: 'Rebeca',
      classification: 'Substantivo',
      frequency: 3,
    },
    {
      word: 'Rebeca',
      classification: 'Substantivo',
      frequency: 3,
    },
    {
      word: 'Rebeca',
      classification: 'Substantivo',
      frequency: 3,
    },
  ]

  const rows = elements.map((element) => (
    <tr key={element.gramaticalClass}>
      <td> {element.gramaticalClass}</td>
      <td>{element.mean}</td>
      <td>{element.median}</td>
      <td>{element.mode}</td>
      <td>{element.standardDeviation}</td>
      <td>{element.min}</td>
      <td>{element.max}</td>
    </tr>
  ))

  const individualRows = individualElements.map((element) => (
    <tr key={element.word}>
      <td> {element.word}</td>
      <td>{element.classification}</td>
      <td>{element.frequency}</td>
    </tr>
  ))

  const selectData = [
    { value: '0', label: 'T01' },
    { value: '1', label: 'T02' },
    { value: '2', label: 'T03' },
    { value: '3', label: 'T04' },
    { value: '4', label: 'T05' },
  ]
  const text =
    'A lebre a tartaruga A lebre vivia zombando da tartaruga, porque ela andava muito devagar. Um dia, cansada das humilhações da lebre, a tartaruga propôs-lhe uma corrida entre as duas. A lebre achou a ideia ridícula, porque tinha a certeza que ganharia, e aceitou o desafio rindo: — Aceito o desafio, lebre. Com essa, vou me divertir ainda mais da sua lerdeza. A tartaruga sabia que tinha que se esforçar muito para ganhar a lebre, por isso, imediatamente começou a fazer o seu percurso. Enquanto isso, a lebre rindo e zombando dela, decidiu dormir um pouco depois de começar a correr. — Não sei para quê tanto esforço, tartaruga. Acha mesmo que precisa se cansar tanto? Olha, dá tempo de eu dormir antes. Acontece que a lebre pegou no sono e só acordou quando a tartaruga estava cruzando a linha da chegada. Ao vencer, a tartaruga disse: — Que vergonha, perder a corrida para uma tartaruga... Moral da história: é importante sermos humildes, aceitarmos os desafios de forma honesta, e também comprometida, e nunca dar algo por vencido antes de ter sido finalizado.'

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  }

  const labels = ['T01', 'T02', 'T03', 'T04']

  const lineData = {
    labels,
    datasets: [
      {
        label: 'Diversidade',
        data: [23, 57, 43, 78],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Densidade',
        data: [2, 3, 4, 2],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }
  return (
    <>
      <Stack className={classes.generalStack}>
        <Stack align="center">
          <Text>Resultado Geral</Text>
        </Stack>
        <Grid>
          <Grid.Col span={7}>
            <Stack align="center">
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

          <Grid.Col span={4}>
            <Stack align="center">
              <Line options={options} data={lineData} />
            </Stack>
          </Grid.Col>
        </Grid>
        <Stack align="center">
          <Text>Resultado Individual</Text>
          <Select
            data={selectData}
            label="Escolha um texto"
            maxDropdownHeight={160}
            sx={{ width: '25%', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </Stack>
        <Tabs variant="outline" defaultValue="summary">
          <Tabs.List>
            <Tabs.Tab value="text">Texto</Tabs.Tab>
            <Tabs.Tab value="summary">Sumário</Tabs.Tab>
            {/* <Tabs.Tab value="detail">Outras Métricas</Tabs.Tab> */}
          </Tabs.List>

          <Tabs.Panel value="text" pt="xs">
            <Stack align="center">
              <Textarea
                sx={{ width: '80%' }}
                placeholder={text}
                label="Corpo do Texto"
                disabled
              />
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="summary" pt="xs">
            <Grid sx={{ marginTop: '1rem' }}>
              <Grid.Col span={2}>
                <Stack align="center" sx={{ gap: '2rem' }}>
                  <Text>Total de Palavras: 10</Text>
                  <Text>Vocabulário: 10</Text>
                  <Text>Diversidade Lexical: 10</Text>
                  <Text>Densidade Lexical: 10</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={5}>
                <Stack align="center">
                  <Text>Densidade</Text>
                  <Box>
                    <Bar data={barData} />
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col span={5}>
                <Stack align="center">
                  <Text>Diversidade</Text>
                  <Box>
                    <Bar data={barData} />
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
