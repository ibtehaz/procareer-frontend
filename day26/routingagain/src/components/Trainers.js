import {useLocation} from 'react-router-dom'

const Trainers = () => {
    let locate = useLocation()
    console.log(locate.state)
    return ( 
        <h1>Trainers, welcome {locate.state.name} and your id is {locate.state.id}</h1>
     );
}
 
export default Trainers;