import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table'
import "../styles/CountryTotalSatus.css"
import {Spinner} from "react-bootstrap";
import {AiOutlineArrowDown} from "react-icons/ai"
import {AiOutlineArrowUp} from "react-icons/ai";


export const CountryTotalStatus = (props) => {
    const [sortedInformation, setSortedInformation] = useState(props.countryData)
    const [sortHandle, setSortHandle]  = useState({country: true, confirmed: true, death: true})




   const sortByCountry = () => {
           let sortArr = (x,y) =>
       {
           if (x.name < y.name) {
               return -1;
           } else if (x.name > y.name) {
               return 1;
           }
           return 0;
       }

       let sortMinusArr = (x,y) => {
           if (x.name > y.name) {
               return -1;
           } else if (x.name < y.name) {
               return 1;
           }
           return 0;
       }
       setSortHandle({...sortHandle, country: !sortHandle.country})
       let data = (sortHandle.country) === true ? sortedInformation.sort(sortMinusArr) : sortedInformation.sort(sortArr)
        setSortedInformation([...data])

    }

    const sortByConfirmed = () => {
        setSortHandle({...sortHandle, confirmed: !sortHandle.confirmed})
        let data = (sortHandle.confirmed === true) ? sortedInformation.sort(((a, b) => a.latest_data.confirmed - b.latest_data.confirmed)) :
            sortedInformation.sort(((a, b) => b.latest_data.confirmed - a.latest_data.confirmed))
        setSortedInformation([...data])
    }
    const sortByDeath = () => {
        setSortHandle({...sortHandle, death: !sortHandle.death})
        let data = (sortHandle.death === true) ? sortedInformation.sort(((a, b) => a.latest_data.deaths - b.latest_data.deaths)) :
            sortedInformation.sort(((a, b) => b.latest_data.deaths - a.latest_data.deaths))
        setSortedInformation([...data])
    }

    return (<div className="countryStatusTable">
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>
                        <div><span>Country{ sortHandle.country ? <AiOutlineArrowDown
                            onClick={() => sortByCountry()}/> : <AiOutlineArrowUp onClick={() => sortByCountry()}/>}</span> </div>
                    </th>
                    <th>
                        <div><span>Confirmed{ sortHandle.confirmed ? <AiOutlineArrowDown
                            onClick={() => sortByConfirmed()}/> : <AiOutlineArrowUp onClick={() => sortByConfirmed()}/>}</span></div>
                    </th>
                    <th>
                        <div><span>Death{ sortHandle.death ? <AiOutlineArrowDown
                        onClick={() => sortByDeath()}/> : <AiOutlineArrowUp onClick={() => sortByDeath()}/>}</span></div>
                    </th>
                </tr>
                </thead>
                <CountryStatusTableContent setMoreAboutCountry={props.setMoreAboutCountry}
                                           moreAboutCountry={props.moreAboutCountry}
                                           sortedInformation={sortedInformation}
                                           sortedData={props.sortedData}
                />
            </Table>
        </div>
    )
}

export const CountryStatusTableContent = (props) => {
    console.log(props.sortedData)
    return (<>{
        props.sortedData.length > 0 ?  props.sortedData.map(i => {
                return (
                    <tbody key={i.code}>
                    <tr>
                        <td onClick={() => props.setMoreAboutCountry({id: i.code})}>{i.name}</td>
                        <td>{i.latest_data.confirmed}</td>
                        <td>{i.latest_data.deaths}</td>
                    </tr>
                    </tbody>
                )
            }) :
        props.sortedInformation ? props.sortedInformation.map(i => {
            return (
                <tbody key={i.code}>
                <tr>
                    <td onClick={() => props.setMoreAboutCountry({id: i.code})}><span>{i.name}</span></td>
                    <td><span>{i.latest_data.confirmed}</span></td>
                    <td><span>{i.latest_data.deaths}</span></td>
                </tr>
                </tbody>
            )
        }) : <Spinner animation="grow"/>
    }
    </>)
}

