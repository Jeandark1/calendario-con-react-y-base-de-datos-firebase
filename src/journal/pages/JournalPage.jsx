import {IconButton, Typography} from '@mui/material'
import {AddOutlined, BorderColor, MailOutline} from '@mui/icons-material'
import {JournalLayout} from '../layout/JournalLayout'
import { NoteViews, NothingSelectedView } from '../views'


export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <NothingSelectedView />          */}
            <NoteViews />

         <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed', 
            right: 50,
            bottom: 50,
            borderColor: '3px solid black',
          }}
         >
            <AddOutlined sx={{ fontSize: 30 }} />

         </IconButton>
        </JournalLayout>
    )
}
