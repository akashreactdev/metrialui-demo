import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import Dots from "../dots/Dots";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { customeTheme } from "../../helper/customeTheme";

import CARD1_IMG from "../../assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg";
import CARD2_IMG from "../../assets/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg";
import CARD3_IMG from "../../assets/images/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const styles = makeStyles(() => ({
  cardcontain: {
    marginTop: 50,
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    [customeTheme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  card: {
    marginRight: 20,
    height: 300,
    width: "100%",
    cursor: "pointer",
    maxWidth: 300,
    position: "relative",
    overflow: "inherit !important",
    paddingBottom: 30,
    [customeTheme.breakpoints.down("md")]: {
      marginRight: 0,
      marginBottom: 100,
      overflow: "inherit !important",
    },
  },
  cardImage: {
    borderRadius: 10,
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -22,
    height: "50%",
    width: "90%",
  },
  cardHoverImage: {
    position: "absolute",
    bottom: -22,
    display: "flex",
    height: "50%",
    width: "90%",
    left: 15,
    right: 15,
    borderRadius: 10,
  },
  cardHeadertext: {
    fontWeight: "bold !important",
    textAlign: "center",
    fontSize: "22px !important",
  },
  cardContainText: {
    textAlign: "center",
    marginTop: 12,
    fontSize: "14px !important",
  },
  imageOverContaine: {
    backgroundColor: "#142f6499",
    position: "absolute",
    height: "50%",
    width: "90%",
    borderRadius: 10,
    bottom: -22,
    left: 15,
    right: 15,
  },
  hoverCardText: {
    position: "absolute",
    color: "#fff",
    fontWeight: 700,
    bottom: 20,
    left: 15,
    right: 15,
  },
  cardHoverBtn: {
    bottom: -22,
    left: 30,
    position: "absolute",
    right: 30,
  },
}));

const Section3 = () => {
  const classes = styles();

  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);

  const onMouseEnter = () => {
    setCard1(true);
  };

  const onMouseLeave = () => {
    setCard1(false);
  };

  const onMouseEnterCard2 = () => {
    setCard2(true);
  };

  const onMouseLeaveCard2 = () => {
    setCard2(false);
  };

  const onMouseEnterCard3 = () => {
    setCard3(true);
  };

  const onMouseEnterLeave3 = () => {
    setCard3(false);
  };

  return (
    <Box mt={15} bgcolor="#F3F4F7" p={3} mb={6}>
      <Container>
        <Box mt={3} textAlign="center">
          <Typography variant="h4" fontWeight="bold" color="#231837">
            What we do
          </Typography>
          <Box display="flex" mt={5} justifyContent="center">
            <Dots />
          </Box>
        </Box>
        <Box className={classes.cardcontain}>
          {/* card1 start */}
          <Card
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={classes.card}
          >
            <img
              src={CARD1_IMG}
              alt="card1"
              className={card1 ? classes.cardHoverImage : classes.cardImage}
            />
            <Box className={card1 && classes.imageOverContaine} />
            <CardContent className="cardcontent">
              <Typography className={classes.cardHeadertext}>
                WEB & BACKEND
                <br />
                DEVELOPMENT
              </Typography>
              <Box className={card1 && classes.hoverCardText}>
                <Typography className={classes.cardContainText}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Box>
            </CardContent>
            {card1 ? (
              <IconButton
                style={{
                  position: "absolute",
                  backgroundColor: "#0E68B3",
                  color: "#fff",
                  bottom: -40,
                  padding:10,
                  left:130,
                }}
              >
                <ArrowForwardIosRoundedIcon />
              </IconButton>
            ) : null}
          </Card>
          {/* card2 start */}
          <Card
            onMouseEnter={onMouseEnterCard2}
            onMouseLeave={onMouseLeaveCard2}
            className={classes.card}
          >
            <img
              src={CARD2_IMG}
              className={card2 ? classes.cardHoverImage : classes.cardImage}
            />
            <Box className={card2 && classes.imageOverContaine} />
            {card2 ? (
              <IconButton
                style={{
                  position: "absolute",
                  backgroundColor: "#0E68B3",
                  color: "#fff",
                  bottom: -40,
                  padding:10,
                  left:130,
                }}
              >
                <ArrowForwardIosRoundedIcon />
              </IconButton>
            ) : null}
            <CardContent>
              <Typography className={classes.cardHeadertext}>
                MOBILE APPS <br /> DEVELOPEMENT
              </Typography>
              <Box className={card2 && classes.hoverCardText}>
                <Typography className={classes.cardContainText}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Box>
            </CardContent>
          </Card>
          {/* card3 start */}
          <Card
            className={classes.card}
            onMouseEnter={onMouseEnterCard3}
            onMouseLeave={onMouseEnterLeave3}
          >
            <img
              src={CARD3_IMG}
              className={card3 ? classes.cardHoverImage : classes.cardImage}
            />
            <Box className={card3 && classes.imageOverContaine} />
            {card3 ? (
              <IconButton
                style={{
                  position: "absolute",
                  backgroundColor: "#0E68B3",
                  color: "#fff",
                  bottom: -40,
                  padding:10,
                  left: 130,
                }}
              >
                <ArrowForwardIosRoundedIcon />
              </IconButton>
            ) : null}
            <CardContent>
              <Typography className={classes.cardHeadertext}>
                OTHER <br />
                SERVICES
              </Typography>
              <Box className={card3 && classes.hoverCardText}>
                <Typography className={classes.cardContainText}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Box>
            </CardContent>
          </Card>
          {/* card end */}
        </Box>
        <Typography variant="body2" textAlign="center" mt={7} mb={6}>
          We help you to take a small business to next level.Don't
          <br />
          hesitate to contact us.
        </Typography>
      </Container>
    </Box>
  );
};

export default Section3;
