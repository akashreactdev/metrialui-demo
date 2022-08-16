import { Box, Container, Typography } from "@mui/material";
import React from "react";

import LOGO from "../../assets/images/MainDigniLogo-removebg-preview.png";

import { makeStyles } from "@mui/styles";
import { customeTheme } from "../../helper/customeTheme";

import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import MailIcon from '@mui/icons-material/Mail';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const styles = makeStyles(()=>({
    footer:{
        display:"flex",
        marginTop:30,
        justifyContent:"space-between",
        [customeTheme.breakpoints.down("md")]:{
           flexDirection:"column"
        }
    },
    link:{
        [customeTheme.breakpoints.down("md")]:{
            marginTop:20,
         }
    }
}))

const Footer = () => {

    const classes = styles()

  return (
    <>
      <Box mt={15} borderTop="1px solid black" borderBottom="1px solid black" bgcolor="#E6EFF7" p={3}>
        <Container>
          <img SRC={LOGO} alt="icon" className="dignizant-icon" />
          <Box className={classes.footer}>
            <Box>
                <Box sx={{display:"flex"}}>
                <CallRoundedIcon/>
                <Typography ml={1}>
                    +91 6354567891
                </Typography>
                </Box>
                <Box sx={{marginTop:2,display:"flex"}}>
                <MailIcon/>
                <Typography ml={1}>
                    info@dignizant.com
                </Typography>
                </Box>
                <Box sx={{marginTop:2,display:"flex"}}>
                <LocationOnSharpIcon/>
                <Typography ml={1}>
                   521-522-533,5th floor Ambay-vally<br/>Aracede,Opp Sentosa Height, Utran,<br/> Surat394150, Gujarat,India.
                </Typography>
                </Box>
                <Box sx={{marginTop:2,display:"flex"}}>
                <LocationOnSharpIcon/>
                <Typography ml={1}>
                521-522-533,5th floor Ambay-vally<br/>Aracede,Opp Sentosa Height, Utran,<br/> Surat394150, Gujarat,India.
                </Typography>
                </Box>
            </Box>
            <Box className={classes.link}>
              <Typography  variant="h6">QUICK LINKS</Typography>
              <Box sx={{marginTop:2}}>
              <Typography variant="body1" sx={{cursor:"pointer"}}>About Us</Typography>
              <Typography variant="body1" sx={{cursor:"pointer"}}>Portfolio</Typography>
              <Typography variant="body1" sx={{cursor:"pointer"}}>Contact</Typography>
              <Typography variant="body1" sx={{cursor:"pointer"}}>Career</Typography>
              </Box>
            </Box>
            <Box className={classes.link}>
              <Typography variant="h6">OUR SERVICES</Typography>
              <Box sx={{marginTop:2}}>
              <Typography variant="body1" sx={{cursor:"pointer"}}>- WEB & BACKEND DEVELOPMENT</Typography>
              <Typography variant="body1" sx={{cursor:"pointer"}}>- MOBILE APP DEVELOPMENT</Typography>
              <Typography variant="body1" sx={{cursor:"pointer"}}>- OTHER SERVICES</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box mb={2} className={classes.footer}>
            <Box>
                <Typography>
                    @copyright, 2022 Dignizant Technologies
                </Typography>
            </Box>
            <Box sx={{display:"flex"}}>
                <InstagramIcon/>
                <Box sx={{marginLeft:2}}>
                <FacebookRoundedIcon/>
                </Box>
            </Box>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
