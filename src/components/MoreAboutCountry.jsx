import React from "react";
import {Card} from "react-bootstrap";

export const MoreAboutCountry = (props) => {
    return (
        <>
            {props.counrtyData.map(e => e.code === props.moreAboutCountry.id ?
                <div key={e.code}>
                    <Card text={"light"} bg={"dark"} border="light" style={{ width: '19rem' }}>
                        <Card.Header>{e.name}</Card.Header>
                        <Card.Body className="mb-2">
                            <Card.Title>Population: {e.population}</Card.Title>
                            <Card.Text>
                                Today confirmed: {e.today.confirmed}
                            </Card.Text>
                            <Card.Text>
                                Today deaths: {e.today.deaths}
                            </Card.Text>
                            <Card.Text>
                                Death Rate: {e.latest_data.calculated.death_rate}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                </div>
                : null)}
                </>
                )
            }