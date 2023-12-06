import { Close, DeleteOutlineOutlined } from '@mui/icons-material'
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import '../Css/composeMail.css'

function ComposeMail({ openDialog, setOpenDialog }) {

  const [data, setData] = useState({});

  const config = {
    Host: "smtp.elasticemail.com",
    Username: "rishabhbahukhandi148@gmail.com",
    Password: "B21582A6E026F9C9488584F03F27304981A4",
    Port: 2525,
  }

  const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
  }

  const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    background: '#f2f6fc',
    padding: '10px 15px',
    '& > p': {
      fontSize: 14,
      fontWeight: 600,
    }
  })

//   const RecipientWrapper = styled(Box)`
//   // display: flex;
//   // flex-direction: column;
//   // padding: 0 15px;
//   & > div {
//       // font-size: 14px;
//       // border-bottom: 1px solid #F5F5F5;
//       // margin-top: 10px;
//   }
// `;



  const Footer = styled(Box)({
    display: 'flex',
    padding: '10px 15px',
    justifyContent: 'space-between',
    alignItems: 'center'

  })

  const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    width: 100,
    borderRadius: 18

  })

  const closeComposeMail = (e) => {
    e.preventDefault();

    setOpenDialog(false);
  }

  const sendMail = (e) => {
    e.preventDefault();

    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "rishabhbahukhandi148@gmail.com",
        Subject: data.subject,
        Body: data.body
      }).then(
        message => alert(message)
      );
    }
    setOpenDialog(false);
  }

  const onValueChange = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }



  return (
    <Dialog open={openDialog}
      PaperProps={{ sx: dialogStyle }}
    >
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize='small' onClick={(e) => closeComposeMail(e)} />
      </Header>
      <Box className= "RecipientWrapper">
        <InputBase placeholder='Recipients'  className= "input"  name="to" key='to' onChange={(e) => onValueChange(e)}  />
        <InputBase placeholder='Subject' className= "input"  name="subject" key="subject" onChange={(e) => onValueChange(e)} />
      </Box>
      <TextField
        multiline
        rows={20}
        sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
        name="body"
        onChange={(e) => onValueChange(e)}
      />
      <Footer>
        <SendButton onClick={(e) => sendMail(e)} >Send</SendButton>
        <DeleteOutlineOutlined onClick={() => setOpenDialog(false)} />
      </Footer>
    </Dialog>
  )
}

export default ComposeMail