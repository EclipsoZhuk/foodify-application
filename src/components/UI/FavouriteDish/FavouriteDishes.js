import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Divider,
    Typography,
} from '@mui/material';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFavouritesDish } from 'redux/dishes/dishes-selectors';
import placeholder from 'assets/menu-item-placeholder.png';
import { YouTube } from '@mui/icons-material';
import { removeDish } from 'redux/dishes/dishes-slice';

export const CreateFavouriteDishes = () => {
    const dispatch = useDispatch();
    const favourites = useSelector(getFavouritesDish);

    const CreateFavouriteDishes = favourites.map(dish => {
        return (
            <Fragment key={dish.idMeal}>
                <Card
                    style={{
                        width: 390,
                        boxShadow: '7px 16px 30px 0px rgba(77,108,217,0.65)',
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <CardMedia
                        style={{ height: 234 }}
                        component={'img'}
                        image={
                            dish?.strMealThumb
                                ? dish?.strMealThumb
                                : placeholder
                        }
                        title="Contemplative Reptile"
                    />
                    <CardContent
                        style={{ backgroundColor: 'rgb(25, 118, 210)' }}
                        component={'figcaption'}
                    >
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="h2"
                            style={{ color: 'white' }}
                        >
                            {dish?.strMeal}
                        </Typography>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '0.5rem',
                            }}
                        >
                            {dish?.strTags ? (
                                <Chip
                                    color="info"
                                    variant="default"
                                    label={dish?.strTags}
                                    style={{ color: 'white' }}
                                />
                            ) : null}
                            {dish.strYoutube ? (
                                <Chip
                                    color="info"
                                    component={'a'}
                                    label="YouTube"
                                    href={dish?.strYoutube}
                                    variant="default"
                                    avatar={<YouTube />}
                                    target="_blank"
                                    clickable
                                />
                            ) : (
                                <Chip
                                    disabled
                                    color="info"
                                    component={'a'}
                                    label="YouTube"
                                    href={dish?.strYoutube}
                                    variant="default"
                                    avatar={<YouTube />}
                                    target="_blank"
                                    clickable
                                />
                            )}
                        </div>
                        <Typography
                            variant="body2"
                            color="Scrollbar"
                            component="p"
                            style={{
                                height: 200,
                                overflow: 'auto',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {dish?.strInstructions}
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className="actions">
                        <Button
                            variant="contained"
                            style={{
                                width: 190,
                            }}
                            onClick={() => dispatch(removeDish(dish))}
                        >
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            </Fragment>
        );
    });

    return CreateFavouriteDishes;
};
