import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar, SideBar } from '../components';

const drawerwidth =240;

export const JournalLayout = ( { children }) => {
  return (
    <Box sx={{ display: 'flex'}} 
    className='animate__animated animate_fadeIn animate__faster'>

        {/** Navbar drawerwidth */}
        <NavBar drawerwidth={ drawerwidth }/>

        {/** Sidebar drawerwidth */}
        <SideBar drawerwidth={ drawerwidth }/>
       <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }
        }>
            {/** Toolbar */}
            <Toolbar>

            </Toolbar>
            { children }
          
       </Box>
    </Box>
  )
}
