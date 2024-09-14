import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../store/weatherSlice'
import './SearchHeader.css'
function SearchHeader() {
    const dispatch = useDispatch()
    const { data, isloading } = useSelector(state => state.weather)


    const [city, setCity] = useState("")

    const handleSearch = () => {
        dispatch(fetchWeather(city))
        setCity("")
    }

    const timestamp = isloading ? data.list[0].dt : 58858585;
    const date = new Date(timestamp * 1000);

    const dayName = date.toLocaleString('en-US', { weekday: 'long' });
    const monthName = date.toLocaleString('en-US', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();


    return (
        <div className="d-flex justify-content-around flex-column flex-sm-row bg-light py-3 px-4 header">
            {
                isloading &&
                <div className=" order-sm-2 mb-2 mb-sm-0">
                    <h4>{monthName} {year}</h4>
                    <p>{dayName}, {monthName.slice(0, 3)} {day}</p>
                </div>
            }
            <div className="d-flex align-items-center order-sm-1">
                <input
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={(e) => { setCity(e.target.value); }}
                    placeholder={isloading ? 'Enter city name' : 'Loading...'}
                />
                <button
                    className="btn btn-sm"
                    onClick={() => { handleSearch() }}
                >
                    🔍
                </button>
            </div>
        </div>

    )
}

export default SearchHeader
