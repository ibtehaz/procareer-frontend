import { useEffect } from "react";
import {Link} from 'react-router-dom'

const UseEffectReturnCheck = () => {
    useEffect(() => {
        console.log("Component did mount")
        return () => {
            console.log("Component will unmount")
        }
    })
    return ( 
        <>
        <h1>Hello from Use Effect Return Check</h1>
        <Link to='/'>Go Back</Link>
        </>
     );
}
 
export default UseEffectReturnCheck;