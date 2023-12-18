import { Star, StarBorder } from '@mui/icons-material'
import { Box, Checkbox, Typography, styled } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { routes } from '../routes/routes';
import useApi from '../hooks/useApi'
import { API_URLS } from '../services/api.url';


const Wrapper = styled(Box)({
    padding: ' 0 0 0 10px',
    background: '#f2f6fc',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& > div': {
        display: 'flex',
        width: '100%',

        '& > p': {
            fontSize: 14
        }
    }
});

const Indicator = styled(Typography)({
    fontSize: '12px !important ',
    background: '#ddd',
    color: '#222',
    padding: '0 4px',
    borderRadius: 4,
    marginRight: 6
})


const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 12,
    color: '#5F6368'
})


function Email({ email, setSelectedEmails, selectedEmails, setRefreshScreen }) {

    const navigate = useNavigate();

    // const navigate = useNavigate();

    const toggleStarredService = useApi(API_URLS.toggleStarred);

    const selectStarredMail = () => {

        toggleStarredService.call({ id: email._id, value: !email.starred });
        setRefreshScreen(prevState => !prevState);
    }

    const handleChange = () => {
        if (selectedEmails.includes(email._id)) {
            setSelectedEmails(prevState => prevState.filter(id => id !== email._id));
        } else {
            setSelectedEmails(prevState => [...prevState, email._id]);
        }
    }


    return (
        <Wrapper>
            <Checkbox size='small'
                checked={selectedEmails.includes(email._id)}
                onChange={() => handleChange()}
            />
            {
                email.starred ?
                    <Star fontSize='small' style={{ marginRight: 10, color: '#fff200' }} onClick={() => selectStarredMail()} />
                    :
                    <StarBorder fontSize='small' style={{ marginRight: 10 }} onClick={() => selectStarredMail()} />

            }
            <Box onClick={() => navigate(routes.view.path, { state: { email: email } })}>
                <Typography style={{ width: 200, overflow: 'hidden' }}>
                    {email.name}
                </Typography>
                <Indicator>
                    Inbox
                </Indicator>
                <Typography>{email.subject} {email.body && '-'} {email?.body?.substring(0, 100)}</Typography>
                <Date>
                    {(new window.Date(email.date)).getDate()}
                    {(new window.Date(email.date)).toLocaleString('default', { month: 'short' })}
                </Date>
            </Box>
        </Wrapper>
    )
}

export default Email