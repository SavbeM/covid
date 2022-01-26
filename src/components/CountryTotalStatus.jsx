import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table'
import "../styles/CountryTotalSatus.css"
import {Spinner} from "react-bootstrap";


export const CountryTotalStatus = (props) => {

    const [sortByConfirmed, setSortByConfirmed] = useState(true)
    const [sortByDeaths, setSortByDeaths] = useState(false)
    const [sortByAlphabet, setSortByAlphabet] = useState(false)
    const [sortedInformation, setSortedInformation] = useState(props.countryData)

    const sortBy = (data) => {
        switch (true) {
            case sortByConfirmed:
                return data.sort((a,b) => b.latest_data.confirmed - a.latest_data.confirmed)
            case sortByDeaths:
                return data.sort((a,b) => b.latest_data.deaths - a.latest_data.deaths)
            case sortByAlphabet:
                return data.sort((a,b) => b.code - a.code)
        }
    }

    const sortByAlphabetHandle = () => {
        setSortByAlphabet(true)
        setSortByConfirmed(false)
        setSortByDeaths(false)
    }

    const sortByDeathsHandle = () => {
        setSortByAlphabet(false)
        setSortByConfirmed(false)
        setSortByDeaths(true)
    }

    const sortByConfirmedHandle = () => {
        setSortByAlphabet(false)
        setSortByConfirmed(true)
        setSortByDeaths(false)
    }


    useEffect(() => { setSortedInformation(sortBy(props.countryData))}, [props.countryData])



    return (<div className="countryStatusTable">k
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th onClick={() => sortByAlphabetHandle()}>Country</th>
                    <th onClick={() => sortByConfirmedHandle()}>Confirmed</th>
                    <th onClick={() => sortByDeathsHandle()}>Deaths</th>
                </tr>
                </thead>
                <CountryStatusTableContent setMoreAboutCountry={props.setMoreAboutCountry} moreAboutCountry={props.moreAboutCountry} sortedInformation={sortedInformation}  />
            </Table>
        </div>
    )
}

export const CountryStatusTableContent = (props) => {

    return (<>{
            props.sortedInformation ?  props.sortedInformation.map(i => {
                return (
                    <tbody key={i.code}>
                    <tr>
                        <td onClick={() => props.setMoreAboutCountry({value: true, id: i.code})}>{i.name}</td>
                        <td>{i.latest_data.confirmed}</td>
                        <td>{i.latest_data.deaths}</td>
                    </tr>
                    </tbody>
                )
            }) : <Spinner animation="grow"/>
        }
    </>)
}