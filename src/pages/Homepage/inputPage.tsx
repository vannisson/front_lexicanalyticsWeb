import { Box, Textarea , Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./style";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPenToSquare, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function InputPage() {
   const { classes } = useStyles();

   return (
      <Box className={classes.container}>

         <div className={classes.inputScreen}>

            <Textarea className={classes.textArea}
               placeholder="Escreva seu texto aqui"
               variant="unstyled"
               />
         

            <div>
               <Button className={classes.buttonAnalisys}   
                  color="blue.7"
                  size="xl"

               > <FontAwesomeIcon className={classes.iconPadding} 
                  icon={faCirclePlus} 
                  />
                 Adicionar</Button>
               
               <Button className={classes.buttonAnalisys}
                  color="blue.7"
                  size="xl"
               > <FontAwesomeIcon className={classes.iconPadding} 
                  icon={faPenToSquare} 
                  />
                  Editar</Button>
               
               <Button className={classes.buttonAnalisys}
                  color="blue.7"
                  size="xl"
               > <FontAwesomeIcon className={classes.iconPadding} 
                  icon={faMagnifyingGlass} 
                  />
                  Analisar</Button>

            </div>
         </div>
      </Box>
    );
}