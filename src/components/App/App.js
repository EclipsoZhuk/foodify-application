//Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { fetchRandomDish } from 'redux/dishes/dishes-operation';
//Components
import { Layout } from 'components/Layout';
// Pages
import FavouriteDishes from 'views/FavouriteDishes';
import RandomDish from 'views/RandomDish';

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
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
}
