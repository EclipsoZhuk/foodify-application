import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dishesReducer from './dishes/dishes-slice';
import { sideBarReducer } from './sideBar/sideBar-reducer';

const dishesPersistConfig = {
    key: 'foodify',
    storage,
    whitelist: 'favourites',
};

export const store = configureStore({
    reducer: {
        dishes: persistReducer(dishesPersistConfig, dishesReducer),
        sideBar: sideBarReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
