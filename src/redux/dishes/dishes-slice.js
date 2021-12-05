import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomDish } from './dishes-operation';

const initialState = {
    randomDish: [],
    favourites: [],
    isLoading: false,
    error: null,
};

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        setDish(state, { payload }) {
            return {
                ...state,
                favourites: [payload, ...state.favourites],
            };
        },
        addDish(state, { payload }) {
            console.log(payload);
            return {
                ...state,
                favourites: [payload, ...state.favourites],
            };
        },
        removeDish(state, { payload }) {
            return {
                ...state,
                favourites: state.favourites.filter(
                    ({ idMeal }) => idMeal !== payload.idMeal,
                ),
            };
        },
    },
    extraReducers: {
        [fetchRandomDish.pending]: state => {
            state.isLoading = true;
            state.error = null;
        },
        [fetchRandomDish.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.randomDish = payload;
        },
        [fetchRandomDish.rejected]: (state, { payload }) => {
            state.error = payload;
        },
    },
});

export const { addDish, setDish, removeDish } = dishesSlice.actions;

export default dishesSlice.reducer;
