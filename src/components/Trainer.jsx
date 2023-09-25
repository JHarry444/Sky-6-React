// import trainerData from './trainers.json';
import PropTypes from "prop-types";

const Trainer = (props) => {
    return ( <>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Job: {props.job}</p>
    </> );
}

Trainer.defaultProps = {
    job: "Trainer"
}

Trainer.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    jon: PropTypes.string,
}
 
export default Trainer;