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
  Flex,
} from '@mantine/core'
import useStyles from './styles'
import { Icon } from '@iconify/react'
import Chart from 'react-apexcharts'
import {
  flexRender,
  MRT_GlobalFilterTextInput,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  type MRT_ColumnDef,
  useMantineReactTable,
} from 'mantine-react-table'

import { useState } from 'react'
interface MorphologicalDashboardProps {
  morphData: any
}

interface DetailType {
  word: string
  tag: string
  occurrence: number
}

export default function MorphologicalDashboard({
  morphData,
}: MorphologicalDashboardProps) {
  const { classes } = useStyles()
  const [selectedTextIndex, setSelectedTextIndex] = useState<number>(0)

  const selectData =
    morphData?.single?.title.map((title: string, index: number) => ({
      value: index.toString(),
      label: title,
    })) || []

  const gramaticalClasses = [
    { key: 'subs', name: 'Substantivos' },
    { key: 'verb', name: 'Verbos' },
    { key: 'adj', name: 'Adjetivos' },
    { key: 'adv', name: 'Advérbios' },
    { key: 'art', name: 'Artigos' },
    { key: 'pro', name: 'Pronomes' },
    { key: 'others', name: 'Outros' },
  ]

  const statTypes = [
    'mean',
    'median',
    // "mode",
    'standard_deviation',
    'minimum',
    'maximum',
  ]

  const formatNumber = (number: number) => {
    if (typeof number === 'number') {
      return number.toFixed(2)
    }
    return ''
  }

  const renderRows = () => {
    if (!morphData) return null
    return gramaticalClasses.map((gramaticalClass, index) => (
      <tr key={index}>
        <td style={{ fontWeight: 'bold' }}>{gramaticalClass.name}</td>
        {statTypes.map((statType) => (
          <td key={statType}>
            {formatNumber(
              morphData.general.tokens[statType][gramaticalClass.key]
            )}
          </td>
        ))}
      </tr>
    ))
  }

  const handleSelectChange = (value: string) => {
    setSelectedTextIndex(parseInt(value))
  }

  const getTextValue = () => {
    if (!morphData || !morphData.single || !morphData.single.text) return ''
    return morphData.single.text[selectedTextIndex] || ''
  }

  const getTokenValue = (tokenClass: string) => {
    if (!morphData || !morphData.single) return ''
    return parseInt(
      morphData.single.tokens_count[selectedTextIndex][tokenClass] || ''
    )
  }

  const getTypeValue = (typeClass: string) => {
    if (!morphData || !morphData.single) return ''
    return parseInt(
      morphData.single.types_count[selectedTextIndex][typeClass] || ''
    )
  }

  // const getCurrentDetail = () => {
  //   if (!data || !data.single) return '';
  //   return formatNumber(data.single.tagged_words[selectedTextIndex]|| '');
  // };

  const chartData = [
    {
      name: 'Tokens',
      data: [
        parseFloat(String(getTokenValue('subs') || '0')),
        parseFloat(String(getTokenValue('verb') || '0')),
        parseFloat(String(getTokenValue('adj') || '0')),
        parseFloat(String(getTokenValue('adv') || '0')),
        parseFloat(String(getTokenValue('pro') || '0')),
        parseFloat(String(getTokenValue('art') || '0')),
        parseFloat(String(getTokenValue('others') || '0')),
      ],
    },
    {
      name: 'Types',
      data: [
        parseFloat(String(getTypeValue('subs') || '0')),
        parseFloat(String(getTypeValue('verb') || '0')),
        parseFloat(String(getTypeValue('adj') || '0')),
        parseFloat(String(getTypeValue('adv') || '0')),
        parseFloat(String(getTypeValue('pro') || '0')),
        parseFloat(String(getTypeValue('art') || '0')),
        parseFloat(String(getTypeValue('others') || '0')),
      ],
    },
  ]

  const options = {
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    xaxis: {
      categories: [
        'Substantivos',
        'Verbos',
        'Adjetivos',
        'Advérbios',
        'Pronomes',
        'Artigos',
        'Outros',
      ],
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: true,
    },
  }

  const data: DetailType[] =
    morphData?.single?.countWordOccurrencesWithTag[selectedTextIndex] || []

  const columns: MRT_ColumnDef[] = [
    {
      accessorKey: 'word',
      header: 'Palavra',
      enableSorting: true,
    },
    {
      accessorKey: 'tag',
      header: 'Classificação',
    },
    {
      accessorKey: 'occurrence',
      header: 'Ocorrência',
    },
  ]

  const table = useMantineReactTable({
    columns,
    data,
    enableRowSelection: false,
    initialState: {
      pagination: { pageSize: 10, pageIndex: 0 },
      showGlobalFilter: true,
      sorting: [
        {
          id: 'word',
          desc: false,
        },
      ],
    },
    localization: {
      search: 'Buscar',
      rowsPerPage: 'Linhas por página',
    },
    mantinePaginationProps: {
      rowsPerPageOptions: ['5', '10', '15'],
    },
    paginationDisplayMode: 'pages',
  })
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
                    <th>Classe Gramatical</th>
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
            {/* <Tabs.Tab value="detail">Detalhes</Tabs.Tab> */}
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
                <Stack align="center" sx={{ marginBottom: '1rem' }}>
                  <Text sx={{ fontSize: '1.2rem', fontWeight: 650 }}>
                    Distribuição dos Tokens
                  </Text>
                </Stack>

                <Stack align="center" sx={{ gap: '1.5rem' }}>
                  <Text>Substantivos: {getTokenValue('subs')}</Text>
                  <Text>Verbos: {getTokenValue('verb')}</Text>
                  <Text>Adjetivos: {getTokenValue('adj')}</Text>
                  <Text>Advérbios: {getTokenValue('adv')}</Text>
                  <Text>Pronomes: {getTokenValue('pro')}</Text>
                  <Text>Artigos: {getTokenValue('art')}</Text>
                  <Text>Outros: {getTokenValue('others')}</Text>
                </Stack>
              </Grid.Col>
              <Divider size="sm" orientation="vertical" />

              <Grid.Col span={3}>
                <Stack align="center" sx={{ marginBottom: '1rem' }}>
                  <Text sx={{ fontSize: '1.2rem', fontWeight: 650 }}>
                    Distribuição dos Types
                  </Text>
                </Stack>

                <Stack align="center" sx={{ gap: '1.5rem' }}>
                  <Text>Substantivos: {getTypeValue('subs')}</Text>
                  <Text>Verbos: {getTypeValue('verb')}</Text>
                  <Text>Adjetivos: {getTypeValue('adj')}</Text>
                  <Text>Advérbios: {getTypeValue('adv')}</Text>
                  <Text>Pronomes: {getTypeValue('pro')}</Text>
                  <Text>Artigos: {getTypeValue('art')}</Text>
                  <Text>Outros: {getTypeValue('others')}</Text>
                </Stack>
              </Grid.Col>
              <Divider size="sm" orientation="vertical" />
              <Grid.Col span={5}>
                <Stack align="center">
                  <Text sx={{ fontSize: '1.2rem', fontWeight: 650 }}>
                    Comparativo Tokens vs. Types
                  </Text>
                  <Box>
                    <Chart
                      options={options}
                      series={chartData}
                      type="radar"
                      height="300"
                    />
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>

          {/* <Tabs.Panel value="detail" pt="xs">
            <Stack align="center" sx={{ gap: '2rem' }}>
              <Flex justify="space-between" align="center">
                <MRT_GlobalFilterTextInput table={table} />
                <MRT_TablePagination table={table} />
              </Flex>
              <Table
                captionSide="top"
                fontSize="md"
                highlightOnHover
                horizontalSpacing="xl"
                striped
                verticalSpacing="xs"
                m="0"
              >
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                (header.column.columnDef
                                  .Header as React.ReactNode) ??
                                  header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                          {flexRender(
                            (cell.column.columnDef.Cell as React.ReactNode) ??
                              cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
              <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
            </Stack>
          </Tabs.Panel> */}
        </Tabs>
      </Stack>
    </>
  )
}
