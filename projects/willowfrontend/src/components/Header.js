const Header = () => {
    return ( 
        <div className="row bg-warning d-flex align-items-center">
            <div className="col-sm-3"><img src="/imgs/logo.png" alt="Willow Logo" className="w-25"/></div>
            <div className="col-sm-5"><h2>Your real estate desitination</h2></div>
            <div className="col-sm-4">
                <button className="btn btn-primary mx-3">Login</button>
                <button className="btn btn-success">Sign Up</button>
            </div>
        </div>
     );
}
 
export default Header;


