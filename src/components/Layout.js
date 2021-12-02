import { Container, AppBar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Main } from 'styles';
import Navigation from './Navigation';

export function Layout() {
    return (
        <>
            <Container disableGutters maxWidth="xl">
                <AppBar color="primary">
                    <Navigation />
                </AppBar>
                <Main>
                    <Outlet />
                </Main>
            </Container>
        </>
    );
}
