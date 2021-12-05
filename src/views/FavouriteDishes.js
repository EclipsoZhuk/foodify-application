import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { getFavouritesDish } from 'redux/dishes/dishes-selectors';

export default function FavouriteDishes() {
    const favourites = useSelector(getFavouritesDish);

    return (
        <Grid container justify="flex-start" alignItems="center">
            {favourites?.length > 0 ? (
                <Typography component="h2" variant="h2">
                    Тут что-то есть
                </Typography>
            ) : (
                <Typography component="h2" variant="h2">
                    No saved dishes at list
                </Typography>
            )}
        </Grid>
    );
}
