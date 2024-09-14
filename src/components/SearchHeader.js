import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../store/weatherSlice'
import './SearchHeader.css'
import { IoSearchSharp } from "react-icons/io5";
import icon from '../icon/icon.png'
function SearchHeader() {
    const dispatch = useDispatch()
    const { data, isloading } = useSelector(state => state.weather)


    const [city, setCity] = useState("")

    const handleSearch = () => {
        if (city === "") {
            dispatch(fetchWeather("delhi"))
        }
        else {
            dispatch(fetchWeather(city))
        }

        setCity("")
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const timestamp = isloading ? data.list[0].dt : 58858585;
    const date = new Date(timestamp * 1000);

    const dayName = date.toLocaleString('en-US', { weekday: 'long' });
    const monthName = date.toLocaleString('en-US', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();

    return (
        <div className="row mx-0 d-flex justify-content-between bg-light py-3 px-4 header">
            <div className="col-lg-3 mb-3 col-sm-2 col-3 d-flex align-items-center order-sm-1 order-first">
                <img src={icon} alt="" height={50} />
            </div>
            <div className="col-lg-3 mb-3 col-sm-5 col-12 d-flex align-items-center order-sm-2 order-md-2 order-3">
                <input
                    type="text"
                    className="form-control"
                    autoFocus="true"
                    value={city}
                    onChange={(e) => { setCity(e.target.value); }}
                    onKeyDown={handleKeyDown}
                    placeholder='Enter city name'
                />
                <button className="btn btn-sm" onClick={handleSearch}>
                    <IoSearchSharp />
                </button>
            </div>
            <div className="col-lg-3 mb-3 col-sm-4 col-8 text-end order-2">
                {isloading ? (
                    <div>
                        <h4>{monthName} {year}</h4>
                        <p>{dayName}, {monthName.slice(0, 3)} {day}</p>
                    </div>
                ) : (
                    <div>
                        <h4>Month 2025</h4>
                        <p>DayName, Mon 22</p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default SearchHeader
