import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: true,
    dataWheather: {},
};

export const weatherSlice = createSlice({
    name: 'wether',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        setWeather: (state, action) => {
            //console.log(action);
            state.dataWheather = action.payload.dataWheather;
            state.isLoading = false;
        },
        findWeatherCity: (state, action) => {
            // console.log(action);
            let dataCity = state.dataWheather.find(
                (city) => city.region === action.payload
            );
            console.log(dataCity);
            if (dataCity === undefined) {
                dataCity = initialState;
            }
            state.dataWheather = dataCity;
            state.isLoading = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { startLoading, setWeather, findWeatherCity } =
weatherSlice.actions;

export default weatherSlice.reducer;