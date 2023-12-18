import { Box, Typography } from '@mui/material'
import React from 'react'
import { useRouteError } from 'react-router-dom';

function ErrorComponent() {

    const error = useRouteError();
    console.log(error);

  return (
    <Box>
        <Typography>There was an error loading </Typography>
    </Box>
  )
}

export default ErrorComponent