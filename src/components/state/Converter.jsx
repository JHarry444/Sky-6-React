import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

function Converter() {
    const [miles, setMiles] = useState(0);
    const [km, setKm] = useState(0);
    return (<Container style={{maxWidth: "400px"}}>
        <Row>
            <h2>Converter</h2>
        </Row>
        <Row style={{ textAlign: 'left' }} className="align-items-baseline">
            <Col sm={3}>
                <Form.Label htmlFor="miles">Miles</Form.Label>
            </Col>
            <Col>
                <Form.Control type="number" id="miles" value={miles} onChange={(event) => {
                    setMiles(event.target.value);
                    setKm(event.target.value * 1.6);
                }} />
            </Col>
        </Row>
        <Row style={{ textAlign: 'left' }} className="mt-1 align-items-baseline">
            <Col sm={3}>
                <Form.Label htmlFor="km">Kilometres</Form.Label>
            </Col>
            <Col>
                <Form.Control type="number" id="km" value={km} onChange={(event) => {
                    setMiles(event.target.value / 1.6);
                    setKm(event.target.value);
                }} />
            </Col>
        </Row>
    </Container>);
}

export default Converter;