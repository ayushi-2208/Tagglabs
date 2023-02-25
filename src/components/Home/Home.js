import React from "react";
import Images from "./Images";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SecondComponent from "./SecondComponent/SecondComponent";
import Navbar from "../Navbar/Navbar";
import ThirdComponent from "./ThirdComponent/ThirdComponent";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "2.15rem",
  "@media (min-width:600px)": {
    fontSize: "4.375rem",
  },
};

export default function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <Images />
      <ThemeProvider theme={theme}>
        <Typography
          variant="h3"
          sx={{
            color: "#D9D4D4",
            fontFamily: "Poppins",
            fontWeight: 700,
            pl: 9,
          }}
          noWrap
          align="left"
        >
          We Bring The Good
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#D9D4D4",
            fontFamily: "Poppins",
            fontWeight: 700,
            pl: 9,
            pb: 7,
          }}
          noWrap
          align="left"
        >
          Pillows To Life.
        </Typography>
      </ThemeProvider>
      <SecondComponent />
      {/* <ThirdComponent/> */}
    </div>
  );
}
