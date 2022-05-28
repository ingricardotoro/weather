import { configureStore } from '@reduxjs/toolkit';

import weatherReducer from '../store/slices/weather/weatherSlice';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
});