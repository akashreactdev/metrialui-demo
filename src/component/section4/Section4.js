import React from "react";

import { makeStyles } from "@mui/styles";
import { customeTheme } from "../../helper/customeTheme";
import { Box, Container, Typography } from "@mui/material";
import Dots from "../dots/Dots";


import ICON_1 from "../../assets/images/requirements.png";
import ICON_2 from "../../assets/images/content-creator.png";
import ICON_3 from "../../assets/images/laptop.png";
import ICON_4 from "../../assets/images/coding.png";
import ICON_5 from "../../assets/images/web-design.png";
import ICON_6 from "../../assets/images/shuttle.png";

const styles = makeStyles(() => ({
  maincontaine: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginLeft:25,
    marginRight:-25,
    position: "relative",
    [customeTheme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection:"column",
      marginLeft:0,
      marginRight:0,
    },
    [customeTheme.breakpoints.down("lg")]:{
      justifyContent: "space-evenly",
    },
  },
  containe: {
    border: "3px solid #0E68B3",
    marginTop: 30,
    borderRadius: 50,
    width: 350,
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
    height: 80,
    position:"relative",
    [customeTheme.breakpoints.down("sm")]: {
      width:"100%",
      maxWidth:300,
      margin:"5 auto"
    },
  },
  containe2: {
    border: "3px solid #0E68B3",
    marginTop: 30,
    borderRadius: 50,
    width: 350,
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
    height: 80,
    position:"relative",
    marginLeft: -50,
    [customeTheme.breakpoints.down("lg")]: {
      marginLeft: 0,
    },
    [customeTheme.breakpoints.down("sm")]: {
      width:"100%",
      maxWidth:300,
      margin:"5 auto"
    },
  },
  containe5: {
    border: "3px solid #0E68B3",
    marginTop: 30,
    borderRadius: 50,
    width: 350,
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-start",
    height: 80,
    position:"relative",
    marginLeft: 50,
    [customeTheme.breakpoints.down("lg")]: {
      marginLeft: 0,
    },
    [customeTheme.breakpoints.down("sm")]: {
      width:"100%",
      maxWidth:300,
      margin:"5 auto"
    },
  },
  processStepborder: {
    border: "3px dashed #0E68B3",
    height: 140,
    width: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  processstep: {
    backgroundColor: "#0E68B3",
    height: 70,
    width: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: "50%",
  },
  div2: {
    [customeTheme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  iconBg:{
    backgroundColor: "#0E68B3",
    height:50,
    width:50,
    borderRadius:50,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  icon:{
    height:30,
    width:30,
    backgroundSize:"cover"
  },
  caption:{
    fontSize:"12px !important",
    [customeTheme.breakpoints.down("sm")]:{
      fontSize:"10px !important"
    }
  },
}));

const Section4 = () => {
  const classes = styles();

  return (
    <Container>
      <Box mt={3} textAlign="center">
        <Typography variant="h4" fontWeight="bold" color="#231837">
          How we do it
        </Typography>
        <Box display="flex" mt={5} justifyContent="center">
          <Dots />
        </Box>
      </Box>


      {/* START COMPONENT */}
      <Box className={classes.maincontaine}>
        {/* container1 */}
        <Box>
          <Box className={classes.containe}>
            <Box textAlign="right" mr={2}>
            <Typography textAlign="right">1.Rquirments</Typography>
            <Typography textAlign="right" className={classes.caption}>
                We help you to take small business<br/> to next level. Don't hesitate to
            </Typography>
            </Box>
            <Box mr={2} className={classes.iconBg}>
                <img src={ICON_1} className={classes.icon}/>
            </Box>
            <Box className={classes.div2} sx={{
                backgroundColor:"#0E68B3",
                height:3,
                width:90,
                right: -90,
                position:"absolute",
            }}/>
              <Box className={classes.div2}  sx={{
                  backgroundColor: "#0E68B3",
                  height: 3,
                  width: 77,
                  position: "absolute",
                  right: -154,
                  top: 64,
                  transform:"rotate(45deg)",
            }}/>
             <Box className={classes.div2}  sx={{
                  backgroundColor: "#0E68B3",
                  height: 15,
                  width: 15,
                  position: "absolute",
                  right: -151,
                  top: 86,
                  borderRadius: "50%",
            }}/>
          </Box>

          <Box className={classes.containe2} >
            <Box  textAlign="right" mr={2}>   
            <Typography>2.Prototype</Typography>
            <Typography className={classes.caption}>
                We help you to take small business<br/> to next level. Don't hesitate to
            </Typography>
            </Box>
            <Box mr={2} className={classes.iconBg}> 
                <img src={ICON_2} className={classes.icon}/>
            </Box>
            <Box className={classes.div2} sx={{
                backgroundColor:"#0E68B3",
                height:3,
                width:177,
                right: -177,
                position:"absolute",
            }}/>
             <Box className={classes.div2}  sx={{
                  backgroundColor: "#0E68B3",
                  height: 15,
                  width: 15,
                  position: "absolute",
                  right: -184,
                  top: 32,
                  borderRadius: "50%",
            }}/>
          </Box>

          <Box className={classes.containe}>
            <Box  textAlign="right" mr={2}>
            <Typography>3.Design</Typography>
            <Typography  className={classes.caption}>
                We help you to take small business<br/> to next level. Don't hesitate to
            </Typography>
            </Box>
            <Box mr={2} className={classes.iconBg}>
                <img src={ICON_3} className={classes.icon}/>
            </Box>
          <Box className={classes.div2} sx={{
                backgroundColor:"#0E68B3",
                height:3,
                width:90,
                right: -90,
                position:"absolute",
            }}/>
              <Box className={classes.div2}  sx={{
                  backgroundColor: "#0E68B3",
                  height: 3,
                  width: 100,
                  position: "absolute",
                  right: -175,
                  top: 3,
                  transform: "rotate(135deg)",
            }}/>
             <Box className={classes.div2}  sx={{
                  backgroundColor: "#0E68B3",
                  height: 15,
                  width: 15,
                  position: "absolute",
                  right: -167,
                  top: -37,
                  borderRadius: "50%",
            }}/>
          </Box>
        </Box>

        {/* container2 */}
        <Box className={classes.div2}>
          <Box className={classes.processStepborder}>
            <Box className={classes.processstep}>
              <Typography variant="body1" color="#fff" textAlign="center" fontWeight="bold">
                Process
                <br />
                Steps
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* container3 */}
        <Box>

          <Box style={{justifyContent:"flex-start"}} className={classes.containe}>
            <Box ml={2} className={classes.iconBg}>
                <img src={ICON_4} className={classes.icon}/>
            </Box>
            <Box textAlign="left" ml={2}>
            <Typography >4.Development</Typography>
            <Typography  className={classes.caption}>
                We help you to take small business<br/> to next level. Don't hesitate to
            </Typography>
            </Box>
            <Box className={classes.div2}  sx={{
              backgroundColor: "#0E68B3",
              height: 3,
              width: 90,
              left: -90,
              position: "absolute",
            }}/>
              <Box className={classes.div2}  sx={{
                  backgroundColor: "#0E68B3",
                  height: 3,
                  width: 77,
                  position: "absolute",
                  left: -154,
                  top: 64,
                  transform:" rotate(135deg)",
            }}/>
             <Box className={classes.div2}  sx={{
                  backgroundColor: "#0E68B3",
                  height: 15,
                  width: 15,
                  position: "absolute",
                  left: -151,
                  top: 86,
                  borderRadius: "50%",
            }}/>
          </Box>

          <Box className={classes.containe5}>
            <Box ml={2} className={classes.iconBg}>
                <img src={ICON_5} className={classes.icon}/>
            </Box>
            <Box textAlign="left" ml={2}>
            <Typography >5.Testing & QA</Typography>
            <Typography className={classes.caption}>
                We help you to take small business<br/> to next level. Don't hesitate to
            </Typography>
            </Box>
            <Box className={classes.div2}  sx={{
              backgroundColor: "#0E68B3",
              height: 3,
              width: 177,
              left: -177,
              position: "absolute",
            }}/>
             <Box className={classes.div2}  sx={{
                  backgroundColor: "#0E68B3",
                  height: 15,
                  width: 15,
                  position: "absolute",
                  left: -184,
                  top: 32,
                  borderRadius: "50%",
            }}/>
          </Box>

          <Box style={{justifyContent:"flex-start"}} className={classes.containe}>
            <Box ml={2} className={classes.iconBg} >
                <img src={ICON_6} className={classes.icon}/>
            </Box>
            <Box textAlign="left" ml={2}>
            <Typography>6.Deployment</Typography>
            <Typography className={classes.caption}>
                We help you to take small business<br/> to next level. Don't hesitate to
            </Typography>
            </Box>
          <Box className={classes.div2}  sx={{
              backgroundColor: "#0E68B3",
              height: 3,
              width: 90,
              left: -90,
              position: "absolute",
            }}/>
              <Box className={classes.div2}  sx={{
                  backgroundColor: "#0E68B3",
                  height: 3,
                  width: 105,
                  position: "absolute",
                  left: -180,
                  top: 2,
                  transform:" rotate(43deg)",
            }}/>
             <Box className={classes.div2}  sx={{
                  backgroundColor: "#0E68B3",
                  height: 15,
                  width: 15,
                  position: "absolute",
                  left: -170,
                  top: -35,
                  borderRadius: "50%",
            }}/>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Section4;
