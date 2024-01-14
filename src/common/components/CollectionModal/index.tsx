import {
  Anchor,
  Box,
  Button,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
  Modal
} from '@mantine/core'
import useStyles from './styles'
import { Icon } from '@iconify/react'
import * as yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { useMutation, useQueryClient } from 'react-query'
import { newCollection } from './CollectionModal.service'

type Formtype = {
  name: string
}

interface CollectionModalProps {
  onClose: () => void
}

export default function CollectionModal({ onClose }: CollectionModalProps) {
  const { classes } = useStyles()
  const queryClient = useQueryClient()
  const userString: string | null = localStorage.getItem('@lexicanalytics:user')
  const user = userString ? JSON.parse(userString) : null

  const { isLoading, mutate, error } = useMutation(newCollection, {
    onSuccess: (data: any) => {
      queryClient.invalidateQueries(['collectionData'])
      onClose()
    },
  })

  const formSchema = yup.object().shape({
    name: yup.string().required('É preciso digitar um nome'),
    description: yup.string().nullable(),
  })

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
    },

    validateInputOnChange: true,

    validate: yupResolver(formSchema),
  })

  const onFinish = () => {
    const { name, description } = form.values
    const { hasErrors } = form.validate()
    if (!hasErrors) {
      mutate({
        name,
        description,
        user_id: user.id,
      })
    }
  }
  return (
    <>
      <Stack className={classes.stack}>
        <Group className={classes.title} position='apart'>
        <Text
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        >
          Criar uma nova coleção
        </Text>
        <Modal.CloseButton />
        </Group>
        <Box className={classes.form}>
          <TextInput
            className={classes.input}
            withAsterisk
            label="Nome"
            placeholder="Nome da coleção"
            {...form.getInputProps('name')}
          />
          <Textarea
            className={classes.descriptionInput}
            label="Descrição"
            placeholder="Descreva algo sobre a coleção"
            {...form.getInputProps('description')}
          />
          <Group position="center">
            <Button
              className={classes.button}
              onClick={onFinish}
              loading={isLoading}
            >
              Criar
            </Button>
          </Group>
        </Box>
      </Stack>
    </>
  )
}
