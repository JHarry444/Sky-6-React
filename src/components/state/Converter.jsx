import { useState } from "react";

function Converter() {
    const [miles, setMiles] = useState(0);
    const [km, setKm] = useState(0);
    return ( <>
        <label htmlFor="miles">Miles</label>
        <input type="text" id="miles" value={miles} onChange={(event) => {
            setMiles(event.target.value);
            setKm(event.target.value * 1.6);
        }}/>
        <br />
        <label htmlFor="km">Kilometres</label>
        <input type="text" id="km" value={km} onChange={(event) => {
            setMiles(event.target.value / 1.6);
            setKm(event.target.value);
        }}/>
    </> );
}

export default Converter;