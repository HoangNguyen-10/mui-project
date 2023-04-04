import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import styled from '@emotion/styled'
const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})
export default function Add() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{ position: 'fixed', bottom: 20, marginLeft: 2, left: { xs: 'calc(50%)', md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal

                open={open}
                onClose={false}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5} >
                    <Typography variant='h6' color='gray' textAlign='center'>Create post</Typography>
                    <UserBox>
                        <Avatar src='https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/317461311_2079614565762457_1776354558365648125_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yGsMiHMsgfEAX9Gz34m&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBEJ5RzonPov5wosMIKHtg4hKO5Ab3BBs-peKFQXsZzEQ&oe=643017A7' sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant='span'>John Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{ width: '100px' }}><DateRange /></Button>

                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}
