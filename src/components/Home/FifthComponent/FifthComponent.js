import { Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: "2.188rem",
  "@media (min-width:600px)": {
    fontSize: "3.75rem",
  },
};

export default function FifthComponent() {
  return (
    <>
      <Typography
        sx={{
          color: "#72775B",
          fontFamily: "Poppins",
          fontSize: "14px",
          pt: 2,
          pl: 20,
          display: { xs: "none", md: "flex" },
        }}
      >
        ---- Our Collection
      </Typography>
      <Typography
        sx={{
          color: "#393842",
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "65px",
          pl: 20,
          pt: 2,
          display: { xs: "none", md: "flex" },
        }}
      >
        Everyone Needs{" "}
      </Typography>
      <Typography
        sx={{
          color: "#393842",
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "65px",
          pl: 20,
          display: { xs: "none", md: "flex", fontWeight: "600" },
        }}
      >
        One Until They Do.
      </Typography>

      <Typography
        sx={{
          color: "#72775B",
          fontFamily: "Poppins",
          fontSize: "14px",
          pt: 2,
          pl: 6,
          display: { xs: "flex", md: "none" },
        }}
      >
        ---- Our Collection
      </Typography>
      <Typography
        sx={{
          color: "#393842",
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "38px",
          pl: 6,
          pt: 2,
          display: { xs: "flex", md: "none", fontWeight: "600" },
        }}
      >
        Everyone Needs{" "}
      </Typography>
      <Typography
        sx={{
          color: "#393842",
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "38px",
          pl: 6,
          display: { xs: "flex", md: "none", fontWeight: "600" },
        }}
      >
        One Until They Do.
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill,minmax(135px,1fr))!important"
      >
        <Box
          gridColumn="span 6"
          sx={{
            pt: 18,
            pl: 20,
            pr: 9,
            pb: 3,
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=521&q=80"
            style={{
              maxWidth: "100%",
              borderRadius: "255px 255px 0px 0px",
              boxShadow: "15px 15px #72775B",
            }}
          />

          <Typography
            sx={{
              color: "#393842",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "17px",
              pt: 4,
            }}
          >
            Maternity Foam Pillow
          </Typography>
          <Typography
            sx={{
              color: "#72775B",
              fontSize: "15px",
              fontFamily: "Poppins",
              display: "flex",
              alignItems: "center",
              pt: 1,
            }}
          >
            Discover more
            <ArrowForwardOutlinedIcon sx={{ pl: 1 }} />
          </Typography>
        </Box>
        <Box
          gridColumn="span 5"
          sx={{ pt: 6, pl: 12, pr: 12, display: { xs: "none", md: "block" } }}
        >
          <img
            src="https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            style={{
              maxWidth: "100%",
              borderRadius: "240px 240px 0px 0px",
              boxShadow: "15px 15px #72775B",
            }}
          />
          <Typography
            sx={{
              color: "#393842",
              fontFamily: "Poppins",
              fontWeight: 500,
              pt: 4,
            }}
          >
            Memory Foam Mattress
          </Typography>
          <Typography
            sx={{
              color: "#72775B",
              fontSize: "15px",
              fontFamily: "Poppins",
              display: "flex",
              alignItems: "center",
              pt: 1,
            }}
          >
            Discover more
            <ArrowForwardOutlinedIcon />
          </Typography>
        </Box>

        <Box
          gridColumn="span 6"
          sx={{
            pt: 13,
            pl: 11,
            pr: 9,
            pb: 3,
            display: { xs: "block", md: "none" },
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=521&q=80"
            style={{
              maxWidth: "100%",
              borderRadius: "255px 255px 0px 0px",
              boxShadow: "15px 15px #72775B",
            }}
          />
          <Typography
            sx={{
              color: "#393842",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "17px",
              pt: 4,
            }}
          >
            Maternity Foam Pillow
          </Typography>
          <Typography
            sx={{
              color: "#72775B",
              fontSize: "15px",
              fontFamily: "Poppins",
              display: "flex",
              alignItems: "center",
              pt: 1,
            }}
          >
            Discover more
            <ArrowForwardOutlinedIcon sx={{ pl: 1 }} />
          </Typography>
        </Box>
        <Box
          gridColumn="span 5"
          sx={{ pt: 6, pl: 11, pr: 9, display: { xs: "block", md: "none" } }}
        >
          <img
            src="https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            style={{
              maxWidth: "100%",
              borderRadius: "240px 240px 0px 0px",
              boxShadow: "15px 15px #72775B",
            }}
          />
          <Typography
            sx={{
              color: "#393842",
              fontFamily: "Poppins",
              fontWeight: 500,
              pt: 4,
            }}
          >
            Memory Foam Mattress
          </Typography>
          <Typography
            sx={{
              color: "#72775B",
              fontSize: "15px",
              fontFamily: "Poppins",
              display: "flex",
              alignItems: "center",
              pt: 1,
            }}
          >
            Discover more
            <ArrowForwardOutlinedIcon />
          </Typography>
        </Box>
      </Box>
      {/* <Box display="grid"  gridTemplateColumns='repeat(auto-fill,minmax(135px,1fr))!important'>
      <Box gridColumn="span 6">
      <Typography sx={{color:"#393842",fontFamily:"Poppins",fontWeight:500,fontSize:"17px",pt:5,pl:11,pb:1}}>Maternity Foam Pillow</Typography>
        <Typography sx={{color:"#72775B",fontSize:"15px",fontFamily:"Poppins",display:"flex",alignItems:"center",pl:11,pb:2}}>Discover more<ArrowForwardOutlinedIcon sx={{pl:1}}/></Typography> 
      </Box>
      
     </Box> */}
    </>
  );
}

// const itemData = [
//     {
//       img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//       title: 'Breakfast',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//       title: 'Burger',
//     }]
