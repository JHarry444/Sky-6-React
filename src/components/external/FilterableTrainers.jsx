import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import TrainerList from "./TrainerList";
import TrainerForm from "./TrainerForm";
import axios from "axios";

function FilterableTrainers() {
    const [search, setSearch] = useState("");
    const [trainers, setTrainers] = useState([]);

    const getTrainers = function() {
        axios.get("http://localhost:4494/trainers")
            .then(function (response) {
                // access the response body with .data
                console.log("RESPONSE RECEIVED");
                setTrainers(response.data);
            })
            .catch(err => console.error(err));
    }

    useEffect(function () {
        getTrainers();
    }, []); // use effect -> runs ONLY when component first loads

    return ( <>
        <h2>Inverse Data Flow</h2>
        <SearchBar search={search} handleChange={(e) => setSearch(e.target.value)}/>
        <TrainerList search={search} trainers={trainers}/>
        <TrainerForm getTrainers={getTrainers}/>
    </> );
}

export default FilterableTrainers;