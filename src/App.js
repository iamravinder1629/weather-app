import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from './store/weatherSlice';
import './App.css';
import SearchHeader from './components/SearchHeader';
import TemperatureComponent from './components/TemperatureComponent';
import TemperatureGraph from './components/TemperatureGraph';
import FooterComponent from './components/FooterComponent';
import HumidityGraph from './components/HumidityGraph'
import Shimmer from './components/Shimmer'
function App() {
  const dispatch = useDispatch();
  const { isloading } = useSelector(state => state.weather)


  useEffect(() => {
    dispatch(fetchWeather())
  }, [dispatch])


  return (
    <>
      <div style={{
        backgroundColor: "#1d3f75",
      }}>
        <SearchHeader />
        {!isloading ? <Shimmer /> :
          <div className="p-3">
            <TemperatureComponent />
            <div className="row mt-3 p-3 bg-light rounded">
              <div className="col-lg-6 col-md-12 col-sm-12 border p-3">
                <TemperatureGraph />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 border p-3">
                <HumidityGraph />
              </div>
            </div>
          </div>}
        <FooterComponent />
      </div>
    </>
  )
}

export default App














