import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

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
