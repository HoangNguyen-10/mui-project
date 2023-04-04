import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Mail, Notifications } from "@mui/icons-material";
import InputBase from '@mui/material/InputBase';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    width: '40%',
    borderRadius: '5px'
}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'flex', gap: '20px', alignItems: 'center'
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex', gap: '10px', alignItems: 'center'
}))

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>

                    LAMA DEV
                </Typography>
                <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase placeholder='search' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={e => setOpen(true)} sx={{ width: '30px', height: '30px' }} src='https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/317461311_2079614565762457_1776354558365648125_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yGsMiHMsgfEAX9Gz34m&_nc_ht=scontent.fhan14-3.fna&oh=00_AfATyBb9Z6GL25xz6JTy6MixS-KwXRk9r07QDTukD159JA&oe=642E1D67' />

                </Icons>
                {/* <UserBox>
                    <Avatar sx={{ width: '30px', height: '30px' }} src='https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/317461311_2079614565762457_1776354558365648125_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yGsMiHMsgfEAX9Gz34m&_nc_ht=scontent.fhan14-3.fna&oh=00_AfATyBb9Z6GL25xz6JTy6MixS-KwXRk9r07QDTukD159JA&oe=642E1D67' />
                    <Typography variant='span'>John</Typography>
                </UserBox> */}
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}
