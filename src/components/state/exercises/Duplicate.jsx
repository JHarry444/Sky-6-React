import { useState } from "react";

function Duplicate() {
    const [text, setText] = useState("");
    return ( <>
        <input placeholder="Enter text here..." value={text} onChange={e => setText(e.target.value)}/>
        <p>{text}</p>
    </> );
}

export default Duplicate;