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
} from '@mantine/core'
import { useNavigate, useParams } from 'react-router-dom'
import useStyles from './styles'
import { Icon } from '@iconify/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut, Line, Pie } from 'react-chartjs-2'
import { useState } from 'react'
import 'chart.js/auto'
import MorphologicalDashboard from '../../common/components/MorphologicalDashboard'
import LexicalDashboard from '../../common/components/LexicalDashboard'
import { useQuery } from 'react-query'
import { getResults } from './Results.service'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function Results() {
  const { classes } = useStyles()
  const { collectionId } = useParams()
  const { isLoading, data, error } = useQuery('resultsData', () =>
    getResults(collectionId || '')
  )
  const [activeTab, setActiveTab] = useState<string | null>('morphological')
  // const [activeTab, setActiveTab] = useState<string | null>('lexical')
  console.log(data)
  return (
    <Box className={classes.box}>
      <Tabs w="80%" value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List
          sx={{ position: 'sticky', top: 0, backgroundColor: 'white' }}
          position="center"
        >
          <Tabs.Tab value="morphological">
            <Text
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              className={classes.title}
            >
              Classe Gramatical
            </Text>
          </Tabs.Tab>
          <Tabs.Tab value="lexical">
            <Text
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              className={classes.title}
            >
              Riqueza Lexical
            </Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="morphological" pt="xs">
          <MorphologicalDashboard />
        </Tabs.Panel>

        <Tabs.Panel value="lexical" pt="xs">
          <LexicalDashboard />
        </Tabs.Panel>
      </Tabs>
    </Box>
  )
}
