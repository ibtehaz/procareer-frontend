import {useSearchParams} from 'react-router-dom'

const Users = () => {
    let [search, setSearch] = useSearchParams()
    console.log(search.get('name'))
    console.log(search.get('id'))
    return ( 
    <h1>Users</h1> 
    );
}
    
export default Users;