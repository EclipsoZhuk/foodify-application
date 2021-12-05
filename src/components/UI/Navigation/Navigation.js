import { useMediaQuery, useTheme } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { Nav } from 'styles';
// import { Drawer } from './Drawer';
import s from './Navigation.module.css';

const Navigation = () => {
    const { breakpoints } = useTheme();
    const { pathname } = useLocation();
    const isMedium = useMediaQuery(breakpoints.down('md'));

    const isClassName = ({ isActive }) =>
        isActive ? `${s.activeLink} + ${s.link}` : `${s.link}`;

    const AddCustomDish = pathname.includes('favourites') ? <h1>ADD</h1> : null;

    return (
        <Nav>
            {!isMedium ? (
                <>
                    <NavLink to="/" className={isClassName}>
                        Random dish
                    </NavLink>
                    <NavLink to="/favourites" className={isClassName}>
                        Favourites
                    </NavLink>
                </>
            ) : (
                <h1>Hello</h1>
            )}
            {AddCustomDish}
        </Nav>
    );
};

export default Navigation;
