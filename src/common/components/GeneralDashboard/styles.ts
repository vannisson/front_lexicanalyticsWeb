import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  generalStack:{
    marginTop: "2rem",
    gap: "3rem",
  },  
  sectionTitle:{
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "2rem"
  },
  outsidePaperStack:{
    gap:"2rem"
  },
  paper: {
    border: "1.5px solid #C6C6C6",
    boxShadow: "5px 8px 4px 3px rgba(0, 0, 0, 0.25)",
    width: "12rem",
    height: "10rem",
    borderRadius: "15px",
    padding: "2rem",
  },
  paperStack: {
    gap: "1rem"
  },
  paperTitle:{
    fontSize: "1rem"
  },
  paperInfo:{
    fontSize:"2rem",
  },
  table:{

  }
}));

export default useStyles;
