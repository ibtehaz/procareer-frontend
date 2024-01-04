import {Link} from 'react-router-dom'

const PageNotFound = () => {
    return ( 
        <div>
        <h1>ERROR cant find what you are looking for</h1>
        <Link to='/'>Back to home</Link>
        </div>
     ); 
}
 
export default PageNotFound;