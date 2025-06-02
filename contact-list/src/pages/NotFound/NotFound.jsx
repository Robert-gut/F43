import { useState } from "react";


export default function NotFound() {
    const [count, setCount] = useState(0)


    return(
        <div className="container">
            <h1>NotFound</h1>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>Click me +1</button>
        </div>
    )
}

