import React from 'react'
import { useSelector } from 'react-redux';
import { BsMoisture } from "react-icons/bs";
import { PiWindFill } from "react-icons/pi";
import { FaCloudSunRain } from "react-icons/fa";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
function TemperatureComponent() {
    const { data, isloading } = useSelector(state => state.weather)

    console.log(data);

    //time zone section
    const sunrise = isloading ? data.city.sunrise : null;
    const riseTime = new Date(sunrise * 1000);

    const sunset = isloading ? data.city.sunset : null;
    const setTime = new Date(sunset * 1000);

    function formatTime(hours, minutes) {
        const period = hours >= 12 ? 'PM' : 'AM';
        const hour12 = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hour12}:${formattedMinutes} ${period}`;
    }
    const riseHour = riseTime.getHours();
    const riseMin = riseTime.getMinutes();
    const formattedRiseTime = formatTime(riseHour, riseMin);

    const setHour = setTime.getHours();
    const setMin = setTime.getMinutes();
    const formattedSetTime = formatTime(setHour, setMin);

    //data assigning if isloading is true of bro
    if (isloading) {
        var city = data.city.name;
        var temperature = (data.list[0].main.feels_like - 273.15).toFixed(0) + "°";
        var description = data.list[0].weather[0].description;
        var precipitation = data.list[0].pop;
        var humidity = data.list[0].main.humidity;
        var wind = (data.list[0].wind.speed * 3.6).toFixed(0);
        var icon = data.list[0].weather[0].icon
        var POD = data.list[0].sys.pod;
    }
    console.log()



    return (
        <div className='row bg-light p-3 rounded d-flex justify-content-around'>
            <div className='col-lg-4 col-md-12 col-sm-12 col-12 d-flex justify-content-center'>
                <div className='me-3 d-flex align-items-center'>
                    <div className='mx-3'>
                        <h3 className=''>{city}</h3>
                        <img
                            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                            alt="" height={50}
                            style={
                                {
                                    boxShadow: "1px 1px 15px rgba(192, 192, 192,0.6)",
                                    backgroundColor: "skyblue",
                                    borderRadius: " 10px"
                                }}
                        />
                    </div>
                    <div className=' text-center'>

                        <h1 className=''>{temperature}</h1>
                        <h5><i>{description}</i></h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 p-3">
                <div style={{ borderLeft: "solid gray 2px" }} className='px-2'>
                    <p className='m-0 border-bottom p-1'>
                        <FaCloudSunRain/>
                        <span className='mx-3'>Precipitation:</span>
                        <b>{(precipitation * 100).toFixed(0)}%</b>
                    </p>
                    <p className='m-0 border-bottom p-1'>
                        <BsMoisture />
                        <span className='mx-3'>Humidity:</span>
                        <b>{humidity}%</b>
                    </p>
                    <p className='m-0 border-bottom p-1'>
                        <PiWindFill />
                        <span className='mx-3'>wind:</span>
                        <b>{wind}Km/h</b>
                    </p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 p-3">
                <div style={{ borderLeft: "solid gray 2px" }} className='px-2'>
                    <p className='m-0 border-bottom p-1'>
                        <WiSunrise />
                        <span className='mx-3'>Sunrise</span>
                        <b>{formattedRiseTime}</b>
                    </p>
                    <p className='m-0 border-bottom p-1'>
                        <WiSunset />
                        <span className='mx-3'>Sunset</span>
                        <b>{formattedSetTime}</b>
                    </p>
                    {
                        POD === "n" ?
                            <p className='m-0 border-bottom p-1'>
                                <FaMoon />
                                <span className='mx-3'>POD</span>
                                <b>Night</b>
                            </p> :
                            <p className='m-0 border-bottom p-1'>
                                <MdOutlineWbSunny />
                                <span className='mx-3'>POD</span>
                                <b>Day</b>
                            </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default TemperatureComponent
