import { wetherApi } from '../../../api/wetherApi';
import { startLoading, setWeather } from './weatherSlice';

export const getWeather = (city = '') => {
    return async(dispatch, getState) => {
        dispatch(startLoading());

        /*  const { data } = await wetherApi.get(
                            `/cecef4c7-10b0-4026-8b14-081ebb8fb2cc`
                        ); */

        const resp = await fetch(
            `${wetherApi}/cecef4c7-10b0-4026-8b14-081ebb8fb2cc`
        );
        const data = await resp.json();
        console.log(data);

        dispatch(setWeather({ dataWheather: data.data }));
    };
};