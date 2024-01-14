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
  import { useMutation, useQueryClient } from 'react-query'
  
  type Formtype = {
    name: string
  }
  
  interface EditCollectionModalProps {
    onClose: () => void
    collectionId: string
  }
  
  export default function EditCollectionModal({ onClose,  collectionId, }: EditCollectionModalProps) {
    const { classes } = useStyles()
    const queryClient = useQueryClient()
    const userString: string | null = localStorage.getItem('@lexicanalytics:user')
    const user = userString ? JSON.parse(userString) : null
  
  
  
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
    
    }
    console.log(collectionId)
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
               
              >
                Criar
              </Button>
            </Group>
          </Box>
        </Stack>
      </>
    )
  }
  