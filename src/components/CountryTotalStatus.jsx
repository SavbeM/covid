import React, {useState} from "react";
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


    return (<>{
            props
            .countryData ?  props.countryData.map(i => {
                return (

                    <tbody>
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