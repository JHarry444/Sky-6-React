import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Row } from "react-bootstrap";

function TrainerForm(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [job, setJob] = useState("");

    const handleSubmit = function (event) {
        event.preventDefault(); // turns off the default behaviour for forms

        axios.post("http://localhost:4494/trainers", {
            name, age, job
        }).then(function (res) {
            console.log("RES:", res);
            setName("");
            setAge(0);
            setJob("");
            props.getTrainers();
        }).catch(err => console.error(err));

    }

    return (<Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
            <Form.Label column sm={2} htmlFor="trainerName">Name:</Form.Label>
            <Col sm={10}>
                <Form.Control className="mb-1" type="text" id="trainerName" value={name} onChange={e => setName(e.target.value)} required />
            </Col>
        </Form.Group>
        <Form.Group as={Row}>
            <Form.Label column sm={2} htmlFor="trainerAge">Age:</Form.Label>
            <Col sm={10}>
                <Form.Control className="mb-1" type="number" id="trainerAge" value={age} onChange={e => setAge(+e.target.value)} min={0} max={100} />
            </Col>
        </Form.Group>
        <Form.Group as={Row}>
            <Form.Label column sm={2} htmlFor="trainerJob">Job:</Form.Label>
            <Col sm={10}>
                <Form.Control className="mb-1" type="text" id="trainerJob" value={job} onChange={e => setJob(e.target.value)} />
            </Col>
        </Form.Group>
        <Button type="submit">CREATE</Button>
    </Form>);
}

TrainerForm.propTypes = {
    getTrainers: PropTypes.func.isRequired,
}

export default TrainerForm;