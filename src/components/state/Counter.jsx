import { useState } from "react";

function Counter() {
    // Create state using the useState hook
    let [count, setCount] = useState(0);

    const handleClick = (e) => {
        if (e.target.innerText === "RESET") return setCount(0);
        const change = Number.parseInt(e.target.innerText);
        // count++; HAVE TO USE THE SETTER
        setCount(count + change); // changes count and re-renders
        // console.log("Count:", count);
    }
    return (<>
        <h2>Counter</h2>
        <input type="number" value={count} readOnly />
        <br />
        <button onClick={handleClick}>-5</button>
        <button onClick={handleClick}>-1</button>
        <button onClick={handleClick}>RESET</button>
        {/* DON'T include the () after handleClick */}
        <button onClick={handleClick}>+1</button>
        <button onClick={handleClick}>+5</button>
    </>);
}

export default Counter;