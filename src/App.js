import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const App = () => {
    return (
        <Container maxWidth='sm'>
            <Box sx={{ my: 4 }}>
                <Typography variant='h4' component='h1' gutterBottom>
                    React Webpack MUI Boilerplate
                </Typography>
            </Box>
        </Container>
    );
};

export default App;
