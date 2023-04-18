import { Box } from "@mantine/core";
import logoBg from "../../../assets/logo-bg.svg";

interface IBackground {
  children: JSX.Element;
}

export default function Background({ children }: IBackground) {
  return (
    <Box
      sx={{
        backgroundColor: "#0F172A",
        position: "relative",
      }}
    >
      <img
        src={logoBg}
        alt=""
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "30.46%",
          height: "47.87%",
          userSelect: "none",
        }}
      />
      <>{children}</>
    </Box>
  );
}
