import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { getFavouritesDish } from 'redux/dishes/dishes-selectors';
import { CreateFavouriteDishes } from 'components/UI/FavouriteDish/FavouriteDishes';
import { Section } from 'styles';

export default function FavouriteDishes() {
    const favourites = useSelector(getFavouritesDish);

    return (
        <>
            {favourites?.length > 0 ? (
                <Section>
                    <CreateFavouriteDishes />
                </Section>
            ) : (
                <Typography component="h2" variant="h2">
                    No saved dishes at list
                </Typography>
            )}
        </>
    );
}
