//Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchRandomDish } from 'redux/dishes/dishes-operation';
//Components
import { Layout } from 'components/Layout';
// Pages
import FavouriteDishes from 'views/FavouriteView';
import RandomDish from 'views/RandomView';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRandomDish());
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<RandomDish />} />
                    <Route path="/favourites" element={<FavouriteDishes />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
}
