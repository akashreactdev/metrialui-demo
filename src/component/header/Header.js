import React, { useState } from "react";

//metrial-component
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

//style
import "../../styles/App.css";

//icon
import DIGNIZANT_ICON from "../../assets/images/MainDigniLogo-removebg-preview.png";
import DrawerHeader from "../drawer/DrawerHeader";

//drawerContent
const drawerWidth = 300;

const Header = ({bgcolor,navItemColor,iconColor}) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ bgcolor: bgcolor, padding: 1 }}
        component="nav"
      >
        <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src={DIGNIZANT_ICON} alt="icon" className="dignizant-icon" />
          <Box sx={{ display: { xs: "none",sm:"none", md: "block" } }}>
            <Stack direction="row">
              <Link style={{ textDecorationLine: "none" }} to="/">
                <Typography
                  position="relative"
                  fontWeight="700"
                  color={navItemColor}
                  marginRight={5}
                  variant="body1"
                >
                  Home
                </Typography>
              </Link>
              <Link to="/about"  style={{ textDecorationLine: "none" }}>
                <Typography
                  position="relative"
                  fontWeight="700"
                  color={navItemColor}
                  marginRight={5}
                  variant="body1"
                >
                  About
                </Typography>
              </Link>
              <Link to="/services"  style={{ textDecorationLine: "none" }}>
                <Typography
                  position="relative"
                  fontWeight="700"
                  color={navItemColor}
                  marginRight={5}
                  variant="body1"
                >
                  Services
                </Typography>
              </Link>
              <Link to="/portfolio"  style={{ textDecorationLine: "none" }}>
                <Typography
                  position="relative"
                  fontWeight="700"
                  color={navItemColor}
                  marginRight={5}
                  variant="body1"
                >
                  Portfolio
                </Typography>
              </Link>
              <Link to="/career"  style={{ textDecorationLine: "none" }}>
                <Typography
                  position="relative"
                  fontWeight="700"
                  color={navItemColor}
                  marginRight={5}
                  variant="body1"
                >
                  Career
                </Typography>
              </Link>

              <Link to="/contact"  style={{ textDecorationLine: "none" }}>
                <Typography
                  position="relative"
                  fontWeight="700"
                  color={navItemColor}
                  marginRight={5}
                  variant="body1"
                >
                  Contact
                </Typography>
              </Link>
            </Stack>
          </Box>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: {xs:"block", sm: "block", md: "none" },
              color: { color: iconColor },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
         <DrawerHeader onClick={handleDrawerToggle}/>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
