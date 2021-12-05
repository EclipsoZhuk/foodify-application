import { useSelector, useDispatch } from 'react-redux';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Divider,
    Typography,
    Button,
} from '@mui/material';
import {
    getFavouritesDish,
    getRandomDish,
} from 'redux/dishes/dishes-selectors';
import placeholder from 'assets/menu-item-placeholder.png';
import { YouTube } from '@mui/icons-material';
import { fetchRandomDish } from 'redux/dishes/dishes-operation';
import { addDish } from 'redux/dishes/dishes-slice';

export default function CreateCard() {
    const dispatch = useDispatch();

    const randomDish = useSelector(getRandomDish);
    const favouritesDish = useSelector(getFavouritesDish);

    return (
        <Card
            sx={{
                maxWidth: 390,
                boxShadow: '7px 16px 30px 0px rgba(77,108,217,0.65)',
            }}
        >
            <CardMedia
                style={{ height: 234 }}
                component={'img'}
                image={
                    randomDish?.strMealThumb
                        ? randomDish?.strMealThumb
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
                    variant="h5"
                    component="h2"
                    style={{ color: 'white' }}
                >
                    {randomDish?.strMeal}
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem',
                    }}
                >
                    {randomDish?.strTags ? (
                        <Chip
                            color="info"
                            variant="default"
                            label={randomDish?.strTags}
                            style={{ color: 'white' }}
                        />
                    ) : null}
                    <Chip
                        color="info"
                        component={'a'}
                        label="YouTube"
                        href={randomDish?.strYoutube}
                        variant="default"
                        avatar={<YouTube />}
                        target="_blank"
                        clickable
                    />
                </div>
                <Typography
                    variant="body2"
                    color="Scrollbar"
                    style={{
                        height: 200,
                        overflow: 'auto',
                        textOverflow: 'ellipsis',
                    }}
                    component="p"
                >
                    {randomDish?.strInstructions}
                </Typography>
            </CardContent>
            <Divider />
            <CardActions className="actions">
                <Button
                    variant="contained"
                    style={{
                        width: 190,
                    }}
                    onClick={() => dispatch(fetchRandomDish())}
                >
                    Skip
                </Button>
                <Button
                    variant="contained"
                    style={{ width: 190 }}
                    disabled={
                        favouritesDish.includes(randomDish) ? true : false
                    }
                    onClick={() => dispatch(addDish(randomDish))}
                >
                    Like
                </Button>
            </CardActions>
        </Card>
    );
}
