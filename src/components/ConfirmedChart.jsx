import {LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from 'recharts';
import React, {useState} from "react";



export const ConfirmedChart = (props) => {
    const [chartSort, setChartSort] = useState("new_confirmed")
    return (<>
        <div>
            <span onClick={()=> setChartSort("new_confirmed")} style={chartSort === "new_confirmed" ?{color: "white", padding: "10px"} : {color: "grey", padding: "10px"}}>CONFIRMED</span>
            <span onClick={()=> setChartSort("new_deaths")} style={chartSort === "new_deaths" ?{color: "white", padding: "10px"} : {color: "grey", padding: "10px"}}>DEATHS</span>
        </div>
        { props.timelineData ?
            <LineChart styles={{background: "white"}} width={730} height={250} data={props.timelineData}
                       margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey={chartSort} stroke="#8884d8" />
            </LineChart> : null
        }
    </>)
}