import React, { } from 'react'
import { Box, Divider } from '@mui/material'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

//style
import "../../styles/App.css";

//icon
import DIGNIZANT_ICON from "../../assets/images/MainDigniLogo-removebg-preview.png";
import { useNavigate } from 'react-router-dom';

const navItems = [
  "Home",
  "About",
  "services",
  "portfolio",
  "career",
  "contact",
];

const DrawerHeader = ({onClick}) => {
  const navigate = useNavigate();

  const onClickItem = (cindex) => {
    if(cindex === 0){
      navigate("/")
    }else if(cindex === 1){
      navigate("/about")
    }else if(cindex === 2){
      navigate("/services")
    }else if(cindex === 3){
      navigate("/portfolio")
    }else if(cindex === 4){
      navigate("/career")
    }else if(cindex === 5){
      navigate("/contact")
    }

  }


  return (
    <Box onClick={onClick} sx={{ textAlign: "center" }}>
      <Box p={2}>
       <img src={DIGNIZANT_ICON} alt="icon" className="dignizant-icon" />
      </Box>
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={()=>onClickItem(index)} sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default DrawerHeader