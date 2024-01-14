import {
  Anchor,
  Group,
  Stack,
  Title,
  Text,
  Box,
  TextInput,
  Modal,
  Button,
} from '@mantine/core'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useForm, yupResolver } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import useStyles from './style'
import * as yup from 'yup'
import CollectionTable from '../../common/components/CollectionTable'
import CollectionModal from '../../common/components/CollectionModal'

type Formtype = {
  searchWord: string
}

export default function Collections() {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const [opened, { open, close }] = useDisclosure(false)

  const formSchema = yup.object().shape({
    searchWord: yup.string(),
  })

  const form = useForm({
    initialValues: {
      searchWord: '',
    },

    validateInputOnChange: true,

    validate: yupResolver(formSchema),
  })

  const onFinish = (values: Formtype) => {
    console.log(values)
  }

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <CollectionModal onClose={close} />
      </Modal>
      <Stack className={classes.stack}>
        <Text
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          className={classes.title}
        >
          Minhas Coleções
        </Text>
        <Box className={classes.searchBox}>
          <Group className={classes.searchGroup}>
            <form onSubmit={form.onSubmit((values) => onFinish(values))}>
              <TextInput
                withAsterisk
                placeholder="Buscar"
                {...form.getInputProps('searchWord')}
              />
            </form>
            
            <Group className={classes.newCollection}>
              <Button onClick={open} className={classes.button}>
                <Group className={classes.buttonGroup}>
                  <Icon icon="ic:baseline-plus" />
                  <Text>Nova Coleção</Text>
                </Group>
              </Button>
            </Group>
          </Group>
        </Box>
        <Box className={classes.tableBox}>
          <CollectionTable />
        </Box>
      </Stack>
    </>
  )
}
