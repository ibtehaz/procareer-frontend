import { useState } from "react"


const Login = () => {
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");


    let echangeHandler = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }
    let pchangeHandler = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }


    let clickHandler = (e) => {
        e.preventDefault();
        console.log("email is "+email+"  password is "+ password);
        //use fetch and send these values to middle ware
        // if fine, then navigate to home page
    }




    return (
<div className="d-flex justify-content-center">
    <form>
    <div className="mb-3">
        <label htmlFor="" className="form-label">Email</label>
        <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="helpId"
            placeholder="" onChange={echangeHandler}
        />
    </div>


    <div className="mb-3">
        <label htmlFor="" className="form-label">Password</label>
        <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            aria-describedby="helpId"
            placeholder="" onChange={pchangeHandler}
        />
    </div>


    <button     type="submit"   onClick={clickHandler}  className="btn btn-primary" >     Submit </button>


    </form>
</div>




     );
}
 
export default Login;