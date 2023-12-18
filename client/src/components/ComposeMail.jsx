import { Close, DeleteOutlineOutlined } from '@mui/icons-material'
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.url';


const config = {
  Host: "smtp.elasticemail.com",
  Username: process.env.REACT_APP_USERNAME,
  Password: process.env.REACT_APP_PASSWORD,
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

const RecipientWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`;


function ComposeMail({ openDialog, setOpenDialog }) {

  const [data, setData] = useState({});
  const sentEmailService = useApi(API_URLS.saveSentEmail);
  const saveDraftService = useApi(API_URLS.saveDraftEmail);



  const closeComposeMail = (e) => {
    e.preventDefault();
    const payload = {
      to: data.to,
      from: 'rishabhbahukhandi148@gmail.com',
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: 'Rishabh Bahukhandi',
      starred: false,
      type: 'drafts'
    }

    saveDraftService.call(payload);

    if (!sentEmailService.error) {
      setOpenDialog(false);
      setData({});
    }
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

    const payload = {
      to: data.to,
      from: 'rishabhbahukhandi148@gmail.com',
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: 'Rishabh Bahukhandi',
      starred: false,
      type: 'sent'

    }

    sentEmailService.call(payload);

    if (!sentEmailService.error) {
      setOpenDialog(false);
      setData({});
    }

    setOpenDialog(false);

  }

  const onValueChange = (e) => {
    // console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  }



  return (
    <Dialog open={openDialog}
      PaperProps={{ sx: dialogStyle }}
    >
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize='small' onClick={(e) => closeComposeMail(e)} />
      </Header>
      <RecipientWrapper>
        <InputBase placeholder='Recipients' name="to" key='to' onChange={(e) => onValueChange(e)} />
        <InputBase placeholder='Subject' name="subject" key="subject" onChange={(e) => onValueChange(e)} />
      </RecipientWrapper>
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