import { TurnedInNot } from '@mui/icons-material'
import { Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'

export const SideBar = ( {drawerwidth} ) => {
const { displayName } = useSelector( state => state.auth );

  return (
    <Box
       component='nav'
       sx={{ width: {sm: drawerwidth }, flexShrink: { sm: 0}}}
       >
        <Drawer
         variant='permanent'
         open
         sx={{
            display: {xs: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerwidth} 

         }}>
            <Toolbar>
                 <Typography variant='h6' noWrap component='div'>
                 { displayName }
                 </Typography>
            </Toolbar>

            <List>
                {
                    ['Enero', 'Febrero', 'marzo'].map( text =>(
                        <ListItemButton key={ text }>
                            <ListItemIcon>
                                   <TurnedInNot />
                            </ListItemIcon>
                            <Grid container >
                                <ListItemText primary={ text } />
                                <ListItemText secondary={ ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ?'} />
                            </Grid>
                        </ListItemButton>
                    ))
                }
            </List>

        </Drawer>
        
    </Box>
  )
}
