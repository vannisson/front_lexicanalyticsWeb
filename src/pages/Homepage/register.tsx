import { Box, Input, PasswordInput, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./style";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

export default function RegisterPage() {
   const { classes } = useStyles();
   
   return (
      <Box className={classes.container}>

         <span className={classes.fontRegisterColor}> Fazer Login </span>


            <div className={classes.login}>
               <Input className={classes.mailInput}
                  icon={ <BsPersonFill size={30} /> }
                  placeholder="Nome de Usuário"
                  variant="unstyled"

                  size="lg"
                  />

               <Input className={classes.passwordInput}
                  icon={ <FaEnvelope size={30} /> }
                  placeholder="exemplo@exemplo.com"
                  variant="unstyled"

                  size="lg"
                  />
            
            
               <Input className={classes.passwordInput}
                  icon={ <FaLock size={30} /> }
                  placeholder="************"
                  
                  size="lg"
                  variant="unstyled"
                  />
            
            
         </div>

            <Button className={classes.loginButton}
            color="blue.7"
            size="xl"
            >Cadastrar</Button>

            <a
            href='./login' className={classes.a}
            >já cadastrado? Fazer login
            </a>

      </Box>
    );
}