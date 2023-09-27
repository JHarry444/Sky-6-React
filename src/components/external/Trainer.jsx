// import trainerData from './trainers.json';
import PropTypes from "prop-types";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Trainer = (props) => {
    const nav = useNavigate();

    return (
        <Col>
            <Card onClick={() => nav("/trainer/" + props.id)} className="trainer">
                <Card.Title>{props.name}</Card.Title>
                <Card.Body>
                    <Card.Text>Age: {props.age}</Card.Text>
                    <Card.Text>Job: {props.job}</Card.Text>
                </Card.Body>
            </Card>
        </Col>);
}

Trainer.defaultProps = {
    job: "Trainer"
}

Trainer.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    job: PropTypes.string.isRequired,
}

export default Trainer;