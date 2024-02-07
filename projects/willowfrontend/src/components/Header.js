import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="row bg-warning d-flex align-items-center">
            <div className="col-sm-3"><Link to='/'><img src="/imgs/logo.png" alt="Willow Logo" className="w-25"/></Link></div>
            <div className="col-sm-5"><h2>Your real estate destination</h2></div>
            <div className="col-sm-4">
                <Link to='/login'><button className="btn btn-primary mx-3">Login</button></Link>
                <Link to='/signup'><button className="btn btn-success">Sign Up</button></Link>
            </div>
        </div>
     );
}
 
export default Header;


