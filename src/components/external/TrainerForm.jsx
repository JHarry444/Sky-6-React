import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";

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

    return (<form onSubmit={handleSubmit}>
        <label htmlFor="trainerName">Name:</label>
        <input type="text" id="trainerName" value={name} onChange={e => setName(e.target.value)} required/>
        <label htmlFor="trainerAge">Age:</label>
        <input type="number" id="trainerAge" value={age} onChange={e => setAge(+e.target.value)} min={0} max={100}/>
        <label htmlFor="trainerJob">Job:</label>
        <input type="text" id="trainerJob" value={job} onChange={e => setJob(e.target.value)} />
        <button type="submit">CREATE</button>
    </form>);
}

TrainerForm.propTypes = {
    getTrainers: PropTypes.func.isRequired,
}

export default TrainerForm;