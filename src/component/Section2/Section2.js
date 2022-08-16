import React from 'react'
  import { Box,Typography } from '@mui/material'
  import { Container } from '@mui/system'
  import { makeStyles } from '@mui/styles';

  import CHECK from "../../assets/images/check-mark.png"
  import Dots from '../dots/Dots'
  import { customeTheme } from '../../helper/customeTheme';



  const useStyles = makeStyles(()=>({
    root:{
      display:"flex",
      marginTop:50,
      [customeTheme.breakpoints.down("md")]:{
        display:"block"
      }
    },
    akash:{
      flex:1,
      marginLeft:50,
      [customeTheme.breakpoints.down("md")]:{
        marginLeft:0,
      }
    }
  }))


  const Section2 = () => {
    const classes = useStyles()
    return (
      <Box mt={15} bgcolor="#E7F2FC" p={3} mb={6}>
        <Container>
          <Box mt={3} textAlign="center">
            <Typography variant='h4'fontWeight="bold" color="#142F64">
              Why Choose US?
            </Typography>
            <Box display="flex" mt={2} justifyContent="center">
              <Dots />
            </Box>
          </Box>
          <Box className={classes.root}>  
            <Box  sx={{
              flex: 1,
              display: "flex",
            }}>
              <Box>
                <Box sx={{
                  display: "flex",
                  flex:1,
                  borderLeft:"2px dashed #B1CFEA"
                }}>
                  <img style={{ marginLeft: -22, zindex: 99, backgroundColor: "#E7F2FC", borderRadius: "50%" }} src={CHECK} alt="check" height="45" width="45" />
                  <Box mb={5} ml={4}>
                    <Typography variant='h6' color="#524962" fontWeight="600">
                      Title 1
                    </Typography>
                    <Typography color="#706B81" variant='body1'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat unde,molestiae praesentium
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{
                  display: "flex",
                  borderLeft:"2px dashed #B1CFEA"
                }}>
                <img style={{ marginLeft: -22, zindex: 99, backgroundColor: "#E7F2FC", borderRadius: "50%" }} src={CHECK} alt="check" height="45" width="45" />
                <Box mb={5} ml={4}>
                  <Typography variant='h6' color="#524962" fontWeight="600">
                    Title 4
                  </Typography>
                  <Typography color="#706B81" variant='body1'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat unde,molestiae praesentium
                  </Typography>
                </Box>
                </Box>
                <Box sx={{
                  display: "flex"
                }}>
                <img style={{ marginLeft: -22, zindex: 99, backgroundColor: "#E7F2FC", borderRadius: "50%" }} src={CHECK} alt="check" height="45" width="45" />
                <Box mb={5} ml={4}>
                  <Typography variant='h6' color="#524962" fontWeight="600">
                    Title 3
                  </Typography>
                  <Typography color="#706B81" variant='body1'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat unde,molestiae praesentium
                  </Typography>
                </Box>
                </Box>
              </Box>
            </Box>
              <Box className={classes.akash}>
                <Box sx={{
                  display: "flex",
                  borderLeft:"2px dashed #B1CFEA"
                }}>
                  <img style={{ marginLeft: -22, zindex: 99, backgroundColor: "#E7F2FC", borderRadius: "50%" }} src={CHECK} alt="check" height="45" width="45" />
                  <Box mb={5} ml={4}>
                    <Typography variant='h6' color="#524962" fontWeight="600">
                      Title 4
                    </Typography>
                    <Typography color="#706B81" variant='body1'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat unde,molestiae praesentium
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{
                  display: "flex",
                  borderLeft:"2px dashed #B1CFEA"
                }}>
                <img style={{ marginLeft: -22, zindex: 99, backgroundColor: "#E7F2FC", borderRadius: "50%" }} src={CHECK} alt="check" height="45" width="45" />
                <Box mb={5} ml={4}>
                  <Typography variant='h6' color="#524962" fontWeight="600">
                    Title 5
                  </Typography>
                  <Typography color="#706B81" variant='body1'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat unde,molestiae praesentium
                  </Typography>
                </Box>
                </Box>
                <Box sx={{
                  display: "flex"
                }}>
                <img style={{ marginLeft: -22, zindex: 99, backgroundColor: "#E7F2FC", borderRadius: "50%" }} src={CHECK} alt="check" height="45" width="45" />
                <Box mb={5} ml={4}>
                  <Typography variant='h6' color="#524962" fontWeight="600">
                    Title 6
                  </Typography>
                  <Typography color="#706B81" variant='body1'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat unde,molestiae praesentium
                  </Typography>
                </Box>
                </Box>
              </Box>
          </Box>
        </Container>
      </Box>
    )
  }
  export default Section2