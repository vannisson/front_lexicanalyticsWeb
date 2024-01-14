import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  stack: {
    gap: '1.2rem',
  },
  warningIcon: {
    color: 'red',
    fontSize: '50px',
  },
  text: {
    fontWeight: 500,
    fontSize: '1rem',
  },
  form: {
    gap: '0.8rem',
    flexDirection: 'column',
    display: 'flex',
  },
  button: {
    color: 'white',
    background:
      'linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 100%)',
    border: '0px',
    width: '10rem',
  },
  cancel: {
    color: 'white',
    background:
      'linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)',
    border: '0px',
    width: '10rem',
  },
}))

export default useStyles
