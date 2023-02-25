import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

export default function FourthComponent() {
  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill,minmax(120px,1fr))!important"
      >
        <Box
          gridColumn="span 5"
          sx={{
            pl: 4,
            pr: 0,
            pb: 8,
            mt: 25,
            ml: 17,
            display: { xs: "none", md: "flex" },
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1574180045827-681f8a1a9622"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "240px 240px 0px 0px",
              boxShadow: "-15px 15px 15px #72775B",
            }}
          />
        </Box>
        <Box
          gridColumn="span 5"
          sx={{
            pl: 1,
            pr: 4,
            pb: 8,
            mt: 20,
            ml: 5,
            display: { xs: "flex", md: "none" },
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1574180045827-681f8a1a9622"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "240px 240px 0px 0px",
              boxShadow: "-15px 15px 15px #72775B",
            }}
          />
        </Box>
        <Box gridColumn="span 6">
          <Box
            sx={{
              backgroundColor: "#E1DDDD",
              padding: "10px 8px",
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              pt: 35,
              pl: 15,
            }}
          >
            <Typography
              sx={{
                color: "#000000CC",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              --- Why Should Buy
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "65px",
              }}
            >
              Pillows As Sure As The Sun Shines.
            </Typography>
            <Typography
              sx={{
                color: "#00000066",
                fontFamily: "Poppins",
                fontSize: "24px",
                fontWeight: 600,
                mt: 4,
              }}
            >
              In the summer of 2007 a man named Joe Safford decided he wanted to
              wear his new jeans national.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#E1DDDD",
              ml: 4,
              padding: "10px 5px",
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "#000000CC",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              --- Why Should Buy
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "45px",
                pt: 2,
              }}
            >
              Pillows As Sure As The Sun Shines.
            </Typography>
            <Typography
              sx={{
                color: "#00000066",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 600,
                mt: 4,
              }}
            >
              In the summer of 2007 a man named Joe Safford decided he wanted to
              wear his new jeans national.
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "block", pl: 14, pt: 5 }}>
              <Box sx={{ display: "flex" }}>
                <CheckBoxOutlinedIcon style={{ color: "#747272" }} />
                <Typography
                  sx={{
                    color: "#747272",
                    fontFamily: "Poppins",
                    pl: 2,
                    pr: 2,
                    pb: 3,
                  }}
                  noWrap
                >
                  Our amazing benefit
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <CheckBoxOutlinedIcon style={{ color: "#747272" }} />
                <Typography
                  sx={{
                    color: "#747272",
                    fontFamily: "Poppins",
                    pl: 2,
                    pr: 2,
                    pb: 3,
                  }}
                  noWrap
                >
                  One more amazing benefit
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <CheckBoxOutlinedIcon style={{ color: "#747272" }} />
                <Typography
                  sx={{
                    color: "#747272",
                    fontFamily: "Poppins",
                    pl: 2,
                    pr: 2,
                    pb: 3,
                  }}
                  noWrap
                >
                  Your benefit here
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <CheckBoxOutlinedIcon style={{ color: "#747272" }} />
                <Typography
                  sx={{
                    color: "#747272",
                    fontFamily: "Poppins",
                    pl: 2,
                    pr: 2,
                    pb: 3,
                  }}
                  noWrap
                >
                  Type more benefit
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
