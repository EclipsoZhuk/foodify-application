import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Bookmark, Home } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { setSideBarAction } from 'redux/sideBar/sideBar-action';
import { getSiteBarOpened } from 'redux/sideBar/sideBar-selector';

export const UiDrawer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isOpened = useSelector(getSiteBarOpened);

    const handleDrawerClose = () => dispatch(setSideBarAction(false));
    const handleDrawerOpen = () => dispatch(setSideBarAction(true));

    const sideBarRoute = [
        {
            text: 'Random Dish',
            icon: <Home />,
            onClick: () => {
                navigate('/');
                handleDrawerClose();
            },
        },
        {
            text: 'Favourite Dishes',
            icon: <Bookmark />,
            onClick: () => {
                navigate('/favourites');
                handleDrawerClose();
            },
        },
    ];

    const sideBarList = sideBarRoute?.map(({ text, icon, onClick }) => {
        return (
            <Fragment key={text}>
                <ListItem component="li" button onClick={onClick}>
                    <ListItemIcon style={{ color: 'rgb(25, 118, 210)' }}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText style={{ color: 'rgb(25, 118, 210)' }}>
                        {text}
                    </ListItemText>
                </ListItem>
                <Divider />
            </Fragment>
        );
    });
    return (
        <>
            <IconButton aria-label="open drawer" onClick={handleDrawerOpen}>
                <MenuIcon style={{ color: 'white' }} />
            </IconButton>
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={isOpened}
            >
                <List>{sideBarList}</List>
            </Drawer>
        </>
    );
};
