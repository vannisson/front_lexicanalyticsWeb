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
import { useNavigate } from 'react-router-dom'
import useStyles from './styles'
import { Icon } from '@iconify/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut, Line, Pie } from 'react-chartjs-2'
import { useState } from 'react'
import 'chart.js/auto'
import MorphologicalDashboard from '../../common/components/MorphologicalDashboard'
import LexicalDashboard from '../../common/components/LexicalDashboard'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function Results() {
  const { classes } = useStyles()
  const navigate = useNavigate()
  // const [activeTab, setActiveTab] = useState<string | null>('morphological')
  const [activeTab, setActiveTab] = useState<string | null>('lexical')

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
