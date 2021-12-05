import { ErrorNotification } from 'components/UI/ErrorNotification';
import { MediaCard } from 'components/UI/MediaCard/MediaCard';
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
