import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

// export const getRandomDish = () => async dispatch => {
//     dispatch(dishesAction.getRandomDishRequest());
//     try {
//         const { data } = await axios.get();
//         console.log(data);
//         return dispatch(dishesAction.getRandomDishSuccess(data));
//     } catch ({ response }) {
//         toast.error(response.statusText);
//         dispatch(dishesAction.getRandomDishError(response.statusText));
//     }
// };

export const fetchRandomDish = createAsyncThunk(
    'random/fetchRandomDish',
    async function (_, { rejectWithValue }) {
        try {
            const response = await axios.get();

            if (response.status !== 200) {
                throw new Error('Server Error!');
            }
            return response.data.meals[0];
        } catch (error) {
            toast.error(error.message);
            return rejectWithValue(error.message);
        }
    },
);
