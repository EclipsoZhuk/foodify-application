// import { Home } from '@mui/icons-material';
// import { ListItem } from '@mui/material';
// import { Fragment } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// export const Drawer = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch()

//     const sideBarList = [
//         {
//             text: 'Random Dish',
//             icon: <Home />,
//             onClick: () => navigate('/'),
//         },
//         {
//             text: 'Favourite Dishes',
//             icon: <Bookmark />,
//             onClick: () => navigate('/favourites'),
//         },
//     ];
//     return (
//         <>
//             <Fragment key={text}>
//                 <ListItem component="li" button onClick={onClick}>
//                     <ListItemIcon>{icon}</ListItemIcon>
//                     <ListItemText>{text}</ListItemText>
//                 </ListItem>
//                 <Divider />
//             </Fragment>
//         </>
//     );
// };
