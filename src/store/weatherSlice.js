import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (cityName = "delhi") => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
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
        errorMessage: "loading"
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state, action) => {
                state.errorMessage = "loading"
                state.isloading = false;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isloading = true;
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.errorMessage = "worng"
                state.isloading = false;
            })
    },
});

export default weatherSlice.reducer;
