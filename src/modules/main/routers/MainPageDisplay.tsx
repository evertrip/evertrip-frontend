import { Container } from "@mui/material";
import React from "react";
import SlideCards from "../components/SlideCards";

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


    </Container>
  );
}

export default Main;
