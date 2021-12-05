import { ErrorNotification } from 'components/ErrorNotification';
import { MediaCard } from 'components/UI/RandomDish/RandomDish';
import { useSelector } from 'react-redux';
import { getError } from 'redux/dishes/dishes-selectors';

export default function RandomDish() {
    const error = useSelector(getError);
    return (
        <>
            <ErrorNotification error={error} />
            <MediaCard />
        </>
    );
}
