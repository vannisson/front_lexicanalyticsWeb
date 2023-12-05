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
} from '@mantine/core'
import useStyles from './styles'
import { Icon } from '@iconify/react'
import ReactWordcloud from 'react-wordcloud'
import { Bar, Pie } from 'react-chartjs-2'

export default function MorphologicalDashboard() {
  const { classes } = useStyles()

  const data = {
    labels: ['Subs', 'Art', 'Adv', 'Pro', 'Ver', 'Outros'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const barData = {
    labels: ['Subs', 'Art', 'Adv', 'Pro', 'Ver', 'Outros'],
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
      gramaticalClass: 'Substantivos',
      mean: 8.0,
      median: 8.0,
      mode: 6,
      standardDeviation: 2.0,
      min: '6(T1)',
      max: '10(T2)',
    },
    {
      gramaticalClass: 'Verbos',
      mean: 8.0,
      median: 8.0,
      mode: 6,
      standardDeviation: 2.0,
      min: '6(T1)',
      max: '10(T2)',
    },
    {
      gramaticalClass: 'Adjetivos',
      mean: 8.0,
      median: 8.0,
      mode: 6,
      standardDeviation: 2.0,
      min: '6(T1)',
      max: '10(T2)',
    },
    {
      gramaticalClass: 'Advérbios',
      mean: 8.0,
      median: 8.0,
      mode: 6,
      standardDeviation: 2.0,
      min: '6(T1)',
      max: '10(T2)',
    },
    {
      gramaticalClass: 'Pronomes',
      mean: 8.0,
      median: 8.0,
      mode: 6,
      standardDeviation: 2.0,
      min: '6(T1)',
      max: '10(T2)',
    },
    {
      gramaticalClass: 'Artigos',
      mean: 8.0,
      median: 8.0,
      mode: 6,
      standardDeviation: 2.0,
      min: '6(T1)',
      max: '10(T2)',
    },
    {
      gramaticalClass: 'Numerais',
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
  return (
    <>
      <Stack className={classes.generalStack}>
        <Stack align="center">
          <Text>Resultado Geral</Text>
        </Stack>
        <Grid>
          <Grid.Col span={4}>
            <Stack align="center">
              {/* <Switch label="Somente itens lexicais" /> */}
              <Box>
                <Pie data={data} />
              </Box>
            </Stack>
          </Grid.Col>
          <Grid.Col span={8}>
            <Stack align="center">
              <Table className={classes.table} striped>
                <thead>
                  <tr>
                    <th>Classe Gramatical</th>
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
            <Tabs.Tab value="detail">Detalhes</Tabs.Tab>
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
              <Grid.Col span={3}>
                <Stack align="center" sx={{ gap: '2rem' }}>
                  <Text>Total de Linhas: 10</Text>
                  <Text>Total de Palavras: 10</Text>
                  <Text>Vocabulário: 10</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={3}>
                <Stack align="center">
                  {/* <Switch label="Somente itens lexicais" /> */}
                  <Box>
                    <Pie data={data} />
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack align="center">
                  <Box>
                    <Bar data={barData} />
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>

          <Tabs.Panel value="detail" pt="xs">
            <Stack>
              <Select
                label="Buscar uma palavra:"
                placeholder="Digite uma palavra para buscar"
                searchable
                nothingFound="Não encontrado"
                data={[]}
              />
              <Table className={classes.table} striped>
                <thead>
                  <tr>
                    <th>Palavra</th>
                    <th>Classificação</th>
                    <th>Frequência</th>
                  </tr>
                </thead>
                <tbody>{individualRows}</tbody>
              </Table>
            </Stack>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </>
  )
}
