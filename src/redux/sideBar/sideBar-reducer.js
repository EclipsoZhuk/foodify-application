import { createReducer } from '@reduxjs/toolkit';
import { setSideBarAction } from './sideBar-action';

export const sideBarReducer = createReducer(
    { isOpened: false },
    {
        [setSideBarAction]: (state, { payload }) => ({ isOpened: payload }),
    },
);
