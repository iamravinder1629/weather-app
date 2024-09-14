import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeather } from './store/weatherSlice';
import './App.css';
import SearchHeader from './components/SearchHeader';
import TemperatureComponent from './components/TemperatureComponent';
import TemperatureGraph from './components/TemperatureGraph';
import FooterComponent from './components/FooterComponent';
import HumidityGraph from './components/HumidityGraph'
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather())
  }, [dispatch])


  return (
    <>
      <div style={{
        backgroundColor: "skyblue",
      }}>
        <SearchHeader />
        <div className="mx-3">
          <div className="p-3">
            <TemperatureComponent />
          </div>
          <div className=" row p-3 bg-light rounded">
            <div className="col-lg-6 col-md-12 col-sm-12 border p-3">
              <TemperatureGraph />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 border p-3">
              <HumidityGraph />
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  )
}

export default App














