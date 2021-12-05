import { useSelector } from 'react-redux';
import { Grid, Skeleton } from '@mui/material';
import { getIsLoading } from 'redux/dishes/dishes-selectors';
import CreateCard from './CreateCard';

export const MediaCard = () => {
    const isLoading = useSelector(getIsLoading);
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            component="section"
        >
            {isLoading ? (
                <Skeleton
                    animation="wave"
                    variant="text"
                    height={20}
                    width="30%"
                />
            ) : (
                <CreateCard />
            )}
        </Grid>
    );
    // );
};
