import CanvasJSReact from '@canvasjs/react-charts';
import React from "react";
import "./Chart.css";

function Chart(props){
    var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
            animationEnabled: true,
            backgroundColor: "#f5ceffbb",
            title:{
                text: "Sales, Revenue, and Expenses Overview"
            },
            axisY : {
                title: "Value of Years 2023",
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "Sales",
                showInLegend: true,
                dataPoints: [
                    { y: 31512, label: "Jan" },
                    { y: 28951, label: "Feb" },
                    { y: 31204, label: "Mar" },
                    { y: 33654, label: "Apr" },
                    { y: 29451, label: "May" },
                    { y: 26841, label: "Jun" },
                    { y: 36415, label: "Jul" },
                    { y: 35354, label: "Aug" },
                    { y: 38153, label: "Sept" },
                    { y: 32154, label: "Oct" },
                    { y: 28615, label: "Nov" },
                    { y: 27451, label: "Dec" }
                ]
            },
            {
                type: "spline",
                name: "Revenue",
                showInLegend: true,
                dataPoints: [
                    { y: 16203, label: "Jan" },
                    { y: 10351, label: "Feb" },
                    { y: 9648, label: "Mar" },
                    { y: 11542, label: "Apr" },
                    { y: 15634, label: "May" },
                    { y: 14862, label: "Jun" },
                    { y: 18354, label: "Jul" },
                    { y: 17513, label: "Aug" },
                    { y: 16845, label: "Sept" },
                    { y: 19452, label: "Oct" },
                    { y: 20444, label: "Nov" },
                    { y: 16448, label: "Dec" }
                ]
            },
            {
                type: "spline",
                name: "Expenses",
                showInLegend: true,
                dataPoints: [
                    { y: 4354, label: "Jan" },
                    { y: 6541, label: "Feb" },
                    { y: 2548, label: "Mar" },
                    { y: 6412, label: "Apr" },
                    { y: 2541, label: "May" },
                    { y: 5354, label: "Jun" },
                    { y: 6541, label: "Jul" },
                    { y: 5412, label: "Aug" },
                    { y: 4513, label: "Sept" },
                    { y: 6512, label: "Oct" },
                    { y: 3651, label: "Nov" },
                    { y: 5412, label: "Dec" }
                ]
            }]
    }
    
    return (
    <div>
        <CanvasJSChart options = {options}
            /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );

        
    return (
    <div>
        <CanvasJSChart options = {options}
            /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
	
}

export default Chart