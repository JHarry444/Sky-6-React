import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Counter() {
    // Create state using the useState hook
    let [count, setCount] = useState(0);

    const handleClick = (e) => {
        if (e.target.innerText === "RESET") return setCount(0);
        const change = Number.parseInt(e.target.innerText);
        // count++; HAVE TO USE THE SETTER
        setCount(count + change); // changes count and re-renders
        // console.log("Count:", count);
    }
    return (<Container style={{maxWidth: '400px'}}>
        <Row><h2>Counter</h2></Row>
        <Row>
            <Form.Control type="number" value={count} readOnly />
        </Row>
        <Row className="mt-1">
            <Col>
                <Button variant="dark" onClick={handleClick}>-5</Button>
            </Col>
            <Col>
                <Button variant="dark" onClick={handleClick}>-1</Button>
            </Col>
            <Col>
                <Button variant="dark" onClick={handleClick}>RESET</Button>
            </Col>
            {/* DON'T include the () after handleClick */}
            <Col>
                <Button variant="dark" onClick={handleClick}>+1</Button>
            </Col>

            <Col>
                <Button variant="dark" onClick={handleClick}>+5</Button>
            </Col>
        </Row>
    </Container>);
}

export default Counter;