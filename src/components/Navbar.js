import { AppBar, IconButton, Toolbar,Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
const Navbar=()=>{
    return(
    <AppBar position='static'>
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
            <Typography variant='h6'>Live Score</Typography>
        </Toolbar>

    </AppBar>
    
)}
export default Navbar