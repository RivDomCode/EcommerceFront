import { AppBar, Toolbar, Typography } from '@mui/material'

export const Header = () => {
  return (
    <AppBar position='static' sx={{mb : 6}}>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ECOMMERCE
          </Typography>
        </Toolbar>
    </AppBar>
  )
}
