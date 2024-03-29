import { useNavigate } from "react-router-dom";


const SearchResultsRow = ({filteredHouse}) => {

    let navigate = useNavigate()
    let clickHandler = () => {
        navigate(`/searchedhouse/` + filteredHouse._id)
        
    }

    return (
        <tr className="" key={filteredHouse._id} onClick={clickHandler}>
                        <td scope="row"> { filteredHouse.address}</td>
                        <td> {filteredHouse.price} </td>
       </tr>
    )

}

export default SearchResultsRow;