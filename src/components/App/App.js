//Core
import { Routes, Route } from 'react-router-dom';
//Components
import { Layout } from 'components/Layout';
// Pages
import FavouriteDishes from 'views/FavouriteDishes';
import RandomDish from 'views/RandomDish';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<RandomDish />} />
                    <Route path="/favourites" element={<FavouriteDishes />} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Route>
            </Routes>
        </>
    );
}
