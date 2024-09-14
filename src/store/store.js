import { configureStore } from "@reduxjs/toolkit";
import weatherData from './weatherSlice'

const store = configureStore({
    reducer: {
        weather: weatherData
    }
})
export default store;