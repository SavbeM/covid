import React, {useEffect, useState} from "react";
import axios from "axios";
import {Row, Spinner} from "react-bootstrap";
import {CountryTotalStatus} from "./CountryTotalStatus";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {MoreAboutCountry} from "./MoreAboutCountry";



export const CovidStatusMain = () => {

    const [moreAboutCountry, setMoreAboutCountry] = useState({value:false, id: null})
    const [countryData, setCountryData] = useState()
    useEffect(() => {
            axios.get("https://corona-api.com/countries").then(
                data => {
                    setCountryData(data.data.data)
                }
            )
        }, []
    )



    if (countryData !== undefined) {
        return (
            <div className="appWrapper">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="articleTitle">TOTAL CASES</h1>
                                <ReactSearchBox placeholder="Type country" data={[countryData]} callback={(record) => console.log(record)}   ></ReactSearchBox>
                            <CountryTotalStatus setMoreAboutCountry={setMoreAboutCountry} moreAboutCountry={moreAboutCountry} countryData={countryData}/>
                        </Col>
                        <Col>
                            {moreAboutCountry.value ? <div><h1 className="articleTitle">IN CHOOSEN COUNTRY</h1> <MoreAboutCountry moreAboutCountry={moreAboutCountry} counrtyData={countryData}/></div> : null}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return <Spinner animation="grow"/>
    }

}


