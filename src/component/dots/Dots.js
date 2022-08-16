import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const Dots = () => {
  return (
    <Stack direction="row" alignItems="center" ml={1}>
    <Box sx={{
      bgcolor:"#0E68B3",
      height:5,
      width:5,
      borderRadius:"50%",
      marginRight:0.3
    }}>
    </Box>
    <Box sx={{
      bgcolor:"#0E68B3",
      height:5,
      width:5,
      borderRadius:"50%",
      marginRight:0.3
    }}>
    </Box>
    <Box sx={{
      bgcolor:"#0E68B3",
      height:8,
      width:8,
      borderRadius:"50%",
      marginRight:0.3
    }}>
    </Box>
    <Box sx={{
      bgcolor:"#0E68B3",
      height:5,
      width:5,
      borderRadius:"50%",
      marginRight:0.3
    }}>
    </Box>
    <Box sx={{
      bgcolor:"#0E68B3",
      height:5,
      width:5,
      borderRadius:"50%",
      marginRight:0.3
    }}>
    </Box>
    </Stack>
  )
}
export default Dots
