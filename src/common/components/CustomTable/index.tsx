import { Box, Table } from "@mantine/core";
import useStyles from "./styles";

interface ICustomTable {
  header?: string[];
  data: Record<string, string | JSX.Element | number>[] | any;
}

export default function CustomTable({ header, data }: ICustomTable) {
  const { classes } = useStyles();
  const keys = data?.length ? Object.keys(data[0]) : null;

  return (
    <Box className={classes.tableContainer}>
      <table className={classes.table}>
        <thead>
          <tr>
            {header?.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: number) => (
            <tr key={index}>
              {keys?.map((key) => (
                <td key={key}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}
