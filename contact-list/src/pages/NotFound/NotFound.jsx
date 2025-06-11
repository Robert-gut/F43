import { useState } from "react";


export default function NotFound() {

    fetch()


    const [count, setCount] = useState(0)

    const [delModal, setDelModal] = useState(false)
    const [infoModal, setInfoModal] = useState(false)

    return(
        <div className="container">
            <h1>NotFound</h1>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>Click me +1</button>

            <button onClick={()=> getDelModal(true)}>DEL</button>
            <button onClick={()=> getInfoModal(true)}>Info</button>

            
        </div>


    )
}

