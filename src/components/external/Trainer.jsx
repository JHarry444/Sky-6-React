// import trainerData from './trainers.json';
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Trainer = (props) => {
    const nav = useNavigate();
  
    return ( <div onClick={() => nav("/trainer/" + props.id)} className="trainer">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Job: {props.job}</p>
    </div> );
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