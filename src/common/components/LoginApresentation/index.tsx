import { Stack, Title, Text, Button } from '@mantine/core'
import useStyles from './styles'
import logo from '../../../assets/logo.svg'

export default function LoginApresentation() {
  const { classes } = useStyles()

  return (
    <Stack className={classes.stack}>
      <img className={classes.img} src={logo} alt="Profile Photo" />
      <Text
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        className={classes.title}
      >
        Lexicanalytics Web
      </Text>
      <Text
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        className={classes.text}
      >
        Lexicanalytics é uma plataforma web gratuita que apoia pesquisadores e
        professores na extração de informações lexicais dos textos, facilitando
        a análise e a interpretação de dados linguísticos.
      </Text>
      <Button color="blue" className={classes.button}>
        Testar
      </Button>
    </Stack>
  )
}
