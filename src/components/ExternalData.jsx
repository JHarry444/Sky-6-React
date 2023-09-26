import axios from "axios";
import Trainer from "./Trainer";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function ExternalData(props) {
    const [trainers, setTrainers] = useState([]);

    useEffect(function () {
        axios.get("http://localhost:4494/trainers")
            .then(function (response) {
                // access the response body with .data
                console.log("RESPONSE RECEIVED");
                setTrainers(response.data);
            })
            .catch(err => console.error(err));
    }, []); // use effect -> runs ONLY when component first loads
    const data = trainers.filter(trainer => trainer.name.toLowerCase().startsWith(props.search))
        .map(trainer => <Trainer key={trainer.id} name={trainer.name} age={trainer.age} job={trainer.job} />);

    if (data.length === 0) return <p>"Nobody here but us chickens"</p>;
    else return <>{data}</>;
}

ExternalData.propTypes = {
    search: PropTypes.string
}


export default ExternalData;