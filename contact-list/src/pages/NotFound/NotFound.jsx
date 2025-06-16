import { useEffect, useState } from "react";


export default function NotFound() {
    //!1 useStaete - зберігає стан компонента [стан, змінити стан]
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
        console.log(count);
    }
    //!2 useEffect - побічні ефекти
    // 1 Mounting монтування компонента - народження, створення ком і він зявляється в DOM
    // 2 Updating оновлення компонента - життя
    // 3 UnMounting демонтаж компонента - смерть, зникає з DOM

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    //! A буде оновлюватися при любому рендеру 
    // useEffect(()=>{
    //     console.log('ok');
    // })

    //! B [] , буде зпрацьовувати тільки при Mounting(народження компонента)
    // useEffect(()=>{
    //     console.log('ok');
    // },[])

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // },[])

    //! C [a,b,c] - буде спрацьовувати коли буде змінюватися стан трігерів

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // },[count])

    // ///////////////////////////////

    const [timer, setTimer] = useState(0)

    // setInterval(()=>{
    //     console.log('test');
    //     setTimer(timer + 1)
    // }, 1000)

    useEffect(()=>{
        const tim = setInterval(()=>{
            console.log('test');
            setTimer(timer + 1)
        }, 1000) 
        return () => clearInterval(tim)
    },[])


    return(
        <div className="container">
            <h1>NotFound</h1>
            <h2>Hooks</h2>

            <h3>1. useState</h3>
            <button onClick={handleClick}>Натиснули разів: {count}</button>

            <h3>2. useEffect</h3>
            <span>TIMER: {timer}</span>

            <h3>3. useMemo</h3>
            <span>Sidebar, ContactStatuss</span>
        </div>
    )
}
