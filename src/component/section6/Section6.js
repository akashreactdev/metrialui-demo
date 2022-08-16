import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Dots from "../dots/Dots";
import { makeStyles } from "@mui/styles";
import { customeTheme } from "../../helper/customeTheme";
import IMG1 from "../../assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg";

import Carousel from 'react-elastic-carousel'
import "../../styles/App.css"

import QUOTE from "../../assets/images/left-quote.png";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const array = [
  {
  img1:IMG1,
  img2:IMG1,
  textpartner:"Development Partner for texhnology first companies",
  data:"| have worked with Fortune 500 brands such as Adidas,L'Oreal & Pfizer on multiple digital marketing projects. | aim to leverage my experience to help you grow your brand o Instagram while maintaining brand professionalism and performance delivery",
  ceoname:"Michel Renny",
  ceo:"CEO",
},
  {
    img1:IMG1,
    img2:IMG1,
    textpartner:"Development Partner for texhnology first companies",
    data:"| have worked with Fortune 500 brands such as Adidas,L'Oreal & Pfizer on multiple digital marketing projects. | aim to leverage my experience to help you grow your brand o Instagram while maintaining brand professionalism and performance delivery",
    ceoname:"Michel Renny",
    ceo:"CEO"
  },
  {
    img1:IMG1,
    img2:IMG1,
    textpartner:"Development Partner for texhnology first companies",
    data:"| have worked with Fortune 500 brands such as Adidas,L'Oreal & Pfizer on multiple digital marketing projects. | aim to leverage my experience to help you grow your brand o Instagram while maintaining brand professionalism and performance delivery",
    ceoname:"Michel Renny",
    ceo:"CEO"
  } , 
]

const styles = makeStyles(() => ({
  carouselImg: {
    display: "flex",
    justifyContent:"flex-end !important",
    paddingTop:10,
    paddingBottom:10,
    [customeTheme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  img1: {
    height: 400,
    width: 400,
    backgroundSize: "cover",
    [customeTheme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  img2: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80")`,
    height: 400,
    width: "50%",
    backgroundSize: "cover",
    [customeTheme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  nextBtn: {
    display: "flex",
    justifyContent: "center",
    marginTop:10
  },
  quoteIcon: {
    height: 30,
    width: 30,
    marginLeft:30,
    marginTop:30
  },
  text1: {  
    color: "#fff",
    fontSize: "20px !important",
    fontWeight: "bold !important",
    marginLeft: "30px !important",
    marginTop: "20px !important",
    [customeTheme.breakpoints.down("md")]: {
      fontSize: "16px !important",
    },
  },
  text2: {
    color: "#fff",
    fontSize: "16px !important",
    fontWeight: "bold !important",
    marginLeft: "30px !important",
    marginTop: "20px !important",
    [customeTheme.breakpoints.down("md")]: {
      fontSize: "12px !important",
    },
  },
  text3: {
    color: "#fff",
    fontSize: "18px !important",
    fontWeight: "bold !important",
    marginLeft: "30px !important",
    marginTop: "20px !important",
  },
  text4: {
    color: "#fff",
    fontSize: "18px !important",
    fontWeight: "bold !important",
    marginLeft: "30px !important",
    marginTop: "5px !important",
  },
  
}));

const Section6 = () => {
  const classes = styles();

  const [carousel,setCarousel] = useState("")

  const slidePrev = () => {
    carousel.slidePrev();
  }

  const slideNext = () => {
    carousel.slideNext();
  };

  return (
    <>
      <Box mt={3}>
        <Typography
          textAlign="center"
          variant="h4"
          fontWeight="bold"
          color="#231837"
        >
          Testimonials
        </Typography>
        <Box display="flex" mt={3} justifyContent="center">
          <Dots />
        </Box>
      </Box>

        <Box sx={{backgroundColor:"#E6EFF7",marginTop:3}}>  
        <Carousel  ref={ref=>{setCarousel(ref)}} showArrows={false}>
         {array.map((item,index)=>{
          return(
            <Box className={classes.carouselImg}>
            <img src={item.img1} className={classes.img1} />
            <Box className={classes.img2}>
              <Box>
                <img src={QUOTE} className={classes.quoteIcon} />
              </Box>
              <Typography className={classes.text1}>
               {item.textpartner}
              </Typography>
              <Typography className={classes.text2}>
                {item.data}
              </Typography>
              <Typography className={classes.text3}>{item.ceoname}</Typography>
              <Typography className={classes.text4}>{item.ceo}</Typography>
              </Box>
          </Box>
          )
        })}
      </Carousel>
        </Box>
      
      <Box className={classes.nextBtn}>
        <IconButton
          style={{
            backgroundColor: "#0E68B3",
            color: "white",
            marginRight: 20,
          }}
          onClick={slidePrev}
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        <IconButton  onClick={slideNext} style={{ backgroundColor: "#0E68B3", color: "white" }}>
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Section6;
