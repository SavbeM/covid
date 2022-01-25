import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table'
import "../styles/CountryTotalSatus.css"
import {Spinner} from "react-bootstrap";


export const CountryTotalStatus = (props) => {
    return (<div className="countryStatusTable">
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <CountryStatusTableContent countryData={props.countryData}/>
            </Table>
        </div>
    )
}

export const CountryStatusTableContent = (props) => {
    const [sortByConfirmed, setSortByConfirmed] = useState(true)
    const [sortedInformation, setSortedInformation] = useState(props.countryData)
    const sortBy = (data) => {
        if (sortByConfirmed === true) {
           return data.sort((a,b) => b.latest_data.confirmed - a.latest_data.confirmed)
        }
    }

    useEffect(() => { setSortedInformation(sortBy(props.countryData))}, [props.countryData])


    return (<>{
            sortedInformation ?  sortedInformation.map(i => {
                return (
                    <tbody key={i.code}>
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.latest_data.confirmed}</td>
                        <td>{i.latest_data.deaths}</td>
                    </tr>
                    </tbody>
                )
            }) : <Spinner animation="grow"/>
        }
    </>)
}