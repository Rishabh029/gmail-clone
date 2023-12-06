import { CreateOutlined } from '@mui/icons-material'
import { Box, Button , List, ListItem, styled } from '@mui/material'
import React, { useState } from 'react'
import { SIDEBAR_DATA } from '../config/sidebar.config'
import ComposeMail from './ComposeMail'

const ComposeButton = styled(Button)({
    background: '#c2e7ff',
    color: '#001d35',
    padding: 13 ,
    borderRadius: 15,
    minWidth: 140 ,
    textTransform: 'none'
})

const Container = styled(Box)({
    padding: 8 ,
    '& > ul ' : {
        padding : '10px 0 0 5px',
        fontSize: 14 ,
        fontWeight: 500 ,
        corsor: 'pointer'
    },
    '& > ul > li > svg ': {
        marginRight: 20,

    }

})

function SideBarContent() {

    const [openDialog, setOpenDialog] = useState(false);

    const onComposeClick = () => {
        setOpenDialog(true);
    }

  return (
    <Container>
            <ComposeButton onClick={() => onComposeClick()}>
                <CreateOutlined />
                Compose
                </ComposeButton>
        <List>
            {
                SIDEBAR_DATA.map(data => (     
                    <ListItem>
                        <data.icon fontSize='small'/>{data.title}
                    </ListItem>

                    ))
                    
            }
        </List>
            <ComposeMail openDialog={openDialog} setOpenDialog = {setOpenDialog}/>
    </Container>
  )
}

export default SideBarContent