import React, {useEffect, useState} from "react";
import axios from "axios";
import {Row, Spinner} from "react-bootstrap";
import {CountryTotalStatus} from "./CountryTotalStatus";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {MoreAboutCountry} from "./MoreAboutCountry";
import {Form} from "react-bootstrap";
import {ConfirmedChart} from "./ConfirmedChart";


export const CovidStatusMain = () => {
    const [moreAboutCountry, setMoreAboutCountry] = useState({id: "UA"})
    const [countryData, setCountryData] = useState()
    const [ search, setSearch] = useState("");
    const [timeline, setTimeline] = useState()


    useEffect(() => {
            axios.get("https://corona-api.com/countries").then(
                data => {
                    setCountryData(data.data.data)
                }
            )
            axios.get("https://corona-api.com/timeline").then(
                data => {
                    setTimeline(data.data.data.slice(0,5))

                }
            )
        }, []
    )

    const sorted = countryData ? countryData.filter((val)=> {
        if(search !== "" && search !== null &&val.name.toLowerCase().includes(search.toLowerCase())){
            return val
        }
    }) : null

    if (countryData !== undefined) {
        return (
            <div className="appWrapper">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="articleTitle">TOTAL STATUS</h1>
                            <Form.Control onChange={e => setSearch(e.target.value)} placeholder="Enter country" />
                            <CountryTotalStatus  setMoreAboutCountry={setMoreAboutCountry} moreAboutCountry={moreAboutCountry} countryData={countryData} sortedData={sorted}/>
                        </Col>
                        <Col>
                            {moreAboutCountry.id ? <div><h1 className="articleTitle">IN CHOOSEN COUNTRY</h1> <MoreAboutCountry moreAboutCountry={moreAboutCountry} counrtyData={countryData}/></div> : null}
                            <div>
                                <h1 className="articleTitle">LATEST INFORMATION</h1>
                                <div>
                                <ConfirmedChart  timelineData={timeline}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return <Spinner animation="grow"/>
    }

}


