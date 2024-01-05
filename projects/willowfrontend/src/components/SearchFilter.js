import { useNavigate } from "react-router-dom"

const SearchFilter = (props) => {

    //get distinct counties
    let arrWithDupeCounties = props.allHouses.map((house) => {
        return house.county
    })



    const uniqueCounties = Array.from(new Set(arrWithDupeCounties))

    let changeHandler = (e) => {
        console.log(e)
        console.log("changed" + e.target.value)

        //navigate to search results component
       
    }


   
 

    return (  
        <div className="row d-flex justify-content-center">
            <div className="col-sm-5 text-center">
                <select onChange={changeHandler}>
                    <option value="select">Select</option>
                    {
                        uniqueCounties.map((county, id) => {
                            return <option key={id} value={county}>{county}</option>
                        })
                    }
                </select>
            </div>
         </div>
    );
}
 
export default SearchFilter;