import React, { useEffect, useState } from "react";

//metrial-ui-core-component
import { Paper, Stack, Typography } from "@mui/material";
import "../../styles/App.css";
import Header from "../../component/header/Header";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Section1 from "../../component/Section1/Section1";
import Section2 from "../../component/Section2/Section2";
import Section3 from "../../component/section3/Section3";
import Section5 from "../../component/section5/Section5";
import Footer from "../../component/footer/Footer";
import Section6 from "../../component/section6/Section6";
import Section4 from "../../component/section4/Section4";

import { makeStyles } from "@mui/styles";
import { customeTheme } from "../../helper/customeTheme";

const styles = makeStyles(()=>({
  headingText:{
    color:"#fff",
    fontSize:"4rem !important",
    [customeTheme.breakpoints.down("450")]:{
      fontSize:"2.75rem !important",
    }
  },
}))

const Home = () => {
  const [bgcolor, setBgColor] = useState("#ffffff75");
  const [navItemColor, setNavItemColor] = useState("#EEF0F1");
  const [iconColor, setIconColor] = useState("#fff");

  const navigate = useNavigate();
  const classes = styles()

  const listenScrollEvent = (e) => {
    // if (window.innerWidth < 600) {
    //   if (window.scrollY > 700) {
    //     setBgColor("#fff");
    //     setNavItemColor("black");
    //     setIconColor("black");
    //   } else {
    //     setBgColor("#ffffff75");
    //     setNavItemColor("#EEF0F1");
    //     setIconColor("#fff");
    //   }
    // }
    // if (window.innerWidth > 600) {
    if (window.scrollY > 720) {
      setBgColor("#fff");
      setNavItemColor("black");
      setIconColor("black");
    } else {
      setBgColor("#ffffff75");
      setNavItemColor("#EEF0F1");
      setIconColor("#fff");
    }
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const onClickOurPortFolioBtn = () => {
    navigate("/portfolio");
  };
  return (
    <>
      <header>
        <Paper className="background-img">
          <Header
            bgcolor={bgcolor}
            navItemColor={navItemColor}
            iconColor={iconColor}
          />
          <Box className="body-section">
            <Typography  fontWeight="bold" className={classes.headingText}>
              ENRICHING IDEAS
              <br />
              DIGITALLY{" "}
            </Typography>
            <Typography
              variant="body2"
              fontWeight="500"
              sx={{ opacity: 0.7, letterSpacing: 1 }}
              color="#fff"
              mt={2}
            >
              We are an IT Company that Specializes in creating meaningful
              <br />
              experiance throught our work
            </Typography>
            <Stack
              direction="row"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              mt={3}
            >
              <button className="button">Request Qoute</button>
              <button onClick={onClickOurPortFolioBtn} className="button-our">
                Our Portfolio
              </button>
            </Stack>
          </Box>
        </Paper>
      </header>

      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4/>
        <Section5/>
        <Section6/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Home;
