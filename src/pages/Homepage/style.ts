import { createStyles } from "@mantine/core";
import { Flex } from "@mantine/core/lib/Flex";



const useStyles = createStyles((theme) => ({

// ------------------------------- INDEX
  // Container setting
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },


  // header related
  header: {
    height: "11%",
    width: "100%",
  },

// ------------------------------- LOGIN PAGE
  // Login Screen
  login: {
    padding: "7.785rem",
  },


  mailInput: {
    border: "3px solid #1574CD",
    borderRadius: "5px",
    width: "35rem",
    height: "3.5rem"
  },


  passwordInput: {
    marginTop: "2.75rem",
    border: "3px solid #dee2e6",
    borderRadius: "5px",

    width: "35rem",
  },


  // Button
  loginButton: {
    marginTop: "-2rem",
    width: "20.62%",
    height: "10.31%",
    fontSize: "2.18rem",
    
  },

// ------------------------------- INPUT PAGE
  //INPUT
  inputScreen: {
    display: "flex",
    alignItems: "center",
    marginTop: "5.68rem",
  },

  // buttons
  buttonAnalisys: {
    width: "20rem",
    height: "5rem",

    fontSize: "2rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    marginBottom: "2rem",
  },

  iconPadding: {
    paddingRight: "0.81rem",
  },

  // Textarea
  textArea: {
    backgroundColor: "#1E293B",
    color: "white",

    width: "67.5rem",
    height: "36.81rem",
    marginRight: "11.68rem",
    padding: "0.87rem 0 0 2.06rem",

    border: "1px solid #CBD5E1",
    borderRadius: "10px",
  },

// ------------------------------- ALL PAGES
  // TEXT DISPLAYED
  fontRegisterColor: {
    color: "#1574CD",
    fontSize: "2.5rem",
    margin: "2% 0 -3%",
    fontWeight: "bold",
    
  },

  a: {
    fontSize: "1rem",
    textDecoration: "none",
    color: "#1574CD",

    marginTop: "1%"
  }


}));

export default useStyles;
