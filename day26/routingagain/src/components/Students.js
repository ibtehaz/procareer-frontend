import { useParams } from 'react-router-dom'

const Students = () => {
    let paramsObj = useParams()

    console.log(paramsObj)
    return ( 
        <div>
        <h1>Welcome {paramsObj.name} to students page</h1>
        <h3>Your id is {paramsObj.id}</h3>
        </div>
     );
}
 
export default Students;