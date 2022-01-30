import {LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from 'recharts';
import React from "react";



export const ConfirmedChart = (props) => {
    return (<>
        { props.timelineData ?
            <LineChart styles={{background: "white"}} width={730} height={250} data={props.timelineData}
                       margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="new_confirmed" stroke="#8884d8" />
            </LineChart> : null
        }
    </>)
}