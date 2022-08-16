import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Dots from "../dots/Dots";
import { makeStyles } from "@mui/styles";
import { customeTheme } from "../../helper/customeTheme";

import IMG_1 from "../../assets/images/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useNavigate } from "react-router-dom";

const array = [
  { img: IMG_1,name:"Project1 Name",text:"imagine dragons",id:1 },
  { img: IMG_1,name:"Project2 Name",text:"imagine dragons",id:2 },
  { img: IMG_1,name:"Project3 Name",text:"imagine dragons",id:3 },
  { img: IMG_1,name:"Project4 Name",text:"imagine dragons",id:4 },
  { img: IMG_1,name:"Project5 Name",text:"imagine dragons",id:5 },
  { img: IMG_1,name:"Project6 Name",text:"imagine dragons",id:6 },
  { img: IMG_1,name:"Project7 Name",text:"imagine dragons",id:7 },
  { img: IMG_1,name:"Project8 Name",text:"imagine dragons",id:8 },
];

const styles = makeStyles(() => ({
  iamges: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundSize: "cover",
    cursor: "pointer",
    position:"relative",
  },
  gridcontaine: {
    [customeTheme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center !important",
      overflow: "hidden",
    },
  },
  hovercontainer: {
    height: 200,
    width: "100%",
    borderRadius:10,
    overflow: "hidden",
    backgroundSize: "cover",
    cursor: "pointer",
    position: "absolute",
    backgroundColor: "#142f6499",
    marginRight:16,
    transition:customeTheme.transitions.easing.sharp,
    transitionDuration:customeTheme.transitions.duration.standard
  },
  overImageContaine: {
    position: "absolute",
    top: "-56%",
    width: "100%",
    left: "-56%",
    background: "#0E68B3",
    height: "100%",
    cursor: "pointer",
    transform: "rotate(52deg)",
    borderTopRightRadius: 20,
    overflow: "hidden !important",
    [customeTheme.breakpoints.down("sm")]:{
      top: "-45%",
      left:" -45%",
    },
  },
  name:{
    color:"#fff",
    position:"absolute",
    bottom:10,
    left:40,
    fontSize:"22px !important",
    zIndex:99,
    fontWeight:"bold !important",
    [customeTheme.breakpoints.down("sm")]:{
      fontSize:"18px !important",
    },
  },
  textContainer:{
    position:"absolute",
    color:"#fff",
    left:30,
    top:20
  },
  textimagine:{
    fontSize:"12px !important",
    fontWeight:"bold !important",
  },
}));

const Section5 = () => {
  const classes = styles();

  const [hoverEffect,setHoverEffect] = useState(null)

  const navigate = useNavigate()

  const handlePopoverOpen = (id) => {
    const tempArray = [...array]
    const filterArray = tempArray.filter((item)=>item.id === id);
    setHoverEffect(filterArray[0].id)
  };
    
  const onClickNextBtn = (cindex) => {
    navigate("/portfolio")
  }

  const handleClose = () => {
      setHoverEffect(null)
  }

  return (
    <Box mt={15} bgcolor="#F3F4F7" p={3} mb={6}>
      <Container>
        <Box mt={3} textAlign="center">
          <Typography variant="h4" fontWeight="bold" color="#231837">
            Our Portfolio
          </Typography>
          <Box display="flex" mt={5} justifyContent="center">
            <Dots />
          </Box>
        </Box>
        <Box>
          <Box>
            <Grid
              xs={12}
              mt={5}
              container
              overflow="hidden"
              className={classes.gridcontaine}
              justifyContent="center"
              spacing={0}
            >
              {array.map((value, index) => {
                return (
                  <Box
                    onMouseEnter={() => handlePopoverOpen(value.id)}
                     onMouseLeave={handleClose}
                    pr={2}
                    position="relative"
                    overflow="hidden"
                    justifyContent="center"
                    display="flex"
                    cursor="pointer"
                    marginBottom={2}
                    key={value}
                    borderRadius="10px"
                  >
                    <img src={value.img} className={classes.iamges} />
                    <Box display={value.id === hoverEffect ? "flex" : "none"} className={classes.hovercontainer}>
                      <Box className={classes.overImageContaine}>
                      </Box>
                      <Box className={classes.textContainer}>
                          <Typography className={classes.textimagine}>{value.text}</Typography>
                      </Box>
                      <IconButton
                        onClick={()=>onClickNextBtn(index)}
                        style={{ backgroundColor: "white", color: "#0E68B3",right:20,top:20,position:"absolute" }}
                      >
                        <ArrowForwardIosRoundedIcon />
                      </IconButton>
                      <Typography className={classes.name}>{value.name}</Typography>
                    </Box>
                  </Box>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section5;
