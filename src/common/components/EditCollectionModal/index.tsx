import {
  Anchor,
  Box,
  Button,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core'
import useStyles from './style'
import { Icon } from '@iconify/react'
import * as yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import {
  editCollection,
  getProductions,
} from '../CollectionTable/CollectionTable.service'
import { useEffect } from 'react'

type Formtype = {
  name: string
}

interface EditCollectionModalProps {
  onClose: () => void
  id: string
}

export default function EditCollectionModal({
  onClose,
  id,
}: EditCollectionModalProps) {
  const { classes } = useStyles()
  const queryClient = useQueryClient()
  const userString: string | null = localStorage.getItem('@lexicanalytics:user')
  const user = userString ? JSON.parse(userString) : null
  const { data } = useQuery('collectionInfo', () => getProductions(id))

  const { mutate } = useMutation(editCollection, {
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
    // console.log(form.values)
    if (!hasErrors) {
      mutate({
        name,
        description,
        user_id: user.id,
        collectionId: id,
      })
    }
  }

  return (
    <>
      <Stack className={classes.stack}>
        <Group className={classes.title} position="apart">
          <Text
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          >
            Editar coleção
          </Text>
          <Modal.CloseButton />
        </Group>
        <Box className={classes.form}>
          <TextInput
            className={classes.input}
            withAsterisk
            label="Nome"
            placeholder="Novo nome da coleção"
            {...form.getInputProps('name')}
          />
          <Textarea
            className={classes.descriptionInput}
            label="Descrição"
            placeholder="Nova descrição da coleção"
            {...form.getInputProps('description')}
          />
          <Group position="center">
            <Button className={classes.button} onClick={onFinish}>
              Salvar
            </Button>
          </Group>
        </Box>
      </Stack>
    </>
  )
}
