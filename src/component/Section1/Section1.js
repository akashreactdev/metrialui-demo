import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Dots from "../dots/Dots";
import { makeStyles } from "@mui/styles";
import { customeTheme } from "../../helper/customeTheme";
import IMG_1 from "../../assets/images/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import IMG_2 from "../../assets/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";

const styles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    [customeTheme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  backcontainer: {
    flex: 1,
  },
  div1: {
    backgroundColor: "#fff",
    width: "60%",
    margin: "auto",
    height: "90%",
    border: "1px solid black",
    position: "relative",
    [customeTheme.breakpoints.down("md")]: {
      padding: "150px 0px",
      width: "50% !important",
      marginBottom:75 
    },
    [customeTheme.breakpoints.down("xxmd")]: {
      width: "60% !important",
    },
    [customeTheme.breakpoints.down("450")]: {
      width: "70% !important",
    },
    [customeTheme.breakpoints.down("sm")]: {
      padding: "100px 0px",
    },
    [customeTheme.breakpoints.down("682")]: {
      width: "60%",
    },
    [customeTheme.breakpoints.down("lg")]: {
      width: "70%",
    },
  },
  aksh: {
    backgroundColor: "red",
    height: 300,
    width: 300,
  },
  img1: {
    height: "75%",
    width: "75%",
    position: "absolute",
    right: -45,
    top: -30,
    borderRadius: 10,
    backgroundSize:"cover"
  },
  img2: {
    height: "75%",
    width: "75%",
    position: "absolute",
    bottom: -50,
    left: -50,
    borderRadius: 10,
    backgroundSize:"cover"
  },
  div2:{
    width: "30%",
    bottom: -42,
    right: -44,
    height: "30%",
    position: "absolute",
    borderRadius: "50%",
    border:"2px dashed lightblue",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    [customeTheme.breakpoints.down("sm")]: {
      width: "40%",
      height:"40%"
    },
  },
  hello:{
    height:"60%",
    width:"60%",
    borderRadius:"50%",
    // backgroundColor:"yellow",
    backgroundColor:"#fff",
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    [customeTheme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  content: {
    flex: 1,
    marginLeft: 50,
    [customeTheme.breakpoints.down("md")]: {
      margin: "15px 15%",
      // marginLeft: 0,
    },
  },
  img3:{
    height:30,
    width:30
  },
}));

const Section1 = () => {
  const classes = styles();

  return (
    <Container>
      <Box mt={20} className={classes.container}>
        <Box className={classes.backcontainer}>
          <Box className={classes.div1}>
            <Box>
              <img src={IMG_1} className={classes.img1} />
            </Box>
            <Box>
              <img src={IMG_2} className={classes.img2} />
            </Box>
            <Box className={classes.div2}>
              <Box className={classes.hello}>
                <img src={IMG_2} className={classes.img3}/>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* content */}
        <Box className={classes.content}>
          <Typography variant="h4" fontWeight="bold" color="#2B4473">
            Welcome to Dignizant
            <br />
            Technologies
          </Typography>
          <Box mt={2}>
            <Dots />
          </Box>
          <Box mt={4}>
            <Typography variant="body1" color="#60586E">
              We welcome you at our official website. Here you can find
              everything about diginizant. We have hard workers,enthusiasts and
              visionary members in our team. Our focus is to make life easy with
              cost-effective, efficient and robust tech solutions that can make
              a hug impact.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="body1" color="#60586E">
              We handle your dilverse business requirments efficiently and help
              them turn your business into a successful brand. Our experts put
              in the right amount of bussiness expertise required for your
              business to stand out. We not only provide tech solutions but we
              always welcome you in any sort of consultancy required for your
              business to grow.
            </Typography>
          </Box>
        </Box>
        {/* end content */}
      </Box>
    </Container>
  );
};

export default Section1;
