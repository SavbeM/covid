import React from "react";
import {ListGroup} from "react-bootstrap";
import {Card} from "react-bootstrap";

export const MoreAboutCountry = (props) => {
    return (
        <>
            {props.counrtyData.map(e => e.code === props.moreAboutCountry.id ?
                <div>
                    <Card  border="info" style={{ width: '18rem' }}>
                        <Card.Header>{e.name}</Card.Header>
                        <Card.Body>
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