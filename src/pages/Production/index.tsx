import {
  Box,
  Button,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core'
import { useNavigate, useParams } from 'react-router-dom'
import useStyles from './styles'
import { Icon } from '@iconify/react'
import * as yup from 'yup'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getProductions, newProduction } from './Production.service'
import { useForm, yupResolver } from '@mantine/form'
import ProductionTable from '../../common/components/ProductionTable'

export default function Production() {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const { collectionId } = useParams()
  const { data } = useQuery('getProductions', () =>
    getProductions(collectionId || '')
  )
  const queryClient = useQueryClient()

  const { mutate } = useMutation(newProduction, {
    onSuccess: (data: any) => {
      queryClient.invalidateQueries(['getProductions'])
    },
  })

  const formSchema = yup.object().shape({
    title: yup.string().nullable(),
    text: yup.string().required('É preciso digitar um texto'),
  })

  const form = useForm({
    initialValues: {
      title: '',
      text: '',
    },

    validateInputOnChange: true,

    validate: yupResolver(formSchema),
  })

  const onFinish = () => {
    const { title, text } = form.values
    const { hasErrors } = form.validate()
    if (!hasErrors) {
      mutate(
        {
          title,
          text,
          collection_id: collectionId || '',
        },
        {
          onSuccess: () => {
            form.setValues({
              title: '',
              text: '',
            })
          },
        }
      )
    }
  }

  const handleResults = (collectionId: string) => () => {
    navigate(`/results/${collectionId}`)
  }

  return (
    <Stack>
      <Box className={classes.majorBox}>
        <Grid className={classes.majorGrid}>
          <Grid.Col span={8}>
            <Stack className={classes.inputStack}>
              <TextInput
                className={classes.textInput}
                label="Identificador do Texto:"
                placeholder="Insira um identificador (Opcional)"
                {...form.getInputProps('title')}
              ></TextInput>
              <Textarea
                className={classes.textArea}
                label="Texto Completo:"
                placeholder="Insira o texto"
                {...form.getInputProps('text')}
              ></Textarea>
            </Stack>
          </Grid.Col>
          <Grid.Col span={4}>
            <Stack className={classes.buttonStack}>
              <Text className={classes.textProduction}>
                Textos adicionados: {data?.productions.length}
              </Text>
              <Button disabled className={classes.button}>
                <Icon icon="ic:round-file-present" />
                <Text>Inserir PDF</Text>
              </Button>
              <Button className={classes.button} onClick={onFinish}>
                <Icon icon="clarity:plus-circle-solid" />
                <Text>Adicionar Texto</Text>
              </Button>
              <Button
                className={classes.button}
                onClick={handleResults(collectionId || '')}
              >
                <Icon icon="teenyicons:pie-chart-solid" />
                <Text>Obter Resultados</Text>
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>

        <Stack>
          <Text
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            className={classes.titleProduction}
          >
            Textos Adicionados:
          </Text>
        </Stack>
      </Box>

      <Box className={classes.tableBox}>
        <ProductionTable collectionData={data?.productions || []} />
      </Box>
    </Stack>
  )
}
