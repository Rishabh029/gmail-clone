import React from 'react'
import { Drawer } from '@mui/material'
import SideBarContent from './SideBarContent'

function SideBar({toggleDrawer,openDrawer}) {
    return (
        <div>
            <Drawer 
            anchor='left'
            open = {openDrawer}
            hideBackdrop = {true}
            variant='persistent'
            ModalProps={{
                keepMounted : true
            }}
            sx={{
                '& .MuiDrawer-paper' :{
                    marginTop : '64px',
                    width: 250,
                    background : '#F5F5F5',
                    borderRight: 'none',
                    height: 'calc(100vh - 64'

                }
            }}
            >
                <SideBarContent />
            </Drawer>
        </div>
    )
}

export default SideBar