import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: "0.938rem",
  "@media (min-width:600px)": {
    fontSize: "1.0rem",
  },
};

export default function SecondComponent() {
  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill,minmax(120px,1fr))!important"
      >
        <Box gridColumn="span 6">
          <Typography
            variant="h4"
            sx={{
              color: "#D9D4D4CC",
              pl: 9,
              pr: 4,
              pt: 5,
              fontFamily: "Poppins",
            }}
          >
            That's where we come in - the folks at Oliya, with our Kickstarter
            campaign goal of $1000 for a total books and one final book time
          </Typography>
          <Box sx={{ display: "flex", pl: 9, pt: 2 }}>
            <CheckBoxOutlinedIcon style={{ color: "#747272" }} />
            <Typography
              sx={{ color: "#D9D4D4CC", fontFamily: "Poppins", pl: 2, pr: 2 }}
              noWrap
            >
              Free Delivery
            </Typography>
            <CheckBoxOutlinedIcon style={{ color: "#747272" }} />
            <Typography
              sx={{ color: "#D9D4D4CC", fontFamily: "Poppins", pl: 2, pr: 2 }}
              noWrap
            >
              24/7 Support
            </Typography>
            <CheckBoxOutlinedIcon style={{ color: "#747272" }} />
            <Typography
              sx={{ color: "#D9D4D4CC", fontFamily: "Poppins", pl: 2, pr: 2 }}
              noWrap
            >
              Free Return
            </Typography>
          </Box>
          <Box sx={{ pl: 9, pt: 5, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#72775B",
                fontSize: "15px",
                fontFamily: "Poppins",
                p: 2,
              }}
            >
              Get Started
              <ArrowForwardOutlinedIcon sx={{ ml: 2 }} />
            </Button>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              pt: 5,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#72775B",
                fontSize: "15px",
                fontFamily: "Poppins",
                p: 2,
              }}
            >
              Get Started
              <ArrowForwardOutlinedIcon sx={{ ml: 2 }} />
            </Button>
          </Box>
        </Box>
        <Box gridColumn="span 5" sx={{ pl: 4, pr: 4, pb: 8, pt: 4 }}>
          <img
            src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
            style={{ maxWidth: "100%" }}
          />
          <Box
            sx={{
              backgroundColor: "#E1DDDD",
              padding: "10px 8px",
              maxWidth: "20%",
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              position: "absolute",
              zIndex: "1",
              top: "1044px",
              left: "600px",
            }}
          >
            <Typography
              sx={{
                color: "#000000CC",
                fontFamily: "Poppins",
                fontSize: "17px",
              }}
            >
              Definitely worth the investment. Really good. Keep up the
              excellent work. It's really wonderful.
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "15px",
                mt: 1,
              }}
            >
              Jena Redmond
            </Typography>
            <Typography
              sx={{
                color: "#00000066",
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              Designer
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#E1DDDD",
              ml: 4,
              padding: "10px 5px",
              maxWidth: "70%",
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              zIndex: "1",
              pl: 3,
            }}
          >
            <Typography
              sx={{
                color: "#000000CC",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Definitely worth the investment. Really good. Keep up the
              excellent work. It's really wonderful.
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "12px",
                mt: 1,
              }}
            >
              Jena Redmond
            </Typography>
            <Typography
              sx={{
                color: "#00000066",
                fontFamily: "Poppins",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Designer
            </Typography>
          </Box>
        </Box>
      </Box>
    </>

    // </div>
  );
}
