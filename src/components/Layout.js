import { Container, AppBar } from '@mui/material';
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import { Main } from 'styles';
import Navigation from './UI/Navigation';

export function Layout() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Container disableGutters maxWidth="xl">
                <AppBar position="static" color="primary">
                    <Navigation />
                </AppBar>
                <Main>
                    <Outlet />
                </Main>
            </Container>
        </Box>
    );
}
