import {useEffect, useState} from  'react'



const UseEffectCheck = () => {

    let [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("Hello from use effect")
        counter % 2 == 0 ? console.log("even") : console.log("odd")
    })

    let incrementHandler = () => {
        setCounter(prevCount => prevCount + 1)
    }

    let decrementHandler = () => {
        setCounter(prevCount => prevCount - 1)
    }


    return ( 
        <div>
            <h1>Use Effect Check</h1>
            <h4>{counter}</h4>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
     );
}
 
export default UseEffectCheck;