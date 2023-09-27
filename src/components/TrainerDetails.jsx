import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TrainerDetails() {
    const [trainer, setTrainer] = useState({
        id: 1,
        name: "",
        age: 0,
        job: "Trainer"
    });

    const params = useParams();
    console.log("PARAMS:", params);
    const id = params.id;

    useEffect(function() {
        axios.get("http://localhost:4494/trainers/" + id)
        .then(res => setTrainer(res.data))
        .catch(err => console.error(err));
    }, [id]);


    return ( 
        <>
        <h2>Trainer Details</h2>
        <p>ID: {trainer.id}</p>
        <p>Name: {trainer.name}</p>
        <p>Age: {trainer.age}</p>
        <p>Job: {trainer.job}</p>
        </>
     );
}

export default TrainerDetails;