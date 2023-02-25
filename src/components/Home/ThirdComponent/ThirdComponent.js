import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "../../../images/logoipsum-logo-1.svg";
import image2 from "../../../images/logoipsum-logo-3.svg";
import image3 from "../../../images/logoipsum-logo-5.svg";
import image4 from "../../../images/logoipsum-logo-6.svg";
import image5 from "../../../images/logoipsum-logo-7.svg";

export default function ThirdComponent() {
  return (
    <>
      <ImageList
        sx={{
          pt: 7,
          pr: 5,
          pb: 5,
          pl: 7,
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))!important",
          width: "70%",
          backgroundColor: "black",
          display: {
            xs: "none",
            md: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            zIndex: "1",
            top: "1209px",
            left: "180px",
          },
        }}
        cols={5}
        gap={10}
      >
        {itemData.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
              style={{ maxWidth: "100%" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
const itemData = [image1, image2, image3, image4, image5];
