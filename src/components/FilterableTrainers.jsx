import { useState } from "react";
import StaticData from "./StaticData";
import SearchBar from "./SearchBar";

function FilterableTrainers() {
    const [search, setSearch] = useState("jord");
    return ( <>
        <h2>Inverse Data Flow</h2>
        <SearchBar search={search} handleChange={(e) => {
            debugger;
            setSearch(e.target.value);
        }}/>
        <StaticData search={search}/>
    </> );
}

export default FilterableTrainers;