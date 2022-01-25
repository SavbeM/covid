import React, {useEffect, useState} from "react";
import axios from "axios";
import {Row, Spinner} from "react-bootstrap";
import {CountryTotalStatus} from "./CountryTotalStatus";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export const CovidStatusMain = () => {
    const [countryData, setCountryData] = useState()
    useEffect (() => {
       axios.get("https://corona-api.com/countries").then(
           data =>  setCountryData(data.data.data)
       )
    }, [setTimeout(10000)])
    console.log(countryData)

    if (countryData !== undefined) {
        return(
            <div className="">
                <Container>
                    <Row>
                        <Col><CountryTotalStatus countryData={countryData}/></Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Container>
            </div>
        )
    }
    else { return <Spinner animation="grow" />}

}


