import { useState } from "react";
import SearchBar from "./SearchBar";
import ExternalData from "./ExternalData";

function FilterableTrainers() {
    const [search, setSearch] = useState("jord");
    return ( <>
        <h2>Inverse Data Flow</h2>
        <SearchBar search={search} handleChange={(e) => setSearch(e.target.value)}/>
        <ExternalData search={search}/>
    </> );
}

export default FilterableTrainers;