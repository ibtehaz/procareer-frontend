import {useEffect, useState} from  'react'



const UseEffectCheck = () => {

    let [counter, setCounter] = useState(0)
    let [name, setName] = useState('old name')
    let [year, setYear] = useState(2023)

    // useEffect(() => {
    //     console.log("Hello from use effect")
    //     counter % 2 == 0 ? console.log("even") : console.log("odd")
    // },[counter])

    useEffect(() => {
        console.log("Component did mount")
    }, [])

    useEffect(() => {
        console.log("Either name or year changed")
    }, [name,year])

    let incrementHandler = () => {
        setCounter(prevCount => prevCount + 1)
    }

    let decrementHandler = () => {
        setCounter(prevCount => prevCount - 1)
    }

    let yearHandler = () => {
        setYear(prevYear => prevYear + 1)
    }

    let nameHandler = ()  => {
        // name = name == 'old name' ? 'new name' : 'old name'
        // setName(name)
        setName(prevName => prevName == 'old name' ? 'new name' : 'old name')
    }


    return ( 
        <div>
            <h1>Use Effect Check</h1>
            <h4>{counter}</h4>
            <h4>{name}</h4>
            <h4>{year}</h4>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={nameHandler}>Change Name</button>
            <button onClick={yearHandler}>Change Year</button>
        </div>
     );
}
 
export default UseEffectCheck;