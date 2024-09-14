import React, { useRef, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { useSelector } from 'react-redux';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const HumidityGraph = () => {

    const { data, isloading } = useSelector(state => state.weather)
    console.log(data);

    const chartRef = useRef(null);

    const toggleDataSeries = (e) => {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chartRef.current.render();
    };

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.render();
        }
    }, []);

    const options = {
        theme: "light2",
        animationEnabled: true,
        axisX: {
            title: "Time",
            titleFontColor: "#1d3f75",
            labelFontColor: "black",
        },
        axisY: {
            title: "Humidity",
            titleFontColor: "#1d3f75",
            labelFontColor: "black",
            labelFormatter: function (e) {
                return e.value + "%";  // Add degree symbol to y-axis labels
            }
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            markerSize: 5,
            color: "#102341",
            fillOpacity: 0.2,
            lineColor: "#81a2d5",
            type: "splineArea",
            dataPoints: isloading ?
                data.list
                    .map((item) => {
                        return {
                            x: new Date(item.dt_txt),
                            y: parseFloat((item.main.humidity.toFixed(0)))
                        }
                    }) : [
                    { x: new Date(2000, 0), y: 3289000 },
                    { x: new Date(2001, 0), y: 3830000 },
                    { x: new Date(2002, 0), y: 2009000 },
                    { x: new Date(2003, 0), y: 2840000 },
                    { x: new Date(2004, 0), y: 2396000 },
                    { x: new Date(2005, 0), y: 1613000 },
                    { x: new Date(2006, 0), y: 2821000 },
                    { x: new Date(2007, 0), y: 2000000 },
                    { x: new Date(2008, 0), y: 1397000 },
                    { x: new Date(2009, 0), y: 2506000 },
                    { x: new Date(2010, 0), y: 2798000 },
                    { x: new Date(2011, 0), y: 3386000 },
                ]
        }
        ]
    };

    return (
        <div className='p-sm-2  p-0'>
            <CanvasJSChart options={options} ref={chartRef} />
        </div>
    );
};

export default HumidityGraph;
