import React from 'react'
import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import { gmailLogo } from '../constants/constant';
import { Search, Menu as MenuIcon, Tune, HelpOutlineOutlined, AppsOutlined, AccountCircle, Settings } from '@mui/icons-material';


const StyledAppBar = styled(AppBar)({
    background: "#F5F5F5",
    boxShadow: 'none'
})

const OptionWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: "end",
    '& > svg':
    {
        marginLeft: 20,
    }
})


const SearchWrapper = styled(Box)({
    background: "#EAF1FB",
    marginLeft: 80,
    borderRadius: 8,
    minWidth: '60%',
    maxWidth: 800,
    height: 48,
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between',
    padding: '0 5px',
    '& > div': {
        width: '100%',
        padding: '0 15px'

    }
})

function Header({toggleDrawer}) {
    return (
        <StyledAppBar position='static'>
            <Toolbar>
                <MenuIcon color='action' onClick = {toggleDrawer} />
                <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
                <SearchWrapper>
                    <Search color='action' />
                    <InputBase placeholder='Search Mail' />
                    <Tune color='action' />
                </SearchWrapper>
                <OptionWrapper>
                    <HelpOutlineOutlined color='action' />
                    <Settings color='action' />
                    <AppsOutlined color='action' />
                    <AccountCircle color='action' />
                </OptionWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header