import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  majorBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '80vh',
    padding: '1rem 0',
  },
  majorGrid: {
    width: '60%',
    height: '100%',
    margin: 0,
  },
  inputStack: {
    height: '100%',
  },
  buttonStack: {
    display: 'flex',
    alignItems: 'center',
  },
  textInput: {
    '.mantine-InputWrapper-label': {
      color: '#565656',
    },
    '.mantine-Textinput-input': {},
  },
  textArea: {
    '.mantine-InputWrapper-label': {
      color: '#565656',
    },
    height: '60%',
    '.mantine-Input-wrapper': { height: '100%' },
    '.mantine-Textarea-input': { height: '100%' },
  },
  button: {
    padding: 0,
    width: '70%',
    span: {
      padding: '0 1rem',
      width: '100%',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    },
    background:
      'linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)',
    border: '0px',
  },
  textProduction: {
    color: '#565656',
  },
  titleProduction: {
    textAlign: 'initial',
    fontWeight: 700,
    fontSize: '1.5rem',
  },
  tableBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0rem',
    marginBottom: '5rem',
  },
}))

export default useStyles
