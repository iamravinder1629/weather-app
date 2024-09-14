import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (cityName = "delhi") => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=1df50750cd2c1567f50eb2409c2e1d6a`
        );
        console.log("called");
        return response.data;
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null,
        isloading: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isloading = true;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.data = action.payload;
                state.isloading = false;
            })
    },
});

export default weatherSlice.reducer;
