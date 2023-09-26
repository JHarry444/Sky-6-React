import { useState } from "react";

function Counter() {
    // Create state using the useState hook
    let [count, setCount] = useState(99);
    return ( <>
        <input type="number" value={count} readOnly/>
        <br />
        <button>-5</button>
        <button>-1</button>
        <button>RESET</button>
        <button onClick={() => {
            // count++; HAVE TO USE THE SETTER
            setCount(count + 1); // changes count and re-renders
            // console.log("Count:", count);
        }}>+1</button>
        <button>+5</button>
    </> );
}

export default Counter;