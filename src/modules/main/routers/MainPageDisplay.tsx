import { Container } from "@mui/material";
import React from "react";
import SlideCards from "../components/SlideCards";
import GridCards from "../components/GridCards";

const mainPageContents = {
  hotCards : [],    
  viewCards : [],
  newCards : [],
};

function Main() {


  return (
    <Container
      sx={{
        maxWidth: "1150px",
        marginTop: "60px",
        "@media (max-width: 600px)": {
          marginTop: "30px",
        },
      }}
    >

      <SlideCards></SlideCards>
      <GridCards></GridCards>

    </Container>
  );
}

export default Main;
