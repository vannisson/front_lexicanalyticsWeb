import { Box, Input, PasswordInput, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./style";

import { FaEnvelope, FaLock } from "react-icons/fa";

const navigateToRegister = () => {
   useNavigate();
 };

export default function LoginPage() {
   const { classes } = useStyles();

   return (
      <Box className={classes.container}>

         <div>
            <div className={classes.login}>
               <Input className={classes.mailInput}
                  icon={ <FaEnvelope size={30} /> }
                  placeholder="exemplo@exemplo.com"
                  variant="unstyled"

                  size="lg"
                  />

               <PasswordInput className={classes.passwordInput}
                  icon={ <FaLock size={30} /> }
                  placeholder="Senha"
                  variant="unstyled"
                  
                  size="lg"

                  />
            
            </div>
            
         </div>

         <Button className={classes.loginButton}
         color="blue.7"
          size="xl"
          >Entrar</Button>

      </Box>
    );
}